import './components/Counter';
import Counter from './components/Counter';
import { useState, useEffect } from 'react';

function App() {
const [count, setCount] = useState(0);

const onClick = () => {
  setCount(count +1);
}

useEffect(() => console.log(count), [
  count,
]);

  return (
    <div className="App">
        <Counter count={count} onClick={()=>{onClick()}}/>
    </div>
  );
}

export default App;
