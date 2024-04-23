import { Image, TouchableOpacity, View } from "react-native";
import Trash from "../../../assets/trash.svg";
import { styled } from "./styled";
import { useState } from "react";
import { Feather } from '@expo/vector-icons';

interface ButtonCheckProps {
  isChecked: boolean;
}


export function ButtonTrash() {
  const [checkButton, setCheckButton] = useState(false);

  function handleClickButtonCheck() {
    if (checkButton) {
      setCheckButton(false);
    } else {
      setCheckButton(true);
    }
  }

  return (
    <View>
      <TouchableOpacity
        onPress={handleClickButtonCheck}
        style={styled.buttonClick}
      >
        <Feather name="trash-2" size={25} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
