/* eslint-disable */ 
import {StyleSheet} from 'react-native';
import {customTheme} from '../../utils/theme';
const {colors} = customTheme;
export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor:  colors.burnt_sienna[900],
    borderRadius: 12,
    height: 28,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
    backgroundColor: colors.burnt_sienna[900],
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
  selected: {
    backgroundColor: colors.champagne_pink[900],
    borderColor:  colors.champagne_pink[900],
  },
});