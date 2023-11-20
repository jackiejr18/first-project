import { useState } from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {

  const [x,setx] = useState(0);

  const btnClick = () => {
    console.log('clicked');
    setx(x+1); 
    console.log(x); 
  }

  return (
    <div>
      <button onClick={()=>{btnClick()}}>Click Me</button>
      <FirstComponent data={x} fn={setx}/>
    </div>
  )
}

export default App

