
import { Suspense } from 'react'
import './App.css'

import Issuemgt from './Components/Issuemgt'
import Navbar from './Components/Navbar'
import Loading from './Components/Loading'

const phPromise=fetch('Ph.json')
.then(res=>res.json())

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Suspense fallback={<Loading></Loading>}>
        <Issuemgt phPromise={phPromise}></Issuemgt>

    </Suspense>

    
      
    </>
  )
}

export default App
