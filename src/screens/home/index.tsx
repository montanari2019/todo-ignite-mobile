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

import { useState } from "react";
import { TaskListProps } from "./@types";
import { ButtonCheck } from "../../components/ButtonCheck";
import { ButtonTrash } from "../../components/ButtonTrash";
import { NotItens } from "../../components/NotItens";

export function HomeListComponent() {
  const [listTasks, setListTasks] = useState<TaskListProps[]>([]);
  const [titleTaks, setTitleTask] = useState("");

  function handleAddTask() {
    const newTask = {
      id: Math.random().toString(),
      title: titleTaks,
      done: true,
    };

    setListTasks((preventState) => [...preventState, newTask]);

    setTitleTask("");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image source={LogoProjeto} width={110.34} height={32} />
        </View>

        <View style={styles.inputDisplay}>
          <TextInput
            style={styles.input}
            value={titleTaks}
            onChangeText={(e) => setTitleTask(e)}
            placeholder="Nova tarefa"
            placeholderTextColor={"#808080"}
            keyboardType="default"
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tasksContainer}>
        <View style={styles.headerParagraph}>
          <View style={styles.paragraphInfoDisplay}>
            <Text style={styles.paragraphCreate}>Criadas</Text>
            <View style={styles.paragraphBageInfo}>
              <Text style={styles.paragraphBageInfoText}>{listTasks.length}</Text>
            </View>
          </View>
          <View style={styles.paragraphInfoDisplay}>
            <Text style={styles.paragraphConclude}>Concluidas </Text>
            <View style={styles.paragraphBageInfo}>
              <Text style={styles.paragraphBageInfoText}>
                {listTasks.reduce((count, task) => {
                  return task.done ? count + 1 : count;
                }, 0)}
              </Text>
            </View>
          </View>
        </View>

        {listTasks.length === 0 ? (
          <NotItens />
        ) : (
          <ScrollView style={styles.cardTaskContainer}>
            {listTasks.map((index) => {
              return (
                <View style={styles.cardTask} key={index.id}>
                  <ButtonCheck />
                  <Text style={styles.paragraphInfoText}>{index.title}</Text>
                  <ButtonTrash />
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </ScrollView>
  );
}
