import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200
      },
      details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
      },
      title: {
        fontSize: 22,
        textAlign: 'center'
      },
      listItem: {
        marginVertical: 5,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        padding: 5
      }    
});