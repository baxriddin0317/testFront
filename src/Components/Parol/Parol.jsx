import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Parol.scss";
import Aos from 'aos';

function Parol() {
    const navigate = useNavigate();
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
  return (
    <div data-aos="fade-down" className='parol'>
        <h2>Ввостановление пароля</h2>
        <p>На ваш номер выслан код восстановления</p>
        <form onSubmit={(e)=>{
            e.preventDefault();
            navigate("/parol")
        }}>
            <div className="parol__group">
                <input type="tel" maxLength={1} />
                <input type="text" maxLength={1} />
                <input type="text" maxLength={1} />
                <input type="text" maxLength={1} />
                <input type="text" maxLength={1} />
                <input type="text" maxLength={1} />
            </div>
            <span>Повторить отправку через 00:15</span>
            <button>Далее</button>
        </form>
    </div>
  )
}

export default Parol