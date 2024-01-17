import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "@react-navigation/stack";
import Home from "../src/Screens/Home";
import ItemListCategories from "../src/Screens/ItemListCategories";
import ItemDetail from "../src/Screens/ItemDetail";
import React from "react";

const Stack = createNativeStackNavigator();

const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => {
          return {
            header: () => {
              return (
                <Header
                  title={
                    route.name === "Home"
                      ? "Categories"
                      : route.name === "ItemListCategories"
                      ? route.params.Categories
                      : "Detalle Producto"
                  }
                />
              );
            },
          };
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ItemListCategories"
          component={ItemListCategories}
        />
        <Stack.Screen nmae="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
