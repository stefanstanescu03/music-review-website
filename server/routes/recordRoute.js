import express from "express";
import { Record } from "../models/record.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.artists ||
      !req.body.type ||
      !req.body.genres ||
      !req.body.released ||
      !req.body.description ||
      !req.body.img
    ) {
      return res.status(400).send({ message: "Incomplete informations" });
    }

    const newRecord = {
      name: req.body.name,
      artists: req.body.artists,
      type: req.body.type,
      genres: req.body.genres,
      released: req.body.released,
      description: req.body.description,
      rating: 0,
      reviews: [],
      img: req.body.img,
    };

    const response = await Record.create(newRecord);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Record.find({});

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Record.findById(id);

    if (!response || response.length == 0) {
      return res.status(404).send({ message: "Record not found" });
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Record.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).send({ message: "Record not found" });
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.reviews) {
      return res.status(400).send({ message: "Incomplete informations" });
    }

    const { id } = req.params;

    let averageRating = 0;
    req.body.reviews.forEach((review) => (averageRating += review.rating));
    console.log(averageRating);
    averageRating /= req.body.reviews.length;

    const response = await Record.findByIdAndUpdate(id, {
      $set: { reviews: req.body.reviews, rating: averageRating },
    });
    if (!response) {
      return res.status(404).send({ message: "Record not found" });
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
