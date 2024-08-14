import { View, Text, Image } from "react-native";

// Styles
import styles from "./Header.style";

const Heaader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aquário Axolote</Text>
      <Image
        source={require("../../assets/axolotl.png")}
        style={styles.image}
      />
    </View>
  );
};

export default Heaader;
