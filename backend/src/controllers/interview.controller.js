import InterviewReportModel from "../models/InterviewReport.model.js";
import {
  generateInterviewReport,
  generateResumePdf,
} from "../services/ai.service.js";
// import pdfParse from "pdf-parse";
// const pdfModule = await import("pdf-parse");
// const pdfParse = pdfModule.default || pdfModule;

const { PDFParse } = await import("pdf-parse");

/**
 *@description Generate interview report based on user's self description, job description, and resume PDF
 */
async function generateInterviewReportController(req, res) {
  try {
    const { selfDescription, jobDescription } = req.body;

    if (!req.file || !req.file.buffer) {
      return res.status(400).json({ msg: "Resume file is required" });
    }

    // const resumeContent =await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText();
    // const resumeContent = await pdfParse(req.file.buffer);

    // Parse PDF
    const parser = new PDFParse({ data: req.file.buffer });
    const result = await parser.getText();
    const resumeText = result.text;
    await parser.destroy();

    const interviewReportByAi = await generateInterviewReport({
      resume: resumeText,
      selfDescription,
      jobDescription,
    });

    const interviewReport = await InterviewReportModel.create({
      user: req.user.id,
      // resume: resumeContent.text,
      resume: resumeText,
      jobDescription,
      selfDescription,
      ...interviewReportByAi,
    });

    res.status(201).json({
      msg: "Interview report generated successfully",
      interviewReport,
    });
  } catch (error) {
    console.log(error);
  }
}

/**
 * @description Controller to get the interview report by interviewId
 */
async function getInterviewReportByIdController(req, res) {
  const { interviewId } = req.params;

  const interviewReport = await InterviewReportModel.findOne({
    _id: interviewId,
    user: req.user.id,
  });

  if (!interviewId) {
    return res.status(404).json({
      msg: "Interview report not found.",
    });
  }

  res.status(200).json({
    msg: "Interview report fetched successfully",
    interviewReport,
  });
}

/**
 * @description get all the interview reports of the logged in user
 */

async function getAllInterviewReport(req, res) {
  const user = req.user.id;
  const allInterviewReport = await InterviewReportModel.find({ user })
    .sort({
      createdAt: -1,
    })
    .select(
      "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavirolQuestions -skillGaps -preparationPlan ",
    );

  res.status(200).json({
    msg: "Interview report fetched successfully",
    allInterviewReport,
  });
}

/**
 * @description controller to generate resume PDF based on user's resume, job description, and self description
 */
async function generateResumePdfController(req, res) {
  const { interviewReportId } = req.params;

  const interviewReport =
    await InterviewReportModel.findById(interviewReportId);

  if (!interviewReportId) {
    return res.status(404).json({
      msg: "Interview report not found",
    });
  }
  const { resume, jobDescription, selfDescription } = interviewReport;

  const pdfBuffer = await generateResumePdf({
    resume,
    selfDescription,
    jobDescription,
  });

  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`,
  });

  res.send(pdfBuffer);
}

export default {
  generateInterviewReportController,
  getInterviewReportByIdController,
  getAllInterviewReport,
  generateResumePdfController,
};
