import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./src/screens/Main";

export type RootStackParamList = {
    Main: undefined;
};

const MainNavigator = createStackNavigator<RootStackParamList>();

const Router: FC = () => {
    return (
        <MainNavigator.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false,
            }}
            headerMode="none">
            <MainNavigator.Screen name="Main" component={MainScreen} />
        </MainNavigator.Navigator>
    );
};

export default Router;
