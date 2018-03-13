import React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TouchableHighlight
} from 'react-native';

import {styles} from '../styles/about-css';

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