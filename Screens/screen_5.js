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
            <Text>
                We are leaving this because of time constraint. We got to know
                about this little late. Thank you
            </Text>
            <Button
                title="Go to Control Screen"
                onPress={() => navigation.navigate("Control Screen")}
            />
        </View>
    );
}

export default Screen5;
