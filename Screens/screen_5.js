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
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Screen5</Text>
            <Button
                title="Go to Screen 1"
                onPress={() => navigation.navigate("Screen 1")}
            />
        </View>
    );
}

export default Screen5;
