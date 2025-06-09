import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Course from './pages/CoursesPage'
import Contact from './pages/ContactPage'
import Admission from './pages/AdmissionPage'

const App = () => {
  return (
    <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/courses" element={<Course/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/admission" element={<Admission/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App