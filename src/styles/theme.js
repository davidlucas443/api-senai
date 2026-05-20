import { MD3LightTheme } from 'react-native-paper';

export const appTheme = {
  ...MD3LightTheme,
  roundness: 16,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#B43F3F',
    onPrimary: '#FFF8F0',
    primaryContainer: '#F6D3B2',
    onPrimaryContainer: '#2F1A0F',
    secondary: '#2C6E7F',
    onSecondary: '#F5FEFF',
    secondaryContainer: '#CEEAF2',
    onSecondaryContainer: '#062C36',
    surface: '#FFF7EE',
    surfaceVariant: '#F4E4D6',
    background: '#F2E8DC',
    onSurface: '#1E1A16',
    outline: '#8B7A6A',
    error: '#BA1A1A',
  },
};
