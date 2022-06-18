
import React, { useContext, useEffect } from "react";

import darkContext from "../Context/DarkContext";
import { Button, View, Text } from "react-native";


function Screen5({ navigation }) {
    const a = useContext(darkContext);
    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: a.state.headerColor,
            },
        });
    });
    return (
        <NativeBaseProvider>
            <Text>Hello</Text>
        </NativeBaseProvider>
    );
}

export default Screen5;
