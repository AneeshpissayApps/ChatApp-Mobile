import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { BackHandler, useColorScheme, View } from 'react-native'
import { Divider, IconButton, Menu, Searchbar } from 'react-native-paper';
import { colors } from '../../assets/colors';
import { headerRightStyles } from '../../styles/HeaderRightStyles';

export const HeaderRight = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [search, setSearch] = React.useState(false);
  const theme = useColorScheme();
  const backAction = () => {
    if (search) {
      setSearch(false);
      return true;
    }
    else {
      return false;
    }
  }
  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [search]);
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const goToNewGroup = () => {
    closeMenu();
    navigation.navigate("NewGroup");
  }
  const goToNewBroadcast = () => {
    closeMenu();
    navigation.navigate("NewBroadcast");
  }
  const goToSettings = () => {
    closeMenu();
    navigation.navigate("Settings");
  }
  const goToStarredMesssages = () => {
    closeMenu();
    navigation.navigate("Starred messages");
  }
  const goToLinkedDevices = () => {
    closeMenu();
    navigation.navigate("Linked devices");
  }
  return (
    <View style={{ flexDirection: "row", display: "flex" }}>
      {search ? <Searchbar
        placeholder="Search..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon="arrow-left"
        iconColor={colors.white}
        placeholderTextColor={colors.white}
        selectionColor={colors.white}
        onIconPress={() => setSearch(false)}
        autoFocus={true}
        style={theme === "dark" ? headerRightStyles.searchDarkBar : headerRightStyles.searchLightBar}
      />
        : <IconButton color={colors.white} icon="magnify" onPress={() => setSearch(true)} />}
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<IconButton color={colors.white} icon="dots-vertical" onPress={openMenu} />}>
        <Menu.Item onPress={goToNewGroup} title="New group" />
        <Menu.Item onPress={goToNewBroadcast} title="New broadcast" />
        <Menu.Item onPress={goToLinkedDevices} title="Linked Devices" />
        <Menu.Item onPress={goToStarredMesssages} title="Starred messages" />
        <Menu.Item onPress={goToSettings} title="Settings" />
      </Menu>
    </View>
  )
}
