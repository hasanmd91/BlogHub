import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", router);

const PORT = process.env.PORT || 5000;

const connection_url =
  "mongodb+srv://hasanedge:m4gLNfvAV1UNSGcj@cluster0.bq4hrdp.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on the port ${PORT}`))
  )
  .catch((error) => console.log(error));

mongoose.set();
