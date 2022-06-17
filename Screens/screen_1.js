import { NativeBaseProvider } from "native-base";
import * as React from "react";
import Settings from "../Components/settings";


function Screen1({ navigation }) {
    return (
        <NativeBaseProvider>
            <Settings/>
        </NativeBaseProvider>
    );
}

export default Screen1;
