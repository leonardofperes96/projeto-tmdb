
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'
import {useState,useEffect} from 'react'
import './index.css'




const App =()=>{
 const [modal,setModal] = useState(false)
  return (
    <div className="App">
     <Navbar /> 
     <button className="main-button"onClick={()=>setModal(!modal)}>Clique aqui para liberar o Conteudo do IMDB</button>
   {  modal && <Outlet />}
     
    </div>
  )
}

export default App
