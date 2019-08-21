import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Article from './components/Article';
import './assets/css/custom.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Article />
    </div>
  );
}

export default App;
