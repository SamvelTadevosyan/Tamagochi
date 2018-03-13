import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import {styles} from '../styles/actions-css'

export default class Actions extends Component {
    constructor(props){
        super(props);
        this.state = {
            actionsVisible: this.props.visible,
            iconContainerWidth: 0,
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

    getIconContainerWidth(event) {
        console.log(event.nativeEvent);
        console.log('before', this.state.iconContainerWidth);
        this.setState({iconContainerWidth: event.nativeEvent.layout.width});
        console.log(this.state.iconContainerWidth);
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
                            <View style={styles.close}>
                                <Icon name="times-circle" size={40} color="white" />
                            </View>
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
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ffffff',
                                    borderRadius: this.state.iconContainerWidth,
                                }}
                                onLayout={(event) => this.getIconContainerWidth(event) }
                            >
                                <Icon name="home" size={50} color="white" />
                            </View>
                            <Text style={styles.iconText}>Home</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={styles.icon}>
                                <Icon name="briefcase" size={50} color="white" />
                            </View>
                            <Text style={styles.iconText}>Work</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={styles.icon}>
                                <Icon name="star" size={50} color="white" />
                            </View>
                            <Text style={styles.iconText}>ASMT</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={styles.icon}>
                                <Icon name="comments" size={50} color="white" />
                            </View>
                            <Text style={styles.iconText}>Soft</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={styles.icon}>
                                <Icon name="code" size={50} color="white" />
                            </View>
                            <Text style={styles.iconText}>Hard</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={styles.icon}>
                                <Icon name="book" size={50} color="white" />
                            </View>
                            <Text style={styles.iconText}>Docs</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}