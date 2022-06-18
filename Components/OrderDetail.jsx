import React from "react";
import { Box, AspectRatio, Image, Center, Text, VStack } from "native-base";
import OrderTimeline from "./OrderTimeline";
import { Dimensions } from "react-native";

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
    
    return <VStack space={4} alignItems="center" height={windowHeight}>
        <Center marginTop={windowHeight/10}  flexDirection="column" borderRadius={4} width={"95%"} height={windowHeight} bgColor="white">
            <Box bgColor={"gray.300"} marginX={'auto'} paddingY={"2%"} paddingX={"4%"} borderRadius={4} alignItems="flex-start" width={'95%'}>
                <Box flexDirection="row" justifyContent="space-between" >
                    <Box width={"30%"} height={"90%"} rounded="4" overflow="hidden">
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
            <Box paddingX={'2%'} borderRadius={4}  width={windowWidth}>
                <OrderTimeline timelineobj={data.timeline}/>
            </Box>
        </Center>
        
    </VStack>;
}

export default OrderDetail;

