
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
export const serverUrl = "http://localhost:8000"
import { ToastContainer } from "react-toastify"
import useCurrentUser from './customHooks/useCurrentUser'
import { useSelector } from 'react-redux'
import Profile from './pages/Profile'
import ForgetPassword from './pages/ForgetPassword'
import EditProfile from './pages/EditProfile'

import Dashboard from './pages/Educator/Dashboard'
import Courses from './pages/Educator/Courses'
import EditCourses from './pages/Educator/EditCourses'
import CreateCourse from './pages/Educator/CreateCourse'
import CreateLecture from './pages/Educator/CreateLecture'
import EditLecture from './pages/Educator/EditLecture'
import useCreatorCourseData from './customHooks/useCreatorCourseData'
import usePublishedCourseData from './customHooks/usePublishedCourse'
import AllCourses from './pages/AllCourses'
import ViewCourse from './pages/ViewCourse'

function App() {
  useCurrentUser()
  useCreatorCourseData()
  usePublishedCourseData()
  const { userData } = useSelector(state => state.user);
  return (
    <>
      <ToastContainer />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={!userData ? <SignUp /> : <Navigate to = {"/"}/>} />
        <Route path="/profile" element={userData ? <Profile /> : <Navigate to = {"/signup"}/>} />
        <Route path="/editprofile" element={userData ? <EditProfile /> : <Navigate to = {"/signup"}/>} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path='/viewcourse/:courseId' element={userData?<ViewCourse/>:<Navigate to={"/signup"}/>}/>

        <Route path='/allcourses' element={userData?<AllCourses/>:<Navigate to={"/signup"}/>}/>
        <Route path='/dashboard' element={userData?.role === "educator"?<Dashboard/>:<Navigate to={"/signup"}/>}/>
        <Route path='/courses' element={userData?.role === "educator"?<Courses/>:<Navigate to={"/signup"}/>}/>
        <Route path='/editcourses/:courseId' element={userData?.role === "educator"?<EditCourses/>:<Navigate to={"/signup"}/>}/>
        <Route path='/createcourses' element={userData?.role === "educator"?<CreateCourse/>:<Navigate to={"/signup"}/>}/>
        <Route path='/createlecture/:courseId' element={userData?.role === "educator"?<CreateLecture/>:<Navigate to={"/signup"}/>}/>
        <Route path='/editlecture/:courseId/:lectureId' element={userData?.role === "educator"?<EditLecture/>:<Navigate to={"/signup"}/>}/>

      </Routes>
    </>
  )
}

export default App