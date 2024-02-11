import SignUp from "./components/SignUp"
import { Route, Routes } from "react-router-dom"
import './App.css'
function App() {

  return (
<main>
<Routes>
  <Route path="/" element={<SignUp />} />
</Routes>
</main>
  )
}

export default App
