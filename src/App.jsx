import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Course from './pages/CoursesPage'
import Contact from './pages/ContactPage'
import Admission from './pages/AdmissionPage'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'

const App = () => {
  return (
    <div >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/courses" element={<Course/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/admission" element={<Admission/>}/>
          </Routes>
          <ChatbotComponent/>
        </BrowserRouter>
    </div>
  )
}

export default App