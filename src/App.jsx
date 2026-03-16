
import { Suspense } from 'react'
import './App.css'
import Countrys from './compnent/countrys/Countrys'

const countryfetch=fetch("https://openapi.programming-hero.com/api/all")
.then(res =>res.json())

function App() {
  

  return (
    <>
      
        <Suspense fallback={<p>nadir vi go</p>}>
          <Countrys countryfetch={countryfetch}></Countrys>
        </Suspense>
     

   

    

      
    </>
  )
}

export default App
