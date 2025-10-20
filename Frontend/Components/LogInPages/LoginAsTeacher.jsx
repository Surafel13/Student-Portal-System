import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router';

function LoginAsTeacher() {


    const { user, setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        TeacherId: '',
        Password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const navigate = useNavigate();

    const clickHandler = (e) => {
        console.log(formData);
        e.preventDefault();
        fetch('https://student-portal-system-wvyc.onrender.com/api/Teachers/SelectTeachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Teacher not found.") {
                    alert("Your are not found. Please check again your ID and Password")
                } else if (data.message === "Unable to find the Teacher.")
                    alert("Something went wrong. Please Try again later.")
                else {
                    setUser(data);
                    navigate('/TeacherHomePage')
                }
            })

    }


    return (
        <div className='text-center my-5'>
            <div><h1>Login as A Teacher</h1></div>
            <div className='input-Wrapper my-5 mx-auto py-5'>
                <form onSubmit={clickHandler}>
                    <input type="text" placeholder='Enter ID' name='TeacherId' value={formData.TeacherId} onChange={handleChange} /> <br />
                    <input type="password" placeholder='Enter Password' name='Password' value={formData.Password} onChange={handleChange} /><br />
                    <button type='submit' className='Submit-Button' >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginAsTeacher
