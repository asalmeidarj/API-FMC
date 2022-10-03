import { StyleSheet } from 'react-native';
import { THEME } from 'theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '20%',
    backgroundColor: THEME.COLORS.BACKGROUND_800
  },
  navigation: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  itemNavigation: {
    color: THEME.COLORS.CAPTION_500,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BLACK
  },
  itemNavigationActive: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BLACK
  },

});