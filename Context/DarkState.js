import { useState } from "react";
import darkContext from "./DarkContext";

import { Button, NativeBaseProvider } from "native-base";

const DarkState = (props) => {
    const s1 = {
        colorMode: "light",
        headerColor: "#6411B2",
        bgColor: "#FFFFFF",
        boxColor1: "#F3F4F6",
        boxColor2: "#d9d5eb",
        greenVariant: "green.700",
        purpleVariant: "#6411B2",
        fontColor: "black",
        continueBtn: "#4C1D95",
    };
    const [state, setState] = useState(s1);
    const onToggle = () => {
        console.log("Ruchi");
        setState((prev) => ({
            colorMode: prev.colorMode === "light" ? "dark" : "light",
            headerColor: prev.headerColor === "#6411B2" ? "#111827" : "#6411B2",
            bgColor: prev.bgColor === "#FFFFFF" ? "#1F2937" : "#FFFFFF",
            boxColor1: prev.boxColor1 === "#F3F4F6" ? "#374151" : "#F3F4F6",
            boxColor2: prev.boxColor2 === "#d9d5eb" ? "#374151" : "#d9d5eb",
            purpleVariant:
                prev.purpleVariant === "#6411B2" ? "purple.400" : "#6411B2",
            greenVariant:
                prev.greenVariant === "green.700" ? "green.400" : "green.700",
            fontColor: prev.fontColor === "black" ? "white" : "black",
            continueBtn: prev.continueBtn === "#4C1D95" ? "#6D28D9" : "#4C1D95",
        }));
    };
    return (
        <darkContext.Provider value={{ state, onToggle }}>
            <NativeBaseProvider>{props.children}</NativeBaseProvider>
        </darkContext.Provider>
    );
};

export default DarkState;
