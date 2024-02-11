import SignUp from "./components/SignUp"
import { Route, Routes } from "react-router-dom"
import './App.css'
import { Activation } from "./components/Activation"
import { ZipCode } from "./components/ZipCode"
import FirstNameForm from "./components/FirstNameForm"
import PointsList from "./components/PointsList"
function App() {

  return (
<main>
<Routes>
  <Route path="/" element={<SignUp />} />
  <Route path="/activation" element={<Activation />} />
  <Route path="/zipcode" element={<ZipCode />} />
  <Route path="/first-name" element={<FirstNameForm />} />
  <Route path="/points" element={<PointsList/>}/>
</Routes>
</main>
  )
}

export default App
