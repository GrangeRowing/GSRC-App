// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ComponentProps } from 'react';

// Define the props for the TabBarIcon component
type TabBarIconProps = {
  style?: any;
  name: ComponentProps<typeof Ionicons>['name'];
  size?: number;
  color?: string;
};

// Adjust the function to use the correct props
export function TabBarIcon({ style, name, size = 28, color, ...rest }: TabBarIconProps) {
  return <Ionicons name={name} size={size} style={[{ marginBottom: -3 }, style]} color={color} {...rest} />;
}
