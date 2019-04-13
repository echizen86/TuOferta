import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationScreenProp, NavigationState } from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<NavigationState & any>;
}
interface State {}

export default class Account extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View
                style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "yellow" }}
            >
                <Text>Account!</Text>
            </View>
        );
    }
}
