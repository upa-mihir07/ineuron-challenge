import { Box, Center, Text, HStack, Container, Heading } from "native-base";
import React from "react";

const RectBox =({colorr}) => {
    return(
        <HStack space={3} height="10%" justifyContent='center' alignItems='center'>
            <Box height="100%" width="44%" justifyContent='center' alignItems='center' borderWidth={2} borderColor="#6411B2" >
                <Heading fontWeight={200} color={colorr === "light" ? "#6411B2" : "purple.400"}>$15303.00</Heading>
                <Text color={colorr === "light" ? "#6411B2" : "purple.400"}>Total Invested</Text>
            </Box>
            <Box height="100%" width="44%" justifyContent='center' alignItems='center' borderWidth={2} borderColor="green.700" >
                <Heading fontWeight={100} color={colorr === "light" ? "green.700" : "green.400"}>$45303.00</Heading>
                <Text color={colorr === "light" ? "green.700" : "green.400"}>14% Return</Text>
            </Box>
        </HStack>

    )
}


export default RectBox