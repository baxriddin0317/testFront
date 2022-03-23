import React, { useEffect } from 'react'
// style 
import './Reagistratsiya.scss';
import Aos from 'aos';
// get components
import Head from '../../Components/Head/Head'
import Main from '../../Components/Main/Main'
// import img
import Login from "../../Assets/Img/login.png"
import Logo from "../../Assets/Img/logo.png";


function Registratsiya() {

  useEffect(()=>{
    Aos.init({deration: 2000});
  }, [])

  return (
    <div className='registr'>
      <div className="registr__left">
          <Head m={18} />

          <div data-aos="zoom-in-up" className="registr__content">
            <h2>Регистрация</h2>
            <p className='registr__content-text'>У вас уже есть аккаунт? Войти</p>
            
            <Main />
          </div>

          <img src={Logo} className="kirish__left-logo" alt="" />
      </div>
      <div data-aos="zoom-in-down" className="registr__right">
            <h2>Начните следить за своим здоровьем вместе с нами!</h2>
            <img src={Login} alt="" />
            <p>Вместе с нами медицина стала проще!</p>
      </div>
    </div>
  )
}

export default Registratsiya;