import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import metrics from "../../metrics";

export const headerRightStyles = StyleSheet.create({
    searchDarkBar: {
        width: metrics.screenWidth * 0.84,
        backgroundColor: colors.header,
        elevation: 0,
        height: metrics.screenWidth * 0.15
    },
    searchLightBar: {
        width: metrics.screenWidth * 0.84,
        backgroundColor: colors.blue,
        elevation: 0,
        height: metrics.screenWidth * 0.15
    }
})