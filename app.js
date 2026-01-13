import express from "express";
const app = express();
export default app;

import employees from "./db/employees.js";

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === Number(id));
  
  if (!employee) return res.status(404).send("Employee is undefined");

  res.send(employee);
});