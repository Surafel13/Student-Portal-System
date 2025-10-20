import React, { useState } from 'react'

function UpdateAcadamicCalande() {

    const [formData, setFormData] = useState({
        ClassYear: '',
        Semister: ''
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
        fetch('https://student-portal-system-wvyc.onrender.com/api/AcadamicPeriod/InsertAcadamicPeiod', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Academic period inserted and students updated successfully.") {
                    alert("Acadamic Period Updated Succesfully.  👍")
                } else
                    alert("Something went wrong. Please retry again later.")
            })
    }



    return (
        <div className='text-center my-5 py-5 FormPage-Wrapper w-50 mx-auto'>
            <div><h1>Update Acadamic Year page.</h1><hr className='mx-5 my-4 ' /></div>
            <div>
                <form onSubmit={clickHandler}>
                    <input type="text" placeholder='Class Year' name='ClassYear' value={formData.ClassYear} onChange={handleChange} /><br />
                    <input type="text" placeholder='Semister' name='Semister' value={formData.Semister} onChange={handleChange} /><br />
                    <button className='Submit-Button' type='Submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateAcadamicCalande
