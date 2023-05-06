import express from "express";
import userRotes from "./routes/userRoutes";
import tweetRotes from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use("/user", userRotes);
app.use("/tweet", tweetRotes);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
