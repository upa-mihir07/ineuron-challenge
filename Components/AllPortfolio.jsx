import React from "react";
import { View } from "react-native";
import { FlatList } from "native-base";
import Example from "./OnePortfolio";

const data=[
    {
        id: '1',
        name: 'Aditya Birla Sun Life Flexi Cap- Fund',
        investment: '50000',
        current_value: '4351.51',
        returns: '14'
    },
    {
        id: '2',
        name: 'Aditya Birla Sun Life Flexi Cap- Fund',
        investment: '50000',
        current_value: '4351.51',
        returns: '14'
    },
    {
        id: '3',
        name: 'Aditya Birla Sun Life Flexi Cap- Fund',
        investment: '50000',
        current_value: '4351.51',
        returns: '14'
    },
    {
        id: '4',
        name: 'Aditya Birla Sun Life Flexi Cap- Fund',
        investment: '50000',
        current_value: '4351.51',
        returns: '14'
    },
    {
        id: '5',
        name: 'Aditya Birla Sun Life Flexi Cap- Fund',
        investment: '50000',
        current_value: '4351.51',
        returns: '14'
    },
    {
        id: '6',
        name: 'Aditya Birla Sun Life Flexi Cap- Fund',
        investment: '50000',
        current_value: '4351.51',
        returns: '14'
    },
    {
        id: '7',
        name: 'Aditya Birla Sun Life Flexi Cap- Fund',
        investment: '50000',
        current_value: '4351.51',
        returns: '14'
    },

]

const renderItem = ({item}) => {
    return <Example name={item.name}/>
}

const AllPortfolio = () => {

    return(
        <View>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={ item => item.id}
                showsVerticalScrollIndicator={false}
                contentInset={{ right: 20, top: 0, left: 0, bottom: 0 }}
                contentContainerStyle={{ paddingBottom: 100 }}
                marginBottom='200'
            />
        </View>
    )
}

export default AllPortfolio;