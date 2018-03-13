import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    AsyncStorage,
    Animated
} from 'react-native';

import {styles} from '../styles/login-css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            fadeInAnimation: new Animated.Value(0),
            passwordInput: new Animated.Value(0),
        };
        this._onPressLogin = this._onPressLogin.bind(this)
    }

    componentDidMount() {
        Animated.parallel([
            Animated.spring(
                this.state.fadeInAnimation,
                {
                    toValue: 1,
                    duration: 1500,
                }
            ),
            Animated.spring(
                this.state.passwordInput,
                {
                    toValue: 1,
                    duration: 2000,
                }
            )
        ]).start();
    }

    _onPressLogin() {
        const { username, password } = this.state;
        const { navigate } = this.props.navigation;

        // AsyncStorage.setItem('user', JSON.stringify({
        //     name: 'user',
        //     password: 'user',
        // }), () => {
        //     alert('data added');
        // });

        if (username === "" && password === "") {
            alert('Please fill your data')
        } else {
            AsyncStorage.getItem('user', (error, result) => {
                const data = JSON.parse(result);
                if(username !== data.name){
                    alert('User by name '+username+" does not exits");
                }else{
                    if(password !== data.password){
                        alert("Password is wrong");
                    }else{
                        Keyboard.dismiss();
                        this.setState({
                            username: '',
                            password: '',
                        });
                        navigate('loggedInApp', {screen: 'loggedInApp'});
                    }
                }
            });
        }
    }

    render() {
        const { fadeInAnimation, passwordInput } = this.state;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAvoidingView style={styles.container}   behavior="padding">
                    <Animated.View style={{
                        transform: [{
                            translateY: fadeInAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-300, 0]
                            }),
                        }],
                    }}>
                        <View style={styles.logoContainer}>
                            <Text style={styles.logo}>{"<"} </Text>
                            <Text style={styles.logoText}>epamer</Text>
                            <Text style={styles.logo}> {">"}</Text>
                        </View>
                    </Animated.View>
                    <View style={styles.content}>
                        <View style={styles.inputContainer}>
                            <Animated.View style={{
                                transform: [{
                                    translateX: fadeInAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [150, 0]
                                    }),
                                }],
                            }}>
                                <TextInput
                                    value={this.state.username}
                                    style={styles.input}
                                    returnKeyType={"next"}
                                    placeholder="Username"
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    onChangeText={(username) => this.setState({username})}
                                />
                            </Animated.View>
                            <Animated.View style={{
                                transform: [{
                                    translateX: passwordInput.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [180, 0]
                                    }),
                                }],
                            }}>
                                <TextInput
                                    value={this.state.password}
                                    style={styles.input}
                                    secureTextEntry={true}
                                    returnKeyType={"go"}
                                    placeholder="**********"
                                    ref={(input) => this.passwordInput = input}
                                    onSubmitEditing={this._onPressLogin}
                                    onChangeText={(password) => this.setState({password})}
                                />
                            </Animated.View>
                            <Animated.View style={{
                                transform: [{
                                    translateY: fadeInAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [150, 0]
                                    }),
                                }],
                            }}>
                                <TouchableHighlight
                                    style={styles.buttonContainer}
                                    onPress={this._onPressLogin}
                                >
                                    <Text style={styles.buttonText}> LOGIN </Text>
                                </TouchableHighlight>
                            </Animated.View>
                        </View>
                    </View>

                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }
}

