import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text } from "react-native";

import {
    Button,
    useColorMode,
    useColorModeValue,
    NativeBaseProvider,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen1 from "./Screens/screen_1";
import Screen2 from "./Screens/screen_2";
import Screen3 from "./Screens/screen_3";
import Screen4 from "./Screens/screen_4";
import Screen5 from "./Screens/screen_5";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Screen 1" 
                    component={Screen1} 
                        options={{
                            title: "Settings",
                            headerBackTitleVisible: true,
                            headerStyle: {
                                backgroundColor: "#6411B2",
                            },
                            headerTintColor: "#fff",
                            headerTitleStyle: {
                                fontWeight: "500",
                                // fontSize: "18%",
                            },
                            
                        }}
                    />
                <Stack.Screen name="Screen 2" component={Screen2} />
                <Stack.Screen 
                    name="Screen 3" 
                    component={Screen3}
                    options={{
                        title: "Track Order",
                        headerBackTitleVisible: false,
                        headerStyle: {
                            backgroundColor: "#4C1D95",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "500",
                        },
                    }} />
                <Stack.Screen
                    name="Screen 4"
                    component={Screen4}
                    options={{
                        title: "Mutual Fund Portfolio",
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
                />
                <Stack.Screen name="Screen 5" component={Screen5} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
