const connectDB = require("./database/db");
const express = require("express");
const cors = require("cors");

const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
    res.send("AI Resume Screener Backend Running");
});

const PORT = 5000;
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});