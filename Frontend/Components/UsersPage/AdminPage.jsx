import React, {useContext} from 'react'
import { UserContext } from '../LogInPages/UserContext'


function AdminPage() {

    return (
        <div className='text-center'>
            <div className='my-4'>
                <h1>Welcome Sir! <br /> What you want to do ?</h1>
            </div>
            <div className='container mx-auto w-80%  '>
                <div className='container row my-5 mx-auto  '>
                    <div className='col-4 Functionality_wrapper py-3 mx-2  ' ><a href="/AddNewStudent">Add New Studnt</a></div>
                    <div className='col-4 Functionality_wrapper py-3 mx-2  '><a href="/SearchStudent">Search For Student</a></div>
                    <div className='col-4 Functionality_wrapper py-3 mx-2  '><a href="/DeleteStudent">Delete Existing Student</a></div>
                </div>
                <div className='row my-5 mx-auto '>
                    <div className='col-4 Functionality_wrapper py-3 mx-2  '><a href="/AddNewTeacher">Add New Teacher</a></div>
                    <div className='col-4 Functionality_wrapper py-3 mx-2  '><a href="/SearchTeachers">Search For Teacher</a></div>
                    <div className='col-4 Functionality_wrapper py-3 mx-2  '><a href="/DeleteTeacher">Delete Existing Teacher</a></div>
                </div>
                <div className='row my-5 mx-auto '> 
                    <div className='col-4 Functionality_wrapper py-3 mx-2  '><a href="/UpdateAcadamicCalande">Update Acadamic Calander</a></div>
                </div>


            </div>
        </div>
    )
}

export default AdminPage
