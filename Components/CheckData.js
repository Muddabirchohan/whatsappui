import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CheckRedux } from '../Actions/action';


class CheckData extends Component {
    
    componentDidMount() {
        this.props.CheckRedux();
    }


render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}





const mapStateToProps = (state) => ({
    name: state.posts.name
});


const mapDispatchToProps = (dispatch) => ({
    CheckRedux: () => dispatch(CheckRedux())
});


export default connect(mapStateToProps, mapDispatchToProps)(CheckData);
