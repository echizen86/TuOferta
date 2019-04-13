import React, { Component } from "react";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";
import Home from "../screens/home/Home";
import Account from "../screens/account/Account";
import Messages from "../screens/messages/Messages";
import Post from "../screens/post/Post";
import Offers from "../screens/offers/Offers";

const HomeStack = createStackNavigator({ Home: Home }, { headerMode: "none" });

const AccountStack = createStackNavigator({ Account: Account }, { headerMode: "none" });

const MessagesStack = createStackNavigator({ Messages: Messages }, { headerMode: "none" });

const PostStack = createStackNavigator({ Post: Post }, { headerMode: "none" });

const OffersStack = createStackNavigator({ Offers: Offers }, { headerMode: "none" });

const bottomTabNavigatorConfig = {
    tabBarOptions: {
        activeTintColor: "white",
        inactiveTintColor: "gray",
        style: { backgroundColor: "green" },
        showIcon: true,
        showLabel: true,
    },
};

export const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: ({ focused, horizontal, tintColor }) => (
                    <Icon name="home" style={{ color: tintColor }} type={"AntDesign"} />
                ),
            },
        },
        Messages: {
            screen: MessagesStack,
            navigationOptions: {
                tabBarIcon: ({ focused, horizontal, tintColor }) => (
                    <Icon name="message-square" style={{ color: tintColor }} type={"Feather"} />
                ),
            },
        },
        Post: {
            screen: PostStack,
            navigationOptions: {
                tabBarIcon: ({ focused, horizontal, tintColor }) => (
                    <Icon name="camera" style={{ color: tintColor }} type={"Feather"} />
                ),
            },
        },
        Offers: {
            screen: OffersStack,
            navigationOptions: {
                tabBarIcon: ({ focused, horizontal, tintColor }) => (
                    <Icon name="local-offer" style={{ color: tintColor }} type={"MaterialIcons"} />
                ),
            },
        },
        Account: {
            screen: AccountStack,
            navigationOptions: {
                tabBarIcon: ({ focused, horizontal, tintColor }) => (
                    <Icon name="account" style={{ color: tintColor }} type={"MaterialCommunityIcons"} />
                ),
            },
        },
    },
    bottomTabNavigatorConfig
);
