import React from "react";
import { StyleSheet,} from "react-native";
import { FlatList,Text, Box, HStack, Stack,View ,Heading, Progress, Button } from "native-base";

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from "react-native";

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
        if(item.name === 'Language'){
            return <Button alignItems="center" >
            <Box width="100%" rounded="sm" overflow="hidden" borderColor="coolGray.200" borderWidth="1" bgColor={"white"}>
                <Stack p="4" space={3}>
                    <HStack alignItems="center" space={4} justifyContent="flex-start">
                        <Box>
                           <MaterialCommunityIcons name={item.name} size={24} color="black" />
                        </Box>
                        <Box justifyContent={"space-between"}>
                           <Text>{item.value}</Text>
                           <Text>{item.default}</Text>
                        </Box>
                    </HStack>
                </Stack>
            </Box>
        </Button>
        }else{
            return <Box alignItems="center" >
        <Box width="100%" rounded="sm" overflow="hidden" borderColor="coolGray.100" borderWidth="1" bgColor={"white"}>
            <Stack p="4" space={3}>
                <HStack alignItems="center" space={4} justifyContent="flex-start">
                    <Box>
                       <MaterialCommunityIcons name={item.name} size={24} color="black" />
                    </Box>
                    <Box>
                       <Text>{item.value}</Text>
                    </Box>
                </HStack>
            </Stack>
        </Box>
    </Box>
        }
    }
    if(item.type === 'MaterialIcons'){
        return <Box alignItems="center" >
        <Box width="100%" rounded="sm" overflow="hidden" borderColor="coolGray.100" borderWidth="1" bgColor={"white"}>
            <Stack p="4" space={3}>
                <HStack alignItems="center" space={4} justifyContent="flex-start">
                    <Box>
                    <MaterialIcons name={item.name} size={24} color="black" />
                    </Box>
                    <Box>
                        <Text>{item.value}</Text>
                    </Box>
                </HStack>
            </Stack>
        </Box>
    </Box>
    }
}

const settings = () => {

    return(
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={ item => item.id}
                showsVerticalScrollIndicator={false}
                contentInset={{ right: 20, top: 0, left: 0, bottom: 0 }}
                contentContainerStyle={{ paddingBottom: '2%' }}
                
            />
            <Box  padding="2">
                <Box width="100%" rounded="sm" overflow="hidden" borderColor="coolGray.10" borderWidth="1" bgColor={"white"} padding="3">
                <Stack p="4" space={3}>
                <HStack alignItems="center" space={4} justifyContent="space-around">

                        <Heading size="sm">
                            <HStack alignItems="center" space={4} justifyContent="flex-start">
                            <HStack alignItems="center" space={2} justifyContent="flex-start">
                                <Box>
                                <Box flexDirection="row" >
                                    <Box>
                                        <MaterialIcons name="cloud-queue" size={24} color="black" />
                                    </Box>
                                   <Box marginLeft="3">
                                        Storage
                                   </Box>
                                </Box>
                                <Box marginRight="4"  marginLeft="0">
                                    <Progress w="150" shadow={2} value={4} mx="15" />
                                </Box>
                                <Box>
                                    4GB of 15GB Used
                                </Box>
                                </Box>
                            </HStack>

                            
                            </HStack>
                        </Heading>
                   
                <HStack alignItems="center" space={4}>
                <Button variant="outline" style={styles.buy}>
                        Buy Storage
                        </Button>
                </HStack>
                </HStack>
            </Stack>
                </Box>
            </Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container  : {
        height : "100%",
        backgroundColor : "#F5F3FF",
        display : 'flex'
        
        
        
    },
    buy : {
        borderColor : '#5B21B6',
        color : "#5B21B6"
    }
})

export default settings;