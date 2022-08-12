import moment from 'moment';
import React from 'react'
import { ScrollView, View } from 'react-native'
import { List, Caption, IconButton } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from '../../assets/colors';
import { callStyles } from '../../styles/CallsStyles';

const Calls = () => {
  return (
    <ScrollView>
        <List.Item
          title="Mamma"
          description={<View style={callStyles.callIcon}>
            <Icon name="arrow-bottom-left" color={colors.red} size={20} />
            <Caption style={callStyles.callDate}>{moment().format("D MMMM, HH:mm")}</Caption>
            </View>}
          left={props => <List.Icon {...props} icon="folder" />}
          right={props => <IconButton icon="phone" color={colors.green} />}
        />
        <List.Item
          title="Mamma"
          description={<View style={callStyles.callIcon}>
            <Icon name="arrow-top-right" color={colors.green} size={20} />
            <Caption style={callStyles.callDate}>{moment().format("D MMMM, HH:mm")}</Caption>
            </View>}
          left={props => <List.Icon {...props} icon="folder" />}
          right={props => <IconButton icon="video" color={colors.green} />}
        />
    </ScrollView>
  )
}

export default Calls;