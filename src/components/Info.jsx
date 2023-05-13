import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Clouds from './Clouds'

const Info = ({ forecast, loading, weather, }) => {

    var today = new Date()
    var day = today.getDate()
    var month = today.getMonth() + 1
    var year = today.getFullYear()
    var date = day + '/' + month + '/' + year

    console.log(weather)
    return ( 
        <View style={{ backgroundColor: 'gray' }}>
            <View>
                <Text style={styles.id}>ID : {weather.id}</Text>
                <Text style={styles.Text}>{weather.name} - {weather.sys.country}</Text>
                <Text style={styles.temperatura}>{(weather.main.temp - 273.15).toFixed(1)} °C</Text>
                <Text style={styles.date}>{date}</Text>

                <View style={styles.dos}>
                    <Text style={styles.templace}>🚧 Zona horaria : {weather.timezone}</Text>
                    <Text style={styles.templace}>💧 Humedad : {weather.main.humidity}%</Text>
                </View>

                <Text style={styles.viento}>💨 Velocidad del viento {weather.wind.speed}m/s E</Text>
                <View style={styles.templace}></View>
                <Text style={styles.title}>Coordenadas :</Text>
                <View style={styles.coord}>
                    <Image
                        source={require('../../assets/lati.png')}
                        style={styles.lati}
                    />
                    <View style={styles.lon}>
                        <View style={{
                            margin: 10,
                            marginEnd: 30
                        }}>
                            <Text style={{ fontSize: 20 }}>- longuitud</Text>
                            <Text style={{ fontSize: 20 }}>{weather.coord.lon}</Text>
                        </View>
                        <View style={{
                            margin: 10,
                            marginStart: 30
                        }}>
                            <Text style={{ fontSize: 20 }}>- latitud</Text>
                            <Text style={{ fontSize: 20 }}>{weather.coord.lat}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.title}>Descripción general</Text>
                <Text> </Text>
                <Clouds nubes={weather.weather[0].description}/>

            </View>

        </View >
    )
}

export default Info

const styles = StyleSheet.create({

    templace: {
        padding: 10,
        // margin: 10,
        backgroundColor: 'red'
    },
    Text: {
        backgroundColor: '#609beb70',
        fontWeight: 'bold',
        fontSize: 40,
        padding: 10,
        // margin: 10,jik
        borderRadius: 10,
        textAlign: 'center'
    },
    id: {
        fontSize: 10,
    },
    temperatura: {
        fontSize: 80,
        textAlign: 'center',
        // backgroundColor: 'red',
    },
    date: {
        // backgroundColor: 'red',
        textAlign: 'center',
        marginTop: -15
    },
    dos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viento: {
        padding: 10,
        margin: 10,
        backgroundColor: 'red'
    },
    coord: {
        // justifyContent: 'center',
        alignItems: 'center'
    },
    lati: {
        width: 290,
        height: 140,
    },
    lon: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    }
})
