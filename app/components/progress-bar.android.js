import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ProgressBarAndroid
} from 'react-native';

export default class ProgressBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text>{this.props.title}</Text>
                <ProgressBarAndroid
                    style={styles.progressBar}
                    indeterminate={false}
                    progress={this.props.progress}
                    styleAttr={'Horizontal'}
                    color={this.props.trackColor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    progressBar: {
        margin: 'auto',
        width: '90%',
    }
});