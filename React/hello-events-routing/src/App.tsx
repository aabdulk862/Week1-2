import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Calculation } from './Components/CalculationComponent/Calculation'

function App() {

  return (
    <>
      <h3>Welcome to the Events/Routing Demo</h3>
      <h4>Nothing much on the homepage... navigate to different URL endpoints to see our different components</h4>

      <BrowserRouter>
        <Routes>
          <Route path="/calc" element={<Calculation/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
