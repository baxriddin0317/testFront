// import { TextField } from '@mui/material';
import Aos from 'aos';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../Input/Input';
import "./Login.scss";
import "aos/dist/aos.css";

function Login() {
  // ==== navigation =====
  const navigate = useNavigate();
  // ===== get localStorage date =====
  const getEmail = window.localStorage.getItem("email");
  const getParol = window.localStorage.getItem("password");
  // ===== function when from submit ====
  const handleForm = (e) => {
    e.preventDefault();
  
    let email = e.target[0].value;
    let parol = e.target[1].value;
  
    if(email === '' || parol === ""){
      alert("maydomlarni toldirmadingiz");
    }else if(email === getEmail && parol===getParol){
      navigate("/profil");
    }else{
      alert("siz royxatdan otmagansiz");
    }
  }
  // ===== Aos scroll animation ====
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div data-aos="fade-down" className='login'>
        <h2>Вход</h2>
        <p>У вас нет аккаунта? <Link to={"/registratsiya"} className='link'>Зарегистрироваться</Link></p>
        {/* ===== form ===== */}
        <form className='form' onSubmit={handleForm}>
            <Input id="email" type="email" placeholder="Почта или телефон" />
            <Input id="password" type="password" placeholder="Пароль" />
            <p>Забыли пароль? <Link to={"/kod"} className='link' >Восстановить</Link></p>
            <button>Войти</button>
        </form>
    </div>
  )
}

export default Login