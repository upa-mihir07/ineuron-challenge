import * as React from "react";
import { Button, View, Text } from "react-native";

function Screen3({ navigation }) {
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
