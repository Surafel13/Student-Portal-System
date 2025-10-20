import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../LogInPages/UserContext'
import { Link } from 'react-router';

function LokingDetail() {

  const { user } = useContext(UserContext);
  const [department, setDepartment] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/api/Department/SelectDepartment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ DepartmentID: user.DepartmentId })
    })
      .then(res1 => res1.json())
      .then(res2 => setDepartment(res2))
  }, [user.DepartmentId])

    return (
    <div>
      <div className='container my-5'>
        <h1 className='text-center'>Welcome to E-Learning Portal Website.</h1><hr className='mx-5 px-5'/>
        <div className='row my-5 text-center nav'>
          <div className='col-4'><Link to="/LokingDetail">Home</Link></div>
          <div className='col-4'><Link to="/EnrollentTable">Entollment Table</Link></div>
          <div className='col-4'><Link to="/Transcript">Transcript</Link></div>
        </div>

        <div className='Boxe mx-auto my-5 py-5 px-5'>
          <h2 className='text-center'>Student Information</h2><hr className='pb-3' />
          <h5>Student Id  :  {user.StudentId}</h5>
          <h5>Full Name  :  {user.FullName}</h5>
          <h5>Gender  :  {user.Gender}</h5>
          <h5>Department : {department.DepartmentName} </h5>
          <h5>ClassYear : {user.ClassYear} </h5>
          <h5>Semister : {user.Semister}</h5>
          <h5>Dorm Number : {user.DormNo} </h5>
        </div>
      </div>
    </div>
  )
}

export default LokingDetail
