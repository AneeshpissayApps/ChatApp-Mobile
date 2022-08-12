import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Calls from '../../screens/Calls';
import Chats from '../../screens/Chats';
import Status from '../../screens/Status';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { barDarkStyles, barLightStyles } from '../../styles/NavigationStyles';
import { colors } from '../../assets/colors';
import { CustomCamera } from '../../components/CustomCamera';
import useTheme from '../../hooks/useTheme';

const Tab = createMaterialTopTabNavigator();

const HomeTab = () => {
  const { appTheme } = useTheme();
  return (
    <Tab.Navigator initialRouteName='Chats' backBehavior="history" screenOptions={appTheme(barLightStyles, barDarkStyles)}>
      <Tab.Screen name="Camera" options={{tabBarShowLabel: false, tabBarContentContainerStyle: {display: "none"}, tabBarIcon: ({}) => (
        <Icon
            name="camera"
            color={colors.white}
            size={22}
        />
        )}} component={CustomCamera} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
}

export default HomeTab;