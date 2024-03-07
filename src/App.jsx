import Home from "./components/Home"
import { Button } from "./components/ui/button"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
