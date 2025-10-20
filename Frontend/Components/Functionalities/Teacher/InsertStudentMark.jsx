import React, { useState } from 'react'
import { Link } from 'react-router'

function InsertStudentMark() {

    const [formData, setFormData] = useState({
        StudentId: '',
        CourseId: '',
        ContinousMark: '',
        FinalExamMark: ''
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
        fetch('http://localhost:4000/api/Enrollment/InsertEnrollment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Data inserted Successfully.") {
                    alert("Student Grade Inserted Succesfully.   👍")
                } else
                    alert("Something went wrong. Please Check again the Student Id and the Course Id or Retry again later.")
            })
    }


    return (
        <div>
            <div className='text-center my-4'>
                <h1>Welcome To E-Student Learning Portal</h1><hr className='mx-5 my-4 ' />
                <div className='row w-75 nav'>
                    <div className='col-6 mx-auto my-3 '><Link to="/TeacherHomePage">Home</Link></div>
                    <div className='col-6 mx-auto my-3'><Link to="/InsertStudentMark">Insert Students Mark</Link></div>
                </div>
            </div>
            <div className='text-center my-5 py-5 FormPage-Wrapper w-50 mx-auto'>
                <h2>Insert Students Mark</h2>
                <div>
                    <form onSubmit={clickHandler}>
                        <input type="text" placeholder='Student Id' name='StudentId' value={formData.StudentId} onChange={handleChange}/><br />
                        <input type="text" placeholder='Course Id' name='CourseId' value={formData.CourseId} onChange={handleChange}/><br />
                        <input type="text" placeholder='Continous Mark' name='ContinousMark' value={formData.ContinousMark} onChange={handleChange}/><br />
                        <input type="text" placeholder='Final Mark' name='FinalExamMark' value={formData.FinalExamMark} onChange={handleChange}/><br />
                        <button className='Submit-Button' type='Submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InsertStudentMark
