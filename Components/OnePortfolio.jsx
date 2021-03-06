import React from "react";
import { Box, AspectRatio, Image, Center, Stack, Text, Heading, HStack} from "native-base";

const OnePortfolio = ({name, investment, current_value, returns, colorr}) => {
    return  (
        <Box alignItems="center" marginBottom={4} >
            <Box width="90%" rounded="sm" overflow="hidden" borderColor="coolGray.200" borderWidth="1" bgColor={colorr === "light" ? "gray.200" : "gray.600"}>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="sm" color={colorr === "light" ? "black" : "white"} fontWeight={500}>
                            {name}
                        </Heading>
                        <Center bg="green.600" width="20%" borderRadius="sm" padding="1%">
                            <Text color={colorr === "light" ? "white" : "black"} style={{ marginHorizontal:'5%'}}>SIP x 6</Text>
                        </Center>
                    </Stack>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <Box>
                            <Text color={colorr === "light" ? "black" : "white"}>Investement</Text>
                            <Text color={colorr === "light" ? "black" : "white"} style={{fontSize: 16, fontWeight: '500', marginTop: '3%'}}>${investment}</Text>
                        </Box>
                        <Box>
                            <Text color={colorr === "light" ? "black" : "white"}>Current Value</Text>
                            <Text color={colorr === "light" ? "black" : "white"} style={{fontSize: 16, fontWeight: '500', marginTop: '3%'}}>${current_value}</Text>
                        </Box>
                        <Box>
                            <Text color={colorr === "light" ? "black" : "white"}>Returns</Text>
                            <Text color={colorr === "light" ? "green.700" : "green.700"} style={{fontSize: 16, fontWeight: '500', marginTop: '3%'}} >{returns}%</Text>
                        </Box>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    );
  };

export default OnePortfolio;


// _dark={{
//     borderColor: "coolGray.600",
//     backgroundColor: "gray.400"
// }} _web={{
//     shadow: 2,
//     borderWidth: 0
// }} _light={{
//     backgroundColor: "gray.500"
// }}>