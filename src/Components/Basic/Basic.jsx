import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards';
import Item from '../Item/Item'
import "./Basic.scss"

const Data = [
    {
        id: 1,
        week: "Понедельник",
        day: "15.06.22",
        time: "15:30",
        description: "СПБ ГБУЗ 'Городская поликлиника №25', пр. Солидарности, д. 1, к. 1, лит. А",
        img: "https://picsum.photos/id/100/200/300",
        fullName: "Малушко Т. Н.",
        position: "Хирургия"
    },
    {
        id: 2,
        week: "Вторник",
        day: "03.02.22",
        time: "11:00",
        description: "СПБ ГБУЗ 'Городская поликлиника №25', пр. Солидарности, д. 1, к. 1, лит. А",
        img: "https://picsum.photos/id/101/200/300",
        fullName: "Харьков В. С.",
        position: "Терапевтическое отделение"
    },
    {
        id: 3,
        week: "Вторник",
        day: "03.12.22",
        time: "18:00",
        description: "СПБ ГБУЗ 'Городская поликлиника №25', пр. Солидарности, д. 1, к. 1, лит. А",
        img: "https://picsum.photos/id/102/200/300",
        fullName: "Харьков В. С.",
        position: "Хирургия"
    },
    {
        id: 4,
        week: "Четверг",
        day: "02.27.22",
        time: "12:30",
        description: "СПБ ГБУЗ 'Городская поликлиника №25', пр. Солидарности, д. 1, к. 1, лит. А",
        img: "https://picsum.photos/id/103/200/300",
        fullName: "Харьков В. С.",
        position: "Хирургия"
    },
    {
        id: 5,
        week: "Понедельник",
        day: "03.02.22",
        time: "11:00",
        description: "СПБ ГБУЗ 'Городская поликлиника №25', пр. Солидарности, д. 1, к. 1, лит. А",
        img: "https://picsum.photos/id/104/200/300",
        fullName: "Харьков В. С.",
        position: "Хирургия"
    }
]

function Basic() {
    const [ id, setId] = useState(0);
    const [ dat, setDat ] = useState(Data);

    useEffect(() => {
        setDat(d => d.filter(obj => obj.id !== id));
    }, [id]);

    return (
    <div className='basic'>
        <h4 className='basic__title'>Записи на прием</h4>

        <div className='basic__flex'>
            {/* ====== data render ===== */}
            {dat.length>0 && <ul className="basic__list">
                {dat.map(obj => (
                    <Item obj={obj} key={obj.id} setId={setId} />
                ))}
            </ul>
            }
            {dat.length>2 &&  <div className="basic__more">
                <h4>
                    Еще {dat.length - 2} записи
                </h4>
                <div className="link">Подробнее</div>
            </div>}
        </div>

        <h4 className="basic__title">
        Электронная карта
        </h4>

        <Cards />
    </div>
  )
}

export default Basic