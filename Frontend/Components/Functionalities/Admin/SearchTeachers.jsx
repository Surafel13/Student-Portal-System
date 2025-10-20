import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../LogInPages/UserContext'
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

function SearchTeachers() {

    const { user, setUser } = useContext(UserContext);
    

    const [formData, setFormData] = useState({
        TeacherId: ''
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
        fetch('http://localhost:4000/api/Teachers/SelectTeachers2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Teacher not found.") {
                    alert(data.message)
                } else if (data.message === "Unable to find the Teacher.")
                    alert("Something went wrong. Please Try again later.")
                else {
                    setUser(data);
                    navigate('/LookTeachresDetail')
                }
            })

    }

    return (
        <div>
            <div className='text-center my-5 Boxe mx-auto py-5'>
                <h1 >Search A Teacher Page</h1><hr className='pb-4 mx-5' />
                <form onSubmit={clickHandler}>
                    <input type="text" placeholder='Enter Teacher Id' required="required" name='TeacherId' value={formData.TeacherId} onChange={handleChange} /><br />
                    <button className='Submit-Button'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default SearchTeachers
