
import { FlatList } from 'react-native';

import { DATA } from "../data/data";
import ButtonGrid from '../components/ButtonGrid';
import FavoritesCard from '../components/FavoritesCard'

const lists = navigation.navigate('Lists')

function HomeScreen({ navigation }){
    function renderButtonItem(itemData){
        function pressHandler(){
            navigation.navigate('Lists');
        }
    
        return(
            <ButtonGrid 
                buttonName={itemData.item.buttonName}
                onPress={pressHandler}
            />
        )
    }
    
    return(
        <>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderButtonItem} 
            />
            <FavoritesCard />
        </>
    )
}

export default HomeScreen;
