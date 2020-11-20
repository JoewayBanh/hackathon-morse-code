import './App.css';
import React, { useState } from 'react';
import Input_output from './components/input-output';
import ButtonLogic from './components/ButtonLogic'
import MorseContext from './context/MorseContext'


const App = () => {

  const letters = [
    ["a", ".-", 0], ["b", "-...", 1], ["c", "-.-.", 2], ["d", "-..", 3],
    ["e", ".", 4], ["f", "..-.", 5], ["g", "--.", 6], ["h", "....", 7],
    ["i", "..", 8], ["j", ".---", 9], ["k", "-.-", 10], ["l", ".-..", 11],
    ["m", "--", 12], ["n", "-.", 13], ["o", "---", 14], ["p", ".--.", 15],
    ["q", "--.-", 16], ["r", ".-.", 17], ["s", "...", 18], ["t", "-", 19],
    ["u", "..-", 20], ["v", "...-", 21], ["w", ".--", 22], ["x", "-..-", 23],
    ["y", "-.--", 24], ["z", "--..", 25], ["1", ".----", 26], ["2", "..---", 27],
    ["3", "...--", 28], ["4", "....-", 29], ["5", ".....", 30], ["6", "-....", 31],
    ["7", "--...", 32], ["8", "---..", 33], ["9", "----.", 34], ["0", "-----", 35],
    ["Space", "/", 36], ["Separate letters", "\\", 37]
  ]

  const [morseCode, setMorseCode] = useState('')
  const [textCode, setTextCode] = useState('')

  return (
    <div className="App">


      <MorseContext.Provider value={{ letters, morseCode, setMorseCode, textCode, setTextCode }}>
        <Input_output />
        <ButtonLogic />
      </MorseContext.Provider>

    </div>
  );
}

export default App;
