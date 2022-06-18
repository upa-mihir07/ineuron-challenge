import { Box, FlatList, Image, NativeBaseProvider, Text } from "native-base";
import * as React from "react";
import { Dimensions } from "react-native";



const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const data = [
    {
        id : 1,
        imagePath : require("../assets/product1.png"),
        name : "BEDLAMP",
        size : "Size : Small",
        price : "₹749",
        discout : "25%"
    },
    {
        id : 2,
        imagePath : require('../assets/product1.png'),
        name : "BEDLAMP",
        size : "Size : Small",
        price : "₹749",
        discout : "25%"
    },
    {
        id : 3,
        imagePath : require("../assets/product2.png"),
        name : "PERFUME",
        size : "Size : Large",
        price : "₹999",
        discout : "46%"
    },
    {
        id : 4,
        imagePath : require("../assets/product3.png"),
        name : "Skin Care Kit",
        size : "Size : Medium",
        price : "₹1899",
        discout : "60%"
    },

]


const renderItem = (item) => {
    return <Box flexDirection={"column"} >
                <Text>hvbhjknj</Text>
                <Image source={item.imagePath} alt="no image" width={windowWidth/10} height={windowHeight/10}/>
            
    </Box>
}

function Screen5({ navigation }) {
    return (
        <NativeBaseProvider>
            <Box  height={windowHeight} width={windowWidth} margin={"auto"}>
                <FlatList 
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={ item => item.id}
                        showsVerticalScrollIndicator={false}
                        contentInset={{ right: 20, top: 0, left: 0, bottom: 0 }}
                        contentContainerStyle={{ paddingBottom: '2%' }}  
                />
            </Box>
        </NativeBaseProvider>
    );
}

export default Screen5;
