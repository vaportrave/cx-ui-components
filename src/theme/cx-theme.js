// import { createMuiTheme } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
//
//
// const theme = createMuiTheme({
//     overrides: {
//         MuiButton: {
//             root: {
//                 height: 44,
//                 minWidth: 88,
//             },
//             containedPrimary: {
//                 backgroundColor: '#82BC2F',
//                 '&:hover': {
//                     backgroundColor: '#82BC2F',
//                     opacity: 0.85,
//                 },
//             },
//
//             outlinedPrimary: {
//                 padding: 0,
//             },
//
//             sizeSmall: {
//                 height: 'auto',
//             },
//             sizeLarge: {
//                 minWidth: 150,
//                 fontSize: 16,
//             },
//         },
//         MuiTab: {
//             root: {
//                 fontFamily: 'HKNova-SemiBold',
//                 textTransform: 'uppercase',
//                 minWidth: 'auto !important',
//             },
//             labelContainer: {
//                 padding: 6,
//             },
//             label: {
//                 fontSize: 16,
//                 fontWeight: 600,
//             },
//         },
//         MuiChip: {
//             root: {
//                 height: 22,
//                 borderRadius: 0,
//                 fontFamily: 'HKNova',
//                 fontSize: 13,
//             },
//             deleteIcon: {
//                 fontSize: 14,
//                 border: '2px solid transparent',
//                 borderRadius: 9,
//                 width: 16,
//                 height: 16,
//                 '&:hover': {
//                     backgroundColor: blue[300],
//                 },
//             },
//         },
//         MuiFormControl: {
//             root: {
//                 width: '100%',
//             },
//         },
//         MuiInputBase: {
//             root: {
//                 '&:focus': {
//                     outline: 0,
//                     borderWidth: 1,
//                     shadow: 'none',
//                 },
//             },
//             input: {
//                 fontFamily: 'HKNova',
//                 fontSize: 15,
//             },
//         },
//         MuiFormLabel: {
//             root: {
//                 fontFamily: 'HKNova',
//                 fontSize: 13,
//                 color: '#666 !important',
//             },
//         },
//         MuiInputLabel: {
//             outlined: {
//                 position: 'relative',
//                 transform: 'none !important',
//                 marginBottom: 6,
//                 pointerEvents: 'auto',
//                 zIndex: 0,
//             },
//         },
//         MuiPrivateNotchedOutline: {
//             root: {
//                 top: 0,
//                 borderWidth: '1px !important',
//             },
//             legend: {
//                 display: 'none',
//             },
//         },
//         MuiOutlinedInput: {
//             input: {
//                 padding: 12,
//             },
//         },
//         MuiFormHelperText: {
//             root: {
//                 fontSize: 13,
//             },
//             contained: {
//                 margin: '6px 0 0',
//             },
//             error: {
//                 color: '#666 !important',
//             },
//         },
//         MuiListItem: {
//             button: {
//                 padding: 0,
//                 borderBottom: '1px solid #d8d8d8',
//             },
//         },
//         MuiSelect: {
//             root: {
//                 color: '#282837',
//             },
//             select: {
//               fontFamily: 'HKNova',
//               fontWeight: 400,
//               '&:focus': {
//                   backgroundColor: 'transparent',
//               }
//             },
//             icon: {
//               marginRight: 8,
//             },
//             outlined: {
//
//             },
//         },
//         MuiList: {
//             root: {
//                 border: '1px solid #666',
//             },
//         },
//     },
//
//     palette: {
//         background: {
//             paper: '#fff',
//             default: '#fff',
//         },
//         primary: {
//             main: '#3399ff',
//             contrastText: '#fff',
//         },
//         secondary: {
//             main: '#282837',
//             contrastText: '#fff',
//         },
//         error: {
//             main: '#f22053',
//             contrastText: '#fff',
//         },
//         input: {
//             border: '#d8d8d8',
//         },
//         text: {
//             primary: '#282837',
//             secondary: '#666',
//             disabled: '#b9b9b9',
//         },
//     },
//     typography: {
//         useNextVariants: true,
//         fontFamily: 'HKNova',
//         fontWeight: 400,
//         fontSize: 14,
//         button: {
//             fontWeight: 600,
//             fontFamily: 'HKNova-SemiBold',
//             fontSize: 16,
//             lineHeight: '21px',
//             textTransform: 'Uppercase',
//             color: '#3399ff',
//         },
//         body1: {
//             fontFamily: 'HKNova',
//             fontWeight: 400,
//             fontSize: 15,
//         },
//         h1: {
//             fontSize: 18,
//             fontFamily: 'HKNova',
//             color: '#323131',
//             textTransform: 'uppercase',
//         },
//         h2: {
//             fontSize: 26,
//             fontFamily: 'HKNova',
//             lineHeight: 1.08,
//             textAlign: 'center',
//             textTransform: 'uppercase',
//             fontWeight: 'normal',
//             letterSpacing: 'normal',
//         },
//         h3: {
//             fontWeight: 600,
//             fontFamily: 'HKNova',
//             fontSize: 16,
//             textTransform: 'uppercase',
//             lineHeight: '22px',
//         },
//         h4: {
//             fontWeight: 600,
//             fontFamily: 'HKNova',
//             fontSize: 16,
//         },
//         h5: {
//             fontWeight: 600,
//             fontFamily: 'HKNova-SemiBold',
//             fontSize: 18,
//             textTransform: 'uppercase',
//         },
//         h6: {
//             fontSize: 14,
//             color: '#666',
//             fontFamily: 'HKNova',
//             fontWeight: 'normal',
//             letterSpacing: 'normal',
//         },
//         subtitle1: {
//             textTransform: 'uppercase',
//             fontSize: 16,
//             fontFamily: 'HKNova-SemiBold',
//             fontWeight: 600,
//             lineHeight: 1.28,
//         },
//         subtitle2: {
//             fontSize: 13,
//             fontFamily: 'HKNova',
//             fontWeight: 'normal',
//             lineHeight: 'normal',
//         },
//         caption: {
//             fontSize: 15,
//             fontFamily: 'HKNova',
//             fontWeight: 'normal',
//             lineHeight: 'normal',
//         },
//         body2: {
//             fontSize: 15,
//             fontFamily: 'HKNova',
//             color: '#666',
//             fontWeight: 'normal',
//             lineHeight: 'normal',
//         },
//     },
//     shape: {
//         borderRadius: 0,
//     },
// });
//
// export default theme;

import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  overrides: {
    MuiAutocomplete: {
      paper: {
        margin: 0,
      },
      listbox: {
        padding: 0,
      },
      option: {
        paddingTop: 4,
        paddingBottom: 4,
      },
      inputRoot: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important',
        height: 44,
      },
      input: {
        paddingTop: '12px !important',
        paddingBottom: '12px !important',
      },
    },
    MuiCheckbox: {
      indeterminate: {
        color: '#39f'
      }
    },
    MuiExpansionPanel: {
      root: {
        '&$expanded': {
          margin: '0 0 8px 0'
        }
      }
    },
    MuiExpansionPanelSummary: {
      content: {
        margin: '12px 0 !important'
      }
    },
    MuiButton: {
      root: {
        height: 44,
        minWidth: 88,
      },
      outlinedPrimary: {
        padding: 0
      },
      containedPrimary: {
        backgroundColor: '#82BC2F',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#82BC2F',
          opacity: 0.85
        }
      },

      sizeSmall: {
        height: 'auto'
      },
      sizeLarge: {
        minWidth: 150,
        fontSize: 16
      }
    },
    MuiTabs: {
      indicator: {
        zIndex: 1
      }
    },
    MuiTab: {
      root: {
        fontFamily: 'HKNova',
        fontWeight: 500,
        textTransform: 'capitalize',
        borderBottom: '2px solid #d8d8d8',
        minWidth: 'auto !important',
        fontSize: '14px !important',
        padding: '6px 24px'
      },
      textColorInherit: {
        fontSize: 16,
        fontWeight: 500,
        color: '#282837'
      }
    },
    MuiChip: {
      root: {
        height: 22,
        borderRadius: 0,
        fontFamily: 'HKNova',
        fontWeight: 400,
        fontSize: 13
      },
      deleteIcon: {
        fontSize: 14,
        border: '2px solid transparent',
        borderRadius: 9,
        width: 16,
        height: 16,
        '&:hover': {
          backgroundColor: blue[300]
        }
      }
    },
    MuiFormControl: {
      root: {
        width: '100%'
      }
    },
    MuiInputBase: {
      root: {
        '&.Mui-focused': {
          '& fieldset': {
            borderWidth: '1px !important'
          }
        },
        backgroundColor: '#fff',
        '&:focus': {
          outline: 0,
          borderWidth: '1px !important',
          shadow: 'none'
        },
        '&.Mui-disabled': {
          backgroundColor: '#f2f2f2'
        },
        '& legend': {
          display: 'none'
        }
      },
      input: {
        fontFamily: 'HKNova',
        fontWeight: 400,
        fontSize: 15
      }
    },
    MuiFormLabel: {
      root: {
        fontFamily: 'HKNova',
        fontSize: 13,
        color: '#666 !important',
        marginBottom: 4
      }
    },
    MuiMenuItem: {
      root: {
        height: 30
      }
    },
    MuiList: {
      root: {
        border: '1px solid #666',
        backgroundColor: '#fff',
      }
    },
    MuiInputLabel: {
      outlined: {
        position: 'relative',
        transform: 'none !important',
        pointerEvents: 'auto',
        zIndex: 0
      }
    },
    MuiPrivateNotchedOutline: {
      root: {
        top: 0,
        borderRadius: 0,
        borderWidth: '1px !important'
      },
      legend: {
        display: 'none'
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: 12
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: 13,
        '&$error': {
          color: '#666 !important'
        }
      },
      contained: {
        margin: '6px 0 0',
        marginLeft: 0,
      }
    },
    MuiListItem: {
      button: {
        padding: 0,
        borderBottom: '1px solid #d8d8d8'
      },
    },
    MuiListItemText: {
      root: {
        padding: 0,
      },
      dense: {
        fontSize: 16
      }
    },
    MuiSelect: {
      root: {
        color: '#282837',
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.44,
      },
      // select: {
      //   '&:focus': {
      //     backgroundColor: 'transparent'
      //   }
      // },
      disable: {
        backgroundColor: '#f2f2f2 !important'
      },
    },
    PrivateNotchedOutline: {
      root: {
        top: 0
      },
      legend: {
        display: 'none'
      }
    },
    MuiCardContent: {
      root: {
        padding: 0,
        backgroundColor: '#ffffff',
        '&:last-child': {
          paddingBottom: 0
        }
      }
    },
    MuiRadio: {
      root: {
        padding: '9px !important'
      }
    },
    MuiCollapse: {
      entered: {
        overflowY: 'auto',
        overflowX: 'hidden'
      }
    }
  },

  palette: {
    background: {
      paper: '#fff',
      default: '#fff'
    },
    primary: {
      main: '#3399ff',
      contrastText: '#fff'
    },
    secondary: {
      main: '#039be5',
      contrastText: '#fff'
    },
    background: {
      main: '#282837',
      contrastText: '#fff',
    },
    error: {
      main: '#f22053',
      contrastText: '#fff'
    },
    input: {
      border: '#d8d8d8'
    },
    text: {
      primary: '#282837',
      secondary: '#666',
      disabled: '#b9b9b9'
    },
    system: '#FFC107'
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'HKNova',
    fontSize: 14,
    button: {
      fontWeight: 500,
      fontFamily: 'HKNova',
      fontSize: 14,
      letterSpacing: 'normal',
      lineHeight: '21px',
      textTransform: 'Uppercase',
      color: '#3399ff'
    },
    body1: {
      fontFamily: 'HKNova',
      fontWeight: 400,
      fontSize: 15,
      color: '#282837'
    },
    h1: {
      fontSize: 18,
      fontFamily: 'HKNova',
      color: '#323131',
      textTransform: 'uppercase'
    },
    h2: {
      fontSize: 26,
      fontFamily: 'HKNova',
      lineHeight: 1.08,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'normal',
      letterSpacing: 'normal'
    },
    h3: {
      fontWeight: 600,
      fontFamily: 'HKNova',
      fontSize: 16,
      textTransform: 'uppercase',
      lineHeight: '22px'
    },
    h4: {
      fontWeight: 600,
      fontFamily: 'HKNova',
      fontSize: 16
    },
    h5: {
      fontWeight: 700,
      fontFamily: 'HKNova',
      fontSize: 18,
      textTransform: 'uppercase'
    },
    h6: {
      fontSize: 14,
      color: '#666',
      fontFamily: 'HKNova',
      fontWeight: 400,
      letterSpacing: 'normal'
    },
    subtitle1: {
      textTransform: 'uppercase',
      fontSize: 16,
      fontFamily: 'HKNova',
      fontWeight: 600,
      lineHeight: 1.28,
      color: '#282837',
    },
    subtitle2: {
      fontSize: 13,
      fontFamily: 'HKNova',
      fontWeight: 'normal',
      lineHeight: 'normal'
    },
    caption: {
      fontSize: 15,
      fontFamily: 'HKNova',
      fontWeight: 'normal',
      lineHeight: 'normal'
    },
    body2: {
      fontSize: 16,
      fontFamily: 'HKNova',
      color: '#666',
      fontWeight: 600,
      lineHeight: 'normal'
    },
  },
  shape: {
    borderRadius: 0
  }
})

export default theme
