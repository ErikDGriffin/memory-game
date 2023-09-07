import React, { useState, useEffect } from 'react';
import './App.css';

const allItems = ['Videodrome', 'Blade Runner', 'The Matrix', 'Johnny Mnemonic', 'Strange Days', 'Akira'];

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function MemoryGame() {
  const [items, setItems] = useState(shuffleArray(allItems));
  const [selectedItems, setSelectedItems] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const handleClick = (item) => {
    if (selectedItems.includes(item)) {
      setItems(shuffleArray(allItems));
      setSelectedItems([]);
      setBestScore(Math.max(bestScore, selectedItems.length));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {

    setItems(shuffleArray(allItems));
  }, [selectedItems]);

  return (
    <div className ="memorygame">
      <div className="test-memory-text">Test Your Cyber-Movie Memory</div>
      <div class ="scrolling-text-container">
        <p class="scrolling-text"> test Your Cyber-Movie Memory</p>
      </div>
      <h1>Current Score: {selectedItems.length}</h1>
      <h1>High Score: {bestScore}</h1>
      <div className="item-container">
        {items.map((item) => (
          <div key={item} className="item" onClick={() => handleClick(item)}>
            {item}
          </div>
        ))}
      </div>
      <div className="background-gif">
        <div style={{ backgroundGif: `url('https://i.pinimg.com/originals/e7/fc/a4/e7fca41687df365b3f4906a5942bb468.gif')` }} className="gif-background" />
      </div>
    </div>
  );
}

export default MemoryGame;
