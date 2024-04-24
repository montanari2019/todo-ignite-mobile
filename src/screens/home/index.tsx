import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styled";

import LogoProjeto from "../../../assets/logoTodo.png";

import { useEffect, useState } from "react";
import { TaskListProps } from "./@types";
import { NotItens } from "../../components/NotItens";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const tasksListaDefault = [
  {
    id: Math.random().toString(),
    title: "Comprar pão",
    done: true,
  },
  {
    id: Math.random().toString(),
    title: "Comprar leite",
    done: false,
  },
  {
    id: Math.random().toString(),
    title: "Comprar arroz",
    done: true,
  },
];
export function HomeListComponent() {
  const [listTasks, setListTasks] = useState<TaskListProps[]>(tasksListaDefault);
  const [titleTaks, setTitleTask] = useState("");
  const [contadorDoneTaks, setContadorDoneTask] = useState(0);

  useEffect(() => {
    if (listTasks.length > 0) {
      const contador = listTasks.reduce((count, task) => {
        return task.done ? count + 1 : count;
      }, 0);

      setContadorDoneTask(contador);
    }else{
      setContadorDoneTask(0);
    }
  }, [listTasks]);

  function handleAddTask() {
    const newTask = {
      id: Math.random().toString(),
      title: titleTaks,
      done: false,
    };

    setListTasks((preventState) => [...preventState, newTask]);

    setTitleTask("");
  }

  function handleDoneTask(id: string) {
    // console.log("CHmando função id:", id);
    const filterTask = listTasks.filter((e) => e.id === id);

    if (filterTask) {
      if (filterTask[0].done == true) {
        const taksDone = listTasks.map((index) => {
          if (index.id === filterTask[0].id) {
            return {
              id: index.id,
              title: index.title,
              done: false,
            };
          } else {
            return {
              ...index,
            };
          }
        });

        setListTasks(taksDone);
      } else {
        const taksDone = listTasks.map((index) => {
          if (index.id === filterTask[0].id) {
            return {
              id: index.id,
              title: index.title,
              done: true,
            };
          } else {
            return {
              ...index,
            };
          }
        });

        setListTasks(taksDone);
      }
    }
  }

  function handleRemoveTask(id: string) {
    const filterTask = listTasks.filter((e) => e.id === id);
  

    if (filterTask) {
      Alert.alert(
        "Remover",
        `Deseja remover a tarefa: ${filterTask[0].title}?`,
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Remover",
            onPress: () => {
              const taksDone = listTasks.filter((index) => {
                return index.id !== filterTask[0].id;
              });
              setListTasks(taksDone);
            },
          },
        ]
      );
    }
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
              <Text style={styles.paragraphBageInfoText}>
                {listTasks.length}
              </Text>
            </View>
          </View>
          <View style={styles.paragraphInfoDisplay}>
            <Text style={styles.paragraphConclude}>Concluidas </Text>
            <View style={styles.paragraphBageInfo}>
              <Text style={styles.paragraphBageInfoText}>
                {contadorDoneTaks}
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
                  <TouchableOpacity
                    onPress={() => handleDoneTask(index.id)}
                    style={
                      index.done ? styles.buttonClick : styles.buttonNotClick
                    }
                  >
                    <AntDesign
                      name="check"
                      size={18}
                      color="#F2F2F2"
                      style={
                        index.done ? { display: "flex" } : { display: "none" }
                      }
                    />
                  </TouchableOpacity>

                  <Text
                    style={
                      index.done
                        ? styles.paragraphDoneInfoText
                        : styles.paragraphInfoText
                    }
                  >
                    {index.title}
                  </Text>

                  <TouchableOpacity
                    onPress={() => handleRemoveTask(index.id)}
                    style={styles.buttonClickTrash}
                  >
                    <Feather name="trash-2" size={25} color="#808080" />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </ScrollView>
  );
}
