import React from 'react'
import CarouselComp from '../components/CarouselComp'
import AboutCard from '../components/AboutCard'
import { Container, Typography, useTheme } from '@mui/material'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const Home = () => {
    const theme = useTheme();
    const mode = theme.palette.mode
    return (
        <div className={`${mode === 'dark' ? 'bg-gradient-to-r from-stone-950 via-zinc-700 to-stone-950' : ''}`}>
            {/* carousel component */}
            <section className='mt-3'>
                <CarouselComp />
            </section>
            <section>
                <div className={` text-center p-3 `}>
                    <Typography variant='h2' >
                        <span className='my-2  border-b-4 border-red-500 w'>
                            Our Services & Products
                        </span>
                    </Typography>
                    <div className='mt-3'>
                        <Container>
                            
                            <hr className='my-2 border border-2 border-red-600' />
                            <div className='flex'>
                                <ProductCard title={'VR'} desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
                                <ProductCard title={'AR'} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                                <ProductCard title={'Console'} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                                <ProductCard title={'Simulator'} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                            </div>
                        </Container>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex justify-center'>
                    <AboutCard />
                </div>
            </section>
            <section>
                <Footer />
            </section>

        </div>
    )
}

export default Home