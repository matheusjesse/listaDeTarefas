/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import StyledScrollView, {
  StyledTouchableOpacity,
  StyledTextInput,
  RemoveTaskButton,
  AddTaskView,
  AddTaskText,
  LeftTaskView,
  TaskView,
  TaskText,
  StyledSafeAreaView,
  RemoveTaskText,
  TitleText,
  StyledErrorText,
  CompletedTaskText,
} from '../Styles/AppStyle';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

type itemTypes = {
  name: string;
  checked: boolean;
  id: number;
};

const ErrorText = () => {
  return (
    <StyledErrorText>A tarefa deve ter manos de 25 letras</StyledErrorText>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [toDo, setToDo] = useState<itemTypes[]>([]);
  const [task, setTask] = useState<string>('');
  const [textError, setTextError] = useState<boolean>(false);
  const [totalTasks, setTotalTasks] = useState<number>(0);
  const [taskCompleted, setTaskCompleted] = useState<number>(0);
  const addToDo = () => {
    if (task.length <= 1) {
      console.log('tarefa deve ter mais de uma letra');
      return;
    }
    if (task.length > 25) {
      setTextError(true);
      return;
    }
    let newId = 1;

    if (toDo.length > 0) {
      newId = toDo[toDo.length - 1].id + 1;
    }

    const newToDo: itemTypes = {
      id: newId,
      name: task,
      checked: false,
    };
    setTotalTasks(totalTasks + 1);
    setToDo([...toDo, newToDo]);
    setTextError(false);
    setTask('');
  };

  const taskComplet = (id: number) => {
    const updatedToDo = toDo.map(item =>
      item.id === id
        ? {...item, checked: !item.checked} // Toggle checked status
        : item,
    );
    const finishedTasks = updatedToDo.filter(item => item.checked).length;
    setToDo(updatedToDo);
    setTaskCompleted(finishedTasks);
  };

  const removeToDo = (id: number) => {
    const newList = toDo.filter(item => item.id !== id);
    const toDoRemoved = toDo.find(element => element.id === id);
    setToDo(newList);
    setTotalTasks(totalTasks - 1);
    if (toDoRemoved?.checked === true) {
      setTaskCompleted(taskCompleted - 1);
    }
  };

  return (
    <StyledSafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#fffefa'}
      />
      <StyledScrollView>
        <TitleText>Olá! Essa é sua Lista de Tarefas.</TitleText>
        <View>
          <AddTaskView>
            <StyledTextInput
              value={task}
              onChangeText={newText => setTask(newText)}
            />
            <StyledTouchableOpacity onPress={addToDo}>
              <AddTaskText>Adicionar</AddTaskText>
            </StyledTouchableOpacity>
          </AddTaskView>
          {textError && ErrorText()}
          {toDo.map(item => {
            const text = JSON.stringify(item.name); // Correctly declare and compute outside JSX
            return (
              <TaskView key={item.id}>
                <LeftTaskView>
                  <BouncyCheckbox
                    value={item.checked}
                    onPressIn={() => taskComplet(item.id)}
                  />
                  <TaskText>{JSON.parse(text)}</TaskText>
                </LeftTaskView>
                <RemoveTaskButton onPress={() => removeToDo(item.id)}>
                  <RemoveTaskText>Remover</RemoveTaskText>
                </RemoveTaskButton>
              </TaskView>
            );
          })}
        </View>
        <CompletedTaskText>{`${taskCompleted} / ${totalTasks}`}</CompletedTaskText>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
}

export default App;
