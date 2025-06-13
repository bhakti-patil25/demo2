import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Course from './pages/CoursesPage'
import Contact from './pages/ContactPage'
import Admission from './pages/AdmissionPage'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import { useState } from 'react'
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup'

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div className='demo'>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Bhakti Sambhaji Patil"
          studentPhotoUrl="Images/Bhakti.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
    </div>
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
    </>
  )
}

export default App