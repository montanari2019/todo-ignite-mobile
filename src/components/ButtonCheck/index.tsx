import { Image, TouchableOpacity, View } from "react-native";
import Check from "../../../assets/Vector.png";
import { styled } from "./styled";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

interface ButtonCheckProps {
  isChecked: boolean;
}

export function ButtonCheck() {
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
        style={checkButton ? styled.buttonClick : styled.buttonNotClick}
      >
        <AntDesign
          name="check"
          size={18}
          color="#F2F2F2"
          style={checkButton ? { display: "flex" } : { display: "none" }}
        />
      </TouchableOpacity>
    </View>
  );
}
