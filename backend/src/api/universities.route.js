import express from "express";
import UniversitiesCtrl from "./universities.controller";

const router = express.Router();

router.route("/").get(UniversitiesCtrl.apiGetUniversities);

export default router;
