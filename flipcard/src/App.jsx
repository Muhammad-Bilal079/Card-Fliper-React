import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  let obj = {
    one : "What language is React based on ?",
    two : "What are the building block of React app ?",
    three : "How to pass data from parent to child components ?",
    four : " How to gives components memory ?",
    five : "What is the name of syntax we usse to descripe a UI in reat ?" ,
    six : "Which year does the React launched ?",
    ans1 : 'React is based on JavaScript.',
    ans2 : "The building blocks of a React app include components, JSX, props, state, virtual DOM, lifecycle methods, and event handling",
    ans3 : "In React, you can pass data from a parent component to a child component by using props.",
    ans4 :"To give components memory, you can utilize React's state mechanism. ",
    ans5 : "The syntax used to describe UI in React is called JSX ",
    ans6 :"React was launched by Facebook in 2013."
  }

  return (
    <>
    <h1>Card Flipper in React </h1>
 <div style={{
  height:'100%',
  width:'80%',
  display: 'flex',
 flexWrap: 'wrap',
 margin: '0 auto',
 gap:'20px',
padding:'20px',
 
 }}>
 <Card qes={obj.one} ans={obj.ans1}/>
 <Card  qes={obj.two}  ans={obj.ans2}/>
 <Card  qes={obj.three}  ans={obj.ans3}/>
 <Card  qes={obj.four}  ans={obj.ans4}/>
 <Card  qes={obj.five}  ans={obj.ans5}/>
 <Card  qes={obj.six}  ans={obj.ans6}/>

 </div>
 </>
  )
}

export default App



