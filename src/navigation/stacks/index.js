import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTab from '../tabs';
import { stackDarkStyles, stackLightStyles } from '../../styles/NavigationStyles';
import { HeaderRight } from '../../components/HeaderRight';
import ChatView from '../../screens/Chats/ChatView';
import Settings from '../../screens/Settings';
import Profile from '../../screens/Profile';
import QRCode from '../../screens/QR code';
import Account from '../../screens/Settings/Account';
import Chats from '../../screens/Settings/Chats';
import Notifications from '../../screens/Settings/Notifications';
import StorageAndData from '../../screens/Settings/StorageAndData';
import Help from '../../screens/Settings/Help';
import About from '../../screens/Profile/About';
import Privacy from '../../screens/Settings/Account/Privacy';
import StarredMessages from '../../screens/StarredMessags';
import { StarredHeaderRight } from '../../components/StarredMessage/HeaderRight';
import LinkedDevices from '../../screens/LinkedDevices';
import AppIcon from '../../screens/Settings/Chats/AppIcon';
import SplashScreen from '../../screens/SplashScreen';
import useTheme from '../../hooks/useTheme';
import SelectContact from '../../screens/SelectContact';
import NewGroup from '../../screens/NewGroup';
import NewBroadcast from '../../screens/NewBroadcast';
import { ContactHeaderRight } from '../../components/ContactHeaderRight';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
    const { appTheme } = useTheme();
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={appTheme(stackLightStyles, stackDarkStyles)}>
            <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
            <Stack.Screen name="Home" options={{ headerTitle: "ChatApp", headerRight: (props) => <HeaderRight /> }} component={HomeTab} />
            <Stack.Screen name="ChatView" component={ChatView} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="QR Code" component={QRCode} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Chats" component={Chats} />
            <Stack.Screen name="SelectContact" options={{ headerTitle: "Select Contact" }} component={SelectContact} />
            <Stack.Screen name="NewGroup" options={{ headerTitle: "New Group", headerRight: (props) => <ContactHeaderRight searchQuery={searchQuery} onChangeSearch={onChangeSearch} /> }}>
                {() => <NewGroup user={searchQuery} />}
            </Stack.Screen>
            <Stack.Screen name="NewBroadcast" options={{ headerTitle: "New Broadcast", headerRight: (props) => <ContactHeaderRight searchQuery={searchQuery} onChangeSearch={onChangeSearch} /> }}>
                {() => <NewBroadcast user={searchQuery} />}
            </Stack.Screen>
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Storage and data" component={StorageAndData} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Privacy" component={Privacy} />
            <Stack.Screen name="Linked devices" component={LinkedDevices} />
            <Stack.Screen name="AppIcon" options={{ headerTitle: "App Icons" }} component={AppIcon} />
            <Stack.Screen name="Starred messages" options={{ headerRight: (props) => <StarredHeaderRight /> }} component={StarredMessages} />
        </Stack.Navigator>
    )
}

export default HomeStackScreen;