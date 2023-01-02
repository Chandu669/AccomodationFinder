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