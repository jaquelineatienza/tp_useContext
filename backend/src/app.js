import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookies from "cookie-parser";
import color from "chalk";
import router from "./routers/auth.routes.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookies());
app.use(router);

app.listen(4000, () => {
  console.log(
    color.blue(
      "----------------------------------------------------------------------------------------------------"
    )
  );
  console.log();
  console.log(
    color.green("                             server is running on http://localhost:4000")
  );
  console.log();
  console.log(
    color.blue(
      "----------------------------------------------------------------------------------------------------"
    )
  );
});
