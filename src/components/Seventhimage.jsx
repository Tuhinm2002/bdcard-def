import React from "react";
import '../assets/styles/App.css';
import s7 from '../assets/images/s7.jpg';

function Seventhimage() {
    return (
        <div className="seventh">
            <div className="text">
                Her chubby cheeks, like plump peaches divine,
                A cherubic beauty, a love so fine.
                Her laughter echoes, filling the air,
                A chubby girl, a gift beyond compare
            </div>
            <div className="image">
                <img src={s7} alt="" />
            </div>
        </div>
    );
}

export default Seventhimage;