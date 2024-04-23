import { Image, Text, View } from "react-native";

import Clipboard from "../../../assets/Clipboard.png";
import { styled } from "./styled";
import { Separator } from "../Separator";

export function NotItens() {
  return (
    <>
      <Separator />
      <View style={styled.containter}>
        <Image source={Clipboard} width={56} height={56} />

        <Text style={styled.paragraphBold}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styled.paragraphRegular}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </>
  );
}
