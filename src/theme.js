import { createMuiTheme } from '@material-ui/core/styles';

const mcgpalette0 = {
  50: '#e2eaf2',
  100: '#b6cadf',
  200: '#86a7c9',
  300: '#5584b3',
  400: '#3069a3',
  500: '#0c4f93',
  600: '#0a488b',
  700: '#083f80',
  800: '#063676',
  900: '#032664',
  A100: '#94b2ff',
  A200: '#618eff',
  A400: '#2e6aff',
  A700: '#1457ff',
  contrastDefaultColor: 'light',
};

export default createMuiTheme({
  palette: {
    primary: mcgpalette0,
  },
});
