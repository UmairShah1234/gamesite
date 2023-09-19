import React from 'react'
import CarouselComp from '../components/CarouselComp'
// import AboutCard from '../components/AboutCard'
import { Container, Typography, useTheme } from '@mui/material'
import ProductCard from '../components/ProductCard';
import Title from '../components/Title';
import AboutCard from '../components/AboutCard';
import EventCards from '../components/EventCards';
// import ProductCard from '../components/ProductCard'
// bg-gradient-to-r from-stone-950 via-zinc-700 to-stone-950
const Home = () => {
    const theme = useTheme();
    const mode = theme.palette.mode
    return (
        <div className={`${mode === 'dark' ? '' : ''}`}>
            {/* carousel component */}
            <section className='mt-3'>
                <CarouselComp />
            </section>
            <section>
                <div>
                    <Title title={"Check Our Featured Products"} />
                </div>
                <div className={` text-center p-3 md:flex `}>
                    <ProductCard title={'VR'} desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'} />
                    <ProductCard title={'VR'} desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'} />
                    <ProductCard title={'VR'} desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'} />
                    <ProductCard title={'VR'} desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'} />
                </div>
            </section>
            <section>
                <div className='flex justify-center'>
                    <AboutCard />
                </div>
            </section>
            <section>
                <div className='text-center mt-3'>
                    <Title title={"Check Out Our Grand Events"} />
                </div>
                <div className='my-3'>
                    <Container>
                        <div className='my-1 mx-10'>
                            <EventCards place={'Mumbai'} side={"right"} />
                        </div>
                        <div className='flex space-x-3'>
                            <div className='basis-1/2'>
                                <EventCards place={'Mumbai'} side={"right"} />
                            </div>
                            <div className='basis-1/2'>
                                <EventCards place={'Mumbai'} side={"left"} />
                            </div>
                        </div>
                        <div className='my-1 mx-10'>
                            <EventCards place={'Mumbai'} side={"left"} />
                        </div>
                        <div className='flex space-x-3'>
                            <div className='basis-1/2'>
                                <EventCards place={'Mumbai'} side={"right"} />
                            </div>
                            <div className='basis-1/2'>
                                <EventCards place={'Mumbai'} side={"left"} />
                            </div>
                        </div>
                        <div className='my-1 mx-10'>
                            <EventCards place={'Mumbai'} side={"right"} />
                        </div>

                    </Container>
                </div>
            </section>


        </div>
    )
}

export default Home