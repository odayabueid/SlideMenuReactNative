import React, { Component } from 'react'
import { Button, View, Text, Image, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { Appbar, Badge } from 'react-native-paper';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';


export default class NotificationsScreen extends Component {

  state = {
    dummyTasksData: [
      { Title: "تم اعتماد دراية جدوى لمشروع والتابع لادارة يرجى المراجعة والاعتماد", ID: 1 },
      { Title: "اعتماد بطاقة المشروع", ID: 2 },
      { Title: "الموافقة على مسودة العقد", ID: 3 },
      { Title: "تم اعتماد دراية جدوى لمشروع والتابع لادارة يرجى المراجعة والاعتماد", ID: 4 },
      { Title: "اعتماد بطاقة المشروع", ID: 5 },
      { Title: "الموافقة على مسودة العقد", ID: 6 },
      { Title: "تم اعتماد دراية جدوى لمشروع والتابع لادارة يرجى المراجعة والاعتماد", ID: 7 },
      { Title: "اعتماد بطاقة المشروع", ID: 8 },
      { Title: "الموافقة على مسودة العقد", ID: 9 },
      { Title: "تم اعتماد دراية جدوى لمشروع والتابع لادارة يرجى المراجعة والاعتماد", ID: 10 },
      { Title: "اعتماد بطاقة المشروع", ID: 11 },
      { Title: "الموافقة على مسودة العقد", ID: 12 },
      { Title: "تم اعتماد دراية جدوى لمشروع والتابع لادارة يرجى المراجعة والاعتماد", ID: 13 },
      { Title: "اعتماد بطاقة المشروع", ID: 14 },
      { Title: "الموافقة على مسودة العقد", ID: 15 },
      { Title: "تم اعتماد دراية جدوى لمشروع والتابع لادارة يرجى المراجعة والاعتماد", ID: 16 },
      { Title: "اعتماد بطاقة المشروع", ID: 17 },
      { Title: "الموافقة على مسودة العقد", ID: 18 },
    ],
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Appbar.Header style={styles.header}>
            <Appbar.Action icon={({ size, color }) => (
              <View>
                <Badge style={styles.badgeBell} size={16}>3</Badge>
                <SimpleLineIcons name="bell" size={20} color="black" style={{paddingTop:3}} />
              </View>
              // <Image
              //   source={require('../assets/bell.png')}
              //   style={{ width: size, height: size, tintColor: color }}
              // />
            )} />
            <Appbar.Content title="التنبيهات" style={styles.content} />
            <AntDesign name="close" size={24} color="black" onPress={() => {
              this.props.navigation.navigate('الرئيسية')
            }} />
            {/* <Appbar.Action icon="User" onPress={() => {
              // this.props.navigation.openDrawer()
              this.props.navigation.navigate('الرئيسية')
            }} /> */}
          </Appbar.Header>
        </View>
        <View style={styles.notifCardContainer}>
          <SafeAreaView style={styles.notifcontainer}>
            <ScrollView style={styles.scrollView}>
              {this.state.dummyTasksData.map(element => {
                return (
                  <View key={element.ID} style={styles.notifCard}>
                    <View style={styles.innerCard}>
                      <Text style={styles.notifTitle}>{element.Title}</Text>
                      <SimpleLineIcons name="bell" size={20} color="black" style={styles.bell} />

                    </View>
                  </View>
                )
              })}
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    backgroundColor: '#f8f9fb'

    // alignItems: 'center',
    // justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
    paddingRight: "5%",
    fontWeight: 'bold',
    textAlign: 'right'
  },
  header: {
    // position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: "#fff",
  },
  notifCardContainer: {
    top: '1%',
    backgroundColor: "#f8f9fb",
    minHeight: "75%"
  },
  notifcontainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // backgroundColor: 'pink',
    // marginHorizontal: 20,
  },
  notifCard: {
    backgroundColor: '#fff',
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    minHeight: '8%',
  },
  innerCard: {
    flexDirection: "row",
    justifyContent: 'flex-end'
    // alignContent: "space-between",
  },
  notifTitle: {
    width: '70%',
    textAlign: 'right',
    padding: 10

  },
  bell: {
    padding: 10
  },
  badgeBell:{
    position:'absolute',
    marginTop:-5,
    backgroundColor:'#f3983d',
    color:'#fff',
    paddingLeft:5
  }
})