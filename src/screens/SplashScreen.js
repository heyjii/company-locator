//import liraries

import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Locations");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        // style={styles.image}
        source={require("../../assets/tcs_logo.png")} // Reference the image using require 
        resizeMode="cover" // You can change this to 'contain', 'stretch', etc.
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

//make this component available to the app
export default SplashScreen;
