const Candidate = require("../models/Candidate");
const { spawn } = require("child_process");
const path = require("path");
const multer = require("multer");
let latestUploadedFile = "";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({
    storage: storage
}).single("resume");

const uploadResume = (req, res) => {

    upload(req, res, function (err) {

        if (err) {
            return res.status(500).json({
                message: "Upload failed"
            });
        }
        latestUploadedFile = req.file.filename;
        res.status(200).json({
            message: "Resume uploaded successfully",
            file: req.file.filename
        });
    });
};

const getResult = async (req, res) => {
if (!latestUploadedFile) {

    return res.status(400).json({
        message: "Please upload a resume first"
    });

}
    const pdfPath = path.join(
    __dirname,
    "../uploads",
    latestUploadedFile
);

    const jobDescription =
    "Looking for Python, MongoDB, React and Docker experience";

const python = spawn(
    "python",
    [
        "../ai-engine/analyze_resume.py",
        pdfPath,
        jobDescription
    ]
);

    let data = "";

    python.stdout.on("data", (chunk) => {
        data += chunk.toString();
    });

    python.stderr.on("data", (err) => {
        console.log(err.toString());
    });

    python.on("close", async () => {
const extractor = spawn(
    "python",
    [
        "../ai-engine/candidate_extractor.py",
        pdfPath
    ]
);
let extractorData = "";
extractor.stdout.on("data", (chunk) => {
    extractorData += chunk.toString();
});
        try {

            const result = JSON.parse(data);
            
            console.log("RESULT:", result);
            await new Promise((resolve) => {

    extractor.on("close", resolve);

});
       const candidateInfo = JSON.parse(extractorData);

console.log(candidateInfo); 
           const candidate = new Candidate({
    
  name: candidateInfo.name,

email: candidateInfo.email,
    score: result.score,


    matched: result.matched,

    missing: result.missing

});

await candidate.save();
console.log("Candidate Saved");
res.json(result);

        } catch (error) {

    console.log("ERROR:", error);

    res.status(500).json({
        message: error.message
    });

}

    });

};
const getRankings = async (req, res) => {

    try {

        const candidates = await Candidate
            .find()
            .sort({ score: -1 });

        res.json(candidates);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
module.exports = {
    uploadResume,
    getResult,
    getRankings
};