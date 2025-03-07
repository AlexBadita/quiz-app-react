import { Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../components/MenuItem";
import { categories } from "@/assets/data/categories";

const MenuScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-backgroundColor p-4">
      <Text className="text-3xl font-bold text-white mt-5 mb-10 text-center">
        Select a Category
      </Text>
      <View className="w-full mb-32">
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={
            categories.length % 2 !== 0
              ? [...categories, { id: -1, name: "", icon: null }] // Placeholder if last row has only one item
              : categories
          }
          numColumns={2}
          contentContainerStyle={{
            width: "100%",
            gap: 20,
            justifyContent: "center",
          }}
          columnWrapperStyle={{
            gap: 20,
            flex: 1,
            marginStart: 20,
            marginEnd: 20,
          }}
          renderItem={({ item }) =>
            item.id !== -1 ? (
              <MenuItem id={item.id} name={item.name} icon={item.icon} />
            ) : (
              <View className="flex-1" />
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
