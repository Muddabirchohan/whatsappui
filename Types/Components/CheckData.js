import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {CheckRedux} from '../../Actions/action';

 class CheckData extends Component {
  
  componentDidMount(props){
      this.props.Checker();
  }
    render() {
    return (
<View> 
{this.props.name}
    </View>
    )
  }
}


const mapStateToProps = (state) => ({
  name: state.posts.name
  });
  
  
  const mapDispatchToProps = (dispatch) => ({
Checker: ()=> dispatch(CheckRedux())
  });



export default connect (mapStateToProps,mapDispatchToProps)(CheckData)