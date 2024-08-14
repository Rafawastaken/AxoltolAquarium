// React Native
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";

// Components
import Header from "../components/Header/Heaader";
import Card from "../components/Card/Card";

// Styles
import styles from "./index.style";

// Firebase
import { useAquarioData } from "../firebase/hooks";

const App = () => {
  const { data, loading, error } = useAquarioData();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <SafeAreaView>
        <StatusBar hidden={true} />
        <Text>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <Header />
      <View>
        <Text style={styles.controlerTitle}>Controlar Aquário</Text>
        <Card
          name={"Bomba de Água"}
          status={data?.Bomba ?? false} // Pass the Bomba value
          icon="waterPump"
        />
        <Card
          name={"Luz Ultra-Violeta"}
          status={data?.Luz ?? false} // Pass the Luz value
          icon="uvLight"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
