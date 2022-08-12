import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const chatHeaderTitleStyles = StyleSheet.create({
    chatHeaderContainer: {
        display: "flex", 
        flexDirection: "row"
    },
    chatHeaderAvatar: {
        backgroundColor: colors.green
    },
    chatHeaderInfoContainer: {
        marginLeft: 10
    },
    chatHeaderInfoTitle: {
        color: colors.white
    },
    chatHeaderInfoCaption: {
        color: colors.white
    }
});