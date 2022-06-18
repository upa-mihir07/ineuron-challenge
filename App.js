import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";

import { View, Text } from "react-native";

import {
    Button,
    useColorMode,
    useColorModeValue,
    NativeBaseProvider,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen0 from "./Screens/screen_0";
import Screen1 from "./Screens/screen_1";
import Screen2 from "./Screens/screen_2";
import Screen3 from "./Screens/screen_3";
import Screen4 from "./Screens/screen_4";
import Screen5 from "./Screens/screen_5";
import DarkState from "./Context/DarkState";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <DarkState>
                <NativeBaseProvider>
                    <Stack.Navigator
                        initialRouteName="Control Screen"
                        screenOptions={{
                            headerBackTitleVisible: false,
                            headerStyle: {
                                backgroundColor: "#6411B2",
                            },
                            headerTintColor: "#fff",
                            headerTitleStyle: {
                                fontWeight: "500",
                                // fontSize: "18%",
                            },
                        }}
                    >
                        <Stack.Screen
                            name="Control Screen"
                            component={Screen0}
                        />
                        <Stack.Screen name="Settings" component={Screen1} />
                        <Stack.Screen name="Body Suit" component={Screen2} />
                        <Stack.Screen name="Screen 3" component={Screen3} />
                        <Stack.Screen
                            name="Mutual Fund Portfolio"
                            component={Screen4}
                        />
                        <Stack.Screen name="Screen 5" component={Screen5} />
                    </Stack.Navigator>
                </NativeBaseProvider>
            </DarkState>
        </NavigationContainer>
    );
}

export default App;
