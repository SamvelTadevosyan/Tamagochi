import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>About</Text>
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
});