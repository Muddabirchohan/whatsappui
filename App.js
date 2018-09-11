import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, Button, CheckBox, ScrollView, Picker, ActivityIndicator } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Header, SearchBar, Icon, Tile } from 'react-native-elements';
import store from './Store/store';
import { Provider } from 'react-redux';
import CheckData from './Components/CheckData';
import { DrawerNavigator } from 'react-navigation';
import axios from 'axios';





class MyHomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      pass: ''
    }
  }


  getEmail(e) {
    this.setState({ username: e })
  }

  getPass(e) {
    this.setState({ pass: e })
  }

  confirmLogin() {
    let { username, pass } = this.state;
    let { user, password } = this.props;
    if (username === '' || pass === '') {
      alert('empty fields')
    }
    else {
      if (username == user || pass == password) {
        alert('empty fields')
      }
      else {
        alert("does not match")
      }
    }
  }

  componentDidMount() {

  }


  render() {



    return (
      <Provider store={store}>
        <ScrollView >
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Chats', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />

          <SearchBar
            placeholder='Type Here...' />

          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>


          <Tile
            imageSrc={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
            title="Started Since 170"
            featured
            caption="quality matters"
          />


          {/* <View>
            <View>
              <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
              />
            </View>



            <View>
              <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('hello')} />
            </View>




            <View>
              <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
              />

            </View>

            <View>
              <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('hello')} />
            </View>




            <View>
              <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
              />

            </View>

            <View>
              <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('hello')} />
            </View>




            <View>
              <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
              />

            </View>

          </View> */}
          <CheckData />
        </ScrollView>
      </Provider>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Notifications', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <View>
          <Tile
            imageSrc={require('./images/download.jpg')}
            title="Lorem ipsum dolor sit amet, consectetur"
            caption="from lorem epsum"
            icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
          />
        </View>

        <View>
          <Tile
            imageSrc={require('./images/img1.jpg')}
            title="Lorem ipsum dolor sit amet, consectetur"
            caption="dowloaded one"
            icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
          />
        </View>

            <View>
          <Tile
            imageSrc={require('./images/download.jpg')}
            title="Lorem ipsum dolor sit amet, consectetur"
            caption="dowloaded one"
            icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
          />
        </View>


      </ScrollView>
    );
  }
}

class Registration extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Registration', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <FormLabel
        >Name</FormLabel>
        <FormInput
          placeholder="enter name"
        />
        <FormLabel
        >Email</FormLabel>
        <FormInput
          placeholder="enter email"
        />
        <FormLabel
        >Contact</FormLabel>
        <FormInput
          placeholder="enter contact"
        />
        <FormLabel
        >Password</FormLabel>
        <FormInput
          placeholder="enter password"
        />
        <Button
          title="Login"
        />
        <FormValidationMessage>Error message</FormValidationMessage>
      </View>
    );
  }
}

class NewsFeed extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://greencommunitylaundry.herokuapp.com/api/products')
      .then(res => res.json())
      .then(posts => {
        const post = posts;
        this.setState({ posts: post, isLoading: false });
      })
  }

  render() {


    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 , marginTop: 200 }}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }


    return (
      <ScrollView>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'NewsFeed', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        {/* <Text> News Feed  </Text> */}


        {this.state.posts.map(obj => {
          return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View>
                <Image
                  style={{ alignItems: 'center', height: 40, width: 40, marginLeft: 20, borderRadius: 20, marginTop: 20 }}
                  source={{ uri: `https://greencommunitylaundry.herokuapp.com/api/Images/${obj.image}` }}
                />
              </View>


              <View style={{ marginLeft: 25, marginTop: 20 }}>
                <Text> {obj._id} </Text>
              </View>

            </View>
          )
        })}
      </ScrollView>
    );
  }
}

export default App = DrawerNavigator({

  Feeds: {
    screen: NewsFeed
  },

  Registration: {
    screen: Registration,
  },

  Notifications: {
    screen: MyNotificationsScreen,
  },

  Home: {
    screen: MyHomeScreen,
  },

  Feeds: {
    screen: NewsFeed
  }

});