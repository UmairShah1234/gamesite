import { KeyboardArrowRight } from '@mui/icons-material';
import { CardActionArea, CardActions, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
import React from 'react'

const ProductCard = ({ title, desc, pic }) => {
    const theme = useTheme();
    const colors = theme.palette.mode;

    return (
        <div className={` md:w-1/4 mb-1 p-1  mx-2 hover:bg-gradient-to-r from-blue-500 to-red-500 via-purple-500 rounded shadow-2xl
        `}>
            <div className={`p-1 space-y-2 ${colors === 'dark' ? 'bg-stone-800' : 'bg-stone-100'}`}>
                <CardActionArea>
                    <CardMedia
                        component={'img'}
                        src='https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                            {title}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className='flex justify-center p-1 items-center '>
                        <button className={`border hover:bg-${colors === 'dark' ? 'stone-600' : 'stone-300'} p-3 border-${colors === 'dark' ? 'white' : 'black'}`}>
                            Explore More <KeyboardArrowRight />
                        </button>
                    </div>
                </CardActions>




            </div>
        </div>
    )
}

export default ProductCard