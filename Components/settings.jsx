import React, { useContext } from "react";
import { StyleSheet,} from "react-native";

import { FlatList,Text, Box, HStack, Stack,View ,Heading, Progress, Button, Center } from "native-base";

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import darkContext from "../Context/DarkContext";

let b;

const data=[
    {
        id: '1',
        name: 'form-textbox-password',
        type : 'MaterialCommunityIcons',
        value : 'Change Password'
    },
    {
        id: '2',
        name: 'security',
        type : 'MaterialIcons',
        value : 'General'
    },
    {
        id: '3',
        name: 'account-cog',
        type : 'MaterialCommunityIcons',
        value : 'Manage Accounts'
    },
    {
        id: '4',
        name: 'g-translate',
        type : 'MaterialIcons',
        value : 'Language',
        default : 'English'
    },
    {
        id: '5',
        name: 'insert-link',
        type : 'MaterialIcons',
        value : 'Linked Account'
    },
    {
        id: '6',
        name: 'account-cancel',
        type : 'MaterialCommunityIcons',
        value : 'Disable-Account'
    },
]


const renderItem = ({item}) => {
    if(item.type === 'MaterialCommunityIcons'){
         return <Box alignItems="center" >
        <Box width="100%" overflow="hidden" borderColor="coolGray.100" bgColor={b.state.bgColor}>
            <Stack p="4" space={3}>
                <HStack alignItems="center" space={4} justifyContent="flex-start">
                    <Box>
                       <MaterialCommunityIcons color={b.state.fontColor} name={item.name} size={24}  />
                    </Box>
                    <Box>
                       <Text color={b.state.fontColor}>{item.value}</Text>
                    </Box>
                </HStack>
            </Stack>
        </Box>
    </Box>
        
    }
    if(item.type === 'MaterialIcons'){
        if(item.value === 'Language'){
            return <Box alignItems="center" >
            <Box width="100%" overflow="hidden" borderColor="coolGray.200" bgColor={b.state.bgColor}>
                <Stack p="4" space={3}>
                    <HStack alignItems="center" space={4} justifyContent="flex-start">

                        <Box>
                           <MaterialIcons name={item.name} size={24} color={b.state.fontColor} />
                        </Box>
                        <Box flexDirection="row">
                            <Text color={b.state.fontColor}>{item.value}</Text>
                            <Text color={b.state.fontColor} mx="41%">{item.default}</Text>
                        </Box>
                    </HStack>
                </Stack>
            </Box>
        </Box>
        }else{
        return <Box alignItems="center" >
        <Box width="100%" overflow="hidden" borderColor="coolGray.100" bgColor={b.state.bgColor}>
            <Stack p="4" space={3}>
                <HStack alignItems="center" space={4} justifyContent="flex-start">
                    <Box>
                    <MaterialIcons name={item.name} size={24} color={b.state.fontColor} />
                    </Box>
                    <Box>
                        <Text color={b.state.fontColor}>{item.value}</Text>
                    </Box>
                </HStack>
            </Stack>
        </Box>
    </Box>
    }
}
}

const settings = () => {
    const a = useContext(darkContext);
    b = a;
    return(
        <View style={{height: '100%', backgroundColor : a.state.boxColor1, }}>
            <View>
                <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={ item => item.id}
                    showsVerticalScrollIndicator={false}
                    // contentInset={{ right: 20, top: 0, left: 0, bottom: 0 }}
                    // contentContainerStyle={{ paddingBottom: '2%' }}  
                />
            </View>
            <Box  padding="5%" flex={1}>
                <Box width="100%" rounded="sm" overflow="hidden" borderColor="coolGray.10" borderWidth="1" padding="3%" bgColor={a.state.bgColor}>
                    <HStack alignItems="center" space={4} justifyContent="space-around">
                        <Box flex={1}>
                            <Box flexDirection="row" paddingBottom='3%'>
                                <MaterialIcons name="cloud-queue" size={24} color={b.state.fontColor} />
                                <Text marginLeft="3" fontSize="md" color={b.state.fontColor}>
                                    Storage
                                </Text>
                            </Box>
                            <Box paddingBottom='3%'>
                                <Progress w="90%" value={25} color={b.state.fontColor}/>
                            </Box>
                            <Text fontSize="sm" color={b.state.fontColor}>
                                4GB of 15GB Used
                            </Text>
                        </Box>

                        <Button variant="outline" style={styles.buy}>
                            Buy Storage
                        </Button>
                    </HStack>
                </Box>
            </Box>
        </View>
    )
}

const styles = StyleSheet.create({
    buy : {
        borderColor : '#5B21B6',
        color : "#5B21B6"
    }
})

export default settings;
