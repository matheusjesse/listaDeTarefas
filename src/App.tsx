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

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [toDo, setToDo] = useState<itemTypes[]>([]);
  const [task, setTask] = useState<string>('');

  const addToDo = () => {
    if (task.length <= 1) {
      console.log('tarefa deve ter mais de uma letra');
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

    setToDo([...toDo, newToDo]);

    setTask('');
  };

  const taskComplet = (id: number) => {
    const itemSelected = toDo.findIndex(item => item.id === id);

    toDo[itemSelected].checked = !toDo[itemSelected].checked;
  };

  const removeToDo = (id: number) => {
    const newList = toDo.filter(item => item.id !== id);
    setToDo(newList);
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
          {toDo.map(item => {
            const text = JSON.stringify(item.name); // Correctly declare and compute outside JSX
            return (
              <TaskView key={item.id}>
                <LeftTaskView>
                  <BouncyCheckbox
                    value={item.checked}
                    onValueChange={taskComplet}
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
      </StyledScrollView>
    </StyledSafeAreaView>
  );
}

export default App;
