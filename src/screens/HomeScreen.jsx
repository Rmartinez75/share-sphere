import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>SHARE-SPHERE</Text>
            <Button 
                title='ADD FRIEND' 
                onPress={() => console.log('Friend')}
                style={styles.buttonStyle}
                color={'black'}  
            />
            <Button 
                title='CREATE LIST'
                onPress={() => console.log('List')}
                style={styles.buttonStyle}
                color={'black'}
            />
            <Button 
                title='CREATE CALENDAR'
                onPress={() => console.log('Calendar')}
                style={styles.buttonStyle}
                color={'black'}
            />
            <Button 
                title='CREATE POLL'
                onPress={() => console.log('Poll')}
                style={styles.buttonStyle}
                color={'black'}
            />
        </View>
    )
}

styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        fontSize:25,
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 15
    },
    buttonStyle:{
        
    }
})

export default HomeScreen;
