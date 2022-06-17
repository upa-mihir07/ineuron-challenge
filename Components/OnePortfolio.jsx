import React from "react";
import { Box, AspectRatio, Image, Center, Stack, Text, Heading, HStack} from "native-base";

const Example = ({name, investment, current_value, returns}) => {
    return  (
        <Box alignItems="center" marginBottom={4} >
            <Box width="90%" rounded="sm" overflow="hidden" borderColor="coolGray.200" borderWidth="1" bgColor={"gray.200"}>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="sm">
                            {name}
                        </Heading>
                        <Center bg="green.600" width="15%" borderRadius="sm">
                            <Text style={{color: 'white', marginHorizontal:'5%'}}>SIP x 6</Text>
                        </Center>
                    </Stack>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <Box>
                            <Text>Investement</Text>
                            <Text style={{fontSize: 16, fontWeight: '500', marginTop: '3%'}}>${investment}</Text>
                        </Box>
                        <Box>
                            <Text>Current Value</Text>
                            <Text style={{fontSize: 16, fontWeight: '500', marginTop: '3%'}}>${current_value}</Text>
                        </Box>
                        <Box>
                            <Text>Returns</Text>
                            <Text style={{fontSize: 16, fontWeight: '500', color: 'green', marginTop: '3%'}} >{returns}%</Text>
                        </Box>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    );
  };

export default Example;


// _dark={{
//     borderColor: "coolGray.600",
//     backgroundColor: "gray.400"
// }} _web={{
//     shadow: 2,
//     borderWidth: 0
// }} _light={{
//     backgroundColor: "gray.500"
// }}>