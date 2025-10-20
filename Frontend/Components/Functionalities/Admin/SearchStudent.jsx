import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { UserContext } from '../../LogInPages/UserContext';

function SearchStudent() {

    const [data , setData] = useState({})
    const {user, setUser} = useContext(UserContext)

    const [formData, setFormData] = useState({
        StudentId: ''
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
        fetch('http://localhost:4000/api/Students/SlelectStudent2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Student not found.") {
                    alert(data.message)
                } else if (data.message === "Unable to find the student.")
                    alert("Something went wrong. Please Try again later.")
                else {
                    setUser(data);
                    navigate('/LokingDetail');
                }
            })

    }

    return (
        <div>
            <div className='text-center my-5 Boxe mx-auto py-5'>
                <h1 >Search A Student Page</h1><hr className='pb-4 mx-5'/>
                <form onSubmit={clickHandler}>
                    <input type="text" placeholder='Enter Student Id' required="required" name='StudentId' value={formData.StudentId} onChange={handleChange}/><br />
                    <button className='Submit-Button'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SearchStudent
