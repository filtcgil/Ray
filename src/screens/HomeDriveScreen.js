import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import DriveItem from '../components/DriveItem';
import axios from 'axios';

export default function HomeDriveScreen() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    axios.get('https://<YOUR_BACKEND_URL>/drive/folders')
      .then(res => setFolders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={folders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <DriveItem item={item} onPress={() => console.log(item.name)} />
        )}
      />
    </View>
  );
}
