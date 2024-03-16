
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

import Recipes from './components/Recipes';
import CookisCart from './components/Main/CookisCart';
import Main from './components/Main/Main';

function App() {
  //recipe state
  const [recipes, setRecipes] = useState([]);


  //cook staate

  const [cook, setCook] =useState([])

//recipe data fetch
  useEffect(() => {
    fetch("./fakeCartData.json")
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
      })
  }, [])

  
//cook btn habndler

const handleCookBtn = (p) =>{
  const isExist = cook.find((pd) => pd.recipe_id == p.recipe_id);
  if(!isExist){
    setCook([...cook, p])
  }
  else{
    alert("Already in kitchen")
  }

}

console.log();



  return (
    <>


      <Header></Header>
        <Main></Main>

      <div className='container  mx-auto flex gap-8 mt-10'>

        <div className=" grid grid-cols-2 gap-4">
          {
            recipes.map((recipe) => <Recipes key={recipe.id}
             item={recipe}
              handleCookBtn={handleCookBtn}>

              </Recipes>)
          }

        </div>
        <CookisCart></CookisCart>

      </div>


    </>
  )
}

export default App
