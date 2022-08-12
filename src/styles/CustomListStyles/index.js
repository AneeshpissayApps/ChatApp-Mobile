import { StyleSheet } from "react-native";
import { fonts } from "../../assets/fonts";
import metrics from "../../metrics";

export const customListStyles = StyleSheet.create({
    listContainer: {
        margin: 10, 
        display: "flex", 
        flexDirection: "row"
    },
    listDate: {
        position: 'absolute', 
        right: 0
    },
    listInfoContainer: {
        marginLeft: 20
    },
    listInfoTitle: {
        fontFamily: fonts.medium, 
        fontSize: 15
    },
    listInfoDescriptionContainer: {
        display: "flex", 
        flexDirection: "row"
    },
    listInfoDescription: {
        fontFamily: fonts.light, 
        fontSize: 13, 
        marginLeft: 10,
        width: metrics.screenWidth * 0.7
    } 
});