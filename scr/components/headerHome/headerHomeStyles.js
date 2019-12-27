import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../styles/styles";

const styles = StyleSheet.create({
    main: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        height: SCREEN_HEIGHT * 0.08,
        width: SCREEN_WIDTH,
        top: 0,
        flexDirection: "row",
    },
    searchBar: {
        backgroundColor: "transparent",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        height: "100%",
    },
    button: {
        width: "90%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
    },
});

export { styles };
