import './components/Counter';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
const [count, setCount] = useState(0);

const onClick = () => {
  setCount(count+1);
}

  return (
    <div className="App">
        <Counter count={count} onClick={()=>{onClick()}}/>
    </div>
  );
}

export default App;
