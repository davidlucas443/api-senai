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
        <Text variant="titleLarge" style={[styles.title, { color: theme.colors.onPrimary }]}>
          SENAI
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
});
