import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  const props = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip)
    })

  return (
    <div className="App">
      return <animated.div style={props}><h1 style={{padding: '15px', fontSize: '50px', color: 'gray'}}>Wellcome To My React-reChart Website</h1></animated.div>
      <MyLineChart />
      <SpecialChart />
    </div>
  );
}

export default App;
