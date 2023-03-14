import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Spiner from './Spiner'
import Info from './Info'

const Card = ({ show, loading, weather, forecast }) => {
  return (
    <View style={styles.container}>
      {
        show === true ? (
          <Info
            loading={loading}
            weather={weather}
            forecast={forecast}
          />
        ) : (
          <Spiner />
        )
      }
    </View >
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginVertical: 50,
    borderRadius: 10,
    padding: 10,
    // flex: 1,
    // justifyContent: 'center',  centrar en el medio
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
})