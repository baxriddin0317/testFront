import React from 'react'
import "./Item.scss"

function Item({obj, setId}) {

    const handleClik = () => {
        setId(obj.id);
    }

  return (
    <li className='item' key={obj.id}>
        <h3 className='item__title'>{obj.week} {obj.day} | {obj.time} </h3>
        <p className='item__text'>
            {obj.description}
        </p>

        <div className="item__block">
            <div className="item__box">
                <img src={obj.img} alt={obj.fullName} />
                <div>
                    <h4> {obj.fullName} </h4>
                    <span>{obj.position}</span>
                </div>
            </div>
            <button className="item__btn" onClick={handleClik} >
                Отменить
            </button>
        </div>
    </li>
  )
}

export default Item