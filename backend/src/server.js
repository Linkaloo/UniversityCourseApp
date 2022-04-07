import express from "express";
import cors from "cors";
import universities from "./api/universities.route";
import db from "../models/index";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", universities);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

const test = async () => {
  const university = await db.University.create({
    name: "UniName",
  });
  university.createAddress({
    city: "city",
    street: "street",
    state: "state",
    zip: 12345,
    country: "country",
  });
  const department1 = await db.Department.create({
    name: "dep1",
  });
  const department2 = await db.Department.create({
    name: "dep2",
  });
  department1.addUniversity(university);
  department2.addUniversity(university);
  department1.createDegree({
    name: "degree",
    degree_type: "bachelors",
  });
};

// test();

export default app;
