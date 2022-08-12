import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const fabStyles = StyleSheet.create({
    fab: {
        position: "absolute",
        margin: 16,
        bottom: 0,
        right: 0,
        backgroundColor: colors.blue,
        zIndex: 100
    }
});