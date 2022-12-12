import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  DatePickerInput,
  registerTranslation,
  en,
} from "react-native-paper-dates";

registerTranslation("en", en);

function App() {
  const [date, setDate] = useState(undefined);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <DatePickerInput value={date} onChange={(d) => setDate(d)} />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
