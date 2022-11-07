import { useState } from 'react';
import './App.css';
import BoxWithLabel from './components/BoxWithLabel';
import StatBox from './components/StatBox';

function App() {

  const [ health, setHealth ] = useState([false, false, false, false, false, false, false])
  const [ showMessage, setShowMessage ] = useState(true)

  function incHealth() {
    const old = [...health]
    old.push(false)

    setHealth(old)
  }

  function decHealth() {
    const old = [...health]
    old.pop()

    setHealth(old)
  }

  return (
    <div className="App">
      <div className="page">

        <div className='row-flex'>
          <div className='flex' style={{flex: '4'}} >
            <BoxWithLabel name="Name" label='Name' />
          </div>
          <div className='flex' style={{flex: '1'}}>
            <BoxWithLabel name="Race" label='Race' />
          </div>
          <div className='flex' style={{flex: '1'}}>
            <BoxWithLabel name="Level" label="Level" />
          </div>
        </div>

        <br />
        <div style={{display: 'flex', width: '100%'}}>
            <div id="stat-block">
              <div className='row-flex'>
                  <div style={{paddingRight: '16px'}} >
                    <StatBox value={0} name="Dexterity" />
                    <StatBox value={1} name="Might" />
                    <StatBox value={-1} name="Strength" />
                  </div>
                  <div>
                    <StatBox value={0} name="Mind" />
                    <StatBox value={1} name="Spirit" />
                    <StatBox value={-1} name="X-Factor" />
                  </div>
              </div>
              <div className='row-flex' >
                <div style={{paddingRight: '16px'}}>
                  <StatBox value={1} name="Speed" double />
                </div>
              </div>
            </div>

            <div style={{width: '6in', flexDirection: 'column'}}>
              <div id="health-box">
                <h4>Health</h4>
                <div id='health-markers'>
                  <button onClick={decHealth} >-</button>
                  { health.map(() => (
                    <span />
                    ) 
                  )}
                  <button onClick={incHealth} >+</button>
                </div>
              </div>
              <div>
                <h4 style={{padding: '16px 0 0px 4px', textAlign: 'left'}}>Notes</h4>
                <textarea></textarea>
              </div>
            </div>

        </div>
        <div style={{display: 'flex', width: '100%'}} >
          <div style={{width: '4.25in'}}>
            <h4>Background</h4>
            <textarea style={{height: '1.7in'}} ></textarea>

            <h4 style={{paddingTop: '12px'}}>Motivations</h4>
            <textarea style={{height: '.85in'}} ></textarea>

            <h4 style={{paddingTop: '12px'}}>Flaws</h4>
            <textarea style={{height: '.9in'}} ></textarea>
          </div>
          <div style={{width: '24px'}} ></div>
          <div style={{width: '4.25in'}}>
            <h4>Inventory</h4>
            <textarea style={{height: '4.45in'}}></textarea>
          </div>
        </div>
      </div>
      { showMessage && <div id="print-message">
        <div>
        This page is meant to be printed, so when you are done updating your sheet, on Windows hit Ctrl + P, or CMD + P on Mac, and print it out.
        </div>
        <button style={{ width: '100%'}} onClick={() => setShowMessage(false)} >Got it</button>
      </div>}
    </div>
  );
}

export default App;
