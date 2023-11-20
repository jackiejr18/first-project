const App = () => {
  const btnClick = () => {
    console.log('clicked');
  }

  return (
    <div>
      <button onClick={()=>{btnClick()}}>Click Me</button>
    </div>
  )
}

export default App

