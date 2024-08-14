import { StyleSheet } from "react-native";
import { COLORS, SHADOWS } from "../../constants/theme"; // Adjust the path as needed

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange items horizontally
    alignItems: "center", // Vertically center the image and text
    // justifyContent: "space-between", // Space between the image and text
    padding: 15, // Add padding inside the card
    borderRadius: 10, // Rounded corners
    backgroundColor: COLORS.white, // Background color of the card
    ...SHADOWS.small, // Apply small shadow
    marginVertical: 5, // Space between cards vertically
    marginHorizontal: 10, // Space between cards horizontally
    gap: 20,
  },

  icon: {
    width: 50, // Width of the icon
    height: 50, // Height of the icon
    borderRadius: 25, // Circle the icon if the width and height are equal
  },

  name: {
    fontSize: 18, // Font size for the name
    fontWeight: "", // Make the font bold
    color: COLORS.black, // Text color
  },

  status: {
    fontSize: 14, // Font size for the status
    color: COLORS.pink, // Text color
    marginTop: 5, // Space above the status text
    fontWeight: "",
  },
});

export default styles;
