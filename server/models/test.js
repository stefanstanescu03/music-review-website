// Testing purposes. Ignore this.

import mongoose from "mongoose";

const testSchema = mongoose.Schema(
  {
    testing: String,
  },
  { timestamps: true }
);

export const Test = mongoose.model("test", testSchema);
