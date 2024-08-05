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
  CompletedTaskText,
  StyledTextLength,
} from '../Styles/AppStyle';
import TaskItem from './componentes/TaskItem';
import ErrorText from './componentes/ErrorText';
import { validateTask } from './utils/taskUtils';

type ItemTypes = {
  name: string;
  checked: boolean;
  id: number;
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [toDo, setToDo] = useState<ItemTypes[]>([]);
  const [task, setTask] = useState<string>('');
  const [textError, setTextError] = useState<string | null>(null);
  const [totalTasks, setTotalTasks] = useState<number>(0);
  const [taskCompleted, setTaskCompleted] = useState<number>(0);

  const handleAddTask = () => {
    const error = validateTask(task);
    if (error) {
      setTextError(error);
      return;
    }

    setToDo(prevToDo => {
      const newId = prevToDo.length > 0 ? prevToDo[prevToDo.length - 1].id + 1 : 1;

      const newToDo: ItemTypes = {
        id: newId,
        name: task,
        checked: false,
      };

      setTotalTasks(prevTotal => prevTotal + 1);
      setTask('');
      return [...prevToDo, newToDo];
    });
  };

  const handleTaskComplete = (id: number) => {
    const updatedToDo = toDo.map(item =>
      item.id === id ? {...item, checked: !item.checked} : item,
    );
    const finishedTasks = updatedToDo.filter(item => item.checked).length;
    setToDo(updatedToDo);
    setTaskCompleted(finishedTasks);
  };

  const handleRemoveTask = (id: number) => {
    const newList = toDo.filter(item => item.id !== id);
    const toDoRemoved = toDo.find(element => element.id === id);
    setToDo(newList);
    setTotalTasks(totalTasks - 1);
    if (toDoRemoved?.checked === true) {
      setTaskCompleted(taskCompleted - 1);
    }
  };

  const handleChangeText = (text: string) => {
    setTask(text);
    setTextError(text.length > 120 ? 'A tarefa deve ter no máximo 120 letras.' : null);
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
              placeholder='Digite aqui...'
              onChangeText={handleChangeText}
            />
            <StyledTouchableOpacity onPress={handleAddTask}>
              <AddTaskText>Adicionar</AddTaskText>
            </StyledTouchableOpacity>
          </AddTaskView>
          {textError ? <ErrorText message={textError}/> :
            <StyledTextLength>{task.length} / 120</StyledTextLength>
          }
          {toDo.map(item => {
            return (
              <TaskItem
              key={item.id}
              id={item.id}
              name={item.name}
              checked={item.checked}
              onToggle={handleTaskComplete}
              onRemove={handleRemoveTask}
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
