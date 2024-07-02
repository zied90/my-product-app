import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Welcome to My Product App</h1>
    </header>
    <main>
      <ProductList />
    </main>
  </div>
  );
}

export default App;
