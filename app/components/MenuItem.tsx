import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

interface MenuItemPros {
  id: number;
  name: string;
  icon: React.JSX.Element | null;
}

const MenuItem = ({ id, name, icon }: MenuItemPros) => {
  const handleCategorySelect = (categoryId: number) => {
    router.push("/question");
  };

  return (
    <View className="flex-1">
      <TouchableOpacity
        key={id}
        className="flex-1 border border-lightGrey rounded-xl p-4 items-center"
        onPress={() => handleCategorySelect(id)}
      >
        <View className="mb-3">
          {icon ? React.cloneElement(icon, { size: 40, color: "#fff" }) : null}
        </View>
        <Text className="text-selected text-lg font-medium text-center">
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;
