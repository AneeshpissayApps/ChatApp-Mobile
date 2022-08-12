import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native'
import { Avatar, Divider, IconButton, List } from 'react-native-paper';
import { colors } from '../../assets/colors';
import { settingsStyles } from '../../styles/SettingsStyles';
import { getAvatarLabel } from '../../utils/avatar';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
        <View style={{marginLeft: "auto", marginRight: "auto", marginTop: 25}}>
            <Avatar.Text 
                label={getAvatarLabel("Aneesh Pissay")}
                size={150}
                color={colors.white}
                style={{backgroundColor: colors.blue}}
            />
            <IconButton icon="camera" color={colors.white} size={30} style={{position: "absolute", right: 0, bottom: 0, backgroundColor: colors.green}} />
        </View>
        <List.Item
                title="Name"
                description="Aneesh Pissay"
                descriptionStyle={settingsStyles.descriptionStyle}
                left={props => <List.Icon icon="account" />}
                right={props => <List.Icon icon="pencil" color={colors.green} />}
        />
        <Divider />
        <List.Item
                title="About"
                description="Available"
                descriptionStyle={settingsStyles.descriptionStyle}
                left={props => <List.Icon icon="information-outline" />}
                right={props => <List.Icon icon="pencil"  color={colors.green} />}
                onPress={() => navigation.navigate("About")}
        />
        <Divider />
        <List.Item
                title="Phone"
                description="+91 6360584064"
                descriptionStyle={settingsStyles.descriptionStyle}
                left={props => <List.Icon icon="phone" />}
        />
    </View>
  )
}

export default Profile;