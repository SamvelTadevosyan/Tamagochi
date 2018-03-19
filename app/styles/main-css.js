import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    body: {
        flexGrow: 1,
        alignItems: 'center',
        flexDirection: "column",
    },
    programmerImage: {
        flexBasis: '40%',
        width: 250,
    },
    progressBarSection: {
        width: '90%',
        // margin: 'auto',
        flexBasis: '40%',
        display: 'flex',
        alignSelf: 'flex-end',
        justifyContent: 'space-around'
    },
    TabNavigationSection: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#a3c644',
    },
    bottomButtons: {
        flex: 1,
        alignItems: 'center',
    },
    bottomButtonsText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '400',
    }
});