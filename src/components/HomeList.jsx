import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

import { data } from '../data/data'

function HomeList() {
  return (
    <>
    <Text style={styles.title}>SHARE-SPHERE</Text>
    <FlatList 
        data={data}
        key={data.id}
        renderItem={({item}) => {
            return(
                <View style={styles.container}>                                
                    <Pressable style={[styles.button, styles.androidShadow]} >
                        <Text style={styles.buttonStyle}>{item.buttonName}</Text>
                    </Pressable>
                </View>
            )
        }}
    />
    </>
  )
}

styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around'
    },
    title:{
        fontSize:20,
        textAlign: 'center',
        marginVertical: 15,
    },
    button:{
        marginHorizontal: 18,
        marginVertical: 15,
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

export default HomeList
