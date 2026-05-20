import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, useTheme } from 'react-native-paper';

export default function RatingStars({ rating }) {
  const theme = useTheme();
  const filled = Math.floor(rating);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <MaterialCommunityIcons
          key={star}
          name={star <= filled ? 'star' : 'star-outline'}
          size={18}
          color={theme.colors.primary}
        />
      ))}
      <Text variant="labelMedium" style={{ color: theme.colors.onBackground }}>
        {rating.toFixed(1)}
      </Text>
    </View>
  );
}
