import express from "express";
import { Account } from "../models/account.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.username ||
      !req.body.password ||
      !req.body.email ||
      !req.body.first_name ||
      !req.body.last_name
    ) {
      return res.status(400).send({ message: "Incomplete informations" });
    }

    const newAccount = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    };

    const response = await Account.create(newAccount);
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const response = await Account.find(
      { username: username },
      { password: 0, _id: 0 }
    );

    if (!response || response.length == 0) {
      return res.status(404).send({ message: "Account not found" });
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    if (!req.query.username || !req.query.password) {
      return res.status(400).send({ message: "Incomplete informations" });
    }

    const username = req.query.username;
    const password = req.query.password;

    const response = await Account.find(
      {
        password: password,
        username: username,
      },
      { password: 0 }
    );

    if (!response || response.length == 0) {
      return res.status(404).send({ message: "Account not found" });
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

    const response = await Account.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).send({ message: "Account not found" });
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.username ||
      !req.body.password ||
      !req.body.email ||
      !req.body.first_name ||
      !req.body.last_name
    ) {
      return res.status(400).send({ message: "Incomplete informations" });
    }

    const { id } = req.params;

    const response = await Account.findByIdAndUpdate(id, req.body);
    if (!response) {
      return res.status(404).send({ message: "Account not found" });
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
