import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';

const Task = (props) => {

    const {number} = props;
    const numbertext = number < 10 ? `0${number}` : number;
    const itemcolor = number % 2 === 0 ? styles.sole : styles.sochan;

        return (
            <TouchableOpacity onPress={props.onDeleteTask}>
                <View style = {styles.item} >
                    <View style = {[styles.square, itemcolor]}>
                        <Text style = {styles.number}>{numbertext}</Text>
                    </View>
                    <Text style = {styles.Todo}>{props.title}</Text>
                </View>
            </TouchableOpacity>

        )
}

export default Task;