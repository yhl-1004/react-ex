import React, {Component} from 'react'
import * as D from './data'

export default class App extends Component{
  render() {
    const isLoading = false
    const children = isLoading?<p>loading...</p>
      :<ul>
        <li>
          <a href='http://www.google.com'>
            <p>go to Google</p>
          </a>
        </li>
      </ul>
    return(
      <div>{children}</div>
    )
  }
}

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
