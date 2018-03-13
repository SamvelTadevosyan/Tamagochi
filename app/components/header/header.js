import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import {styles} from "../../styles/header-css";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToAbout = this.navigateToAbout.bind(this);
    }

    navigateToAbout(){
        console.log(this.props);
        // const { navigate } = this.props.navigation;
        // navigation.navigate('about', {screen: 'about'});
    }

    render(){
        return(
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>{"<"} </Text>
                    <Text style={styles.logoText}>epamer</Text>
                    <Text style={styles.logo}> {">"}</Text>
                </View>
            </View>
        );
    }
}

