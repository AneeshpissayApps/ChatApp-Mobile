import React, { FunctionComponent } from 'react'
import { BackHandler, Image, ImageSourcePropType, View } from 'react-native';
import { List, TouchableRipple } from 'react-native-paper';
import { changeIcon } from 'react-native-change-icon';
import { colors } from '../../assets/colors';
import metrics from '../../metrics';

type AppIconsProps = {
    appIcons: [{title: string, image: ImageSourcePropType}];
    filter?: string;
}

export const AppIconComponent: FunctionComponent<AppIconsProps> = ({ appIcons, filter }) => {
    return (
        <View>
            <List.Subheader style={{textTransform: "capitalize"}}>{filter || "All"} Icons</List.Subheader>
            <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
                {appIcons.filter((icon) => icon.title.includes(filter || "")).map((icon, index) => (
                    <View key={index.toString()}>
                        <TouchableRipple onPress={() => changeIcon(icon.title).then((value) => {
                            if (JSON.parse(value)) {
                                setTimeout(() => {
                                    BackHandler.exitApp();
                                }, 1000);
                            }
                        }).catch((reason) => console.log(reason))} style={{ borderColor: colors.white, borderWidth: 1, alignSelf: "flex-start", padding: 5, borderRadius: 10, margin: 20 }}>
                            <Image
                                source={icon.image}
                                style={{ width: metrics.screenWidth * 0.1, height: metrics.screenWidth * 0.1 }}
                            />
                        </TouchableRipple>
                    </View>
                ))}
            </View>
        </View>
    )
}
