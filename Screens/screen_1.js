import * as React from "react";
import { Button, View, Text } from "react-native";

function Screen1({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Screen1</Text>
            <Button
                title="Go to Screen 2"
                onPress={() => navigation.navigate("Screen 2")}
            />
        </View>
    );
}

export default Screen1;
