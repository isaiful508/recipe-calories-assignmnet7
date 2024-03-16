import { CiClock2 } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

const Recipes = ({item, handleCookBtn}) => {

    // console.log(handleCookBtn);

    const {recipe_name, recipe_image, short_description, preparing_time, calories, ingredients} = item;

   
    

    return (
        <div className="container mx-auto">
            <div>

                {/* first cart */}
                <div className="card p-6 w-96 border-2 bg-base-100 shadow-xl">
                    <figure><img src={recipe_image} alt="recipe" /></figure>
                    <div className="card-body">
                        <h2 className="card-title lexend-600">{recipe_name}</h2>
                        <p className="lexend-400">{short_description}</p>
                        <hr />
                        <h5 className="text-2xl lexend-500">Ingredients: {ingredients.length}</h5>

                       {
                        ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                       }
                         
                       

                        <hr />
                        <div className="flex items-center gap-4">
                            <CiClock2></CiClock2>
                            <p>{preparing_time}</p>
                            <MdOutlineLocalFireDepartment></MdOutlineLocalFireDepartment>
                            <p>{calories}</p>
                        </div>


                        <div className="card-actions">

                            <button onClick={(e) => handleCookBtn(item)} className="btn lexend-500 rounded-3xl bg-[#0BE58A]">Want to Cook</button>

                        </div>
                    </div>
                </div>
                {/* second cart */}



            </div>

        </div>
    );
};




export default Recipes;