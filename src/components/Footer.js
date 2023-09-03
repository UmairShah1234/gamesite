import { EmailOutlined, ExpandMore, FacebookOutlined, Home, Info, Instagram, SportsEsports, WhatsApp } from '@mui/icons-material'
import { Container, ListItemButton, Typography, Card, ListItemIcon, useMediaQuery, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import React from 'react'

const itemsExplore = [
  { icon: <Home />, text: "Home" },
  { icon: <SportsEsports />, text: "Products" },
  { icon: <Home />, text: "Events" },
  { icon: <Info />, text: "About Us" },
]

const itemContact = [
  { icon: <EmailOutlined />, text: 'simplygaming@gmail.com' },
  { icon: <Instagram />, text: 'simplygaming.in' },
  { icon: <FacebookOutlined />, text: 'simplygaming@facebook' },
  { icon: <WhatsApp />, text: '+91 99877 94974' },
]

const itemsSupport = [

]

const Footer = () => {
  const isNonmobile = useMediaQuery('(min-width:600px)');
  return (
    <div  className='mt-3 p-3 min-h-full'>
      <Container>
        <hr className='border my-3' />
      </Container>
      {!isNonmobile ? (
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}>
              <Typography>Explore</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {itemsExplore.map(({ icon, text }) => {
                return (
                  <ListItemButton>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                    <Typography variant='h5'>{text}</Typography>
                  </ListItemButton>
                )
              })}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}>
              <Typography>Support</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {itemsSupport.map(({ icon, text }) => {
                return (
                  <ListItemButton>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                    <Typography variant='h5'>{text}</Typography>
                  </ListItemButton>
                )
              })}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}>
              <Typography>Contact</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {itemContact.map(({ icon, text }) => {
                return (
                  <ListItemButton>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                    <Typography variant='h5'>{text}</Typography>
                  </ListItemButton>
                )
              })}
            </AccordionDetails>
          </Accordion>
        </div>
      ) : (
        <div className='flex justify-between px-10 mt-10'>
          <div className='items-center flex flex-col  justify-center'>
            <Typography variant='h3' className='hover:text-red-500'>SG</Typography>
            <Typography variant='h3' className='hover:text-red-500'>LOGO</Typography>
          </div>
          <div>
            <Typography variant='h4' className='hover:text-red-500'>Explore</Typography>
            <div className='space-y-4 mt-1'>
              {itemsExplore.map(({ icon, text }) => {
                return (
                  <ListItemButton>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                    <Typography variant='h5'>{text}</Typography>
                  </ListItemButton>
                )
              })}
            </div>
          </div>
          <div>
            <Typography variant='h4' className='hover:text-red-500'>Support</Typography>
            
            <div className='space-y-4 mt-1'>
              {itemsSupport.map(({ icon, text }) => {
                return (
                  <ListItemButton>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                    <Typography variant='h5'>{text}</Typography>
                  </ListItemButton>
                )
              })}
            </div>
          </div>
          <div>
            <Typography variant='h4' className='hover:text-red-500'>Contact</Typography>
            <div className='space-y-4 mt-1'>
              {itemContact.map(({ icon, text }) => {
                return (
                  <ListItemButton>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                    <Typography variant='h5'>{text}</Typography>
                  </ListItemButton>
                )
              })}
            </div>
          </div>
        </div>
      )}
      <Card elevation={0} className='text-center mt-3 p-3'>
        <Typography variant='h4'>
          © Copyright 2023 | All Rights Reserved Simply Gaming
        </Typography>
      </Card>
    </div>
  )
}

export default Footer