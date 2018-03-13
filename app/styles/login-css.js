import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    content: {
        flex: .7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    input: {
        height: 65,
        width: 350,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#c8c8c8',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingLeft: 30,
        paddingBottom: 15,
        fontSize: 30,
        color: "#c8c8c8"
    },
    buttonContainer: {
        height: 70,
        width: 350,
        borderWidth: 0,
        alignItems: 'center',
        backgroundColor: "#a3c644",
        padding: 20,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 30,
        color: 'white'
    },
    logoContainer: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: 'center',
        height: 80,
        width: 300
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 70,
        color: '#39c2d7'
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: 70
    }
});