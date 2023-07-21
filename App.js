import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Task from './component/Task';
import Form from './component/Form';
import styles from'./App.component.style';

export default function App() {
 
  const [taskList, setTaskList] = useState([])

  const handdleAddTask = (task) =>{
    setTaskList([...taskList, task]);
  }

  const handdleDeleteTask = (index) =>{
    Alert.alert('Thông báo', 'Bạn có muốn xóa ?', [
      {
        text: 'Không',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Có', onPress: () => {
          let DelTaskList = [...taskList];
          DelTaskList.splice(index,1);
          setTaskList(DelTaskList);
        }},
    ]);
  }

  return(
      <View style = {styles.container}>
        <View style = {styles.body}>

          <Text style = {styles.header}> Health Following eBook </Text>

            <ScrollView style = {styles.listitem}>
              {
                taskList.map((item, index) => {
                  return <Task key={index} title = {item} number = {index+1} onDeleteTask = {() => handdleDeleteTask(index)}/>
                })
              }
            </ScrollView>

        </View>
        <Form onAddTask = {handdleAddTask}/>
      </View>
  );
}