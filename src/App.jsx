import React, { useEffect } from 'react';
// import styles from './App.module.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:8080/answer')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return <div>App</div>;
}

export default App;
