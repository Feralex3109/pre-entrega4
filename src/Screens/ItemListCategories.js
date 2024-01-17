import React, { useState, useEffect } from "react";
import { FlatList, View, Pressable, Text } from "react-native";
import allProducts from "../Data/products.json";

const ItemListCategories = ({ navigation, route }) => {
  const { Categories } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsFilted = allProducts.filter(
      (product) => product.Categories === Categories
    );
    setProducts(productsFilted);
  }, [category]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("ItemDetail", { id: item.id });
            }}
          >
            <Text>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
