import express from "express";
import cors from "cors";
import reportRoutes from "./routes/reports.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/reports", reportRoutes);

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.listen(port, () => {
  console.log("Im working");
});
