import mongoose, { mongo } from "mongoose";

/**
 * -----What user will provide
 * -job-description schema: String
 * -resume:String
 * -self description:String
 *
 * --------Match Score
 * matchScore:Number
 *
 *
 * ------What we generate the users details using AI
 * Technical Questions : [{
 *          question:"",
 *          intention:"",
 *          answer:""
 * }]
 * Behavirol questions : [{
 *          question:"",
 *          intention:"",
 *          answer:""
 * }]
 * Skill gap : [{
 *          skill:"",
 *          saverity:{
 *                  type:String,
 *                  enum:["low","medium","high"]
 * }
 * }]
 * preparation plan : [{
 *      day:Number,
 *      focus:String,
 *      tasks:[String]
 * },{}]
 *
 */

const TechnicalQuestionsSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical question is required"],
    },
    intention: {
      type: String,
      required: [true, "Intention question is required"],
    },
    answer: {
      type: String,
      required: [true, "Answer question is required"],
    },
  },
  {
    //We dont need id in our database(mongodb) , so we are setting it false
    _id: false,
  },
);

const BehavirolQuestionsSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical question is required"],
    },
    intention: {
      type: String,
      required: [true, "Intention question is required"],
    },
    answer: {
      type: String,
      required: [true, "Answer question is required"],
    },
  },
  {
    _id: false,
  },
);

const SkillGapsSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Provide skill"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Provide severity"],
    },
  },
  {
    _id: false,
  },
);

const PriparationPlanSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: [true, "Day is required"],
  },
  focus: {
    type: String,
    required: [true, "Focus area is required"],
  },
  tasks: [
    {
      type: String,
      required: [true, "Task is required"],
    },
  ],
});

const InterviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "job description is required"],
    },
    resume: {
      type: String,
    },
    selfDescription: {
      type: String,
    },
    matchScore: {
      type: Number,
      min: 0,
      max: 100,
    },
    technicalQuestions: [TechnicalQuestionsSchema],
    behavirolQuestions: [BehavirolQuestionsSchema],
    skillGaps: [SkillGapsSchema],
    preparationPlan: [PriparationPlanSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  },
);

const InterviewReportModel = mongoose.model(
  "InterviewReport",
  InterviewReportSchema,
);

export default InterviewReportModel;
