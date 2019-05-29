import React from 'react';
import './App.css';
import StudentsList from './components/studentsList';
import firestore from "./firestore";  

function App() {
  return (
    <div>
      <StudentsList />
    </div>
  );
}

export default App;
