/* eslint-disable */ 
import {Platform, StyleSheet} from 'react-native';

const boxShadow: any = Platform.select({
  ios: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  android: {elevation: 6},
});

export default StyleSheet.create({
  container: {marginBottom:20,width:'100%',
  
},
  imageContainer: {flex: 1},
  image: {
    flex: 1,
    borderRadius: 10,
    height: 300,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 160,
    paddingLeft: 16,
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    paddingBottom: 24,
  },
  timestamp: {
    position: 'absolute',
    color: '#eee',
    fontSize: 12,
    fontWeight: '300',
    right: 16,
    bottom: 8,
  },
});