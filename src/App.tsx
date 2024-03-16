
import './App.css'
import { Excalidraw  } from "@excalidraw/excalidraw";
import { Button  } from 'antd';


function App() {

  return (
    <>
      <div id="board" >
        <Excalidraw />
        <Button/>
      </div>
    </>
  )
}

export default App
