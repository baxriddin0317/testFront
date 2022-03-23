import React, { useRef } from 'react'
// sttyle import
import './Details.scss'
//react-router-dom import
import { Link } from 'react-router-dom'
//get componetns 
import Input from '../Input/Input'

function Details({activeStep}) {

    const man = useRef();
    const woman = useRef();

    const handleChec = (e) => {
        if(e.target.id === 'man') {
            man.current.classList.add("man");
            woman.current.classList.remove("man");
        }else{
            woman.current.classList.add("man");
            man.current.classList.remove("man");
        }
    }

    if(activeStep === 1){
        return (
          <form className='details'>
              <Input id="pochta" type="email" placeholder="Почта" />
              <Input id="tel" type="tel" placeholder="Телефон" />
              <Input id="pas" type="password" placeholder="Пароль" />
              <Input id="pas2" type="password" placeholder="Повторите пароль" />
              <div className="details__block">
                <input type="checkbox" />
                <p className='p'>Я согласен на:</p>    
              </div>  
              <Link to={"#" } className="link" >-  Обработку персональных данных (ФЗ 152)</Link>
              <p style={{marginBottom: 9, marginTop: 9}}>-  Передачу персональных данных третьим лицам</p>
              <p>-  Обращение для информирования и напоминания</p>
          </form>
        )
    }else if(activeStep === 2){
        return (
            <form>
                <Input id="fam" type="text" placeholder="Фамилия" />
                <Input id="name" type="text" placeholder="Имя" />
                <Input id="fam" type="text" placeholder="Отчество" />
                <div className="details__block">
                    <p className='p' >Пол:</p>
                    <input id='man' type="radio" name='radio' onClick={handleChec} />
                    <label ref={man} htmlFor="man" >M</label>
                    <input id='woman' type="radio" name='radio' onClick={handleChec} />
                    <label ref={woman} htmlFor="woman" className='woman'>Ж</label>

                    <input className='date' type="date" />
                </div>

                <Input id="adres" type="text" placeholder="Адрес регистрации" />
                <Input id="mesta" type="text" placeholder="Адрес места жительства"  />
            </form>
        )
    }else{
        return (
            <form>
                <span className='details__span'>
                    Укажите данные вашего представителя (например, член семьи) или иного лица для экстренного информирования
                </span>
                <Input id="fam" type="text" placeholder="Фамилия" />
                <Input id="name" type="text" placeholder="Имя" />
                <Input id="fam" type="text" placeholder="Отчество" />
                <Input id="telifon" type="tel" placeholder="Телефон" />
            </form>
        )
    }
    
}

export default Details