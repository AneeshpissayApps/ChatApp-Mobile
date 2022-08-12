import moment from 'moment';
import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { Avatar, Caption, IconButton, Text } from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from '../../assets/colors';
import { customListStyles } from '../../styles/CustomListStyles';
import { getAvatarLabel } from '../../utils/avatar';
import { UserAvatar } from '../UserAvatar';

type CustomListProps = {
  avatar?: string;
  avatarLabelColor?: string;
  date: Date;
  user: string;
  icon: string;
  description: string;
  selected?: boolean;
}

export const CustomList: FunctionComponent<CustomListProps> = ({ date, user, icon, description, selected }) => {
  return (
    <View style={customListStyles.listContainer}>
      <UserAvatar user={user} selected={selected} />
      <Caption style={customListStyles.listDate}>{moment(date).format("hh:mm A")}</Caption>
      <View style={customListStyles.listInfoContainer}>
        <Text style={customListStyles.listInfoTitle}>{user}</Text>
        <View style={customListStyles.listInfoDescriptionContainer}>
          <Icon name={icon} color={colors.blue} size={18} />
          <Text numberOfLines={1} style={customListStyles.listInfoDescription}>{description}</Text>
        </View>
      </View>
    </View>
  )
}
