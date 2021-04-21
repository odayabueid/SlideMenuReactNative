// Aboutscreen.js
import React, { Component } from 'react';
import { Button, View, Text ,SafeAreaView, ScrollView,StatusBar  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';

export default class TasksScreen extends Component {


    state = {
        dummyTasksData: [
            { Title: "اعتماد خطة مشروع أتمتة الاستراتيجية", Date: '10/2/2020', ID: 1 },
            { Title: "اعتماد اغلاق مشروع تحسين الموارد البشرية", Date: '10/2/2020', ID: 2 },
            { Title: " فقط للتجريب اعتماد حوكمة مشروع المؤشرات الاستراتيجية", Date: '10/2/2020', ID: 3 },
            { Title: "اعتماد خطة مشروع أتمتة الاستراتيجية", Date: '10/2/2020', ID: 4 },
            { Title: "اعتماد اغلاق مشروع تحسين الموارد البشرية", Date: '10/2/2020', ID: 5 },
            { Title: " فقط للتجريب اعتماد حوكمة مشروع المؤشرات الاستراتيجية", Date: '10/2/2020', ID: 6 },
            { Title: " فقط للتجريب اعتماد حوكمة مشروع المؤشرات الاستراتيجية", Date: '10/2/2020', ID: 7 },
            { Title: "اعتماد خطة مشروع أتمتة الاستراتيجية", Date: '10/2/2020', ID: 8 },
            { Title: "اعتماد اغلاق مشروع تحسين الموارد البشرية", Date: '10/2/2020', ID: 9 },
            { Title: " فقط للتجريب اعتماد حوكمة مشروع المؤشرات الاستراتيجية", Date: '10/2/2020', ID: 10 },
            { Title: " فقط للتجريب اعتماد حوكمة مشروع المؤشرات الاستراتيجية", Date: '10/2/2020', ID: 11 },
            { Title: "اعتماد خطة مشروع أتمتة الاستراتيجية", Date: '10/2/2020', ID: 12 },
            { Title: "اعتماد اغلاق مشروع تحسين الموارد البشرية", Date: '10/2/2020', ID: 13 },
            { Title: " فقط للتجريب اعتماد حوكمة مشروع المؤشرات الاستراتيجية", Date: '10/2/2020', ID: 14 },
            { Title: " فقط للتجريب اعتماد حوكمة مشروع المؤشرات الاستراتيجية", Date: '10/2/2020', ID: 15 },
            { Title: "اعتماد خطة مشروع أتمتة الاستراتيجية", Date: '10/2/2020', ID: 16 },
            { Title: "اعتماد اغلاق مشروع تحسين الموارد البشرية", Date: '10/2/2020', ID: 17 },
            { Title: " فقط للتجريب اعتماد حوكمة مشروع المؤشرات الاستراتيجية", Date: '10/2/2020', ID: 18 },
        ],
    }

    render() {
        return (
            <View style={styles.taskContainer}>
                <View>
                    <Text style={styles.textStyle}>المهام</Text>
                    <View style={styles.taskCardContainer}>
                        <SafeAreaView style={styles.container}>
                            <ScrollView style={styles.scrollView}>
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
                            </ScrollView>
                        </SafeAreaView>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    taskContainer: {
        flex: 1,
        top: 50,
        // backgroundColor: "#f00"
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
        minHeight: "75%"
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
        minHeight:'8%'
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
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
    scrollView: {
        // backgroundColor: 'pink',
        // marginHorizontal: 20,
      },
})