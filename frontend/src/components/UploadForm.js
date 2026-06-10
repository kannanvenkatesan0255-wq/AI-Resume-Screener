import { useState } from "react";
import axios from "axios";

function UploadForm() {

    const [file, setFile] = useState(null);

    const handleUpload = async () => {

        const formData = new FormData();

        formData.append("resume", file);

        try {

            const response = await axios.post(
                "http://localhost:5000/api/resume/upload",
                formData
            );

            alert(response.data.message);

        } catch (error) {

            console.log(error);

        }

    };

    return (
        <div>

            <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <button onClick={handleUpload}>
                Upload Resume
            </button>

        </div>
    );
}

export default UploadForm;