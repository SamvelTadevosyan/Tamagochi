import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cccccc',
        flexDirection: 'column',
    },
    header: {
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    logoContainer: {
        flexBasis: '80%',
        display: "flex",
        flexDirection: "row",
        // alignSelf: "center",
        justifyContent: 'center',
        height: 40,
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#39c2d7'
    },
    logoText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
});