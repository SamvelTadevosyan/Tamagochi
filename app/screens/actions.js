import React, {Component} from 'react';
import {
    StyleSheet,
    Modal,
    Text,
    TouchableHighlight,
    View,
    Image
} from 'react-native';

export default class Actions extends Component {
    constructor(props){
        super(props);
        this.state = {
            actionsVisible: this.props.visible,
        };
    }

    componentWillReceiveProps(props){
        this.setState({
            actionsVisible: props.visible
        })
    }

    hideActions() {
        this.setState({actionsVisible: false});
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.actionsVisible}
                >
                <View style={styles.actionModal}>
                    <View style={styles.sectionCloseModal}>
                        <TouchableHighlight
                            onPress={() => {
                                this.hideActions();
                            }}>
                            <Image
                                width={40}
                                height={40}
                                style={styles.close}
                                source={require('../images/actions/example.png')} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.sectionTitle}>
                        <View style={styles.logoContainer}>
                            <Text style={styles.logo}>{"<"} </Text>
                            <Text style={styles.logoText}>Username</Text>
                            <Text style={styles.logo}> {">"}</Text>
                        </View>
                        <Text style={styles.text}>Junior Software Engineer</Text>
                    </View>
                    <View style={styles.sectionActions}>
                        <View style={styles.iconContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../images/actions/example.png')} />
                            <Text style={styles.iconText}>Home</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../images/actions/example.png')} />
                            <Text style={styles.iconText}>Work</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../images/actions/example.png')} />
                            <Text style={styles.iconText}>ASMT</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../images/actions/example.png')} />
                            <Text style={styles.iconText}>Soft</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../images/actions/example.png')} />
                            <Text style={styles.iconText}>Hard</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../images/actions/example.png')} />
                            <Text style={styles.iconText}>Docs</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    actionModal :{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "rgba(0,0,0,0.7)"
    },
    sectionCloseModal: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
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
        // borderBottom: 1,
        // borderColor: '#ffffff',
        // borderRadius: 100,
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