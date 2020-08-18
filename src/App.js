import React, { useState } from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';
import { ReactQueryDevtools } from 'react-query-devtools';

function App() {
  const [page, setPage] = useState('planets')

  return (
    <>
    <div className="App">
      <h1>StarWar Info</h1>
      <Navbar
        setPage={setPage} />
      <div className="content">
        {page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
    
     <ReactQueryDevtools initialsIsOpen={false} />
    </> 
  );
}

export default App;
