import { NativeModules, Platform } from 'react-native';

const { NavigationBar } = NativeModules;

const changeNavigationBarColor = (
  color = String,
  light = false,
  animated = true,
) => {
  if (Platform.OS === 'android') {
    const LightNav = light ? true : false;
    NavigationBar.changeNavigationBarColor(color, LightNav, animated);
  }
};

export { changeNavigationBarColor };