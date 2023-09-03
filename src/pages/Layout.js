import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { ColorModeContext, useMode } from '../themes/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Footer from '../components/Footer'

const Layout = () => {
    const [theme, colorMode] = useMode();
    return (
        <div>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header />
                    <Outlet />
                    <Footer />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    )
}

export default Layout