import { StyleSheet } from 'react-native';

import appStyles from '../../../app.styles';

export const getStyles = (theme) =>
  StyleSheet.create({
    ...appStyles,

    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });