import { createTheme } from '@mui/material/styles';
export let theme = createTheme()
theme = createTheme(theme, {
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#dadada',
            darker: '#ffffff',
        },
        secondary: {
            main: '#f8f8f8',
        },
        text: {
            primary: '#f8f8f8',
            secondary: 'gray'
        },
        background: {
            paper: '#f0f0f0',
            default: 'rgba(0,0,0,0.95)'
        }
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    flexDirection: "column",
                    alignItems: 'start',
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: "row",
                    },
                    ".MuiBox-root": {
                        flexDirection: "column",
                        ".MuiButtonBase-root": {
                            margin: 0,
                            [theme.breakpoints.down('md')]: {
                                position: 'absolute',
                                top: 0,
                                right: 0,
                            },
                        }
                    }
                },
            }
        },
        MuiMenu: {
            styleOverrides: {
                root: {
                    width: '60vw',
                    [theme.breakpoints.down('sm')]: {
                        width: "100vw",
                    },
                },
                paper: {
                    maxHeight: 'unset',
                    maxWidth: 'unset',
                    right: 0,
                    left: 'unset!important'
                },
                list: {
                    height: '100%',
                    width: '100%',
                    paddingLeft: '10px',
                    paddingTop: 0
                },
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    color: 'white',
                    width: '100%',
                    ':last-child': {
                        [theme.breakpoints.down('sm')]: {
                            paddingBottom: '7px',
                        },
                        [theme.breakpoints.up('sm')]: {
                            paddingBottom: 16,
                        },
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: 'white',
                    width: '100%',
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    borderRadius: 6,
                    position: 'relative',
                    backgroundColor: '#fcfcfb',
                    border: '1px solid #ced4da',
                    color: 'black',
                    fontSize: 16,
                    width: '100%',
                    padding: '10px 12px',
                }
            }
        },
    }
});
