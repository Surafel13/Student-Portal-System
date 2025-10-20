import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router';
import { UserContext } from './UserContext';

function LoginAsAdmin() {

    const {user, setUser} = useContext(UserContext);

    const [formData, setFormData] = useState({
        AdminId: '',
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
        fetch('https://student-portal-system-wvyc.onrender.com/api/Admins/SelectAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Admin not found.") {
                    alert("Your are not found. Please check again your ID and Password")
                } else if (data.message === "Unable to find the Admin.")
                    alert("Something went wrong. Please Try again later.")
                else {
                    setUser(data);
                    navigate('/AdminPage')
                }
            })

    }


    return (
        <div className='text-center my-5'>
            <div><h1>Login as A Admin</h1></div>
            <div className='input-Wrapper my-5 mx-auto py-5'>
                <form onSubmit={clickHandler}>
                    <input type="text" placeholder='Enter ID' name='AdminId' value={formData.AdminId} onChange={handleChange} /> <br />
                    <input type="password" placeholder='Enter Password' name='Password' value={formData.Password} onChange={handleChange} /><br />
                    <button type='submit' className='Submit-Button' >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginAsAdmin
