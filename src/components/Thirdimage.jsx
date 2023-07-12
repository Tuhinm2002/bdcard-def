import React from "react";
import '../assets/styles/App.css';
import s3 from '../assets/images/s3.jpg';

function Thirdimage(){
    return(
        <div className="third">
            <div className="text">
            In her plumpness lies a world of delight,
            A chubby princess, a radiant sight.
            Her tender heart, as soft as marshmallow,
            A chubby girl, a treasure we will never outgrow.
            Like cotton candy, sweet and full of bliss
            </div>
            <div className="image">
                <img src={s3} alt="" />
            </div>
        </div>
    );
}

export default Thirdimage;