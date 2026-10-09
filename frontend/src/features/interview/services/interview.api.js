import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

/**
 * @description generate the interview report on the basis of user's self description, job description, resume pdf
 */
export async function generateInterviewReport({
  resumeFile,
  selfDescription,
  jobDescription,
}) {
  console.log(
    "Generating interview report....",
    resumeFile,
    selfDescription,
    jobDescription,
  );

  if (!jobDescription?.trim()) {
    throw new Error("A job description is required.");
  }
  if (!resumeFile?.name) {
    throw new Error("Please select a PDF resume.");
  }

  const formData = new FormData();
  formData.append("resume", resumeFile);
  formData.append("jobDescription", jobDescription);
  formData.append("selfDescription", selfDescription ?? "");

  const response = await api.post(
    "/api/interview",
    formData,
    //  {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    // }
  );

  return response.data;
}

/**
 * @description get the interview report on the basis of interviewId
 */
export async function getInterviewReportById(interviewId) {
  try {
    // const response = await api.get(`api/interview/report/:${interviewId}`);
    const response = await api.get(`/api/interview/report/${interviewId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

/**
 * @description get all the interview reports of the logged in user
 */
export async function getAllInterviewReport() {
  try {
    const response = await api.get(`/api/interview`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
