const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./router/route");
const config = require("./config/config")


const port = config.setting.port || 3000;

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:8888", "http://localhost:5173"],
  })
);

app.use("/api/v1/user", userRouter)

app.listen(port, async () => {
  console.log(`Server started at port ${port}`);
})