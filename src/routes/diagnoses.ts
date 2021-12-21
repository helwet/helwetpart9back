import express from "express";

const router = express.Router();

import diagnosesService from "../services/diagnosesService";

router.get("/", (_req, res) => {
  res.send(diagnosesService.getNonSensitiveEntries());
});

router.get("/:id", (req, res) => {
  const diagnoses = diagnosesService.findById(Number(req.params.id));

  if (diagnoses) {
    res.send(diagnoses);
  } else {
    res.sendStatus(404);
  }
});

export default router;
