import React from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const RecipeCard = () => {
    return (
        <article>
            <div className="flex flex-col gap-2 px-8 py-4 border-2 border-stone-700 text-sm rounded-lg
                relative">
                <h2 className='font-[600]'>Falafel</h2>
                <img src="./img/falafel.jpg" alt="" width={'220px'} />
                <p>
                    Chickpea, herbs and spices. <br />
                    <strong>Calories:</strong> 160 per unit
                </p>
                <div className="w-10 h-10 rounded-full bg-tahiti-200 border-2 border-stone-700 
                    absolute bottom-2 right-2 flex justify-center items-center">
                    <MdKeyboardDoubleArrowRight className='text-2xl'/>
                </div>
            </div>
        </article>
    )
}

export default RecipeCard;
