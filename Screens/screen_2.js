import { Box, Button, Center, FlatList, Image,NativeBaseProvider, Text } from "native-base";
import * as React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const data = {
    name : "Body Suit",
    rating : 4.9,
    reviewCount : 120,
    category : "Mother care",
    price : "₹500",
    description : "Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch. Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch.Yellow bodysuit, has a round neck with envelo",
    review : "Sorry no review Present",
    size : [
                { 
                  id : 1,
                  name :  "New Born",
                  selected : false
                },
                {
                  id : 2,
                  name :   "Tiny Baby",
                  selected : false
                },
                {
                  id : 3,
                  name : "0-3 M",
                  selected : true
                }
            ]
}

const renderSize = ({item}) => {
    if(item.selected){
        return(
            <Button size="sm" bgColor="#4C1D95" onPress={() => {
                item.selected = !item.selected
            }}>
               <Text color={'white'}>{item.name}</Text>
            </Button>
        )
    }else{
        return(
            <Button size="sm" bgColor="#F5F3FF" onPress={() => {
                item.selected = !item.selected
            }}>
               <Text color={'black'}>{item.name}</Text>
            </Button>
        )
    }

}


function Screen2({ navigation }) {
    const [selected,SetSelected] = React.useState([3,0])

    const onchangeSelected = (index) => {
        if(index === 0)
            SetSelected([3,0])
        if(index === 1)
            SetSelected([0,3])
    }

    return (
        <NativeBaseProvider>
        <Box flex={1}>
            <Box width="90%" mx="auto" borderRadius="2" borderColor='#F5F3FF' borderWidth={2} padding="2">
                <Image source={require('../assets/poster.png')} alt="Unable to Load" width="95%" mx="auto" />
            </Box>
            <Box flexDirection={'row'} justifyContent="space-between" mx="0">
                <Text fontSize={'2xl'} ml="3" color={'black'}>{data.name}</Text>
                <Box flexDirection="row" my="auto" mr="3" justifyContent={'space-evenly'}>
                    <MaterialIcons name="star" size={24} color={'#FBBF24'} />
                    <Text>{data.rating}</Text>
                    <Text>{`(${data.reviewCount})`}</Text>
                </Box>
            </Box>
            <Box>
                <Text ml="3" color={'#6B7280'} fontSize="xl">{data.category}</Text>
            </Box>
            <Box>
                <Text ml="3" fontSize="lg">{data.price}</Text>
            </Box>
            <Box flexDirection={'row'} justifyContent="space-between">
                <Text mx="3">Select Size<Text>( Age Group )</Text></Text>
                <Text mr="3">Size Chart</Text>
            </Box>
            <Box flexDirection={'row'}>
            <FlatList 
                data={data.size}
                renderItem={renderSize}
                keyExtractor={ item => item.id}
                showsVerticalScrollIndicator={false}
                contentInset={{ right: 20, top: 0, left: 0, bottom: 0 }}
                contentContainerStyle={{ paddingBottom: '2%',flexDirection:"row" , justifyContent : "space-evenly", mr : "50%"}}
            />
            </Box>
            <Box flexDirection={'row'}>
                <Text ml="3" mt="3" borderBottomColor={'#4C1D95'} borderBottomWidth={selected[0]} onPress = {() => {
                    onchangeSelected(0)
                }}>Discription</Text>
                <Text ml="3" mt="3" borderBottomColor={'#4C1D95'} borderBottomWidth={selected[1]}  onPress = {() => {
                    onchangeSelected(1)
                }}>Review</Text>
            </Box>
            <Box>
                {
                    selected[0] === 3 && 
                    <Text ml= "3" mr="3" mt="2" fontSize={'sm'}>
                    {data.description}
                    </Text>
                }{
                    selected[1] === 3 && 
                    <Text ml= "3" mr="3" mt="2" fontSize={'sm'}>
                    {data.review}
                    </Text>
                }
            </Box>
            <Box flexDirection={'row'} my="auto" ml="3" mr="3" justifyContent={'space-between'}>
                <Button size="sm" bgColor='#F5F3FF' width="15%">
                    <MaterialCommunityIcons name="cards-heart-outline" size={24} color="#4C1D95" />
                </Button>
                
                <Button size="sm" bgColor={'#4C1D95'} width="80%">
                    <Text color={'white'} fontSize="md">Continue</Text>
                </Button>
            </Box>
        </Box>
        
      </NativeBaseProvider>
    );
}

export default Screen2;
