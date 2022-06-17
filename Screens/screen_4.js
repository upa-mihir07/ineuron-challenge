import * as React from "react";
import { Dimensions, View } from "react-native";

import {
    NativeBaseProvider,
    Heading,
    Button,
    useColorMode,
    useColorModeValue,
    Box,
} from "native-base";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import AllPortfolio from "../Components/AllPortfolio";
import RectBox from "../Components/RectBox";

function Screen4({ navigation }) {
    const { colorMode, toggleColorMode } = useColorMode();
    console.log(toggleColorMode, colorMode);
    navigation.setOptions({
        headerRight: () => (
            <Button onPress={toggleColorMode} h={10}>
                {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        ),
        headerStyle: {
            backgroundColor: colorMode === "light" ? "#6411B2" : "#05061C",
        },
    });

    return (
        <NativeBaseProvider>
            <Box
                flex={1}
                bg={useColorModeValue("warmGray.50", "coolGray.800")}
                color={useColorModeValue("black", "white")}
            >
                <View style={{ paddingTop: "4%", paddingBottom: "4%" }}></View>
                <RectBox colorr={colorMode} />
                <Heading
                    size="sm"
                    ml="-1"
                    marginLeft="5%"
                    marginTop="6%"
                    marginBottom="6%"
                    color={colorMode === "light" ? "black" : "white"}
                    fontWeight={300}
                    fontSize={windowHeight / 33}
                >
                    PortFolio Details
                </Heading>
                <AllPortfolio colorr={colorMode} />
            </Box>
        </NativeBaseProvider>
    );
}

export default Screen4;
