import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../styles/styles";
import { Icon } from "native-base";

interface Props {
    navigation: NavigationScreenProp<NavigationState & any>;
}
interface State {}

export default class Post extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View
                style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}
            >
                <Text>Post!</Text>
            </View>
        );
    }
}
