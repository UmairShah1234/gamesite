import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const ProductCard = ({ title, desc, pic }) => {
    return (
        <Card elevation={20} className='space-y-5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 w-1/4  mx-2 shadow-xl hover:shadow-2xl p-3'>
            <CardContent>
                <Typography variant='h2'>
                    {title}
                </Typography>
            </CardContent>
            <p>
                {desc}
            </p>
            <button type="button" className='border p-3 hover:shadow-2xl'>Explore More</button>
        </Card>
    )
}

export default ProductCard