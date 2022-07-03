import { extendTheme } from 'native-base';

const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};
  
  // extend the theme
const theme = extendTheme({ config });

type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export default theme;

// export const activeBackgroun