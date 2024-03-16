

const CookisCart = () => {
    return (
        <div>
            
            <div className="border-2 rounded-xl p-4 w-[520px]">
                    <h2 className="text-2xl lexend-600 text-center mb-2">Want to Cook: </h2>
                    <hr />

                    {/* table want to cook */}
                   <div className="p-8">
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

                   <hr />

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
    );
};

export default CookisCart;