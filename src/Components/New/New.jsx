import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input'
import Aos from "aos";

function New() {
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    let old = e.target[0].value;
    let next = e.target[1].value;
    
    if(old === '' || next === ''){
      alert("maydonlarni toldirmadingiz");
    }else if(old === next){
      window.localStorage.setItem("password", next);
      navigate("/");
    } 
    else{
      alert("parolni takrorlashda hatolik");
    }
  }

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div className='login' data-aos="zoom-out-right">
        <h2>Восстановление пароля</h2>
        <p>Придумайте новый пароль</p>

        <form  className='form' onSubmit={handleForm}>
            <Input id="yangi" type="password" placeholder="Новый пароль" />
            <Input id="qayta" type="password" placeholder="Повторите пароль" />
            <button>Восстановить</button>
        </form>
    </div>
  )
}

export default New