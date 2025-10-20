import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import { UserContext } from './UserContext';

function LoginAsStudent() {

    const {user, setUser} = useContext(UserContext);

    const [ formData, setFormData ] = useState({
        StudentId: '',
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
        e.preventDefault();
        fetch('http://localhost:4000/api/Students/SlelectStudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Student not found.") {
                    alert("Your are not found. Please check again your ID and Password")
                } else if (data.message === "Unable to find the student.")
                    alert("Something went wrong. Please Try again later.")
                else {
                    setUser(data);
                    navigate('/LokingDetail')
                }
            })

    }


    return (
        <div className='text-center my-5'>
            <div><h1>Login as A Student</h1></div>
            <div className='input-Wrapper my-5 mx-auto py-5'>
                <form onSubmit={clickHandler}>
                    <input type="text" placeholder='Enter Your ID' required="required" name='StudentId' value={formData.StudentId} onChange={handleChange} /> <br />
                    <input type="password" placeholder='Enter Password' required="required" name='Password' value={formData.Password} onChange={handleChange} /><br />
                    <button type='submit' className='Submit-Button' >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginAsStudent
