import React, { Component } from "react";
import { Route, NavLink, BrowserRouter, Routes } from "react-router-dom";
import Home from "./App";
import Contato from "./Contato";
import Login from "./Login";
import logo from "./logo.jpg";

export default function Portfolio() {
    return (
      <BrowserRouter>
        <div>
          <header className="header">
            <li>
              <NavLink exact to="/Home">
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/Portfolio">Portfólio</NavLink>
            </li>
            <li>
              <NavLink to="/Contato">Contato</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
          </header>
          <div className="imagem-contato">          
            <img width='350px' height='230px' alt="Logotipo" src={logo}/>
          </div>
          </div>
          <div className="content">
                  <Routes>
                    <Route exact path="/Home" component={Home} />
                    <Route path="/" component={Portfolio} />
                    <Route path="/Contato" component={Contato}/>
                    <Route path="/Login" component={Login}/>
                  </Routes>
                </div>
        </BrowserRouter>
                  
      
    );
  }