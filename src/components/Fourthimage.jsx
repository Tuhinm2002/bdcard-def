import React from "react";
import '../assets/styles/App.css';
import s4 from '../assets/images/s4.jpg';

function Fourthimage() {
    return (
        <div className="fourth">
            <div className="image">
                <img src={s4} alt="" />
            </div>
            <div className="text">
                Like cotton candy, sweet and full of bliss,
                A chubby girl, a sprinkle of happiness.
                Her twinkling eyes, like stars in the night,
                A bundle of joy, a chubby delight.

                She waddles with grace, a delightful ball
            </div>
        </div>
    );
}

export default Fourthimage;