import React from 'react';
import Header from '../header';
import StudentsPage from '../students-page';
import './app.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <StudentsPage />
      </main>
    </div>
  );
}

export default App;
