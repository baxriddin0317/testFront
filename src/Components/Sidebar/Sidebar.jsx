import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Logo from "../../Assets/Img/logo2.png";

function Sidebar() {
    const handleClass = (e) => {
        const removeClass = document.querySelector(".active__link");

        removeClass.classList.remove("active__link");

        e.currentTarget.classList.add("active__link");
    }
  return (
    //   ==== Sidebar =====
    <div className='sidebar'>
        <span className='sidebar__logo'>
            <Link to="/home">Логотип</Link>
        </span>

        <ul className="sidebar__list">
            <li className="sidebar__item active__link" onClick={handleClass}>
                <Link to={""}>
                <i className="ri-service-line"></i>
                Профиль
                </Link>
            </li>
            <li className="sidebar__item" onClick={handleClass}>
                <Link to={"vrach"}>
                <i className="ri-stethoscope-fill"></i>
                Врачи и клиники
                </Link>
            </li>
            <li className="sidebar__item" onClick={handleClass}>
                <Link to={"message"}>
                <i className="ri-question-answer-line"></i>
                Сообщения
                </Link>
            </li>
            <li className="sidebar__item" onClick={handleClass}>
                <Link to={"test"}>
                <i className="ri-file-list-3-line"></i>
                Тестирование
                </Link>
            </li>
            <li className="sidebar__item" onClick={handleClass}>
                <Link to={"book"}>
                <i className="ri-book-open-line"></i>
                Полезно знать
                </Link>
            </li>
        </ul>

        <button className='sidebar__btn'>Подать заявку</button>

        <Link className='sidebar__link' to={"#"}>
            <i className="ri-information-line"></i>
            Помощь
        </Link>

        <img src={Logo} alt="" />
    </div>
  )
}

export default Sidebar