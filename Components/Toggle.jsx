import { Box, Center, Switch, Text} from "native-base";
import React, { useContext, useState } from "react";

import darkContext from "../Context/DarkContext";

const Toggle = () => {
    const a = useContext(darkContext);
    console.log(a.state)
    console.log("HimaniMihir Rocks bsdk", a.state);

    const [isDark, setIsDark] = useState(false)

    const toggleSwitch = () => {
        a.onToggle()
        setIsDark(prev => !prev)
    }
    return (
        <Center mt='5%'> 
            <Switch size={'md'} onValueChange={toggleSwitch} value={isDark}/>
            <Text>Toggle</Text>
        </Center>
    )
}

export default Toggle;