import mongoose from "mongoose";

const BlackListTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Please provide token"],
    },
  },
  {
    timestamps: true,
  },
);

const BlackListTokenModel = mongoose.model(
  "blackListToken",
  BlackListTokenSchema,
);

export default BlackListTokenModel;
