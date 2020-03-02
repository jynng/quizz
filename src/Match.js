import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import "./assets/fonts/Mikado.css";
export default function Match(){
    const [myPoints, setMyPoints] = useState(0);
    const [answerTime, Time] = useState(10);
    const [startD, DateS] = useState(new Date());
    
    function answer(e){
      /*  var sent = new Date();
        Time(Math.ceil(Math.abs(sent - startD) / 100));*/

        var t1 = new Date();
        var t2 = startD;
        var dif = t1.getTime() - t2.getTime();

        var Seconds_from_T1_to_T2 = dif / 1000;
        var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
       /// alert(Seconds_Between_Dates.toFixed(1));
        Time(Seconds_Between_Dates.toFixed(1))

        
        e.currentTarget.classList.add("correct");
        if(Seconds_Between_Dates <= 10){
        setMyPoints(myPoints+ Math.floor(4000 * ((10 - Seconds_Between_Dates)/10)), ()=>{console.log(myPoints)});
        alert(answerTime);
        } else {
            alert("Você não marcou pontos!")
        }

    }


   
    return (
        <>
        <div className="Players flexbox">
            <div className='versus'>
                vs
            </div>
            <div className="Player me">
                <div className="playerInfo">
            <span className="avatar avatar-xl status-warning"><img src="data:image/jpeg;base64,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" alt=""></img></span>
            <p className="me_name">Gabriel Albuquerque</p>

                </div>
            <h3 className="points">{myPoints}</h3>
            </div>
            <div className="Player enemy">
            <div className="playerInfo">
            <span className="avatar avatar-xl status-warning"><img src="data:image/jpeg;base64,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" alt=""></img></span>
            <p className="me_name">Gabriel Albuquerque</p>

                </div>
            <h3 className="points">48000</h3>
            </div>
        </div>
        <div className="qv"></div>
        <div className="Question withImage" style={{background: 'url(https://blog.emania.com.br/wp-content/uploads/2017/06/Albert-Einstein-principal.jpg)'}}>
            
            <h6>Quem é ele?</h6>
        </div>
        <div className="Alternatives">
            <button className="Alternative" onClick={(e) => answer(e)}>
                <h6 className="Alternative">Albert Einstein</h6>
            </button>
            <button className="Alternative" onClick={(e) => e.currentTarget.classList.add("wrong")}>
                <h6 className="Alternative">Cristiano Ronaldo</h6>
            </button>
            <button className="Alternative" onClick={(e) => e.currentTarget.classList.add("wrong")}>
                <h6 className="Alternative">Ronaldinho</h6>
            </button>
            <button className="Alternative" onClick={(e) => e.currentTarget.classList.add("wrong")}>
                <h6 className="Alternative">Kaká</h6>
            </button>

        </div>
        </>
    )
} 