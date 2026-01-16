import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import DriveItem from '../components/DriveItem';
import DriveBreadcrumb from '../components/DriveBreadcrumb';
import { mockDrive } from '../data/mockDrive';
import { COLORS } from '../theme/colors';

export default function HomeDriveScreen() {
  const [currentFolder, setCurrentFolder] = useState('root');
  const [path, setPath] = useState([{ id: 'root', name: 'Archivio' }]);
  const [search, setSearch] = useState('');

  const data = mockDrive[currentFolder] || [];

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const openItem = (item) => {
    if (item.type === 'folder') {
      setCurrentFolder(item.id);
      setPath([...path, { id: item.id, name: item.name }]);
      setSearch('');
    } else {
      alert(`Apri file: ${item.name}`);
    }
  };

  const navigateBreadcrumb = (index) => {
    const newPath = path.slice(0, index + 1);
    setPath(newPath);
    setCurrentFolder(newPath[newPath.length - 1].id);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <DriveBreadcrumb path={path} onNavigate={navigateBreadcrumb} />

      <TextInput
        placeholder="Cerca file o cartelle"
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <FlatList
        data={filteredData}
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
  search: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});
