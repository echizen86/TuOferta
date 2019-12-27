import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { SearchBar } from "react-native-elements";
import { styles } from "./headerHomeStyles.js";

interface Props {
    navigation?: NavigationScreenProp<NavigationState & any>;
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
            <View style={styles.main}>
                <View style={{ height: "100%", width: "80%", justifyContent: "center" }}>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={(text: string) => this.onChangeText(text)}
                        value={this.state.searchText}
                        searchIcon={null}
                        containerStyle={styles.searchBar}
                        inputContainerStyle={{ backgroundColor: "gray", borderWidth: 1 }}
                    />
                </View>
                <View style={{ height: "100%", width: "20%", justifyContent: "center" }}>
                    <TouchableOpacity style={styles.button}>
                        <Text>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
