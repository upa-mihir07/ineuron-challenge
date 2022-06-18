import React, { useContext, useEffect } from "react";

import darkContext from "../Context/DarkContext";
import { Button, View, Text } from "react-native";

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
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Screen3</Text>
            <Button
                title="Go to Screen 4"
                onPress={() => navigation.navigate("Screen 4")}
            />
        </View>
    );
}

export default Screen3;
