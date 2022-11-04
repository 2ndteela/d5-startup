import './App.css';
import BoxWithLabel from './components/BoxWithLabel';
import StatBox from './components/StatBox';

function App() {
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
              <StatBox value={1} name="Speed" />
            </div>
            <StatBox value={-1} name="X-Factor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
