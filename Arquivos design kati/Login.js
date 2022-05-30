import React, { Component } from "react";
import { Route, NavLink, BrowserRouter, Routes } from "react-router-dom";
import Home from "./App";
import Contato from "./Contato";
import Portfolio from "./Portfolio";
import logo from "./logo.jpg";

export default function Login() {
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
              <NavLink to="/">Login</NavLink>
            </li>
          </header>
          <div className="imagem-contato">          
            <img width='350px' height='230px' alt="Logotipo" src={logo}/>
          </div>


    <form class="formulario" method="post"> 
        <p>Login:</p>
        <div class="field">
            <label for="nome">Seu E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Digite o e-mail" />
        </div>
        <div class="field">
        <label for="senha">Sua Senha:</label>
            <input type="password" id="senha" name="senha" placeholder="Digite a senha" />
        </div>        
        <input type="submit" name="acao" value="Logar"/>
      <b className="sobre" >Obs:. A opção de login é destinada somente para uso dos administradores.</b>
    </form>

          <div className="content">
                  <Routes>
                    <Route exact path="/Home" component={Home} />
                    <Route path="/Portfolio" component={Portfolio} />
                    <Route path="/Contato" component={Contato}/>
                    <Route path="/" component={Login}/>
                  </Routes>
                </div>
                </div>
        </BrowserRouter>
                  
      
    );
  }