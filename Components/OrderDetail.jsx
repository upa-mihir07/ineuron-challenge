
import { Box, AspectRatio, Image, Center, Text, VStack } from "native-base";
import OrderTimeline from "./OrderTimeline";
import { Dimensions } from "react-native";

import React, { useContext } from "react";

import darkContext from "../Context/DarkContext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const data = {
    order_id: 1,
    order_name: "Sweater dress",
    order_desc: "Girls self design",
    price: "₹1,199",
    image: "../assetss/tack-order.png",
    timeline: {
        order_placed: {
            status: true,
            desc_text: "We have received your order on 28-May-2021.",
            time:"5:38pm"
        },
        order_packed: {
            status: true,
            desc_text: "Seller has processed your order on 29th. Your item has been picked up by courier partner on 30 May-2021.",
            time:"5:38pm"
        },
        order_shipped: {
            status: false,
            desc_text: "Your item has been picked up not yet shipped.",
            time:""
        },
        order_ofd: {
            status: false,
            desc_text: "Your order is out for delivery.",
            time:""
        }
    }
}


const OrderDetail = () => {
    const a = useContext(darkContext);
    
    return <VStack space={4} alignItems="center" height={windowHeight}>
        <Box  flexDirection="column" width={"100%"} height={windowHeight} bgColor={a.state.bgColor}>
            <Box bgColor={"gray.300"} marginX={'auto'} paddingY={"2%"} paddingX={"4%"} borderRadius={4} alignItems="flex-start" width={'95%'} mt='2%'>
                <Box flexDirection="row" justifyContent="space-between" mt='2%'>
                    <Box width={"30%"} height={"90%"} rounded="4" >
                        <Image source={require('./../assets/track-order.png')} alt="image" />
                    </Box>
                    <Box flexDirection={"column"} justifyContent="space-between" ml={0}>
                        <Box>
                            <Text fontSize="xl" fontWeight={'bold'}> {data.order_name}</Text>
                            <Text fontSize={"sm"} color={'#6B7280'} fontWeight={400}> {data.order_desc}</Text>
                        </Box>
                        <Box>
                            <Text color={'#1F2937'} fontSize={'sm'} fontWeight={800}> {data.price}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* <Box paddingX={'2%'} borderRadius={4}  width={windowWidth}>
                <OrderTimeline timelineobj={data.timeline}/>
            </Box> */}
            <Center width={"95%"} bgColor={a.state.boxColor1} pb={windowHeight/50} ml='2.5%' mr='5%' >
                <Center flexDirection={"row"} justifyContent="space-around" rounded="100%" marginLeft={windowWidth/10} marginRight={"20%"} pt='2%'>
                    <Box width={"25%"}  margin={"auto"} justifyContent='center' >
                        <Image source={require('./../assets/done.png')} alt="image" />    
                    </Box>
                    <Box width={"75%"}>
                        <Text color={a.state.fontColor}>Order Placed</Text>
                        <Text color={'#6B7280'}>{data.timeline.order_placed.desc_text}</Text>
                        <Text  color={'#6B7280'}>{data.timeline.order_placed.time}</Text>
                    </Box>
                </Center>
            </Center>

            <Center width={"95%"} bgColor={a.state.boxColor1} pb={windowHeight/50} ml='2.5%' mr='5%'>
                <Box flexDirection={"row"} justifyContent="space-around" rounded="100%" marginLeft={windowWidth/10} marginRight={"20%"}>
                    <Box width={"25%"}  margin={"auto"} justifyContent='center'>
                        <Image source={require('./../assets/done.png')} alt="image" />
                    </Box>
                    <Box  width={"75%"}>
                        <Text color={a.state.fontColor}>Order Packed</Text>
                        <Text  color={'#6B7280'}>{data.timeline.order_placed.desc_text}</Text>
                        <Text  color={'#6B7280'}>{data.timeline.order_placed.time}</Text>
                    </Box>
                </Box>
            </Center>

            <Center width={"95%"} bgColor={a.state.boxColor1} pb={windowHeight/50} ml='2.5%' mr='5%'>
                <Box flexDirection={"row"} justifyContent="space-around"  rounded="100%" marginLeft={windowWidth/10} marginRight={"20%"}>
                    <Box width={"25%"} margin={"auto"}>
                        <Image source={require('./../assets/undone.png')} alt="image" />
                    </Box>
                    <Box width={"75%"} margin={"auto"} justifyContent='center'>
                        <Text color={a.state.fontColor}>Shipped</Text>
                        <Text  color={'#6B7280'}>{data.timeline.order_shipped.desc_text}</Text>
                        <Text  color={'#6B7280'}>{data.timeline.order_shipped.time}</Text>
                    </Box>
                </Box>
           </Center>
            <Center width={"95%"} bgColor={a.state.boxColor1} pb={windowHeight/50} ml='2.5%' mr='5%' >
                <Box flexDirection={"row"} justifyContent="space-around"  rounded="100%" marginLeft={windowWidth/10} marginRight={"20%"}>
                    <Box width={"25%"} margin={"auto"} justifyContent='center'>
                        <Image source={require('./../assets/undone.png')} alt="image" />
                    </Box>
                    <Box  width={"75%"}>
                        <Text color={a.state.fontColor}>Shipped</Text>
                        <Text  color={'#6B7280'}>{data.timeline.order_shipped.desc_text}</Text>
                        <Text  color={'#6B7280'}>{data.timeline.order_shipped.time}</Text>
                    </Box>
                </Box>
            </Center>

        </Box>
        
    </VStack>;
}

export default OrderDetail;

