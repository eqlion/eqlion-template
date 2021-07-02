import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../../router";
import useFont from "../../hooks/useFont";

type Navigation = StackNavigationProp<RootStackParamList, "Main">;
type Route = RouteProp<RootStackParamList, "Main">;

const MainScreen: FC = () => {
    const navigation = useNavigation<Navigation>();
    const params = useRoute<Route>().params;
    const fontSize = useFont(16);
    return (
        <View style={styles.screen}>
            <Text style={[styles.text, { fontSize }]}>Hello world!</Text>
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
    },
});
