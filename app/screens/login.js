import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this._onPressLogin = this._onPressLogin.bind(this)
    }
    _onPressLogin() {
        const { navigate } = this.props.navigation;
        navigate('loggedInApp', {screen: 'loggedInApp'});
        // if (this.state.username === "" && this.state.password === "") {
        //     alert('Please fill your data')
        // } else {
        //     Keyboard.dismiss();
        //     navigate('loggedInApp', {screen: 'loggedInApp'});
        //     this.setState({
        //         username: '',
        //         password: '',
        //     })
        // }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.logo}>{"<"} </Text>
                        <Text style={styles.logoText}>epamer</Text>
                        <Text style={styles.logo}> {">"}</Text>
                    </View>
                    <KeyboardAvoidingView style={styles.content} behavior="padding">
                        <View style={styles.inputContainer} >
                            <TextInput
                                value={this.state.username}
                                style={styles.input}
                                returnKeyType={"next"}
                                placeholder="Username"
                                onSubmitEditing={() => this.passwordInput.focus()}
                                onChangeText={(username) => this.setState({username})}
                            />
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
                            <TouchableHighlight
                                style={styles.buttonContainer}
                                onPress={this._onPressLogin}
                            >
                                <Text style={styles.buttonText}> LOGIN </Text>
                            </TouchableHighlight>
                        </View>
                    </KeyboardAvoidingView>

                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
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

