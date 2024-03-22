import mongoose from "mongoose";

const recordSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    artists: {
      type: [String],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    genres: {
      type: [String],
      required: true,
    },
    released: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: {
      type: [String],
      required: true,
    },
    reviews: {
      type: [
        {
          username: {
            type: String,
            required: true,
          },
          content: {
            type: String,
            required: true,
          },
          rating: {
            type: Number,
            required: true,
          },
        },
      ],
      required: false,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Record = mongoose.model("record", recordSchema);
