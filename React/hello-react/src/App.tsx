import './App.css'
import { FirstComponent } from './Components/FirstComponent'

/* The App.tsx is the root of our app (at least when it comes to rendering views on the page) 

Most of the code we write will go elsewhere in the src folder, but the App.tsx controls WHAT gets rendered

We'll put the components we want to render in the return() */

function App() {

  return (
    <>
      <h2>Hello React! We'll make great modern UIs with you :)</h2>

      <p>We are writing in TSX, which is like HTML for React Typescript</p>

      <h3>React will reload the app with every saved change to the source code</h3>

      {/* This is a comment in TSX. Some custom components below: */}

      <FirstComponent/>
 
    </>
  )
}

export default App
