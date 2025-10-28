import './App.css';
import mocha from './img/mocha-bear-hearts.gif';
import sadMocha from './img/sad-mocha.gif';
import huggingBears from './img/hugging-bears.gif';
import { useState } from 'react';

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Give it another thought!",
  "Bb please?",
  "Pretty please?",
  "Have a heart!",
  "Don't be so cold..",
  "You're breaking my heart.. 💔"
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesBtnSize = noCount * 20 + 14;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoBtnTxt() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="App">
      {
        yesPressed ? (
          <>
          {/* https://tenor.com/en-SG/view/milk-and-mocha-gif-24469057 */}
            <img src={huggingBears} alt='cute bears hugging' width={200}></img>
            <div className='txtDiv'>Yayyy!!!</div>
          </>
        ) : (
          noCount < phrases.length - 1 ? (
            <>
              {/* https://tenor.com/en-SG/view/mocha-bear-hearts-mocha-and-milk-bears-milk-mocha-bear-gif-love-gif-7355347396987361923 */}
              <img src={mocha} alt='mocha bear' width={200}></img>
              <div className='txtDiv'>Will you go out with me?</div>
              <div className='btnDiv'>
                <button className='yesBtn' style={{fontSize: yesBtnSize}} onClick={() => setYesPressed(true)}>Yes</button>
                <button className='noBtn' onClick={handleNoClick}>{getNoBtnTxt()}</button>
              </div>
            </>
          ) : (
            <>
              {/* https://tenor.com/en-SG/view/milk-and-mocha-mocha-cry-tears-emotional-gif-17794581 */}
              <img src={sadMocha} alt='sad mocha bear' height={160}></img>
              <div className='txtDiv'>Will you go out with me?</div>
              <div className='btnDiv'>
                <button className='yesBtn' style={{fontSize: Math.min(yesBtnSize, 9 * 20 + 10)}} onClick={() => setYesPressed(true)}>Yes</button>
                <button className='noBtn shadowed-text' onClick={handleNoClick}>{getNoBtnTxt()}</button>
              </div>
            </>
          )
        )
      }
    </div>
  );
}

export default App;
