import dotenv from "dotenv";
import express from "express";
import usernameRouter from "./routes/usernames";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", "src/views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", usernameRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
