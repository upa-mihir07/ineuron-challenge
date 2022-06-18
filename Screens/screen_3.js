import React, { useContext, useEffect } from "react";

import darkContext from "../Context/DarkContext";
import { Button, View, Text } from "react-native";

import OrderDetail from "../Components/OrderDetail";
import { NativeBaseProvider } from "native-base";
function Screen3({ navigation }) {
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
            <OrderDetail />
        </NativeBaseProvider>
    );
}

export default Screen3;
