import * as React from "react";
import { View } from "react-native";

import { NativeBaseProvider, Heading } from "native-base";

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
        </NativeBaseProvider>
    );
}

export default Screen4;
