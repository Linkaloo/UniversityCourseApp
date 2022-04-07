import express from "express";
import universityCtrl from "./universities.controller";
import departmentCtrl from "./departments.controllers";

const router = express.Router();

// universites
router.route("/universities").get(universityCtrl.apiGetUniversities);
router.route("/universities").post(universityCtrl.apiCreateUniversity);
router.route("/universities/:id").delete(universityCtrl.apiDeleteUniversity);

// departements
router.route("/departments").get(departmentCtrl.apiGetDepartments);

export default router;
