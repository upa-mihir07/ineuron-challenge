import { NativeBaseProvider } from "native-base";
import React, { useContext, useEffect } from "react";

import darkContext from "../Context/DarkContext";
import Settings from "../Components/settings";

function Screen1({ navigation, route }) {
    const a = useContext(darkContext);
    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: a.state.headerColor,
            },
        });
    });
    return (
        <NativeBaseProvider>
            <Settings />
        </NativeBaseProvider>
    );
}

export default Screen1;
