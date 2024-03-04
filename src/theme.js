// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        contained: {
            backgroundcolor: '#9DB4C0', /* Example background color */
            color: 'white', /* Example text color */
            boxshadow: 'none', /* Remove the default box-shadow if desired */
            fontfamily: 'Overpass, sans serif',
            fontweight: 'bold',
            justifycontent: 'center',
            paddingtop: '8px',
          // other styles
        },
      },
    },
  },
});

export default theme;