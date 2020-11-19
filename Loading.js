import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native"
import * as Location from 'expo-location';

export default function Loading() {
    return <View style={style.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={style.text}>Getting the fucking weather</Text>
    </View>
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30 //cf.px를 안붙이면 숫자로, px를 붙이면 "20px" 이렇게 문자로 써줘야함 
    }
})