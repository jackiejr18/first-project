const App = () => {
  let x = 'JackieJr18';
  let array = ['user1', 'user2', 'user3', 'user4', 'user5'];
  return (
    <div>
      {x}
      {array.map((user)=>{return <h2>{user}</h2>})}
    </div>
  )
}

export default App

