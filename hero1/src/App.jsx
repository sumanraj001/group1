import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeaderComponent from './components/layouts/HeaderComponent'
import FooterComponent from './components/layouts/FooterComponent'
import Routercomponents from './Routercomponents';

function App() {
  // const [count, setCount] = useState(0)
  const [api, setApi] = useState([])

  useEffect(()=>{
    fetch("http://127.0.0.1:3000/student")
    .then((response)=>{
     return response.json();
 
    }).then((data)=>{
     console.log(data)
 }).catch((e)=>{
         console.log("Error",e)

     })
    
 },[])


  return (
    <>
    <div className='container'>
      {/* <HeaderComponent />
      <Routercomponents />
      <FooterComponent /> */}

      <h1>Express lists</h1>
      </div>
    </>
  )
}

export default App
