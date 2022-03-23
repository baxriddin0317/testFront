import React from 'react'
import { Link } from 'react-router-dom'

function Head({m}) {
    console.log(m);
return (
    // ===== top side of the site ======
    <div className="head" style={{ marginBottom: m }}>
        <h3>Портал пациента</h3>
        {/* ===== link for the blind ====== */}
        <Link to={"#kirish"}>
            <i className='bx bx-show'></i>
            Версия для слабовидящих
        </Link>
    </div>
)
}

export default Head