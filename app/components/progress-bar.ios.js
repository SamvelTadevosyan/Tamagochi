import React, {Component} from 'react';
import {
    View,
    Text,
    ProgressViewIOS
} from 'react-native';

export default class ProgressBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text>{this.props.title}</Text>
                <ProgressViewIOS
                    progress={this.props.progress}
                    progressViewStyle={'bar'}
                    trackTintColor={this.props.trackColor}
                />
            </View>
        )
    }
}