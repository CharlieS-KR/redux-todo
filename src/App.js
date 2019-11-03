import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainHeader from './components/MainHeader';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <TodoContainer />
    </div>
  );
}

export default App;
