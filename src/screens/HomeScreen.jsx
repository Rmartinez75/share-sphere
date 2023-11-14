import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FavoritesCard from '../components/FavoritesCard';

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>SHARE-SPHERE</Text>            
            <Pressable style={[styles.button, styles.androidShadow]} >
                <Text style={styles.buttonStyle} onPress={() => console.log('Friend')}>ADD FRIEND</Text>
            </Pressable>           
            <Pressable style={[styles.button, styles.androidShadow]} >
                <Text style={styles.buttonStyle} onPress={() => console.log('List')}>CREATE LIST</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.androidShadow]} >
                <Text style={styles.buttonStyle} onPress={() => console.log('Calendar')}>CREATE CALENDAR</Text>
            </Pressable>
            <Pressable  style={[styles.button, styles.androidShadow]}>
                <Text style={styles.buttonStyle} onPress={() => console.log('Poll')}>CREATE POLL</Text>
            </Pressable>            
            <FavoritesCard />
        </View>
    )
}

styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around'
    },
    title:{
        fontSize:25,
        textAlign: 'center',
        marginVertical: 15,
    },
    button:{
        marginHorizontal: 18,
        borderWidth: 1,
        borderRadius: 20,
        shadowColor: '#333333',
        shadowOffset:{
            width:6,
            height:6
        },
        shadowOpacity:0.8,
        shadowRadius: 6,
        backgroundColor: 'lightgray',        
    },
    buttonStyle:{
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 20,           
    },
    androidShadow:{
        elevation:20,
        shadowColor: '#333333',
    }
})

export default HomeScreen;
