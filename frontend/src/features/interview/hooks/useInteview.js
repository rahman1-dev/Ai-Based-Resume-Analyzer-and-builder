import { InterviewContext, InterviewProvider } from "../interview.context";
import { useContext } from "react";
import {
  generateInterviewReport,
  getInterviewReportById,
  getAllInterviewReport,
} from "../services/interview.api";

export const useInterview = () => {
  const context = useContext(InterviewContext);

  if (!context) {
    throw new Error(
      "useInterview context must be used within a InterviewProvider",
    );
  }

  const { loading, setLoading, report, setReport, reports, setReports } =
    context;

  const generateReport = async ({
    jobDescription,
    selfDescription,
    resumeFile,
  }) => {
    setLoading(true);
    try {
      const response = await generateInterviewReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });
      // setReport(response.interviewReport);
      const interviewReport = response.interviewReport;
      setReport(interviewReport);
      return interviewReport;
    } finally {
      setLoading(false);
    }
  };

  const getReportByInterviewId = async (interviewId) => {
    setLoading(true);
    try {
      const response = await getInterviewReportById(interviewId);
      setReport(response.interviewReport);
      return response.interviewReport;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllReports = async () => {
    setLoading(true);
    try {
      const response = await getAllInterviewReport();
      setReports(response.allInterviewReport);
      return response.allInterviewReport;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    report,
    reports,
    generateReport,
    getReportByInterviewId,
    getAllReports,
  };
};
