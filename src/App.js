import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import CoinsTopItem from "./layout/parts/coins";
import {Redirect} from 'react-router-dom';


import './assets/css/app.min.css'
import './assets/css/style.min.css'
import './assets/css/core.min.css'
import './assets/general.css'


function App() {
  
  return (
    <>
    <Redirect to="/match" />
    <div className="Header"></div>
    <CoinsTopItem />
    <div className="App">
    <h1>Olá, usuário!</h1>
    <button className="goBattle">JOGAR</button>
    <div className="row" style={{marginTop: {value: '20px', important: true}}}>
      <div className="col-12">
      <div className="flexbox flex-justified">
  <span>      <span className="avatar avatar-lg status-warning"><img src="https://thetheme.io/theadmin/assets/img/avatar/1.jpg"></img></span></span>
  <span className="flex-grow-2"><h2 style={{margin: 'auto',color:'red', fontWeight: '800', fontFamily: 'Poppins'}}>2 — 1</h2></span>
  <span><button className="waitingPlayer">Pendente</button></span>
</div>



      
      
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
