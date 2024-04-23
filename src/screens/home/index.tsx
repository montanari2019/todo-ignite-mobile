import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styled";

import LogoProjeto from "../../../assets/logoTodo.png";
import { Separator } from "../../components/Separator";

export function HomeListComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image source={LogoProjeto} width={110.34} height={32} />
        </View>

        <View style={styles.inputDisplay}>
          <TextInput
            style={styles.input}
            //   value={inputValue}
            //   onChangeText={(e) => setInputValue(e)}
            placeholder="Nova tarefa"
            placeholderTextColor={"#808080"}
            keyboardType="default"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tasksContainer}>
        <View style={styles.headerParagraph}>
          <View style={styles.paragraphInfoDisplay}>
            <Text style={styles.paragraphCreate}>Criadas</Text>
            <View style={styles.paragraphBageInfo}>
              <Text style={styles.paragraphBageInfoText}>0</Text>
            </View>
          </View>
          <View style={styles.paragraphInfoDisplay}>
            <Text style={styles.paragraphConclude}>Concluidas </Text>
            <View style={styles.paragraphBageInfo}>
            <Text style={styles.paragraphBageInfoText}>0</Text>
            </View>
          </View>
        </View>

        <Separator />
      </View>
    </ScrollView>
  );
}
