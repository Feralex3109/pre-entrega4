import React from "react";
import { View, Text, FlatList, Pressable } from "react-native-web";
import { StyleSheet, View } from "react-native";
import Header from "../Components/Header";
import Categories from "../Components/Categories";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={Categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("ItemListCategories", { Categories: item });
            }}
          >
            <Text>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
