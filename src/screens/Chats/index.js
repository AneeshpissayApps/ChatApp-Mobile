import React from 'react'
import { ScrollView, View } from 'react-native'
import { TouchableRipple, FAB } from 'react-native-paper';
import { CustomList } from '../../components/List';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../assets/colors';
import { chatStyles } from '../../styles/ChatsStyles';

const Chats = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <TouchableRipple onPress={() => navigation.navigate("ChatView", { title: "Pappa" })} style={{marginTop: 5}}>
          <CustomList
            icon="check"
            user="Pappa"
            description="Hello Hello Hello Hello Hello Hello Hello Hello"
            date={new Date()}
          />
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate("ChatView", { title: "Pappa" })} style={{marginTop: 5}}>
          <CustomList
            icon="check"
            user="Pappa"
            description="Hello Hello Hello Hello Hello Hello Hello Hello"
            date={new Date()}
          />
        </TouchableRipple>
      </ScrollView>
      <FAB
          style={chatStyles.fab}
          icon="message-text"
          color={colors.white}
          onPress={() => navigation.navigate("SelectContact")}
        />
    </View>
  )
}

export default Chats;