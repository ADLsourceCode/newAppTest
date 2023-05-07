/* eslint-disable prettier/prettier */
import {extendTheme} from 'native-base';


export const customTheme = extendTheme({
  colors: {
    black: {
      100: '#C4C4C4',
      200: '#7C7C7C',
      300: '#292929',
      800: '#181725',
      900:'#000000'
    },
    green: {
      300: '#53B175',
    },
    seashell: {
        
        900:'#EEE2DF'
    },
    champagne_pink: {
      900:'#eed7c5'
    },
    rosy_brown: {
        
       900: '#c89f9c'
    },
    burnt_sienna: {
        900:'#c97c5d'
    },
    grey: {
        100: '#F2F2F2',
        200: '#E0E0E0',
        300: '#BDBDBD',
        400: '#828282',
        500: '#4F4F4F',
        600: '#333333',
        700: '#1F1F1F',
        800: '#f9f9f9',
        900:'#ebebeb'
        
    },
    redwood:{
        900:"#b36a5e"
    },
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    amber: {
      400: '#d97706',
    },
  },
  components: {
    Divider: {
      baseStyle: ({colorMode}) => {
        return {
          backgroundColor: colorMode === 'dark' ? 'black.100' : 'black.200',
        };
      },
    },
    Heading: {
      baseStyle: (colorMode:any) => {
        return {
          color: colorMode === 'dark' ? 'black.100' : 'black.800',
        };
      },
      defaultProps: {
        size: 'xl',
      },
    },
    Text: {
      baseStyle: (colorMode:any) => {
        return {
          color: colorMode === 'dark' ? 'black.100' : 'black.300',
        };
      },
      defaultProps: {
        size: 'md',
      },
      sizes: {
        xl: {
          fontSize: '64px',
        },
        lg: {
          fontSize: '32px',
        },
        md: {
          fontSize: '16px',
        },
        sm: {
          fontSize: '12px',
        },
      },
    },
  },
});