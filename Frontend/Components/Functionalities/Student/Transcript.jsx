import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../LogInPages/UserContext';
import { Link } from 'react-router';

function Transcript() {

    const { user } = useContext(UserContext);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/api/Grade/SelectStudentGrade', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ StudentId: user.StudentId })
        })
            .then(res1 => res1.json())
            .then(res2 => setData(res2))
    }, [user.StudentId])


    return (
        <div className='container my-5 '>
        <h1 className='text-center'>Welcome to E-Learning Portal Website.</h1><hr  className='mx-5 px-5'/>
            <div className='row my-5 text-center nav'>
                <div className='col-4'><Link to="/LokingDetail">Home</Link></div>
                <div className='col-4'><Link to="/EnrollentTable">Entollment Table</Link></div>
                <div className='col-4'><Link to="/Transcript">Transcript</Link></div>
            </div>
            <div className='Boxe mx-auto py-5 px-5'>
                <h1 className='text-center'>Transcript</h1><hr className='pb-3'/>
                {data.length > 0 ? (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Class Year</th>
                                <th>Semister</th>
                                <th>GPA</th>
                                <th>CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((enroll, index) => (
                                <tr key={index}>
                                    <td>{enroll.ClassYear}</td>
                                    <td>{enroll.Semister}</td>
                                    <td>{enroll.Gpa}</td>
                                    <td>{enroll.Cgpa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No Transcript data found.</p>
                )}
            </div>
        </div>
    )
}

export default Transcript
