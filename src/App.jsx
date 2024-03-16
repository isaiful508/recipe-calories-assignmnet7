
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Recipes from './components/Recipes';
import CookisCart from './components/Main/CookisCart';

function App() {
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    fetch("./fakeCartData.json")
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
      })
  }, [])

  // console.log('alhamdulillah',recipes);




  return (
    <>


      <Header></Header>

      {/* {
        recipes.map(recipe => <Main></Main>)
      } */}

      <div className='container  mx-auto flex gap-8 mt-10'>

        <div className=" grid grid-cols-2 gap-4">
          {
            recipes.map((recipe) => <Recipes key={recipe.id} item={recipe}></Recipes>)
          }

        </div>
        <CookisCart></CookisCart>

      </div>


    </>
  )
}

export default App
