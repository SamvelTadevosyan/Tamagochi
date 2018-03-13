import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    header: {
        paddingTop: 15,
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'black',
    },
    logoContainer: {
        flexBasis: '100%',
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

