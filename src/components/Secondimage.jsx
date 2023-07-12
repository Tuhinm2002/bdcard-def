import React from "react";
import '../assets/styles/App.css';
import s2 from '../assets/images/s2.jpg';

function Secondimage(){
    return(
        <div className="second">
            <div className="image">
                <img src={s2} alt="" />
            </div>
            <div className="text">
            With every giggle, the world finds its cheer,
            A chubby darling, spreading love far and near.
            Her cuddly embrace, a comforting delight,
            A chubby girl, a beacon of pure delight.

            In her plumpness lies a world of delight,
            </div>
        </div>
    );
}

export default Secondimage;