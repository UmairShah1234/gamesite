import { Card, Container, Typography, useMediaQuery, useTheme } from '@mui/material'

const AboutCard = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const isNonmobile = useMediaQuery('(min-width:600px)');

    return (
        <Card elevation={20}  sx={{ borderRadius: 0, marginX: 3 }}>
            <div className='md:flex bg-gradient-to-r from-blue-500 to-red-500 via-purple-500 '>  
                {isNonmobile ? (
                    <div className='basis-1/2 flex justify-center items-center md:p-0 p-14'>
                    <Typography variant='h1'>
                        <h1 className='font-bold'>SG</h1>
                    </Typography>
                </div>
                ) : (null)}
                <div className='shadow-2xl basis-1/2 md:p-14 p-5'>
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
                        <button type="button" className={`border p-3 border-${mode === 'dark' ? 'white' : 'black'} hover:underline`}>Know More</button>
                    </Container>
                </div>
            </div>

        </Card>
    )
}

export default AboutCard