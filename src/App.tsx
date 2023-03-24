import React, {Component} from 'react'
import * as D from './data'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'
import KeyComponent from './KeyComponent'
import FileInput from './FileInput'
import ChildrenComponent from './ChildrenComponent'
import FileDrop from './FileDrop'
import {Icon} from './components'
import './App.css'
import Color from './pages/Color'
import DivTest from './pages/DivTest'
import PositionTest from './pages/PositionTest'
import MinMaxTest from './pages/MinMaxWidthHeight'
import AlignTest from './pages/AlignTest'
import UserContainer from './pages/UserContainer'
import CardContainer from './pages/CardContainer'
import ButtonTest from './pages/ButtonTest'
import InputTest from './pages/InputTest'

const App = () => {
  const texts = ['hello', 'world'].map((text, index) => (
    <ChildrenComponent key={index} children={text} />
  ))
  return (
    <ul>
      {/* <ClassComponent href="http://www.google.com" text="go to Google" />
      <ArrowComponent href="http://www.twitter.com" text="go to Twitter" />
      <KeyComponent />
      <div children={texts}></div>
      <FileInput />
      <FileDrop />
      <Icon name="home" className="text-red" /> */}
      {/* <Color /> */}
      {/* <DivTest /> */}
      {/* <PositionTest /> */}
      {/* <MinMaxTest /> */}
      {/* <AlignTest /> */}
      {/* <UserContainer /> */}
      {/* <CardContainer /> */}
      {/* <ButtonTest /> */}
      <InputTest />
    </ul>
  )
}

export default App

// function App() {
//   const children = D.makeArray(10).map((notUesed, index) => (
//     <div key={index}>
//       <p>{D.randomId()}</p>
//       <p>{D.randomName()}</p>
//       <p>{D.randomJobTitle()}</p>
//       <p>{D.randomSentence()}</p>
//       <img src={D.randomAvatar()} width={100} height={100}></img>
//     </div>
//   ))

//   return <div>{children}</div>

// return (
//   <div>
//     <p>
//       {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
//     </p>
//     <img src={D.randomAvatar()} height="50" />
//     <img src={D.randomImage()} height="300" />
//   </div>
// )
// }

// export default App
