import './App.css'
//who needs styling ?
// add comment to test testing branch
import Home from './component/Home'
import About from './component/About'
import AboutClass from './component/AboutClass'
import LifeCycle from './component/LifeCycle'
import RenderingComponent from './component/RenderingComponent'
import DesignComponent from './component/DesignComponent'
export default function App() {
  return (
    <>
    <Home />
    <br></br>
    <About name="Nithin" work="SOC" />
    <br></br>
    <AboutClass name="Sanjay" work="Pentest" />
    <br></br>
    <LifeCycle name="Mount Lifecycle" />
    <br></br>
    <RenderingComponent />
    <br></br>
    <DesignComponent />
    </>
  )
}