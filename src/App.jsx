import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const actors=['shakib','Riaz','Rubel','bappa raj']

  const singers=[
    {id:1 ,name: 'Dr.Mahfuzur Rahman', age: 65},
    {id:2, name: 'Eva Rahman', age: 45},
    {id:3, name: 'Shuvro Deb', age: 55},
    {id:4, name: 'Pritom Hasan', age: 25},
  ]


  const books=[
    {id:1 ,name: 'Physics', price:200},
    {id:2, name: 'Math', price: 200},
    {id:3, name: 'Chemistry', price:180},
    {id:4, name: 'Biology', price:150},
  ]
  
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {
        singers.map(singer=> <Singer singer={singer}></Singer>)
      }


      <Actor name="Joshim"></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }


      {/* <Todo task="learn react" 
      isDone={true}></Todo>
      <Todo task="learn core concept" isDone={false}></Todo>
      <Todo task="learn Jsx" 
      isDone={true}></Todo> */}

      {/* <Device name="Laptop" price="55k"></Device>
      <Device name="Mobile" price="20k"></Device>
      <Person></Person>
      <Person></Person>
      <Student grade="7" score="95"></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
      <Developer></Developer>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  console.log(props);
  return <h2>This device is {props.name} Price is {props.price}</h2>
  
}

function Person(){
  const age=25
  const person={name: 'sakib',age:20}
  return <h3>I am {person.name} with age {age}</h3>
}

//const {grade,score}={grade: '7', score: '95'}

function Student({grade=1,score=0}){
  console.log(grade,score);
  
  return(
    <div className='Students'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score : {score}</p>
    </div>
  )
}

function Developer(){
const DeveloperStyle={
  margin: "20px",
  padding: "20px",
  border: "2px solid purple",
  borderRadius:"20px"
}

  return (
    <div style={DeveloperStyle}>
        <h3>Devo devo</h3>
        <p>codding: </p>
    </div>
  )
}

export default App
