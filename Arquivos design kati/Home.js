import React, { Component } from "react";
import { Route, NavLink, BrowserRouter, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import Contato from "./Contato";
import Login from "./Login";
import logo from "./logo.jpg";
import arcane from "./arcane.jpg";
import universidade from "./universidade.jpg";
import danca from "./danca.jpg";
import diploma from "./diploma.jpg";
import video from "./video.jpg";

export default function Home() {
    return (
      <BrowserRouter>
        <div>
          <header className="header">
            <li>
              <NavLink exact to="/">
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
          <div className="imagem">
            <img alt="Logotipo" src={logo}/>
          </div>
          
          
          <ul className="titulos">
            Uma história repleta de determinação</ul>
          <div class="container-image-text">
            <img src={arcane} alt="Biografia" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget 
              tortor dolor. Maecenas molestie, quam quis maximus mollis, magna est fermentum felis, sed finibus justo ligula vel augue. Phasellus et est lacus. Aliquam non pellentesque ante, at elementum nisi. Vivamus dictum mauris nec efficitur laoreet. Quisque ex tellus, lobortis sed dapibus eget, viverra aliquam ligula. Proin aliquam luctus lectus eget ultricies. Morbi dignissim nisl eros, ut aliquet felis sollicitudin in. Ut ornare, felis sit amet suscipit cursus, erat urna porttitor lectus, quis faucibus felis metus at erat. Proin vel nulla et nulla scelerisque vestibulum.
          </p></div>
          
          
          <ul className="titulos2">
            Colecionando experiências pelo caminho</ul>
            <div class="container-image-text2">
            <img src={universidade} alt="Biografia" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <img src={danca} alt="Biografia" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p></div>
          <div class="container-image-text3">
            <img src={diploma} alt="Biografia" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p></div>
          
          
          <ul className="titulos">
            A dança como motivação</ul>
            <div class="container-text-video">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque eget tortor dolor. Maecenas molestie, quam quis maximus mollis, 
              </p>
              <img src={video} alt="Biografia" />
            </div>
          
          
          <div className="content">
            <Routes>
              <Route exact path="/" component={Home} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/Contato" component={Contato}/>
              <Route path="/Login" component={Login}/>
            </Routes>
          </div>
          <footer className="footer">
            <div className="footer__social">
            <p>Local de aulas:</p>
            <p>Possui alguma dúvida?</p>
            </div>
            <div className="footer__social2">
            <p>Rua xxxxxxxx, xxxx - Canoas - RS</p>
            <p>E-mail: xxxxx@xxxx.com</p>
            </div>
            <p className="footer__copyright">Katiane Ionara Peres Soares</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }