import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full h-24 bg-tahiti-200 absolute'>
            <div className="flex justify-between items-center px-32 relative">
                <div className="flex justify-center items-center bg-stone-900 w-60 h-24">
                    <div className="h-10 bg-stone-900 z-20 ">
                        <img src="./img/FoodSaver_lignt.png" alt="FoodSaver Logo" />
                    </div>
                </div>
                <div className="flex gap-10 pt-5 ">
                    <button className='transparent-btn'>Login</button>
                    <button className='full-btn'>Signup</button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;
