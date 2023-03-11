import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";

const HomreScreen = () => {
  const [value, setvalue] = useState("");


  return {
    setLocation,
    setloading,
    setForecast,
    setShow,
    setweather,
  };
};

const buscar = () => {
  console.log(value);
  setvalue("");
  getLocation(value);
};

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
        <Text style={{ textAlign: "center" }}>hello como ta tu </Text>
      </View>
      <Card
        show={show}
        loading={loading}
        weather={weather}
        forecast={forecast}
      />
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
