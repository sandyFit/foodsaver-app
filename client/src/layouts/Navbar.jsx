import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();


    return (
        <nav className='w-full h-24 bg-tahiti-200 absolute'>
            <div className="flex justify-between items-center px-32 relative">
                <div className="flex justify-center items-center bg-stone-900 w-60 h-24">
                    <div className="h-10 bg-stone-900 z-20 ">
                        <img src="./img/FoodSaver_lignt.png" alt="FoodSaver Logo" />
                    </div> 
                </div>
                <div className="flex gap-10 pt-5 ">
                    <button
                        onClick={() => navigate('/login')}
                        className='full-btn hover:outline-yellow-100'>
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/register')}
                        className='shadow-btn bg-yellow-100 px-12 py-3'>
                        Register
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;
