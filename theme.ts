import { extendTheme, useColorMode } from 'native-base';

const config = {
    useSystemColorMode: false,
    initialColorMode: "light",
};
  
  // extend the theme
export const theme = extendTheme({ config });

type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export const getColorBackground = () => {
  const { colorMode } = useColorMode();
  return colorMode == 'light' ? '#f8fafc' : '#0f172a';
}

export const getColorForeground = () => {
  const { colorMode } = useColorMode();
  return colorMode == 'light' ? '#0f172a' : '#f8fafc';
}

const themeUtils = {
  theme,
  getColorBackground,
  getColorForeground
}

export default themeUtils;