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
        name: 'Axis Sun Life Flexi Cap- Fund',
        investment: '782.01',
        current_value: '473.85',
        returns: '12'
    },
    {
        id: '3',
        name: 'Aditya Birla Blue Chip- Fund',
        investment: '779.58',
        current_value: '293.01',
        returns: '10'
    },
    {
        id: '4',
        name: 'Kotak Flexi Cap Mutual Fund',
        investment: '406.27',
        current_value: '106.58',
        returns: '15'
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
    return <Example name={item.name} returns={item.returns} current_value={item.current_value} investment={item.investment}/>
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
                contentContainerStyle={{ paddingBottom: '2%' }}
                marginBottom='200'
            />
        </View>
    )
}

export default AllPortfolio;