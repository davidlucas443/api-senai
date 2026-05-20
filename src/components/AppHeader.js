import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import { Asset } from 'expo-asset';

export default function AppHeader() {
  const theme = useTheme();
  const [uri, setUri] = useState(null);

  useEffect(() => {
    async function load() {
      const asset = Asset.fromModule(require('../../assets/senai-logo.svg'));
      await asset.downloadAsync();
      setUri(asset.localUri || asset.uri);
    }
    load();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primaryContainer }]}> 
      {uri ? (
        <SvgUri uri={uri} width={140} height={36} />
      ) : (
        <Text variant="titleLarge" style={styles.title}>
          SENAI
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'flex-start',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    color: '#7A2C2C',
    fontWeight: '800',
  },
});
