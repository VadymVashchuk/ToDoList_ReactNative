import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.mainTitle}>TO DO LIST</Text>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.addBtn}>
          <Button title='ADD TASK' onPress={() => console.log('123')} />
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  titleWrapper: {
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#f1f1f1'
  },
  headerContainer: {
    paddingVertical: 20,
  },
  addBtn: {
    width: 100,
    fontWeight: 'bold',
    color: 'black'
  }
})