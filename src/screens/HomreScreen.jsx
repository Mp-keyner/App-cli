import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const HomreScreen = () => {
  const [value, setvalue] = useState("");

  let urlApiCli = 'https://api.openweathermap.org/data/2.5/weather?appid=26c25a94171b06cf681d940caed738cf&lang=es'
  let cityUrl = "&q="
  let urlForecast = 'https://api.openweathermap.org/data/2.5/weather?appid=26c25a94171b06cf681d940caed738cf&lang=es'

  const buscar = () => {
    console.log(value)
    setvalue('')
  }

  return (
    <>
      <View>
        <View style={styles.search}>
          <TextInput
            value={value}
            onChangeText={(event) => {
              setvalue(event);
            }}
            placeholder="ingresa la ciudad.."
            style={styles.TextInput}
          />
          <TouchableOpacity style={styles.buton} onPress={buscar}>
            <Text>Buscar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>hello</Text>
        </View>
      </View>
    </>
  );
};

export default HomreScreen;

const styles = StyleSheet.create({
  TextInput: {
    padding: 10,
    backgroundColor: "#dedede",
    borderRadius: 10,
    width: 250,
  },
  buton: {
    marginTop: 4,
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
    backgroundColor: "green",
    marginLeft: 10,
  },
  search: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    // backgroundColor: 'red',
    width: 380,
    justifyContent: "center",
  },
});
