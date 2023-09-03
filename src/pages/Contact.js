import { Email, Message, Person } from '@mui/icons-material'
import { Card, CardHeader, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <div className='md:flex my-3 my-10'>
            <div className='basis-1/2 text-center flex flex-col items-center justify-center' >
                <Typography variant='h2'>
                    <span className='font-bold'>Reach Out To Us</span>
                </Typography>
                <p className='mt-5 px-3'>
                    Need to get in touch with Us? Fill the form given and Let us know How we can help You!!
                </p>
            </div>
            <div className='basis-1/2 '>
                <Card className='md:mr-7 m-7' >
                    <CardHeader title={"Something you want to tell us "} />
                    <form>
                        <div className='flex flex-col m-3 space-y-8 mb-5'>
                            <TextField variant='outlined' label={<Person />} color="error"
                                placeholder='Name' />
                            <TextField variant='outlined' label={<Email />} color="error"
                                placeholder='Email' />
                            <TextField variant='outlined' label={<Message />} color="error" size="medium"
                                placeholder='Write to us' multiline rows={5} />
                            <div className='text-center '>
                                <button type="button" className='border p-3 bg-red-500 hover:bg-red-600 border-none'>Send Message</button>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Contact