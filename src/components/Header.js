import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Call, Close, DarkMode, Event, Home, Info, LightMode, Menu, SportsEsports } from '@mui/icons-material'
import { ColorModeContext, tokens } from '../themes/theme';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const colors = tokens(theme.palette.mode);
    const isNonmobile = useMediaQuery('(min-width:600px)');
    const [isOpen, setIsopen] = useState(false)
    const [navPage, setNavPage] = useState('/')
    const location = useLocation().pathname;
    const [path, setPath] = useState('');
    const navigate = useNavigate();

    const pages = [
        { label: 'Home', value: '/' },
        { label: 'Explore', value: 'explore' },
        { label: 'Events', value: 'events' },
        { label: 'Simply Gaming', value: 'what-we-do' },
        { label: 'Contact Us', value: 'contact-us' },
    ]

    useEffect(() => {
        setPath(location.split('/')[1]);
        setNavPage(path)
    }, [location, path])

    const handlechange = (e, value) => {
        setNavPage(value)
        navigate(value)
        setPath(value)
    }


    return (
        <div className='shadow-2xl '>
            {isNonmobile === false ? (
                <Toolbar>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <IconButton onClick={() => setIsopen(!isOpen)}>
                                <Menu />
                            </IconButton>
                        </div>
                        <div className=''>
                            <Typography variant='h3'>Simply Gaming</Typography>
                        </div>
                        <div>
                            <IconButton onClick={colorMode.toggleColorMode}>
                                {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
                            </IconButton>
                        </div>
                    </div>
                    <Drawer
                        variant="temporary"
                        open={isOpen}
                        sx={{ width: "500px" }}
                        onClose={() => setIsopen(!isOpen)}
                        anchor="left"
                    >
                        <div className='flex justify-end'>
                            <IconButton onClick={() => setIsopen(!isOpen)}>
                                <Close />
                            </IconButton>
                        </div><hr />
                        <List>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary='Home' />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SportsEsports />
                                </ListItemIcon>
                                <ListItemText primary='Explore' />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Event />
                                </ListItemIcon>
                                <ListItemText primary='Events' />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Call />
                                </ListItemIcon>
                                <ListItemText primary='Contact Us' />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Info />
                                </ListItemIcon>
                                <ListItemText primary='Simply Gaming' />
                            </ListItemButton>
                        </List>
                    </Drawer>
                </Toolbar>
            ) : (
                <Toolbar>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center justify-between '>
                            <Typography variant='h3'>Simply Gaming</Typography>
                            <div className='flex space-x-20 ml-20'>
                                <Tabs value={navPage}
                                    onChange={handlechange}
                                    textColor={colors.grey[100]}
                                    indicatorColor="blue"
                                    TabIndicatorProps={{
                                        style: { backgroundColor: "red" }
                                    }}
                                >
                                    {pages && pages.map(({ label, value, index }) => {
                                        return (
                                            <Tab label={label} value={value} sx={{ fontSize: '15px' }} />
                                        )
                                    })}

                                </Tabs>

                            </div>
                        </div>
                        <div>
                            <IconButton onClick={colorMode.toggleColorMode}>
                                {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            )}

        </div>
    )
}

export default Header