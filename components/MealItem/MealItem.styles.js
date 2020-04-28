import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
      },
      bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
      },
      mealRow: {
        flexDirection: 'row'
      },
      mealHeader: {
        height: '85%'
      },
      mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
      },
      titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
      },
      title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
      }
});