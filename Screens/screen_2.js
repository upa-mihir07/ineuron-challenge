import {
    Box,
    Button,
    Center,
    FlatList,
    Image,
    NativeBaseProvider,
    ScrollView,
    Text,
} from "native-base";

import React, { useContext, useEffect } from "react";

import darkContext from "../Context/DarkContext";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const data = {
    name: "Body Suit",
    rating: 4.9,
    reviewCount: 120,
    category: "Mother care",
    price: "₹480",
    description:
        "Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch. Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch.Yellow bodysuit, has a round neck with envelo",
    review: "Sorry no review Present",
    size: [
        {
            id: 1,
            name: "New Born",
            selected: false,
        },
        {
            id: 2,
            name: "Tiny Baby",
            selected: false,
        },
        {
            id: 3,
            name: "0-3 M",
            selected: true,
        },
    ],
};

let b;

const renderSize = ({ item }) => {
    return (
        <Button
            size="sm"
            bgColor={b.state.boxColor2}
            onPress={() => {
                item.selected = !item.selected;
            }}
            ml={(4 * windowWidth) / 100}
            my={windowHeight / 100}
        >
            <Text color={b.state.fontColor}>{item.name}</Text>
        </Button>
    );
};

function Screen2({ navigation }) {
    const a = useContext(darkContext);
    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: a.state.headerColor,
            },
        });
    });

    b = a;
    const [selected, SetSelected] = React.useState([3, 0]);

    const headerHeight = useHeaderHeight();

    const onchangeSelected = (index) => {
        if (index === 0) SetSelected([3, 0]);
        if (index === 1) SetSelected([0, 3]);
    };

    return (
        <NativeBaseProvider>
            <Box
                height={windowHeight - headerHeight}
                flex={1}
                bgColor={a.state.bgColor}
            >
                <Center mx={(4 * windowWidth) / 100}>
                    <Box
                        borderRadius="md"
                        my={windowHeight / 100}
                        bgColor={b.state.boxColor2}
                        width="100%"
                    >
                        <Box padding={(1 * windowHeight) / 100}>
                            <Image
                                source={require("../assets/poster.png")}
                                alt="Unable to Load"
                                borderRadius="md"
                                width="100%"
                                height={windowHeight / 4}
                            />
                        </Box>
                    </Box>
                </Center>
                <Box flexDirection={"row"} justifyContent="space-between">
                    <Text
                        fontSize={"2xl"}
                        mx={(4 * windowWidth) / 100}
                        color={a.state.fontColor}
                    >
                        {data.name}
                    </Text>
                    <Box
                        flexDirection="row"
                        my="auto"
                        mx={(4 * windowWidth) / 100}
                        justifyContent={"space-evenly"}
                    >
                        <MaterialIcons
                            name="star"
                            size={24}
                            color={"#FBBF24"}
                        />
                        <Text
                            color={a.state.fontColor}
                        >{` ${data.rating}`}</Text>
                        <Text
                            color={a.state.fontColor}
                        >{` (${data.reviewCount})`}</Text>
                    </Box>
                </Box>
                <Box>
                    <Text
                        mx={(4 * windowWidth) / 100}
                        color={"#6B7280"}
                        fontSize="xl"
                    >
                        {data.category}
                    </Text>
                </Box>
                <Box>
                    <Text
                        mx={(4 * windowWidth) / 100}
                        fontSize="lg"
                        color={a.state.fontColor}
                    >
                        {data.price}
                    </Text>
                </Box>
                <Box
                    flexDirection={"row"}
                    justifyContent="space-between"
                    my={windowHeight / 100}
                >
                    <Text
                        mx={(4 * windowWidth) / 100}
                        color={a.state.fontColor}
                    >
                        Select Size
                        <Text color={a.state.fontColor}>( Age Group )</Text>
                    </Text>
                    <Text
                        mx={(4 * windowWidth) / 100}
                        color={a.state.boxColor1}
                    >
                        Size Chart
                    </Text>
                </Box>
                <Box
                    flexDirection={"row"}
                    alignItems={"center"}
                    mb={(2 * windowHeight) / 100}
                >
                    <FlatList
                        data={data.size}
                        renderItem={renderSize}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        horizontal={true}
                    />
                </Box>
                <ScrollView>
                    <Box flexDirection={"row"} mb={(1 * windowHeight) / 100}>
                        <Center
                            borderBottomColor={"#4C1D95"}
                            borderBottomWidth={selected[0]}
                            ml={(4 * windowWidth) / 100}
                        >
                            <Text
                                mt="3"
                                onPress={() => {
                                    onchangeSelected(0);
                                }}
                                color={a.state.fontColor}
                            >
                                Description
                            </Text>
                        </Center>

                        <Center
                            borderBottomColor={"#4C1D95"}
                            borderBottomWidth={selected[1]}
                            ml={(4 * windowWidth) / 100}
                        >
                            <Text
                                mt="3"
                                onPress={() => {
                                    onchangeSelected(1);
                                }}
                                color={a.state.fontColor}
                            >
                                Reviews
                            </Text>
                        </Center>
                    </Box>

                    <Box
                        flex={1}
                        mb={(2 * windowWidth) / 100}
                        overflowY="scroll"
                    >
                        {selected[0] === 3 && (
                            <Text
                                mx={(4 * windowWidth) / 100}
                                mt={(2 * windowWidth) / 100}
                                fontSize={"sm"}
                                color={a.state.fontColor}
                            >
                                {data.description}
                            </Text>
                        )}
                        {selected[1] === 3 && (
                            <Text
                                mx={(4 * windowWidth) / 100}
                                mt={(2 * windowWidth) / 100}
                                fontSize={"sm"}
                                color={a.state.fontColor}
                            >
                                {data.review}
                            </Text>
                        )}
                    </Box>
                </ScrollView>
                <Box
                    flexDirection={"row"}
                    mb={(2 * windowHeight) / 100}
                    mx={(4 * windowWidth) / 100}
                    justifyContent={"space-between"}
                >
                    <Button size="sm" bgColor={a.state.boxColor2} width="15%">
                        <MaterialCommunityIcons
                            name="cards-heart-outline"
                            size={24}
                            color={a.state.continueBtn}
                        />
                    </Button>

                    <Button size="sm" color={a.state.continueBtn} width="80%">
                        <Text color={"white"} fontSize="md">
                            Continue
                        </Text>
                    </Button>
                </Box>
            </Box>
        </NativeBaseProvider>
    );
}

export default Screen2;
