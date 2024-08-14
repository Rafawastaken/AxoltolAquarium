import { View, Text, TouchableOpacity, Image } from "react-native";
import { useToggleAquarioStatus } from "../../firebase/hooks";

// Styles
import styles from "./Card.style";

const imageMap = {
  waterPump: require("../../assets/waterPump.png"),
  uvLight: require("../../assets/uv.png"),
};

const Card = ({ name, status, icon }) => {
  const { toggleStatus } = useToggleAquarioStatus();
  const iconSource = imageMap[icon];

  const handlePress = () => {
    const key = icon === "waterPump" ? "Bomba" : "Luz";
    toggleStatus(key, status);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image style={styles.icon} source={iconSource} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>{status ? "Ligado" : "Desligado"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
