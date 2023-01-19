import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette:{
        primary: {
            main: 'rgba(167, 122, 1, 1.0)',
            light: '#aaeeaa',
            dark: '#aaffaa',
            mainChannel: 'rgba(167, 122, 1, 1.0)',
        },
        secondary: {
            main: '#dddddd',
            light: '#ddddbb',
        },
        action:{
            selectedOpacity: 0.5,
            focusOpacity: 0.2,
            hoverOpacity: 0.1,
            hover: 'rgba(167, 122, 1, 0.1)'
        }
    }
});

export const themeLogIn = createTheme({
    palette:{
        mode: "dark",
        primary: {
            main: '#ffffff',
            light: '#aaeeaa',
            dark: '#dddddd',
            mainChannel: 'rgba(167, 122, 255, 1.0)',
        },
        secondary: {
            main: '#dddddd',
            light: '#ddddbb',
        },
        action:{
            selectedOpacity: 0.2,
            focusOpacity: 0.2,
            hoverOpacity: 0.1,
            hover: 'rgba(255, 255, 255, 0.1)',
            active: "rgba(255, 255, 255, 0.8)",
            focus: "rgba(255, 255, 255, 0.6)",
        },
        text:{
            primary: '#dddddd',
            secondary: "rgb(212,212,212)",
        },
        
        
    }
});