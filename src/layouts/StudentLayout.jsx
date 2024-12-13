import React from 'react'
import { Outlet } from 'react-router-dom'
import StudentNavBar from '../components/StudentNavBar'


const StudentLayout = () => {
  return (
    <>
    <StudentNavBar/>
    <Outlet/>
    </>
  )
}

export default StudentLayout