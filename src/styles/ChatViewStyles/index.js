import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import metrics from "../../metrics";

export const chatViewStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    lockImage: { 
        width: 45, 
        height: 45, 
        borderRadius: 100, 
        overlayColor: colors.background, 
        position: "absolute", 
        right: 15, 
        bottom: 120 
    },
    chatViewFooter: {
        position: "absolute", 
        bottom: 10, 
        display: "flex", 
        flexDirection: "row", 
        alignSelf: "center"
    },
    chatViewFooterTextField: {
        backgroundColor: colors.grey, 
        color: colors.background, 
        borderRadius: 5, 
        height: 60, 
        width: metrics.screenWidth * 0.8
    },
    chatViewSendIcon: {
        backgroundColor: colors.grey,
    },
    chatRecordingFooter: {
        margin: 10, 
        position: "absolute", 
        bottom: 0, 
        justifyContent: "center",
    },
    chatRecordingFooterContainer: {
        display: "flex", 
        flexDirection: "row",
        alignItems: "flex-end"
    },
    chatFooterAutoRecordContainer: {
        backgroundColor: colors.grey,
        height: metrics.screenHeight * 0.15,
        position: "absolute",
        bottom: 0, 
        justifyContent: "flex-end",
        width: metrics.screenWidth,
        zIndex: 1
    }
})