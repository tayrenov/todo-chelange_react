import { useState } from 'react';

import Header from './components/Header';
import TodoForm from './components/TodoForm';

import logo from './logo.svg';
import './App.css';

function App() {
  const [darkMode, setMode] = useState(true)

  function switchMode() {
    setMode(!darkMode);
  }
  
  return (
    <div className="todo">
        <Header darkMode={darkMode} switchMode={switchMode}/>
        <main className={darkMode ? 'dark-theme' : 'light-theme'}>
          <TodoForm />
        </main>
    </div>
  );
}

export default App;
