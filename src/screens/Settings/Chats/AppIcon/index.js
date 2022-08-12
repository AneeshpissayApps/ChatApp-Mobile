import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { BackHandler, Image, ScrollView, View } from 'react-native'
import { Checkbox, IconButton, List, TouchableRipple } from 'react-native-paper';
import { colors } from '../../../../assets/colors';
import { AppIconComponent } from '../../../../components/AppIconComponent';
import metrics from '../../../../metrics';
import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';

const appIcons = [
    { title: "bluewhite", image: require("../../../../assets/images/bluewhite.png") },
    { title: "bluedark", image: require("../../../../assets/images/bluedark.png") },
    { title: "greenwhite", image: require("../../../../assets/images/greenwhite.png") },
    { title: "greendark", image: require("../../../../assets/images/greendark.png") },
    { title: "redwhite", image: require("../../../../assets/images/redwhite.png") },
    { title: "reddark", image: require("../../../../assets/images/reddark.png") },
    { title: "yellowwhite", image: require("../../../../assets/images/yellowwhite.png") },
    { title: "yellowdark", image: require("../../../../assets/images/yellowdark.png") },
    { title: "darkblue", image: require("../../../../assets/images/darkblue.png") },
    { title: "darkgreen", image: require("../../../../assets/images/darkgreen.png") },
    { title: "darkred", image: require("../../../../assets/images/darkred.png") },
    { title: "darkyellow", image: require("../../../../assets/images/darkyellow.png") },
    { title: "darkwhite", image: require("../../../../assets/images/darkwhite.png") },
    { title: "whiteblue", image: require("../../../../assets/images/whiteblue.png") },
    { title: "whitegreen", image: require("../../../../assets/images/whitegreen.png") },
    { title: "whitered", image: require("../../../../assets/images/whitered.png") },
    { title: "whiteyellow", image: require("../../../../assets/images/whiteyellow.png") },
    { title: "whitedark", image: require("../../../../assets/images/whitedark.png") },
    { title: "whitebluegradient", image: require("../../../../assets/images/whitebluegradient.png") },
    { title: "whitegreengradient", image: require("../../../../assets/images/whitegreengradient.png") },
    { title: "whiteredgradient", image: require("../../../../assets/images/whiteredgradient.png") },
    { title: "whiteyellowgradient", image: require("../../../../assets/images/whiteyellowgradient.png") },
    { title: "whitemixgradient", image: require("../../../../assets/images/whitemixgradient.png") },
    { title: "darkbluegradient", image: require("../../../../assets/images/darkbluegradient.png") },
    { title: "darkgreengradient", image: require("../../../../assets/images/darkgreengradient.png") },
    { title: "darkredgradient", image: require("../../../../assets/images/darkredgradient.png") },
    { title: "darkyellowgradient", image: require("../../../../assets/images/darkyellowgradient.png") },
    { title: "darkmixgradient", image: require("../../../../assets/images/darkmixgradient.png") },
];

const AppIcon = () => {
    const [filters, setFilters] = useState([
        { color: "blue", checked: true },
        { color: "green", checked: true },
        { color: "red", checked: true },
        { color: "yellow", checked: true },
        { color: "white", checked: true },
        { color: "dark", checked: true },
        { color: "mix", checked: true },
    ]);
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '60%'], []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton icon="filter" onPress={() => bottomSheetRef.current.expand()} style={{ position: "absolute", right: 0 }} />
            )
        })
    }, []);
    const changeFilters = (index) => {
        let newFilters = [...filters];
        newFilters[index].checked = !newFilters[index].checked;
        setFilters(newFilters);
    }
    return (
        <View style={{ flex: 1 }}>
            <BottomSheet
                ref={bottomSheetRef}
                enablePanDownToClose
                index={-1}
                snapPoints={snapPoints}
                containerStyle={{ zIndex: 1 }}
                onChange={handleSheetChanges}
            >
                <View style={{ flex: 1 }}>
                    {filters.map((filter, index) => (
                        <Checkbox.Item label={filter.color} onPress={() => changeFilters(index)} labelStyle={{ color: colors.background, textTransform: "capitalize" }} uncheckedColor={colors.background} color={colors.blue} status={filter.checked ? "checked" : "unchecked"} key={index.toString()} />
                    ))}
                </View>
            </BottomSheet>
            <ScrollView>
                {filters.filter((filter) => filter.checked === true).map((filter, index) => (
                    <AppIconComponent
                        appIcons={appIcons}
                        filter={filter.color}
                        key={index.toString()}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default AppIcon