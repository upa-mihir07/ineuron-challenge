import { NativeBaseProvider } from "native-base";
import React, { useContext, useEffect } from "react";

import darkContext from "../Context/DarkContext";
import ControlScreen from "../Components/ControlScreen";

const Screen0 = ({ navigation, route }) => {
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
            <ControlScreen navigation={navigation} />
        </NativeBaseProvider>
    );
};

export default Screen0;
