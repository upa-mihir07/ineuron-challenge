import React from "react";
import { Box, AspectRatio, Image, Center, Text, VStack } from "native-base";

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
    
    return <VStack space={4} alignItems="center" bg="white" height="100vh">
        <Center margin="12px" padding="12px" display="flex" flexDirection="column" alignItems="flex-start" w="358px" h="114px" borderRadius="4px" bg="coolGray.100">
            <Box position="absolute" w="30%" h="100%" rounded="4px" overflow="hidden"   >
                <Box>
                    <AspectRatio ratio={{
                        base: 41 / 50,
                        md: 41 / 50
                    }}>
                        <Image source={require('./../assets/track-order.svg')} alt="image" />
                    </AspectRatio>
                </Box>

            </Box>
            <Text alignSelf="center" fontWeight="700" fontSize="16px"> {data.order_name}</Text>
            <Text alignSelf="center" fontWeight="400" color="coolGray.500" marginBottom="10%" fontFamily="SF Pro" fontSize="14px"> {data.order_desc}</Text>
            <Text marginLeft="34%" fontWeight="510" color="coolGray.800" fontFamily="SF Pro" fontSize="14px"> {data.price}</Text>
        </Center>

        <OrderTimeline timelineobj={data.timeline}/>
        
    </VStack>;
}

export default OrderDetail;

