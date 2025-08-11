import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Calculator } from "./components/Calculator/Calculator";
import { buttons } from "./components/Calculator/utils/constants";
import { ThemeProvider } from "./context/ThemeContext";
export { buttons };

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Calculator buttons={buttons} />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
