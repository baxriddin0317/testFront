import React from 'react'
import "./Cards.scss"

function Cards() {
  const handleCard = (e) => {
    const removeCard = document.querySelector(".active-item");
    removeCard.classList.remove("active-item");

    e.currentTarget.classList.add("active-item");
  }
  return (
    <div className='card'>
        <div className="card__item active-item" onClick={handleCard}>
            <div className='card__item-left'>
            <i className="ri-calendar-check-line"></i>
            </div>
            <div className="card__item-box">
                <h3 className='card__item-title'>Информация о пациенте</h3>
                <ul>
                  <li>Ваши личные данные</li>
                  <li>Рекомендации врачей</li>
                  <li>История болезней</li>
                </ul>
            </div>
        </div>
        <div className="card__item" onClick={handleCard}>
            <div className='card__item-left'>
            <i className="ri-double-quotes-l"></i>
            </div>
            <div className="card__item-box">
                <h3 className='card__item-title'>Результаты анализов</h3>
                <p>Вы можете узнать здесь результаты своих анализов</p>
            </div>
        </div>
        <div className="card__item" onClick={handleCard}>
            <div className='card__item-left'>
            <i className="ri-file-add-line"></i>
            </div>
            <div className="card__item-box">
                <h3 className='card__item-title'>Добавить  информацию</h3>
                <p>Добавляйте в свою электронную медицинскую карту новые данные</p>
            </div>
        </div>
        <div className="card__item" onClick={handleCard}>
            <div className='card__item-left'>
            <i className="ri-history-line"></i>
            </div>
            <div className="card__item-box">
                <h3 className='card__item-title'>История приемов</h3>
                <p>Вся информация о полученных услугах за все время хранится здесь</p>
            </div>
        </div>
    </div>
  )
}

export default Cards