import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    StatusBar
} from 'react-native';

import ProgressBar from '../components/progress-bar'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToAbout = this.navigateToAbout.bind(this);
    }

    navigateToAbout(){
        const { navigate } = this.props.navigation;
        navigate('about', {screen: 'about'});
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar />
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.logo}>{"<"} </Text>
                        <Text style={styles.logoText}>epamer</Text>
                        <Text style={styles.logo}> {">"}</Text>
                    </View>
                    <TouchableHighlight
                        style={styles.about}
                        onPress={this.navigateToAbout}>
                        <Image
                            style={styles.aboutImage}
                            source={require('../images/about.png')} />
                    </TouchableHighlight>
                </View>
                <View style={styles.body}>
                    <Image
                        style={styles.programmerImage}
                        source={require('../images/programmer.png')} />
                    <View style={styles.progressBarSection}>
                        <ProgressBar
                            progress={0.15}
                            title={'trackTintColor'}
                            trackColor={'red'}/>
                        <ProgressBar
                            progress={0.35}
                            title={'trackTintColor'}
                            trackColor={'red'}/>
                        <ProgressBar
                            progress={0.5}
                            title={'trackTintColor'}
                            trackColor={'red'}/>
                        <ProgressBar
                            progress={0.78}
                            title={'trackTintColor'}
                            trackColor={'red'}/>
                    </View>
                </View>
                <View style={styles.TabNavigationSection}>
                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Text>Show Modal</Text>
                    </TouchableHighlight>
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
        backgroundColor: 'black',
    },
    logoContainer: {
        flexBasis: '90%',
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
    about: {
        flexBasis: '10%',
        height: 40,
        width: 40,
    },
    aboutImage: {
        flexBasis: '100%',
        width: 40
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
        margin: 'auto',
        flexBasis: '40%',
        display: 'flex',
        alignSelf: 'flex-end',
        justifyContent: 'space-around'
    },
    TabNavigationSection: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'green',
    }
});