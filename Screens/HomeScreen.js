import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../Components/firebase'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      
    </View>
  )
}
export default HomeScreen