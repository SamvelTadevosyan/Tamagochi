import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    TouchableHighlight
} from 'react-native';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToMain = this.navigateToMain.bind(this);
    }

    navigateToMain(){
        const { navigate } = this.props.navigation;
        navigate('main', {screen: 'main'});
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar />
                <View style={styles.header}>
                    <TouchableHighlight
                        onPress={this.navigateToMain}>
                        <Image
                            style={styles.backIcon}
                            source={require('../images/chevron-left.png')} />
                    </TouchableHighlight>
                    <View style={styles.logoContainer}>
                        <Text style={styles.logo}>{"<"} </Text>
                        <Text style={styles.logoText}>About</Text>
                        <Text style={styles.logo}> {">"}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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