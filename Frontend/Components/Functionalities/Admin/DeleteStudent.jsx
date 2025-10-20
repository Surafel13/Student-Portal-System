import React, { useState } from 'react'

function DeleteStudent() {

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


    const clickHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/Students/DeleteStudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Student information deleted.") {
                    alert("Student information deleted Succesfully.   👍")
                } else if (data.message === "Student Not Found.")
                    alert(data.message)
                else
                    alert("Something went wrong. Please Check again the Student Id and the Course Id or Retry again later. ⨉");
            })
    }



    return (
        <div>
            <div className='text-center my-5 py-5 FormPage-Wrapper w-50 mx-auto'>
                <h1>Delete Student Information Page.</h1>
                <form onSubmit={clickHandler}>
                    <input type="text" placeholder='Student Id' name='StudentId' required='required' value={formData.StudentId} onChange={handleChange} />
                    <button className='Submit-Button'>Delete</button>
                </form>
            </div>
        </div>
    )
}

export default DeleteStudent
