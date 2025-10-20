import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../LogInPages/UserContext'
import { Link } from 'react-router';

function EnrollentTable() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/api/Enrollment/SelectEnrollment', {
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
    <div className='container my-5'>
      <h1 className='text-center'>Welcome to E-Learning Portal Website.</h1><hr className='mx-5 px-5' />
      <div className='row my-5 text-center nav'>
        <div className='col-4'><Link to="/LokingDetail">Home</Link></div>
        <div className='col-4'><Link to="/EnrollentTable">Entollment Table</Link></div>
        <div className='col-4'><Link to="/Transcript">Transcript</Link></div>
      </div>
      <div className='Boxe mx-auto w-75 py-4 px-5'>
        <h2 className='text-center '>Enrollment Table</h2><hr className='pb-3' />
        {data.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Credit Hour</th>
                <th>Continous Mark (50%)</th>
                <th>Final Mark (50%)</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {data.map((enroll, index) => (
                <tr key={index}>
                  <td>{enroll.Cname}</td>
                  <td>{enroll.CreaditHour}</td>
                  <td>{enroll.ContinousMark}</td>
                  <td>{enroll.FinalExamMark}</td>
                  <td>{enroll.Grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No enrollment data found.</p>
        )}
      </div>
    </div>
  )
}

export default EnrollentTable
