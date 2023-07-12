import React from "react";
import '../assets/styles/App.css';
import s1 from '../assets/images/s1.jpg';

function Firstimage(){
    return(
    <div className="first">
        <div className="text">
        In dimples deep, her laughter dances free,
        A chubby cherub, filled with purest glee.
        Her rosy cheeks, a canvas for delight,
        A precious sight, forever to ignite.
        This chubby girl, a joyous sunbeam bright.
        </div>
        <div className="image">
            <img src={s1} alt="" />
        </div>
    </div>
    );
}

export default Firstimage;