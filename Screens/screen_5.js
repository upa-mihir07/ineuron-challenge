import * as React from "react";
import { Button, View, Text } from "react-native";

function Screen5({ navigation }) {
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
