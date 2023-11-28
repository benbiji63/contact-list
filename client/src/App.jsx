import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  async function getData() {
    await axios
      .get('http://localhost:3001/api')
      .then(data => console.log(data));
  }
  getData();
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
