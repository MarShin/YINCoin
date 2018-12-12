// @flow
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const createMaterialIcon = (name, color, size = 22) => (
  <MaterialIcons name={name} size={size} color={color} />
);

export const createMaterialCommunityIcon = (name, color, size = 22) => (
  <MaterialCommunityIcons name={name} size={size} color={color} />
);
