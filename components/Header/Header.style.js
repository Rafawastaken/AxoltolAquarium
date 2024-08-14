import { StyleSheet } from "react-native";

// Theme
import { COLORS, SHADOWS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row", // Arrange items horizontally
    alignItems: "center", // Vertically center the image and text
    justifyContent: "space-between", // Create space between the image and text
    backgroundColor: COLORS.lightPink,
    ...SHADOWS.small,
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.pink,
  },

  image: {
    width: 70, // Specify the width of the image
    height: 70, // Specify the height of the image
  },
});

export default styles;
