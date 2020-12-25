import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { PlaybackControl } from '../screens/PlaybackControl';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="PlaybackControl"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
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

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const PlaybackControlStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <PlaybackControlStack.Navigator>
      <PlaybackControlStack.Screen
        name="TabOneScreen"
        component={PlaybackControl}
        options={{ headerTitle: 'Playback Control' }}
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
        component={TabTwoScreen}
        options={{ headerTitle: 'Account' }}
      />
    </TabTwoStack.Navigator>
  );
}
