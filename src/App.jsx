
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

import Recipes from './components/Recipes';

import Main from './components/Main/Main';

function App() {
  //recipe state
  const [recipes, setRecipes] = useState([]);


  //cook state

  const [cook, setCook] = useState([]);

  // Currently cooking state

  const [currentlyCooking, setCurrentlyCooking] = useState([]);


  // Total time and calories state
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

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

  //handle preparing button 
  const handlePreparingBtn = (p) => {
    const removeCook = cook.filter((item) => item.recipe_id !== p.recipe_id);
    setCook(removeCook);

    setCurrentlyCooking([...currentlyCooking, p]);

      // Update total time and total calories
      setTotalTime(totalTime + p.preparing_time);
      setTotalCalories(totalCalories + p.calories);

  }




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


            <h2 className="text-2xl lexend-600 text-center mb-2">Want to Cook:{cook.length} </h2>
            <hr />

            {/* table want to cook */}


            {
              cook.map((item, index) =>
                <div key={item.id} className="p-8">
                  <table>

                    <thead>

                      <tr>
                        <th>Lists</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.recipe_name}</td>
                        <td>{item.preparing_time}</td>
                        <td>{item.calories}</td>
                        <button onClick={() => handlePreparingBtn(item)} className="btn bg-[#0BE58A] rounded-3xl">Preparing</button>
                      </tr>
                    </tbody>

                  </table>

                </div>


              )
            }


            <h2 className="text-2xl lexend-600 text-center mt-4 mb-4">Currently cooking: {currentlyCooking.length} </h2>
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
                  {currentlyCooking.map((item) => (
                    <tr key={item.id}>
                      <td>{item.recipe_name}</td>
                      <td>{item.preparing_time}</td>
                      <td>{item.calories}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr />

            <div className="flex justify-end gap-4">
              <h5>Total Time = <br />
                {totalTime} minutes</h5>


              <h5>Toatl Calories = <br />
                {totalCalories} calories</h5>
            </div>



          </div>

        </div>

      </div>


    </>
  )
}

export default App
