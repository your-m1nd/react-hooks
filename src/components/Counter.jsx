import '../components/Counter.css';


const Counter = (props) => {
  const {count, onClick} = props;

    return (
    <button onClick={()=>{onClick()}}>Кнопка нажата <span>{count}</span> раз</button>
    )
}

export default Counter;

