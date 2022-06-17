import * as React from "react";
import { Button, View, Text } from "react-native";

function Screen2({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Screen2</Text>
            <Button
                title="Go to Screen 3"
                onPress={() => navigation.navigate("Screen 3")}
            />
        </View>
    );
}

export default Screen2;
