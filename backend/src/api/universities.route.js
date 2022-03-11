import express from "express";
import controllers from "./universities.controller";

const router = express.Router();

router.route("/").get(controllers.apiGetUniversities);

export default router;
