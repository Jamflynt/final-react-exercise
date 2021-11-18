// 6a
import {useState} from 'react';

// 2a
import MCUShows from "./mcu-shows/MCUShows";
const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
 };

// 6b
const mcuCharacters = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye'
 ];

function App() {

  // 6c
  const [index, setIndex] = useState(0);
  // 7a
  const [num, setNum] = useState(0);

  // 6f
  function newIndex(){
      const randomIndex = Math.floor(Math.random()*mcuCharacters.length);
      setIndex(randomIndex);
  }

  function newNum(){
    const nextNum = num + 1;
    setNum(nextNum);
}

  return (
    <div>
      {/* 2b */}
      <h1>Final React Exercise</h1>
      {/* 2c and 5b and 6f*/}
      <MCUShows dates={releaseDates} index2={newIndex} num2={newNum}/>
      {/* 6d */}
      <h1>Random MCU Character: {mcuCharacters[index]}</h1>
      {/* 7b */}
      <h1>Next MCU Character: {mcuCharacters[num]}</h1>
    </div>
  );
}

export default App;
