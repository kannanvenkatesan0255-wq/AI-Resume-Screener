import Dashboard from "./components/Dashboard";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ResultCard from "./components/ResultCard";
import UploadForm from "./components/UploadForm";
function App() {

    const [result, setResult] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [candidates, setCandidates] = useState([]);
    const getResult = async () => {

    try {
      console.log(jobDescription);

        const response = await axios.get(
            "http://localhost:5000/api/resume/result"
        );

        console.log(response.data);

        setResult(response.data);

    } catch (error) {

        console.log(error);

        alert(error.message);

    }
};
const getRankings = async () => {

    try {

        const response = await axios.get(
            "http://localhost:5000/api/resume/rankings"
        );

        setCandidates(response.data);

    } catch (error) {

        console.log(error);

    }

};
useEffect(() => {

    getRankings();

}, []);

    return (
    <div className="main-container">

        <h1 className="title">
            🤖 AI Resume Screener
        </h1>

        <p className="subtitle">
            Smart ATS Candidate Analyzer
        </p>

        <div className="glass-card">

            <UploadForm />

            <br />

            <textarea
                className="form-control"
                rows="10"
                placeholder="Enter Job Description"
                value={jobDescription}
                onChange={(e) =>
                    setJobDescription(e.target.value)
                }
            />

            <br />

            <button
                className="btn btn-success btn-analyze"
                onClick={getResult}
            >
                Analyze Resume
            </button>

        </div>

        <ResultCard result={result} />

        <Dashboard candidates={candidates} />

    </div>
);
}

export default App;