import React from 'react'
import './../Style/bootstrap.css'
import './../Style/MyStyle.css'
import { Routes, Route } from 'react-router'

import Home from '../Components/HomePage/Home'

import LoginAsStudent from '../Components/LogInPages/LoginAsStudent'
import LoginAsTeacher from '../Components/LogInPages/LoginAsTeacher'
import LoginAsAdmin from '../Components/LogInPages/LoginAsAdmin'

import AdminPage from '../Components/UsersPage/AdminPage'

import AddNewStudent from '../Components/Functionalities/Admin/AddNewStudent'
import AddNewTeacher from '../Components/Functionalities/Admin/AddNewTeacher'
import DeleteStudent from '../Components/Functionalities/Admin/DeleteStudent'
import DeleteTeacher from '../Components/Functionalities/Admin/DeleteTeacher'

import LokingDetail from '../Components/Functionalities/Student/LokingDetail'
import EnrollentTable from '../Components/Functionalities/Student/EnrollentTable'
import Transcript from '../Components/Functionalities/Student/Transcript'

import InsertStudentMark from '../Components/Functionalities/Teacher/InsertStudentMark'
import TeacherHomePage from '../Components/Functionalities/Teacher/TeacherHomePage'

import Props from '../Components/Props/Props'
import SearchStudent from '../Components/Functionalities/Admin/SearchStudent'
import SearchTeachers from '../Components/Functionalities/Admin/SearchTeachers'
import LookTeachresDetail from '../Components/Functionalities/Admin/LookTeachresDetail'
import UpdateAcadamicCalande from '../Components/Functionalities/Admin/UpdateAcadamicCalande'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/UpdateAcadamicCalande' element={<UpdateAcadamicCalande />} />
        <Route path='/LoginAsStudent' element={<LoginAsStudent />} />
        <Route path='/LoginAsTeacher' element={<LoginAsTeacher />} />
        <Route path='/LoginAsAdmin' element={<LoginAsAdmin />} />

        <Route path='/AdminPage' element={<AdminPage />} />
        <Route path='/AddNewStudent' element={<AddNewStudent />} />
        <Route path='/AddNewTeacher' element={<AddNewTeacher />} />
        <Route path='/DeleteStudent' element={<DeleteStudent />} />
        <Route path='/DeleteTeacher' element={<DeleteTeacher />} />

        <Route path='/LokingDetail' element={<LokingDetail />} />
        <Route path='/EnrollentTable' element={<EnrollentTable />} />
        <Route path='/Transcript' element={<Transcript />} />

        <Route path='/TeacherHomePage' element={<TeacherHomePage />} />
        <Route path='/InsertStudentMark' element={<InsertStudentMark />} />
        <Route path='/SearchStudent' element={<SearchStudent />} />
        
        <Route path='/SearchTeachers' element={<SearchTeachers />} />
        <Route path='/LookTeachresDetail' element={<LookTeachresDetail />} />
      </Routes>
    </div>

  )
}

export default App
