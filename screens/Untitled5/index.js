import { Switch } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Switch style={styles.gFiLsYAl} disabled={true}></Switch><Switch style={styles.zszCxNEM} disabled={true}></Switch></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  gFiLsYAl: {
    width: 50,
    height: 25
  },
  zszCxNEM: {
    width: 50,
    height: 25
  }
});
export default Untitled5;