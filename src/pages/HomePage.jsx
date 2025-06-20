import React from 'react'
import Header from '../components/Header/Header'

import './Style.css'
import Footer from '../components/Footer/Footer'
const Home = ()=> {
    return(
        <div id="main">
            <Header/>
            <div id="page">
              <div class="content">
                <div className="image">
                  <img id="img1" src='Images/clgimage.png'/>
                  <div className='title'>
                    <h1><b>Welcome to Vivekanand College! </b></h1>
                    <p><b>Your journey to excellence starts here.</b></p>
                    <a class="btn1" href="/admission" data-discover="true">Apply Now!</a> 
                  </div>
                </div>
                <p class="align"> **Vivekanand College** is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                <p class="align"> At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                <h2 class="align"> Why Choose Vivekanand College?</h2>
                <ul class="content1">
                  <li>
                    <b>Legacy of Excellence:</b> Decades of commitment to quality education.
                  </li>
                  <li>
                    <b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.
                  </li>
                  <li>
                    <b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.
                  </li>
                  <li>
                    <b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.
                  </li>
                  <li>
                    <b>Strong Placements:</b> Excellent career opportunities with leading companies.
                  </li>
                </ul>
                <h2 class="align" >Campus Life &amp; Facilities</h2>
                <div class="image-gallery">
                  <img className='image-item' src="Images/faculty.jpeg"/>
                  <img className='image-item' src="Images/campus.jpg"/>
                </div>
                <p class="align">Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                <div  class="center" >
                  <p  >Ready to Explore our courses ?</p>
                  <a class="btn" href="/courses"> Explore corses </a>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
    )
}

export default Home