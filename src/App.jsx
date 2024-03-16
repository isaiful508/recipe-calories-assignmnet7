
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const [recipes, setRecipes] = useState([]);


  useEffect(()=>{
    fetch("./fakeCartData.json")
    .then(res => res.json())
    .then(data => {
      setRecipes(data);
    })
  },[])

  console.log('alhamdulillah',recipes);




  return (
    <>
      
      
      <Header></Header>

      <Main></Main>
     
    </>
  )
}

export default App
