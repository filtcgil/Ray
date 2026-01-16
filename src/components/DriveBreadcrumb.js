import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';

export default function DriveBreadcrumb({ path, onNavigate }) {
  return (
    <View style={styles.container}>
      {path.map((item, index) => (
        <TouchableOpacity key={item.id} onPress={() => onNavigate(index)}>
          <Text style={styles.text}>
            {item.name}
            {index < path.length - 1 ? ' / ' : ''}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  text: {
    color: COLORS.primary,
    fontSize: 15,
  },
});
