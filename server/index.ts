import cors from "cors";
import express from "express";
import records from "./src/routes/record";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
