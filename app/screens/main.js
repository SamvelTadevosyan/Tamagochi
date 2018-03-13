import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Button,
    Animated
} from 'react-native';

import ProgressBar from '../components/progress-bar'
import Actions from './actions';
import {styles} from '../styles/main-css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleActionsVisibility = this.handleActionsVisibility.bind(this);
        this.state = {
            actionsVisible: false,
            fadeInAnimation: new Animated.Value(0),
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
    }

    handleActionsVisibility(){
        this.setState({
            actionsVisible: true
        })
    }

    render(){
        let { fadeInAnimation } = this.state;

        return(
            <View style={styles.container}>
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
                        <Image
                            style={styles.programmerImage}
                            source={require('../images/programmer.png')} />
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