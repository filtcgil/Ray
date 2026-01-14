import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { fetchDriveFolders } from '../services/DriveService';

export default function HomeScreen() {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDriveFolders()
      .then(data => { setFolders(data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drive Folders</Text>
      {loading ? <Text>Loading...</Text> : (
        <FlatList
          data={folders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.name}</Text>
              <Button title="Open" onPress={() => console.log('Open', item.id)} />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  item: { marginVertical: 8 },
});
