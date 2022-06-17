import { Box, Center, Text, HStack, Container, Heading } from "native-base";
import React from "react";

const RectBox =() => {
    return(
        <HStack space={3} height="10%" justifyContent='center' alignItems='center'>
            <Box height="100%" width="44%" justifyContent='center' alignItems='center' borderWidth={2} borderColor="#6411B2">
                <Heading>$15303.00</Heading>
                <Text>Total Invested</Text>
            </Box>
            <Box height="100%" width="44%" justifyContent='center' alignItems='center' borderWidth={2} borderColor="green.700" >
                <Heading>$45303.00</Heading>
                <Text>14% Return</Text>
            </Box>
        </HStack>

    )
}


export default RectBox