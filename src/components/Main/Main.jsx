
import { CiClock2 } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";



const Main = () => {
    return (
        <div className="container mx-auto mt-10">
            {/* recipe title */}
            <div className="text-center">
                <h2 className="text-4xl lexend-600">Our Recipes</h2>
                <p className="lexend-400 mt-4">
                    Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget
                    <br />
                    urna volutpat curabitur elementum mauris aenean neque.
                </p>
            </div>

            {/* main cart start */}
            <div className="flex mt-10">
                <div className="grid grid-cols-2 gap-4">

                    {/* first cart */}
                    <div className="card p-6 w-96 border-2 bg-base-100 shadow-xl">
                        <figure><img src="/public/images/food-1.png" alt="recipe" /></figure>
                        <div className="card-body">
                            <h2 className="card-title lexend-600">Spaghetti Bolognese</h2>
                            <p className="lexend-400">Classic Italian pasta dish with savory meat sauce.</p>
                            <hr />
                            <h5 className="text-2xl lexend-500">Ingredients:</h5>

                            <li>Beef</li>
                            <li>Onion</li>
                            <li>Garlic</li>

                            <hr />
                            <div className="flex items-center gap-4">
                                <CiClock2></CiClock2>
                                <p> 30 minutes</p>
                                <MdOutlineLocalFireDepartment></MdOutlineLocalFireDepartment>
                                <p>600 calories</p>
                            </div>


                            <div className="card-actions">
                                <button className="btn lexend-500 rounded-3xl bg-[#0BE58A]">Want to Cook</button>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="border-2 rounded-xl">
                    <h2 className="text-2xl lexend-600 text-center">Want to Cook: </h2>
                    <hr />

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
                                <td>400 calories</td> <button className="btn bg-[#0BE58A] rounded-3xl">Preparing</button>
                            </tr>
                        </tbody>
                    </table>
                    

                </div>


            </div>


        </div>
    );
};

export default Main;
