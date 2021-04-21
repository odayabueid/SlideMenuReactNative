import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TextInput, SafeAreaView, CheckBox } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
// import { CheckBox } from 'react-native-elements'


export default class LoginScreen extends Component {

  state = {
    email: ''
  }

  textHandler = (e) => {
    this.setState({
      email: e.target.value,
      checked: false
    })
  }



  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/logo-page.png')} style={styles.image}>
        </ImageBackground>
        <View style={styles.subContainer}>
        </View>
        <View style={styles.dialog}>
          <SafeAreaView style={styles.safeArea}>
            <Text style={styles.text}>البريد الالكتروني</Text>
            <TextInput
              style={styles.input}
              onChange={this.textHandler}
              value={this.state.email}
            />
            <Text style={styles.text}>كلمة المرور</Text>

            <TextInput
              style={styles.input}
        
              keyboardType="numeric"
              secureTextEntry={true}
            />
          </SafeAreaView>
          <View style={styles.checkboxContainer}>
            <Text style={styles.rememberPassword}>تذكر كلمة المرور</Text>
          </View>
          <Button mode="" style={styles.button} color="#fff" onPress={() => this.props.navigateToHome()}>
            <Text>تسجيل دخول</Text>
          </Button>
     

        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'flex-end'
  },
  text: {
    fontSize: 20,
    textAlign: 'right',
    padding: 13,
    color: "#939393"
  },
  subContainer: {
    flex: 0.8,
    backgroundColor: '#fff'
  },
  dialog: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: '2%',
    top: '49%',
    width: '93%',
    height: '48%',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    // marginTop: '93%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  safeArea: {
    textAlign: 'right'
  },
  button: {
    width: '95%',
    alignSelf: 'center',
    color: '#fff',
    backgroundColor: "#f3983d",
    
  },
  checkboxContainer: {
    marginTop:20,
    marginBottom: 20,
    flex:0.5
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  rememberPassword:{
    textAlign:'right',
    paddingRight:15,
    color:"#939393"
  }
});