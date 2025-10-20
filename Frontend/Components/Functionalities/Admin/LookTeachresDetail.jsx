import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../LogInPages/UserContext'
import { useNavigate } from 'react-router';


function LookTeachresDetail() {

    const { user, setUser } = useContext(UserContext);
    const [department, setDepartment] = useState({});
    const navigate = useNavigate();

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
            <div className='Boxe mx-auto py-5 my-5 container'>
                <h2 className='text-center'>Teacher Full Information</h2><hr className='my-1 w-75 mx-auto pb-5' />
                <h5>ID Number : {user.TeacherId}</h5>
                <h5>Full Name : {user.FullName}</h5>
                <h5>Gender : {user.Gender}</h5>
                <h5>Department : {department.DepartmentName}</h5>
                <div className='text-center'><button className='Submit-Button' onClick={() => navigate('/AdminPage')}>Back</button></div>
                
            </div>
        </div>
    )
}

export default LookTeachresDetail
