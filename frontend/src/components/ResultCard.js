function ResultCard({ result }) {

    if (!result) return null;

    return (

        <div className="glass-card score-card">

            <div className="score-value">
                {result.score}%
            </div>

            <h3>🎯 Candidate Match Score</h3>

            <hr />

            <h4>✅ Matched Skills</h4>

            <ul>
                {result.matched.map((skill, index) => (
                    <li key={index}>
                        ✅ {skill}
                    </li>
                ))}
            </ul>

            <h4>❌ Missing Skills</h4>

            <ul>
                {result.missing.map((skill, index) => (
                    <li key={index}>
                        ❌ {skill}
                    </li>
                ))}
            </ul>

        </div>

    );
}

export default ResultCard;