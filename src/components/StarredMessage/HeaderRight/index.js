import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { BackHandler, useColorScheme, View } from 'react-native'
import { IconButton, Menu, Searchbar } from 'react-native-paper';
import { colors } from '../../../assets/colors';
import { headerRightStyles } from '../../../styles/HeaderRightStyles';

export const StarredHeaderRight = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [search, setSearch] = React.useState(false);
  const theme = useColorScheme();
  const backAction = () => {
    if(search) {
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
  const goToSettings = () => {
    closeMenu();
    navigation.navigate("Settings");
  }
  const goToStarredMesssages = () => {
    closeMenu();
    navigation.navigate("Starred messages");
  }
  return (
    <View style={{flexDirection: "row", display: "flex"}}>
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
          anchor={<IconButton  color={colors.white} icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item onPress={() => {}} title="Unstar all" />
        </Menu>
    </View>
  )
}
