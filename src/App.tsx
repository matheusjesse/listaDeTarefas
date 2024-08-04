/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import StyledScrollView, {
  StyledTouchableOpacity,
  StyledTextInput,
  AddTaskView,
  AddTaskText,
  StyledSafeAreaView,
  TitleText,
  StyledErrorText,
  CompletedTaskText,
  StyledTextLength,
} from '../Styles/AppStyle';
import TaskItem from './componentes/TaskItem';

type ItemTypes = {
  name: string;
  checked: boolean;
  id: number;
};

const ErrorText = () => {
  return (
    <StyledErrorText>A tarefa deve ter no máximo 120 letras</StyledErrorText>
  );
};

function App(): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';
  const [toDo, setToDo] = useState<ItemTypes[]>([]);
  const [task, setTask] = useState<string>('');
  const [textError, setTextError] = useState<boolean>(false);
  const [totalTasks, setTotalTasks] = useState<number>(0);
  const [taskCompleted, setTaskCompleted] = useState<number>(0);

  const addToDo = () => {
    if (task.length <= 1) {
      console.log('tarefa deve ter mais de uma letra');
      return;
    };
    
    const newId = toDo.length > 0 ? toDo[toDo.length - 1].id + 1 : 1;

    const newToDo: ItemTypes = {
      id: newId,
      name: task,
      checked: false,
    };

    setTotalTasks(totalTasks + 1);
    setToDo([...toDo, newToDo]);
    setTask('');
  };

  const taskComplet = (id: number) => {
    const updatedToDo = toDo.map(item =>
      item.id === id ? {...item, checked: !item.checked} : item,
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

  const onChangeText = (text: string) => {
    setTask(text);
    setTextError(text.length > 120);
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
              onChangeText={onChangeText}
            />
            <StyledTouchableOpacity onPress={addToDo}>
              <AddTaskText>Adicionar</AddTaskText>
            </StyledTouchableOpacity>
          </AddTaskView>
          {textError ? ErrorText() :
            <StyledTextLength>{task.length} / 120</StyledTextLength>
          }
          {toDo.map(item => {
            return (
              <TaskItem
              key={item.id}
              id={item.id}
              name={item.name}
              checked={item.checked}
              onToggle={taskComplet}
              onRemove={removeToDo}
            />
            );
          })}
        </View>
        {
          toDo.length > 0 && <CompletedTaskText>{`${taskCompleted} / ${totalTasks}`}</CompletedTaskText>
        }
      </StyledScrollView>
    </StyledSafeAreaView>
  );
}

export default App;
