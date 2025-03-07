import { Modal, View, TouchableOpacity, Text } from "react-native";
import React from "react";

interface QuizCloseModalProps {
  displayModal: boolean;
  handleCloseModal: () => void;
  handleConfirmReturn: () => void;
}

const QuizCloseModal = ({
  displayModal,
  handleCloseModal,
  handleConfirmReturn,
}: QuizCloseModalProps) => {
  return (
    <Modal transparent={true} animationType="fade" visible={displayModal}>
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="bg-white p-6 w-4/5 items-center">
          <Text className="mb-2 text-justify">
            Are you sure you want to go back? Your progress will be lost
          </Text>
          <View className="flex-row justify-end gap-10 w-full">
            <TouchableOpacity className="" onPress={handleCloseModal}>
              <Text className="font-medium">No</Text>
            </TouchableOpacity>
            <TouchableOpacity className="" onPress={handleConfirmReturn}>
              <Text className="font-medium">Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default QuizCloseModal;
