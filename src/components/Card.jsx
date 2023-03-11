import { View, Text } from 'react-native'
import React from 'react'

const Card = ({show, loading, weather, forecast}) => {
  return (
    <View>
        {
          show === true ? (
              <View>
                  <View>
                     <Text>si hay info</Text>
                     <Text>{weather.name}</Text>
                     <Text>{weather.timezone}</Text>
                     <Text>{weather.id}</Text>
                  </View>
                    
              </View>
          ):(
            <Text>No</Text>
          )
        }
    </View>
  )
}

export default Card