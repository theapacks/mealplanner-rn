import { StyleSheet, Platform } from 'react-native';

export default styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,        
        elevation: 3,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
      },
      container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      },
      title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right',
      }
});