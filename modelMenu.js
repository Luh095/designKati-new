import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {Menubar} from 'primereact/menubar';

class App extends Component {
  render() {
    const menuitems = [
      {
         label:'Home',
         icon:'pi pi-fw pi-home'
      },
      {
         label:'Sobre',
         icon:'pi pi-fw pi-user',
      },
      {
         label:'Contato',
         icon:'pi pi-fw pi-comment'
      }
   ];
    return (
      <div className="App">
        <Menubar model={menuitems}/>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;