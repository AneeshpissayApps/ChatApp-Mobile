import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { BackHandler, View } from 'react-native'
import { IconButton, Searchbar, TextInput } from 'react-native-paper';
import { colors } from '../../assets/colors';
import useTheme from '../../hooks/useTheme';
import { headerRightStyles } from '../../styles/HeaderRightStyles';

export const ContactHeaderRight = ({ searchQuery, onChangeSearch }) => {
    const [search, setSearch] = React.useState(false);
    const navigation = useNavigation();
    const { appTheme } = useTheme();
    useLayoutEffect(() => {
        if (search) {
            navigation.setOptions({
                headerTitle: "", headerLeft: () => (
                    <IconButton
                        icon="arrow-left"
                        onPress={() => {
                            onChangeSearch("");
                            setSearch(false);
                        }}
                    />
                )
            });
        }
        else {
            navigation.setOptions({
                headerTitle: "New Group", headerLeft: () => (
                    <IconButton
                        icon="arrow-left"
                        onPress={() => navigation.goBack()}
                    />
                )
            })
        }
    }, [search]);
    const backAction = () => {
        if (search) {
            onChangeSearch("");
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
    return (
        <View style={{ flexDirection: "row", display: "flex" }}>
            {search ? <TextInput
                placeholder="Search..."
                onChangeText={onChangeSearch}
                value={searchQuery}
                placeholderTextColor={colors.white}
                mode="flat"
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                selectionColor={colors.white}
                autoFocus={true}
                style={appTheme(headerRightStyles.searchLightBar, headerRightStyles.searchDarkBar)}
            />
                : <IconButton color={colors.white} icon="magnify" onPress={() => setSearch(true)} />}
        </View>
    )
}
