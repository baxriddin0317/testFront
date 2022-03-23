import React, { useEffect } from 'react'
import './Kirish.scss'
import Head from '../../Components/Head/Head';
import Login from '../../Components/Login/Login';
import Rasm from "../../Assets/Img/kirish.png";
import Logo from "../../Assets/Img/logo.png";
import Parol from '../../Components/Parol/Parol';
import New from '../../Components/New/New';
import Aos from 'aos';

function Kirish({kod, parol}) {

  useEffect(()=>{
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className='kirish'>
        <div className="kirish__left">
          {/* ==== head ==== */}
            <Head m={155} />
          {/* ===== login page || parol page || new page condition operator ===== */}
            {parol ? null : kod==="login" ? <Login /> : <Parol />}
            {parol ? <New /> : null}
            {/* ===== logo to the bottom ===== */}
            <img src={Logo} className="kirish__left-logo" alt="" />
        </div>

        {/* ===== right side of the site ===== */}
        <div data-aos="zoom-out-left" className="kirish__right">
            <h2>Добро пожаловать!</h2>
            <img src={Rasm} alt="" />
            <p>Вместе с нами медицина стала проще!</p>
        </div>
    </div>
  )
}

export default Kirish;