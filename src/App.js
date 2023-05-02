'use strict';
import React from 'react';
import './data.json';
const App = () => {
  return (
    <>
    {data.map(({userId, title, body}) => <Cat key={userId} title={title} body={body}/>
    )}
    
    </>
  );
}

export default App;