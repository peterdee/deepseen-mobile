import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { Account }  from '../screens/Account';
import Colors from '../constants/Colors';
import { PlaybackControl } from '../screens/PlaybackControl';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="PlaybackControl"
      tabBarOptions={{
        activeTintColor: Colors.accent,
        inactiveTintColor: Colors.tabIconInactive,
        showLabel: false,
        style: {
          backgroundColor: Colors.appBackground,
          borderTopWidth: 0,
        },
        tabStyle: {
          backgroundColor: Colors.appBackground,
        },
      }}
    >
      <BottomTab.Screen
        name="PlaybackControl"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-play-circle" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: any; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const PlaybackControlStack = createStackNavigator<TabOneParamList>();

const commonHeaderOptions = {
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTitleStyle: {
    color: 'white',
  },
};

function TabOneNavigator() {
  return (
    <PlaybackControlStack.Navigator>
      <PlaybackControlStack.Screen
        name="TabOneScreen"
        component={PlaybackControl}
        options={{
          ...commonHeaderOptions,
          headerTitle: 'Playback Control',
        }}
      />
    </PlaybackControlStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={Account}
        options={{
          ...commonHeaderOptions,
          headerTitle: 'Account',
        }}
      />
    </TabTwoStack.Navigator>
  );
}
