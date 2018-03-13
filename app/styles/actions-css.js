import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    actionModal :{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "rgba(0,0,0,0.7)"
    },
    sectionCloseModal: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 30,
    },
    sectionTitle:{
        flex: 1,
    },
    sectionActions:{
        flex: 3,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logoContainer: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#39c2d7'
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    },
    text: {
        alignSelf: 'center',
        color: '#3ac0d6'
    },
    iconContainer: {
        marginTop: '5%',
        padding: 20,
        // backgroundColor: 'yellow',
        flexGrow: 1,
        flexBasis: '33.3%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        maxWidth: '100%',
    },
    iconText: {
        color: 'white'
    }
});