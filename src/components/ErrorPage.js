import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from './Header';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../themes/theme';

const ErrorPage = () => {
    const error = useRouteError();
    const [theme, colorMode] = useMode();
    return (
        <div>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header />
                    <Container>
                        <div className='text-5xl mt-20 pt-20  text-center'>
                          Oops! {error?.status} {error?.statusText}
                        </div>
                    </Container>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div >
    )
}

export default ErrorPage