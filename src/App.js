import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <Mobile name='Samsung a52 pro'></Mobile>
      <Mobile name='Vivo Y53'></Mobile>
      <Blog name='Solim Uddim'></Blog>
      <Blog name='Kolim Uddin'></Blog>
      <Blog name="Abdur Alim Khan"></Blog>
      <Blog name="Solyman Khan"></Blog>
    </div>
  );
}

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

function Mobile(props) {

  return (
    <div className='mobiles'>
      <div className='mobile'>
        <h2>Name:{props.name} </h2>
        <p>Battery Down</p>
      </div>
    </div>
  )
}

export default App;
