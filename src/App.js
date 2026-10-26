import React from 'react';
import FetchPosts from './FetchPosts';
import AxiosUsers from './AxiosUsers';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>TP – Consommer une API avec React</h1>
      
      <section>
        <h2>Articles (Fetch)</h2>
        <FetchPosts />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Utilisateurs (Axios)</h2>
        <AxiosUsers />
      </section>
    </div>
  );
}

export default App;