const ACCENT = '#607D8B';
const DARK_ACCENT = '#455A64';
const themes = {
  default: {
    colors: {
      accent: ACCENT,
      accentDark: DARK_ACCENT,
      background: '#F5F5F5',
      border: '#BDBDBD',
      fontColorDarkBkg: '#fff',
      fontColorInvalid: '#E67B87',
      fontColorLightBkg: '#212121',
      fontColorMuted: 'rgb(156,156,156)',
      green: '#33BE67',
      grey: '#A3A3A3',
      iconColor: '#525452',
      iconColorLight: '#fff',
      pending: '#D8D8D8',
      radioBorder: '#CDCDCD',
      red: '#E67B87',
      white: '#fff',
      yellow: '#F5A623',
    },
    fonts: {
      family: 'Muli, sans-serif',
      sizes: {
        body: '1.6rem',
        bodyHeight: '2.4rem',
        bodySM: '1.4rem',
        bodySMHeight: '2.1rem',
        header: '3.4rem',
        headerHeight: '5.1rem',
        sub: '1rem',
        subHeight: '1.5rem',
        title: '1.6rem',
        titleHeight: '2.4rem',
      },
    },
    global: {
      focus: {
        border: {
          color: ACCENT,
        },
      },
      font: {
        family: 'Montserrat, sans-serif',
      },
      height: '100%',
      input: {},
    },
  },
};

export default themes;
