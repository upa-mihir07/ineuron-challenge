import { View, Center, Image, Box, AspectRatio, Text, Divider } from "native-base";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function OrderTimeline( {timelineobj} ){
    return <View flexDirection={"column"} width='95%' justifyContent={'center'}>
        <Center width={"95%"} height={"20%"} bgColor={"#fff"} marginBottom={windowHeight/50}>
            <Box flexDirection={"row"} justifyContent="space-around" rounded="100%" marginLeft={windowWidth/10} marginRight={"20%"} >
                <Box width={"25%"}  margin={"auto"}>
                    <Image source={require('./../assets/done.png')} alt="image" />
                    
                </Box>
                <Box width={"75%"}>
                    <Text>Order Placed</Text>
                    <Text color={'#6B7280'}>{timelineobj.order_placed.desc_text}</Text>
                    <Text  color={'#6B7280'}>{timelineobj.order_placed.time}</Text>
                </Box>
            </Box>
           
        </Center>
        <Center width={windowWidth} height={"20%"} bgColor={"#fff"} marginBottom={windowHeight/50}>
        
        <Box flexDirection={"row"} justifyContent="space-around" rounded="100%" marginLeft={windowWidth/10} marginRight={"20%"}>
                <Box width={"25%"}  margin={"auto"}>
                    <Image source={require('./../assets/done.png')} alt="image" />
                </Box>
                <Box  width={"75%"}>
                    <Text>Order Packed</Text>
                    <Text  color={'#6B7280'}>{timelineobj.order_placed.desc_text}</Text>
                    <Text  color={'#6B7280'}>{timelineobj.order_placed.time}</Text>
                </Box>
            </Box>
            
        </Center>
        <Center width={windowWidth} height={"20%"} bgColor={"#fff"} marginBottom={windowHeight/50}>
        <Box flexDirection={"row"} justifyContent="space-around"  rounded="100%" marginLeft={windowWidth/10} marginRight={"20%"}>
                <Box width={"25%"} >
                    <Image source={require('./../assets/undone.png')} alt="image" />
                </Box>
                <Box width={"75%"} margin={"auto"}>
                    <Text>Shipped</Text>
                    <Text  color={'#6B7280'}>{timelineobj.order_shipped.desc_text}</Text>
                    <Text  color={'#6B7280'}>{timelineobj.order_shipped.time}</Text>
                </Box>
            </Box>
           
        </Center>
        <Center width={windowWidth} height={"20%"} bgColor={"#fff"} >
            <Box flexDirection={"row"} justifyContent="space-around"  rounded="100%" marginLeft={windowWidth/10} marginRight={"20%"}>
                <Box width={"25%"} margin={"auto"}>
                    <Image source={require('./../assets/undone.png')} alt="image" />
                </Box>
                <Box  width={"75%"}>
                    <Text>Shipped</Text>
                    <Text  color={'#6B7280'}>{timelineobj.order_shipped.desc_text}</Text>
                    <Text  color={'#6B7280'}>{timelineobj.order_shipped.time}</Text>
                </Box>
            </Box>
        </Center>
    </View>
}