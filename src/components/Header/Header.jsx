import { IoSearchSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

const Header = () => {
    return (
        // navbar start
        <div className="container mx-auto mt-8">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>Home</li>
                            <li>Recipes</li>
                            <li>About</li>
                            <li>Search</li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-4xl lexend-700">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="lexend-400  menu menu-horizontal space-x-5 px-1">
                            <li>Home</li>
                            <li>Recipes</li>
                            <li>About</li>
                            <li>Search</li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        
                    <div className=" lg:flex justify-between items-center bg-white px-6 py-3 rounded-full">
                  
                   <div  className="flex items-center gap-4 ">
                   <IoSearchSharp className=""></IoSearchSharp>
                   <input className="outline-none px-6 py-2 rounded-full bg-[#150B2B0D]" type="text"  placeholder="Search"/> 
                   </div>
                    
                  </div>

                    </div>
                    <IoMdContact className="bg-slate-200 text-3xl rounded-full text-[#0BE58A]"></IoMdContact>
                    
                </div>
            </div>
            {/* nav-bar end */}

        {/* banner section start */}
        <div>

        </div>

        </div>
           
            



    );
};

export default Header;

