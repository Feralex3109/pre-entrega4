import React, { useEffect, useState } from "react";
import { View, Text } from "react-native-web";
import allProducts from "../Data/products.json";
import { StyleSheet, Text, View } from "react-native";

const ItemDetail = (route) => {
  const { id } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productFind = allProducts.find((product) => product.id === id);
    setProduct(productFind);
  }, [id]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
