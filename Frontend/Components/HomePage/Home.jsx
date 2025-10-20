import React from 'react'

function Home() {
    return (
        <div className='text-center my-5'>
            <div className='my-5'>
                <h1>Welcome To E-Student Learning Portal</h1>
            </div>
            <div className='my-5 py-5 link-Wrapper'>
                <h4>To continue please log in first.</h4>
                <ul className=''>
                    <li><a href="/LoginAsStudent" target='_blank' >Login As a Student</a><br /> </li>
                    <li><a href="/LoginAsTeacher" target='_blank'>Login As a Teacher</a><br /></li>
                    <li><a href="/LoginAsAdmin" target='_blank'>Login As a Admin</a><br /></li>
                </ul>
            </div>
        </div>
    )
}

export default Home
