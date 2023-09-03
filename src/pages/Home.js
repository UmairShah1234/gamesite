import React from 'react'
// import CarouselComp from '../components/CarouselComp'
// import AboutCard from '../components/AboutCard'
import {  useTheme } from '@mui/material'
// import ProductCard from '../components/ProductCard'
// bg-gradient-to-r from-stone-950 via-zinc-700 to-stone-950
const Home = () => {
    const theme = useTheme();
    const mode = theme.palette.mode
    return (
        <div className={`${mode === 'dark' ? '' : ''}`}>
            {/* carousel component */}
            <section className='mt-3'>
                {/* <CarouselComp /> */}
            </section>
            <section>
                <div className={` text-center p-3 `}>
                  
                </div>
            </section>
            <section>
                <div className='flex justify-center'>
                    {/* <AboutCard /> */}
                </div>
            </section>
            

        </div>
    )
}

export default Home