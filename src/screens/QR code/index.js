import React, { useLayoutEffect, useRef } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { barDarkStyles, barLightStyles } from '../../styles/NavigationStyles';
import { useColorScheme, View } from 'react-native';
import MyCode from './My Code';
import ScanCode from './Scan Code';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import Share from 'react-native-share';


const Tab = createMaterialTopTabNavigator();

const QRCode = () => {
  const theme = useColorScheme();
  const navigation = useNavigation();
  const qrCodeRef = useRef(null);
  const saveQrToDisk = () => {
    qrCodeRef.current.capture().then((uri) => {
      Share.open({
        url: uri
      }).then((value) => console.log(value))
    })
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", display: "flex" }}>
          <IconButton icon="share-variant" onPress={saveQrToDisk} />
        </View>
      )
    })
  }, []);
  return (
    <Tab.Navigator initialRouteName='Chats' screenOptions={theme === "dark" ? barDarkStyles : barLightStyles}>
      <Tab.Screen name="My Code" component={MyCode} initialParams={{ qrCodeRef }} />
      <Tab.Screen name="Scan Code" component={ScanCode} />
    </Tab.Navigator>
  );
}

export default QRCode;