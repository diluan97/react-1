import React from 'react'
// import users from'./user.json'
// import Admin from './Admin'
import Counter from './Counter'
// function getFullName(firstName , lastName){
//   return firstName + ' ' + lastName
// }

// const App = () => {
//   const firstName = "Luân"
//   const lastName = "Dương"

//   const style = {
//     backgroundColor: 'cyan',
//     padding : 8 + 8,
//   }

//   const css = {
//     color:'red',
//     fontFamily: 'Antiqua',
//     fontSize: '50px',

//   }
//   const elements = <div style={style}> Hello {getFullName(firstName , lastName)}</div>
//   const welcome = <div > Welcome message : <strong style={css}>{elements}</strong></div>

//   return welcome;
// }
// const users = [
//   {
//     first: "Lee Chong",
//     last: "Wei",
//     email: "aaaa@gmail.com"
//   },
//   {
//     first: "Lin",
//     last: "Dan",
//     email: "aaaa@gmail.com"
//   },
//   {
//     first: "Suka",
//     last: "San",
//     email: "aaaa@gmail.com"
//   },
//   {
//     first: "Viktor",
//     last: "Anzecsen",
//   }

// ]
// function User(props){
//   const user =props.user
//   const elements = (<div style={{ fontSize: '20px' }}>
//     {getFullName(user.first, user.last)}
//     <div>
//       <p style={{ color: 'brown',
//                   fontStyle: user.email ? 'arial' : 'italic'
//                 }}>
//                 { user.email || 'Không có email' }</p>
//     </div>
//   </div>)

//   return elements;
// // }
class App extends React.Component {
  state = { showCounter: true, deltaState: 1 }
  hanhdleToggleCounter = () => this.setState({ showCounter: !this.state.showCounter })
  render() {
    return (
      <div>
        {this.state.showCounter ? (
          <Counter name="Counter 1" initialDelta={this.state.deltaState} initialAutoIncrease={false} />
        ) : null}
        {this.state.showCounter ? (
          <Counter name="Counter 2" initialDelta={this.state.deltaState} initialAutoIncrease={true} />
        ) : null}
        <button onClick={this.hanhdleToggleCounter}>
          {this.state.showCounter ? 'Hiddle' : 'Show'} Counter
        </button>
      </div>
    )
  }
}
export default App
