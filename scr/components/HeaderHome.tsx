import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../styles/styles";
import { SearchBar } from "react-native-elements";

interface Props {
    navigation: NavigationScreenProp<NavigationState & any>;
}
interface State {
    searchText: string;
}

export default class HeaderHome extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            searchText: "",
        };
    }

    onChangeText = (text: string) => {
        this.setState({
            searchText: text,
        });
    };

    render() {
        return (
            <View
                style={{
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "green",
                    height: SCREEN_HEIGHT * 0.08,
                    width: SCREEN_WIDTH,
                    top: 0,
                    flexDirection: "row",
                }}
            >
                <View style={{ height: "100%", width: "80%", justifyContent: "center" }}>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={(text: string) => this.onChangeText(text)}
                        value={this.state.searchText}
                        searchIcon={null}
                        containerStyle={{
                            backgroundColor: "transparent",
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            height: "100%",
                        }}
                        inputContainerStyle={{ backgroundColor: "gray", borderWidth: 1 }}
                    />
                </View>
                <View style={{ height: "100%", width: "20%", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={{
                            width: "90%",
                            height: "90%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 1,
                            borderRadius: 10,
                        }}
                    >
                        <Text>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
