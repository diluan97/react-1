import React from 'react'

// function getFullName(firstName , lastName){
//   return firstName + ' ' + lastName
// }
const getFullName = (firstName, lastName) =>{
  return firstName + ' ' + lastName
}
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
const users = [
  {
    first: "Lee Chong",
    last: "Wei",
    email: "aaaa@gmail.com"
  },
  {
    first: "Lin",
    last: "Dan",
    email: "aaaa@gmail.com"
  },
  {
    first: "Suka",
    last: "San",
    email: "aaaa@gmail.com"
  },
  {
    first: "Viktor",
    last: "Anzecsen",
  }

]
function User(props){
  const user =props.user
  const elements = (<div style={{ fontSize: '20px' }}>
    {getFullName(user.first, user.last)}
    <div>
      <p style={{ color: 'brown',
                  fontStyle: user.email ? 'arial' : 'italic'
                }}>
                { user.email || 'Không có email' }</p>
    </div>
  </div>)
  
  return elements;
}
function App(){
  const element = users.map(user =>{
    return <User
          user={user}
          />
  })
  return element
}
export default App;

