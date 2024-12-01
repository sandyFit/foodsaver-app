import React from 'react';
import Dashboard from './Dashboard';
import MealsTable from '../components/MealsTable';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
    return (
        <Dashboard>
            <section className='w-[86vw] ml-8'>
                <div className="flex gap-16">
                    <div className="p-10 border-2 border-stone-700 rounded-lg">
                        <h2 className='text-xl font-[600] mb-4'>Meals Close to Expire</h2>
                        <MealsTable />
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </div>
                </div>
            </section>
        </Dashboard>
    )
}

export default Home
