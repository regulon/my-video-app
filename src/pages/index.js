import React, { useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import Button from '../components/Button';
import Input from '../components/Input';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    alert('Botón clickeado!');
  };

  return (
    <div>
      <VideoPlayer />
      <Button label="Haz clic" onClick={handleButtonClick} />
      <Input label="Ingresa algo" onChange={handleInputChange} value={inputValue} />
    </div>
  );
};

export default HomePage;
