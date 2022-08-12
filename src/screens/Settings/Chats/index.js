import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { Divider, List, RadioButton, Switch, Text } from 'react-native-paper';
import { CustomModal } from '../../../components/CustomModal';
import { changeTheme } from '../../../stores/features/theme/themeSlicer';
import { useAppDispatch, useAppSelector } from '../../../stores/hooks';

const Chats = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const navigation = useNavigation();
    const [themeModalVisible, setThemeModalVisible] = useState(false);
    const showModal = () => setThemeModalVisible(true);
    const hideModal = () => setThemeModalVisible(false);
    const themeSelector = useAppSelector((state) => state.theme.value);
    const dispatch = useAppDispatch();
    return (
        <ScrollView>
            <CustomModal visible={themeModalVisible} hideModal={hideModal}>
                <Text>Choose Theme</Text>
                <RadioButton.Group onValueChange={(value) => dispatch(changeTheme(value))} value={themeSelector}>
                    <RadioButton.Item label="System default" value="auto" />
                    <RadioButton.Item label="Light" value="light" />
                    <RadioButton.Item label="Dark" value="dark" />
                </RadioButton.Group>
            </CustomModal>
            <List.Section>
                <List.Subheader>Display</List.Subheader>
                <List.Item
                    title="Theme"
                    description={themeSelector === "auto" ? "System Default" : themeSelector === "light" ? "Light" : "Dark"}
                    left={props => <List.Icon icon="theme-light-dark" />}
                    onPress={showModal}
                />
                <List.Item
                    title="Wallpaper"
                    left={props => <List.Icon icon="wallpaper" />}
                />
                <List.Item
                    title="App Icon"
                    onPress={() => navigation.navigate("AppIcon")}
                    left={props => <List.Icon icon="whatsapp" />}
                />
            </List.Section>
            <Divider />
            <List.Section>
                <List.Subheader>Chat settings</List.Subheader>
                <List.Item
                    title="Enter key is send"
                    description="Enter key will send your message"
                    right={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}
                />
                <List.Item
                    title="Media visibility"
                    description="Show newly downloaded media in your phone's gallery"
                    right={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}
                />
                <List.Item
                    title="Font size"
                    description="Medium"
                />
            </List.Section>
            <Divider />
            <List.Item
                title="Chat backup"
                left={props => <List.Icon icon="cloud-upload" />}
            />
            <List.Item
                title="Chat history"
                left={props => <List.Icon icon="history" />}
            />
        </ScrollView>
    )
}

export default Chats;