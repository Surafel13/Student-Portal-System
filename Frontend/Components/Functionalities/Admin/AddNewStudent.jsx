import React from 'react'
import { useState } from 'react';
import Props from '../../Props/Props';
import { useNavigate } from 'react-router';

function AddNewStudent() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        StudentId: '',
        FullName: '',
        Gender: '',
        DepartmentId: '',
        ClassYear: '',
        Semister: '',
        DormNo: '',
        Password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


    const clickHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/Students/InsertStudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Data inserted Successfully.") {
                    // <Props message={"Student Grade Inserted Succesfully.   👍"} url={'/AddNewStudent'}/>
                    alert("Student Inserted Succesfully.   👍")
                } else
                    // <Props message="Something went wrong. Please Check again the Student Id and the Course Id or Retry again later. ⨉" url="/AddNewStudent"/>
                    alert("Something went wrong. Please Retry again later. ⨉");
               })
    }



    return (
        <div>
            <div className='text-center my-5 py-5 FormPage-Wrapper w-50 mx-auto'>
                <h1>Add New Student Page.</h1>
                <form onSubmit={clickHandler}>
                    <input type="text" placeholder='Student Id' name='StudentId' required='required' value={formData.StudentId} onChange={handleChange} />
                    <input type="text" placeholder='Full Name' name='FullName' required='required' value={formData.FullName} onChange={handleChange} />
                    <input type="text" placeholder='Sex' name='Gender' required='required' value={formData.Gender} onChange={handleChange} />
                    <input type="text" placeholder='Department Id' name='DepartmentId' required='required' value={formData.DepartmentId} onChange={handleChange} />
                    <input type="text" placeholder='Class of Year' name='ClassYear' required='required' value={formData.ClassYear} onChange={handleChange} />
                    <input type="text" placeholder='Semister' name='Semister' required='required' value={formData.Semister} onChange={handleChange} />
                    <input type="text" placeholder='Dorm Number' name='DormNo' required='required' value={formData.DormNo} onChange={handleChange} />
                    <input type="text" placeholder='Password' name='Password' required='required' value={formData.Password} onChange={handleChange} /><br />
                    <button className='Submit-Button'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewStudent
