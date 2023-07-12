import React from "react";
import '../assets/styles/App.css';
import s5 from '../assets/images/s5.jpg';

function Fifthimage() {
    return (
        <div className="fifth">
            <div className="text">
                She waddles with grace, a delightful ball,
                A chubby angel, captivating all.
                Her infectious smile, a radiant sunbeam,
                A chubby girl, the epitome of a dream
            </div>
            <div className="image">
                <img src={s5} alt="" />
            </div>
        </div>
    );
}

export default Fifthimage;