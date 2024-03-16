
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

  const [cook, setCook] = useState([])

  //recipe data fetch
  useEffect(() => {
    fetch("./fakeCartData.json")
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
      })
  }, [])


  //cook btn habndler

  const handleCookBtn = (p) => {
    const isExist = cook.find((pd) => pd.recipe_id == p.recipe_id);
    if (!isExist) {
      setCook([...cook, p])
    }
    else {
      alert("Already in kitchen")
    }

  }

  console.log(cook);



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

        {/* table cart div start */}

        <div>

          <div className='border-2 rounded-xl p-4 w-[520px]'>


            <h2 className="text-2xl lexend-600 text-center mb-2">Want to Cook: </h2>
            <hr />

            {/* table want to cook */}


            {
              cook.map((item) =>
                <div key={item.id} className="p-8">
                  <table>

                    <thead>

                      <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                       <td>{item.recipe_name}</td>
                        <td>{item.preparing_time}</td>
                        <td>{item.calories}</td>
                        <button className="btn bg-[#0BE58A] rounded-3xl">Preparing</button>
                      </tr>
                    </tbody>

                  </table>

                </div>


              )
            }


            <h2 className="text-2xl lexend-600 text-center mt-4 mb-4">Currently cooking: </h2>
            <hr />

            {/* table curently cooking cokking */}
            <div className="p-8 ">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chicken Caesar Salad</td>
                    <td>20 minutes</td>
                    <td>400 calories</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr />

            <div className="flex justify-end gap-4">
              <h5>Total Time = <br />
                45 minnutes</h5>


              <h5>Toatl Calories = <br />
                1050 calories</h5>
            </div>


            
          </div>

        </div>

      </div>


    </>
  )
}

export default App
