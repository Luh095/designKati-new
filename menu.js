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
    return (
      <div className="App">
        <Menubar/>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;