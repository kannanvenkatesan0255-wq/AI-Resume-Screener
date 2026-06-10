function Dashboard({ candidates }) {

    return (

        <div>

            <h2>Candidate Rankings</h2>

            <table className="table table-striped table-hover">

                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>

                    {candidates.map((candidate, index) => (

                       <tr key={candidate._id}>

    <td>{index + 1}</td>

    <td>{candidate.name}</td>

    <td>{candidate.email}</td>

    <td>{candidate.score}%</td>

</tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default Dashboard;