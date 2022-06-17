import { View, Center, Image, Box, AspectRatio, Text } from "native-base";


export default function OrderTimeline( {timelineobj} ){
    return <View marginLeft="10%">
         <Center w="90%" h="20" bg="#fff"  borderLeftColor="#4C1D95"  borderLeftWidth="1px" marginTop="10px" >
            <Box position="absolute" w="16.67px" h="16.6px" rounded="100%" overflow="hidden" left="-2.93%" right="8.33%" top="-15.33%" bottom="110%"  >
                <Box>
                    <AspectRatio ratio={{
                        base: 1/1,
                        md: 1/1
                    }}>
                        <Image source={require('./../assets/done.svg')} alt="image" />
                    </AspectRatio>
                </Box>
            </Box>
            <Text marginLeft="-60%" marginTop="-1%" fontWeight="510" fontSize="14px" color="#1F2937">Order Placed</Text>
            <Text marginLeft="-10%" marginBottom="0%" marginTop="1.5%" fontWeight="400" fontSize="12px" color="#6B7280">{timelineobj.order_placed.desc_text}</Text>
            <Text marginLeft="-73%" marginBottom="14.5%" fontWeight="400" fontSize="12px" color="#6B7280">{timelineobj.order_placed.time}</Text>
        </Center>
        <Center w="90%" h="20" bg="#fff" height="auto"  borderLeftColor="#4C1D95"  borderLeftWidth="1px" marginTop="13.28px" >
            <Box position="absolute" w="16.67px" h="16.6px" rounded="100%" overflow="hidden" left="-2.93%" right="8.33%" top="-14.33%" bottom="110%"  >
                <Box>
                    <AspectRatio ratio={{
                        base: 1/1,
                        md: 1/1
                    }}>
                        <Image source={require('./../assets/done.svg')} alt="image" />
                    </AspectRatio>
                </Box>
            </Box>
            <Text marginLeft="-60%" marginTop="-5.8%"  marginBottom="0%" fontWeight="510" fontSize="14px" color="#1F2937">Order Packed</Text>
            <Text marginLeft="7%" marginBottom="0%" marginTop="1.5%" fontWeight="400" fontSize="12px" color="#6B7280">{timelineobj.order_packed.desc_text}</Text>
            <Text marginLeft="-73%" marginBottom="10.5%" fontWeight="400" fontSize="12px" color="#6B7280">{timelineobj.order_packed.time}</Text>
        </Center>
        <Center w="90%" h="20" bg="#fff"  borderLeftColor="#C4B5FD" borderLeftStyle="dashed" borderLeftWidth="1px" marginTop="12.28px" >
            <Box position="absolute" w="16.67px" h="16.6px" rounded="100%" overflow="hidden" left="-2.93%" right="8.33%" top="-15.33%" bottom="110%"  >
                <Box>
                    <AspectRatio ratio={{
                        base: 1/1,
                        md: 1/1
                    }}>
                        <Image source={require('./../assets/notdone.svg')} alt="image" />
                    </AspectRatio>
                </Box>
            </Box>
            <Text marginLeft="-70%" marginTop="-7.2%" marginBottom="0%" fontWeight="510" fontSize="14px" color="#9CA3AF">Shipped</Text>
            <Text marginLeft="-7.1%" marginBottom="0%" marginTop="1.5%" fontWeight="400" fontSize="12px" color="#9CA3AF">{timelineobj.order_shipped.desc_text}</Text>
            <Text marginLeft="-73%" marginBottom="14.5%" fontWeight="400" fontSize="12px" color="#9CA3AF">{timelineobj.order_shipped.time}</Text>
        </Center>
        <Center w="90%" h="20" bg="#fff"  borderLeftColor="#fff"  borderLeftWidth="1px" marginTop="-4.28px" >
            <Box position="absolute" w="16.67px" h="16.6px" rounded="100%" overflow="hidden" left="-2.93%" right="8.33%" top="-12.33%" bottom="110%"  >
                <Box>
                    <AspectRatio ratio={{
                        base: 1/1,
                        md: 1/1
                    }}>
                        <Image source={require('./../assets/notdone.svg')} alt="image" />
                    </AspectRatio>
                </Box>
            </Box>
            <Text marginLeft="-55%"  marginTop="-5.7%" marginBottom="0%" fontWeight="510" fontSize="14px" color="#9CA3AF">Out for Delivery</Text>
            <Text marginLeft="-38%" marginBottom="0%" marginTop="1.5%" fontWeight="400" fontSize="12px" color="#9CA3AF">{timelineobj.order_ofd.desc_text}</Text>
            <Text marginLeft="-73%" marginBottom="14.5%" fontWeight="400" fontSize="12px" color="#9CA3AF">{timelineobj.order_ofd.time}</Text>
        </Center>
    </View>
}