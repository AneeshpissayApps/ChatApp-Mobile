import React, { FunctionComponent } from 'react'
import { TouchableOpacity, View, ViewStyle } from 'react-native'
import { Avatar } from 'react-native-paper'
import { colors } from '../../assets/colors'
import { getAvatarLabel } from '../../utils/avatar'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import useTheme from '../../hooks/useTheme'

type UserAvatarProps = {
    user: string;
    selected?: boolean;
    icon?: string;
    style?: ViewStyle;
    color?: string;
    bottom?: number;
    onPress?: () => void;
}

export const UserAvatar: FunctionComponent<UserAvatarProps> = ({ user, selected, icon, style, color, bottom, onPress }) => {
    const { appTheme } = useTheme();
    return (
        <TouchableOpacity style={style} activeOpacity={0.5} onPress={onPress}>
            <Avatar.Text style={{ backgroundColor: color || colors.blue }} color={colors.white} size={45} label={getAvatarLabel(user)} />
            {selected && <View
                style={[{ backgroundColor: appTheme(colors.white, colors.background), position: "absolute", alignSelf: "flex-end", borderColor: appTheme(colors.white, colors.background), borderWidth: 2, borderRadius: 100, bottom: bottom || -5, right: -5 }]}
            >
                <Icon name={icon || "check"} style={{ backgroundColor: colors.green, borderRadius: 100 }} size={18} color={colors.white} />
            </View>}
        </TouchableOpacity>
    )
}
