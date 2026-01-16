import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import DriveItem from '../components/DriveItem';
import { mockDrive } from '../data/mockDrive';
import { COLORS } from '../theme/colors';

export default function HomeDriveScreen() {
  const [currentFolder, setCurrentFolder] = useState('root');
  const [history, setHistory] = useState([]);

  const data = mockDrive[currentFolder] || [];

  const openItem = (item) => {
    if (item.type === 'folder') {
      setHistory([...history, currentFolder]);
      setCurrentFolder(item.id);
    } else {
      // in futuro: download / preview
      alert(`Apri file: ${item.name}`);
    }
  };

  const goBack = () => {
    const prev = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setCurrentFolder(prev || 'root');
  };

  return (
    <View style={styles.container}>
      {history.length > 0 && (
        <Text style={styles.back} onPress={goBack}>
          ← Torna indietro
        </Text>
      )}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DriveItem item={item} onPress={() => openItem(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.background,
  },
  back: {
    marginBottom: 10,
    color: COLORS.primary,
    fontSize: 16,
  },
});
