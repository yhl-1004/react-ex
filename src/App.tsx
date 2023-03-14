import * as D from './data'

function App() {
  const children = D.makeArray(10).map((notUesed, index) => (
    <div key={index}>
      <p>{D.randomId()}</p>
      <p>{D.randomName()}</p>
      <p>{D.randomJobTitle()}</p>
      <p>{D.randomSentence()}</p>
      <img src={D.randomAvatar()} width={100} height={100}></img>
    </div>
  ))

  return <div>{children}</div>

  // return (
  //   <div>
  //     <p>
  //       {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
  //     </p>
  //     <img src={D.randomAvatar()} height="50" />
  //     <img src={D.randomImage()} height="300" />
  //   </div>
  // )
}

export default App
