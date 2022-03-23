import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Basic from '../../Components/Basic/Basic';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.scss';
import Aos from 'aos';

function Home() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  }, []);

  return (
    //================== Home ================//
    <div className='home'>
        {/* ===== Sidebar ===== */}
        <div data-aos="fade-down">
        <Sidebar />
        </div>

        {/* ===== right side of the home page ==== */}
        <div className="home__right" data-aos="fade-up">
          <Header />

          {/* ===== Rout ===== */}
          <Routes>
            <Route path="" element={<Basic />} />
            <Route path="vrach" element={<p>a thousand regrets this page is not given in the layout</p>} />
            <Route path="message" element={<p>message</p>} />
            <Route path="test" element={<p>test</p>} />
            <Route path="book" element={<p>kitob</p>} />
          </Routes>
        </div>
    </div>
  )
}

export default Home