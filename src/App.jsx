import './App.css'
import Home from './component/Home'
import About from './component/About'
import AboutClass from './component/AboutClass'
import LifeCycle from './component/LifeCycle'
function App() {
  return (
    <>
    <Home />
    <br></br>
    <About name="Nithin" work="lol" />
    <br></br>
    <AboutClass name="Nithin" work="SOC" />
    <br></br>
    <LifeCycle name="Mount Lifecycle" />
    </>
  )
}
export default App