import React from 'react';
import ErrorBoundary from '../error-boundary';
import Header from '../header';
import StudentsPage from '../students-page';
import './app.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <ErrorBoundary>
          <StudentsPage />
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
