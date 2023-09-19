import { Container, Typography } from '@mui/material'
import React from 'react'

const Title = ({ title }) => {
    return (
        <div className='text-center p-3 shadow-2xl'>
            <Container>
                <hr className='border-2 mb-3' /> 
                <Typography variant='h3'>
                    {title}
                </Typography>
                <hr className='border-2 mt-3' />
            </Container>
        </div>
    )
}

export default Title