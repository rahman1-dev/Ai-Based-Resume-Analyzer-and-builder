import InterviewReportModel from "../models/InterviewReport.model.js";
import generateInterviewReport from "../services/ai.service.js";
// import pdfParse from "pdf-parse";
// const pdfModule = await import("pdf-parse");
// const pdfParse = pdfModule.default || pdfModule;

const { PDFParse } = await import("pdf-parse");

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

export default generateInterviewReportController;
