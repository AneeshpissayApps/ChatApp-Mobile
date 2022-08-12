import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { fonts } from "../../assets/fonts";
import metrics from "../../metrics";

export const chatStyles = StyleSheet.create({
    chatIcon: {
        display: "flex",
        flexDirection: "row",
    },
    chatDescription: {
        marginLeft: 10,
        fontFamily: fonts.light,
    },
    listDescription: {
        width: metrics.screenWidth * 0.5
    },
    fab: {
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: 16,
        backgroundColor: colors.blue
    }
})