import express from "express";
import cors from "cors";
import reportRoutes from "./routes/reports.js";
import userRoutes from "./routes/users.js";
import uploadRoutes from "./routes/upload.js";
// import { aiAnalyzer } from "./services/AIService.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/reports", reportRoutes);
app.use("/users", userRoutes);
app.use("/uploads", uploadRoutes);

// const test = await aiAnalyzer(
//   "https://iqrwujrxvknaxicjuveu.supabase.co/storage/v1/object/public/report-images/1788418951647.jpg",
// );
// console.log(test);

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.listen(port, () => {
  console.log("Im working");
});
