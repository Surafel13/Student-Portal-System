import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../LogInPages/UserContext'
import { Link } from 'react-router';

function TeacherHomePage() {

    const { user, setUser } = useContext(UserContext);
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
            <div className='text-center my-4'>
                <h1>Welcome To E-Student Learning Portal</h1><hr className='mx-5 my-4 ' />
                <div className='row w-75 nav'>
                    <div className='col-6 mx-auto my-3 '><Link to="/TeacherHomePage">Home</Link> </div>
                    <div className='col-6 mx-auto my-3'><Link to="/InsertStudentMark">Insert Students Mark</Link></div>
                </div>
            </div>
            <div className='Boxe mx-auto py-5'>
                <h2 className='text-center'>Teacher Full Information</h2><hr className='my-1 w-75 mx-auto pb-5' />
                <h5>ID Number : {user.TeacherId}</h5>
                <h5>Full Name : {user.FullName}</h5>
                <h5>Gender : {user.Gender}</h5>
                <h5>Department : {department.DepartmentName}</h5>
            </div>
        </div>
    )
}

export default TeacherHomePage
