import React, { useState } from 'react'

function DeleteTeacher() {

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


    const clickHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/Teachers/DeleteTeachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Teacher information deleted.") {
                    alert("Teacher information deleted Succesfully.   👍")
                } else if (data.message === "Teacher Not Found")
                    alert(data.message)
                else
                    alert("Something went wrong. Please Check again the Student Id and the Course Id or Retry again later. ⨉");
            })
    }





    return (
        <div>
            <div className='text-center my-5 py-5 FormPage-Wrapper w-50 mx-auto'>
                <h1>Delete Teacher Information Page.</h1>
                <form onSubmit={clickHandler}>
                    <input type="text" placeholder='Teacher Id' name='TeacherId' required='required' value={formData.TeacherId} onChange={handleChange} />
                    <button className='Submit-Button'>Delete</button>
                </form>
            </div>
        </div>
    )
}

export default DeleteTeacher
