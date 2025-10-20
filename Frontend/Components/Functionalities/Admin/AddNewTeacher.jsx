import React, { useState } from 'react'

function AddNewTeacher() {

    const [formData, setFormData] = useState({
        TeacherId: '',
        FullName: '',
        Gender: '',
        DepartmentId: '',
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
        fetch('http://localhost:4000/api/Teachers/AddTeachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Data inserted Successfully.") {
                    alert("Teacher information Inserted Succesfully.   👍")
                } else
                    alert("Something went wrong. Please Check again the Student Id and the Course Id or Retry again later. ⨉");
            })
    }


    return (
        <div>
            <div className='text-center my-5 py-5 FormPage-Wrapper w-50 mx-auto'>
                <h1>Add New Teacher Page.</h1>
                <form onSubmit={clickHandler}>
                    <input type="text" placeholder='Teacher Id' name='TeacherId' required='required' value={formData.TeacherId} onChange={handleChange} />
                    <input type="text" placeholder='Full Name' name='FullName' required='required' value={formData.FullName} onChange={handleChange} />
                    <input type="text" placeholder='Sex' name='Gender' required='required' value={formData.Gender} onChange={handleChange} />
                    <input type="text" placeholder='Department Id' name='DepartmentId' required='required' value={formData.DepartmentId} onChange={handleChange} />
                    <input type="text" placeholder='Password' name='Password' required='required' value={formData.Password} onChange={handleChange} /><br />
                    <button className='Submit-Button'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewTeacher
