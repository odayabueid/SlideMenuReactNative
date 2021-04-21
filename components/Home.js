// Homescreen.js
import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Animated } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Appbar,Badge } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Aboutscreen from './About'
import {SimpleLineIcons } from '@expo/vector-icons';

export default class Homescreen extends Component {

  state = {
    dummyTasksData: [
      { Title: "اعتماد خطة مشروع أتمتة الاستراتيجية", Date: '10/2/2020', ID: 1 },
      { Title: "اعتماد اغلاق مشروع تحسين الموارد البشرية", Date: '10/2/2020', ID: 2 },
      { Title: " فقط للتجريب اعتماد حوكمة مشروع المؤشرات الاستراتيجية", Date: '10/2/2020', ID: 3 }

    ],
    carouselItems: [
      {
        title: "المهمات",
        text: "Text 1",
        flag: 'first'
      },
      {
        title: "العوائق",
        text: "Text 2",
        flag: "seconed"
      },
      {
        title: "المخاطر",
        text: "Text 3",
        flag: 'thired'
      },
    ],
    activeSlide: 0
  }
  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={3}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: '#f8f9fb' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#f3983d'
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        {item.flag == 'first' ?
          <View>
            <View style={styles.headCarousel}>
              <Image
                source={require('../assets/correct-logo.png')}
                style={styles.carouselImag}
              />
              <Text style={styles.carouseltitle}>{item.title}</Text>
            </View>
            <View style={styles.carouselBody}>
              <View style={styles.progressTitle}>
                <Text>2-5 ايام</Text>
                <Text>10</Text>
              </View>
              <View style={styles.progressBar}>
                <Text style={{ backgroundColor: "#4b688f", width: "50%" }} />
              </View>
            </View>
            <View style={styles.carouselBody}>
              <View style={styles.progressTitle}>
                <Text>6-10 ايام</Text>
                <Text>4</Text>
              </View>
              <View style={styles.progressBar}>
                <Text style={{ backgroundColor: "#67ab5d", width: "35%" }} />
              </View>
            </View>
            <View style={styles.carouselBody}>
              <View style={styles.progressTitle}>
                <Text>11-15 ايام</Text>
                <Text>3</Text>
              </View>
              <View style={styles.progressBar}>
                <Text style={{ backgroundColor: "#c76262", width: "25%" }} />
              </View>
            </View>
          </View>
          : item.flag == 'seconed' ?
            <View>
              <View style={styles.headCarousel}>
                <Image
                  source={require('../assets/stack-icon.png')}
                  style={styles.carouselImag}
                />
                <Text style={styles.carouseltitle}>{item.title}</Text>
              </View>
              <View style={styles.carouselBody}>
                <View style={styles.progressTitle}>
                  <Text>حرج</Text>
                  <Text>10</Text>
                </View>
                <View style={styles.progressBar}>
                  <Text style={{ backgroundColor: "#883333", width: "50%" }} />
                </View>
              </View>
              <View style={styles.carouselBody}>
                <View style={styles.progressTitle}>
                  <Text>منخفض</Text>
                  <Text>4</Text>
                </View>
                <View style={styles.progressBar}>
                  <Text style={{ backgroundColor: "#5a9f51", width: "35%" }} />
                </View>
              </View>
              <View style={styles.carouselBody}>
                <View style={styles.progressTitle}>
                  <Text>متوسط</Text>
                  <Text>3</Text>
                </View>
                <View style={styles.progressBar}>
                  <Text style={{ backgroundColor: "#f8bc64", width: "25%" }} />
                </View>
              </View>
              <View style={styles.carouselBody}>
                <View style={styles.progressTitle}>
                  <Text>مرتفع</Text>
                  <Text>1</Text>
                </View>
                <View style={styles.progressBar}>
                  <Text style={{ backgroundColor: "#cc6f6f", width: "10%" }} />
                </View>
              </View>
            </View>
            :
            <View>
              <View style={styles.headCarousel}>
                <Image
                  source={require('../assets/triangle-icon.png')}
                  style={styles.carouselImag}
                />
                <Text style={styles.carouseltitle}>{item.title}</Text>
              </View>
              <View style={styles.carouselBody}>
                <View style={styles.progressTitle}>
                  <Text>مرتفعة</Text>
                  <Text>10</Text>
                </View>
                <View style={styles.progressBar}>
                  <Text style={{ backgroundColor: "#883333", width: "50%" }} />
                </View>
              </View>
              <View style={styles.carouselBody}>
                <View style={styles.progressTitle}>
                  <Text>متوسطة</Text>
                  <Text>4</Text>
                </View>
                <View style={styles.progressBar}>
                  <Text style={{ backgroundColor: "#5a9f51", width: "35%" }} />
                </View>
              </View>
              <View style={styles.carouselBody}>
                <View style={styles.progressTitle}>
                  <Text>منخفضة</Text>
                  <Text>3</Text>
                </View>
                <View style={styles.progressBar}>
                  <Text style={{ backgroundColor: "#f8bc64", width: "25%" }} />
                </View>
              </View>
            </View>
        }
      </View>
    );
  }

  render() {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window').width;
    return (

      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
        <View>
          <Appbar.Header style={styles.header}>
            <Appbar.Action icon={({ size, color }) => (
              <View>
                <Badge style={styles.badgeBell} size={16}>3</Badge>
                <SimpleLineIcons name="bell" size={20} color="black" style={{ paddingTop: 3 }} />
              </View>
              // <Image
              //   source={require('../assets/bell.png')}
              //   style={{ width: size, height: size, tintColor: color }}
              // />
            )} />
            <Appbar.Content title="مالك المشروع" style={styles.content} />
            <Appbar.Action icon="dots-vertical" onPress={() => {
              this.props.navigation.openDrawer()
            }} />
          </Appbar.Header>
        </View>
        <View style={styles.body}>
          <View style={styles.top}>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.carouselItems}
              renderItem={this._renderItem}
              sliderWidth={380}
              itemWidth={380}
              onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />

          </View>
          <View>
            {this.pagination}
          </View>
          <View style={styles.bottom}>
            <Text style={styles.textStyle}>المهام</Text>
            <View style={styles.taskCardContainer}>
              {this.state.dummyTasksData.map(element => {
                return (
                  <View key={element.ID} style={styles.taskCard}>
                    <View style={styles.innerCard}>
                      <Text style={styles.taskDate}>{element.Date}</Text>
                      <Text style={styles.taskTitle}>{element.Title}</Text>

                    </View>
                  </View>
                )
              })}
            </View>

          </View>
          <Button mode="" style={styles.button} color="#fff" onPress={() => {
            this.props.navigation.navigate('المهام')
          }}>
            <Text>عرض جميع المهام</Text>
          </Button>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20
  },
  body: {
    flex: 2,
    backgroundColor: "#f8f9fb"
  },
  header: {
    // position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: "#fff",
  },
  top: {
    backgroundColor: '#fff',
    // position: 'absolute',
    left: '2%',
    top: '2%',
    width: '93%',
    height: '35%',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  bottom: {
    // top: 2,
  },
  textStyle: {
    fontSize: 20,
    paddingRight: "5%",
    fontWeight: 'bold',
    textAlign: 'right'
  },
  taskCardContainer: {
    top: '5%',
    backgroundColor: "#fff",
    minHeight: "33%"
  },
  button: {
    top: '7%',
    width: '95%',
    alignSelf: 'center',
    color: '#fff',
    backgroundColor: "#f3983d",

  },
  taskCard: {
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
  },
  innerCard: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  taskDate: {
    width: '30%',
    padding: 10

  },
  taskTitle: {
    width: '70%',
    textAlign: 'right',
    padding: 10

  },
  slide: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  carouseltitle: {
    textAlign: 'right',
    fontSize: 20,
    padding: 5
  },
  carouselImag: {
    width: 20,
    height: 20,
    marginTop: 8
  },
  headCarousel: {
    flexDirection: 'row-reverse',
  },
  carouselBody: {
    // backgroundColor:'#f00',
    flex: 1,
    minWidth: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
    padding: 8,
    // flexDirection: 'column'
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    direction: 'rtl'
  },
  progressTitle: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 6
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
  // absoluteFill:{

  //     position: 'absolute',
  //     left: 0,
  //     right: 0,
  //     top: 0,
  //     bottom: 0

  // }
});
/////////////////////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import SideMenu from 'react-native-side-menu-updated'

// class Home extends Component {

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app! oday ismail anu</Text>
//         <StatusBar style="auto" />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default Home