import * as React from "react";
import { Button, View } from "react-native";

import {
    NativeBaseProvider,
    Text,
    Box,
    Container,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Item,
    Input,
    Card,
    CardItem,
    Heading,
} from "native-base";
import Example from "../Components/OnePortfolio";
import AllPortfolio from "../Components/AllPortfolio";
import RectBox from "../Components/RectBox";

function Screen4({ navigation }) {
    return (
        <NativeBaseProvider>
            <View style={{ paddingTop: "4%", paddingBottom: "4%" }}></View>
            <RectBox />
            <Heading
                size="sm"
                ml="-1"
                marginLeft="5%"
                marginTop="6%"
                marginBottom="6%"
            >
                PortFolio Details
            </Heading>
            <AllPortfolio />
            {/* <Example />
            <Example />
            <Example /> */}
        </NativeBaseProvider>
    );
}

export default Screen4;
