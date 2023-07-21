import { View, Text, Keyboard, Platform} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

const Form = (props) => {
    const [task, settask] = useState('');
    const handdleAddTask = () =>{
        if (task.length === 0 ){
            alert('Please complete new todo !!!');
            return false;
        }
        props.onAddTask(task);
        settask('');
        Keyboard.dismiss();
    }
        return (
            <KeyboardAvoidingView 
                behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset = {10}
                style = {styles.addTask}>
                <TextInput 
                    value={task}
                    onChangeText={(text) => settask(text)} 
                    placeholder='Add new Todo' 
                    style = {styles.input}/>
                    <TouchableOpacity onPress={handdleAddTask}>
                                <View style = {styles.iconWrapper}>
                                    <Text style = {styles.icon}>+</Text>
                                </View>
                    </TouchableOpacity>
            </KeyboardAvoidingView>
        )
}

export default Form;