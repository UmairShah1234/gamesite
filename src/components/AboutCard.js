import { Card, Container, Typography, useTheme } from '@mui/material'

const AboutCard = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;

    
    return (
        <Card elevation={20} className='mt-2 md:flex w-10/12  p-1' sx={{borderRadius: 0}}>
            <div className='basis-1/2 flex justify-center items-center'>
                <Typography variant='h1'>
                    <h1 className='font-bold'>SG</h1>
                </Typography>
            </div>
            <div className='shadow-xl basis-1/2 p-3 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'>
                <Container className='space-y-7'>
                    <div>
                        <Typography variant='h2'>About Simply Gaming</Typography>
                    </div>
                    <div>
                        <Typography variant='h4' >
                            <span className='border-b-4 border-red-400 p-1'>Want To Know About Us?</span>
                        </Typography>
                    </div>
                    <Typography variant='h6' className='my-3'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                    <button type="button" className={`border p-3 border-${mode==='dark'?'white':'black'} hover:underline`}>Know More</button>
                </Container>
            </div>
        </Card>
    )
}

export default AboutCard