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

  let urlApiCli =
    "https://api.openweathermap.org/data/2.5/weather?appid=26c25a94171b06cf681d940caed738cf&lang=es";
  let cityUrl = "&q=";
  let urlForecast =
    "https://api.openweathermap.org/data/2.5/weather?appid=26c25a94171b06cf681d940caed738cf&lang=es";

  const [weather, setweather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const [loading, setloading] = useState(false);

  const getLocation = async (loc) => {
    setloading(true);
    setLocation(loc);

    // /weather/weather
    urlApiCli = urlApiCli + cityUrl + loc;

    await fetch(urlApiCli)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        setweather(weatherData);
        console.log(weatherData, "Actual");
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        setShow(false);
      });

    urlForecast = urlForecast + cityUrl + loc;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        setForecast(forecastData);
        console.log(forecastData, "Futuro");
        setloading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        setShow(false);
      });

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