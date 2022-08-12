import React, { useEffect } from 'react';
import { StatusBar } from 'react-native'
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, ThemeProvider as PaperThemeProvider, configureFonts, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme, NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation';
import { fonts } from './src/assets/fonts';
import { colors } from './src/assets/colors';
import { changeNavigationBarColor } from './src/components/NavigationBar';
import useTheme from './src/hooks/useTheme';

const fontConfig = {
  ios: {
    regular: {
      fontFamily: fonts.regular,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: fonts.medium,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: fonts.light,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: fonts.thin,
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: fonts.regular,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: fonts.medium,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: fonts.light,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: fonts.thin,
      fontWeight: 'normal',
    },
  }
};

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: colors.white,
    text: colors.background
  },
  fonts: configureFonts(fontConfig),
};

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: colors.background,
    text: colors.white
  },
  fonts: configureFonts(fontConfig),
};

const App = () => {
  const { appTheme } = useTheme();
  useEffect(() => {
    changeNavigationBarColor(appTheme(colors.white, colors.background));
  }, [appTheme]);
  return (
    <NavigationContainer theme={appTheme(CustomDefaultTheme, CustomDarkTheme)}>
      <StatusBar backgroundColor={appTheme(colors.blue, colors.header)} barStyle="light-content" />
      <PaperProvider theme={appTheme(CustomDefaultTheme, CustomDarkTheme)}>
        <PaperThemeProvider theme={appTheme(CustomDefaultTheme, CustomDarkTheme)}>
          <Navigator />
        </PaperThemeProvider>
      </PaperProvider>
    </NavigationContainer>
  )
}

export default App;