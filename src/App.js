
import './App.css';
import './footer.css';
import React from 'react';
import Profile  from './profile.js';
import Container from './container.js';
import Menu  from './menu.js';
import Footer from './footer.js';



function App() {
  return (
    <div className="body" id='body'>
    <h1>PORTFOLIO</h1>
    <div className="Portfolio">
      <Profile />
      <Container />
      <Menu />
    </div>
    <a href='#body'><i className='icon-arrow-up-circle'></i></a>
    <div><Footer/></div>
  </div>
  );
}

export default App;
