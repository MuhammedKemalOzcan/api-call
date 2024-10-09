import getImages from './Api'
import './App.css'
import Display from './Display';
import SearchHeader from './SearchHeader'
import { useState } from 'react';


function App() {
  
  const[images,setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await getImages(term);
    setImages(result);
  }

  return (
    <div className='app'>
      <SearchHeader onSubmit={handleSubmit} />
      <Display imageHolder = {images} />
    </div>
  )
}

export default App
