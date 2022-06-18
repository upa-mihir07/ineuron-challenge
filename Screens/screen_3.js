import * as React from "react";
import { NativeBaseProvider } from "native-base";

import OrderDetail from "../Components/OrderDetail";
function Screen3({ navigation }) {
    return (
        <NativeBaseProvider>
            <OrderDetail />
        </NativeBaseProvider>
    );
}

export default Screen3;
