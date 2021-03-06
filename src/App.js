import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/react';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Todos></Todos>
      <Mobile name='Samsung a52 pro'></Mobile>
      <Mobile name='Vivo Y53'></Mobile>
      <Blog name='Solim Uddim'></Blog>
      <Blog name='Kolim Uddin'></Blog>
      <Blog name="Abdur Alim Khan"></Blog>
      <Blog name="Solyman Khan"></Blog>
    </div>
  );
}

// todos component 
function Todos() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])
  return (
    <div>
      <h1 style={{ textTransform: 'uppercase', backgroundColor: 'gray', padding: '10px', borderRadius: '10px', color: '#fff' }}>Todos: {todos.length}</h1>
      <div className='todos'>
        {
          todos.map(todo => {
            return <Todo userId={todo.userId} title={todo.title} completed={todo.completed}></Todo>
          })
        }
      </div>
    </div>
  )
}

function Todo(props) {
  console.log(props)
  const { userId, title, completed } = props;
  return (
    <div className='todo'>
      <h2>User Id: {userId}</h2>
      <h3>Title: {title}</h3>
      <p>Completed: {completed}</p>
    </div>
  )
}

// Mobile component 
function Mobile(props) {
  const [bettery, setBettery] = useState(100)
  const batteryDown = () => {
    const betteryPower = bettery - 1;
    if (betteryPower >= 0) {
      setBettery(betteryPower)
    } else if (betteryPower < 0) {
      alert('Switch Off')
    }

  }
  return (
    <div className='mobile'>
      <h2>Name:{props.name} </h2>
      <p>Battery: {bettery}%</p>
      <button onClick={batteryDown}>Battery Down</button>
    </div>
  )
}


// blog component 
function Blog(props) {
  return (
    <article className='blogs'>
      <div className='blog'>
        <h1 style={{ fontSize: 'bold', textTransform: 'uppercase' }}>Athor Name: {props.name} </h1>
        <p style={{ color: 'blue', fontSize: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat consequuntur beatae distinctio sunt cumque quis dolor placeat esse doloremque laborum similique molestiae necessitatibus itaque animi ipsa eveniet dolore in exercitationem magni, nemo provident praesentium eos saepe? Numquam, cum quam quis consequuntur ad deleniti impedit delectus quos ducimus magni maiores et?</p>
      </div>
    </article>
  )
}


export default App;
