import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Animated,
    AsyncStorage
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import ProgressBar from '../components/progress-bar'
import Actions from './actions';
import {styles} from '../styles/main-css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleActionsVisibility = this.handleActionsVisibility.bind(this);
        this.takePicture = this.takePicture.bind(this);
        this.state = {
            actionsVisible: false,
            fadeInAnimation: new Animated.Value(0),
            pictureSource: require('../images/programmer.png'),
            backgroundColor: '#cccccc'
        };
    }

    componentDidMount() {
        Animated.spring(
            this.state.fadeInAnimation,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start();
        AsyncStorage.getItem('position', (error, result) => {
            const position = JSON.parse(result);
            console.log('position', position);
            fetch('http://api.openweathermap.org/data/2.5/weather?APPID=7e75cc831ea4f70ca99d37e6bd3baf97&lat='
                +position.lat+
                '&lon='+position.lon)
                .then((response) => response.json())
                .then((responseJson) => {
                    let currentTime = (new Date).getTime();
                    if(currentTime >= responseJson.sys.sunrise && currentTime <= responseJson.sys.sunrise){
                        this.setState({
                            backgroundColor: '#a09d9d',
                        });
                    }
                    console.log(responseJson);
                })
                .catch((error) => {
                    console.error(error);
                });
        });

    }

    handleActionsVisibility(){
        this.setState({
            actionsVisible: true
        })
    }

    takePicture(){
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
                pictureSource: source
            });
        });
    }

    render(){
        let { fadeInAnimation, pictureSource, backgroundColor } = this.state;

        return(
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: backgroundColor
            }}>
                <Actions visible={this.state.actionsVisible}/>
                <View style={styles.body}>
                    <Animated.View
                        style={{
                            opacity: fadeInAnimation,
                            transform: [{
                                translateX: fadeInAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [150, 0]
                                }),
                            }],
                        }}
                    >
                        <TouchableHighlight
                            onPress={() => {
                                this.takePicture();
                            }}>
                            <Image
                                style={styles.programmerImage}
                                source={pictureSource} />
                        </TouchableHighlight>
                    </Animated.View>
                    <Animated.View
                        style={{
                            width: "100%",
                            opacity: fadeInAnimation,
                            transform: [{
                                translateX: fadeInAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-150, 0]
                                }),
                            }],
                        }}
                    >
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
                    </Animated.View>

                </View>
                <View style={styles.TabNavigationSection}>
                    <TouchableHighlight
                        style={styles.bottomButtons}
                        onPress={() => {
                            this.handleActionsVisibility();
                        }}>
                        <Text style={styles.bottomButtonsText}>Actions</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}