import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loader = ({
  status,
  itemName,
  containerStyle,
  color,
  size = 'large',
}) => {
  return (
    <View style={[{ flex: 1, alignItems: 'center' }, containerStyle]}>
      <ActivityIndicator
        animating
        color={color || '#73b343'}
        style={{ margin: 'auto', flex: 1 }}
        size={size}
      />
    </View>
  );
};

export default Loader;
