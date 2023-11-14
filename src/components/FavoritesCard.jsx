import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const FavoritesCard = () => (
    
    <Card style={{
        width:350, 
        height: 300, 
        alignSelf: 'center', 
        marginTop: 15, 
        shadowColor: '#333333',
        shadowOffset:{
            width:6,
            height:6
        },
        shadowOpacity:0.8,
        shadowRadius: 6,
        elevation:15 
      }} >      
      <Card.Content >
        <Text style={{textAlign: 'center', fontSize:35}}>Favorites</Text>        
      </Card.Content>
    </Card>
  
);

export default FavoritesCard;
