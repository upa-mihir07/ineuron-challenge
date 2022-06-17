import { Box, Center, Text, HStack, Container, Heading } from "native-base";
import React from "react";

const RectBox =() => {
    return(
        <HStack space={3} height="10%" justifyContent='center' alignItems='center'>
            <Box height="100%" width="44%" justifyContent='center' alignItems='center' borderWidth={2} borderColor="red.400">
                <Heading>$15303.00</Heading>
                <Text>Total Invested</Text>
            </Box>
            <Box height="100%" width="44%" justifyContent='center' alignItems='center' borderWidth={2} borderColor="red.400" >
                <Heading>$45303.00</Heading>
                <Text>14% Return</Text>
            </Box>
        </HStack>

            // <HStack space={3} justifyContent="center" >
            //     <Center w="44%" h="40%" bg="primary.400">
            //         <Box   borderColor="black">
            //             <Text>Mihir</Text>
            //         </Box>
            //     </Center>
            //     <Center width="44%" height="40%" bg="primary.400">
            //         <Box borderColor="black">
            //             <Text>Mihir</Text>
            //         </Box>
            //     </Center>
            // </HStack>
    )
}


export default RectBox