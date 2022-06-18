import { Text, Box, Center, Container, FlatList, View, HStack } from 'native-base';
import React, { useContext } from "react";

import darkContext from "../Context/DarkContext";
import { Dimensions, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Toggle from './Toggle';


const data = [
    {
        id: '1',
        name: 'Screen 1',
        screen_name: 'Settings'
    }, 
    {
        id: '2',
        name: 'Screen 2',
        screen_name: 'Body Suit'
    },
    {
        id: '3',
        name: 'Screen 3',
        screen_name: 'Settings'
    },
    {
        id: '4',
        name: 'Screen 4', 
        screen_name: 'Mutual Fund Portfolio'
    },
    {
        id: '5',
        name: 'Screen 5', 
        screen_name: 'Settings'
    },
]

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ControlScreen = ({navigation}) => {
    const a = useContext(darkContext);

    const renderItem = ({item}) => {
        return (
            <HStack margin={windowHeight/100}>
                <Box bg={a.state.boxColor2} width='80%' justifyContent='center' alignItems={'center'} borderRadius='md'>
                    <Text fontSize={windowHeight/24} fontWeight={400} color={a.state.fontColor}>{item.name}</Text>
                </Box>
                <TouchableOpacity onPress={() => {navigation.navigate(item.screen_name)}}>
                    <Box>
                        <MaterialCommunityIcons
                            name="arrow-right-bold-box-outline"
                            size={windowHeight/10}
                            color={a.state.headerColor}
                        />
                    </Box>
                </TouchableOpacity>
            </HStack>
        )
    }
    return (
        <Box height='100%' width='100%' bg={a.state.bgColor}>
            <Toggle />
            <Box mt={windowHeight/25} width='100%' >
                <FlatList 
                    data={data}
                    renderItem={renderItem}
                />
            </Box>
        </Box>
    )
}

export default ControlScreen