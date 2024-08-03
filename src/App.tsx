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
  StyledButton,
  StyledText,
  StyledTextInput,
} from '../Styles/AppStyle';

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

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <StyledScrollView>
        <View>
          <StyledTextInput
            value={task}
            onChangeText={newText => setTask(newText)}
          />
          <StyledButton title="Adicionar" onPress={addToDo} />
          <StyledText>a</StyledText>
          {toDo.map(item => {
            const text = JSON.stringify(item.name); // Correctly declare and compute outside JSX
            return (
              <View key={item.id}>
                <Text>{JSON.parse(text)}</Text>
              </View>
            );
          })}
        </View>
      </StyledScrollView>
    </SafeAreaView>
  );
}

export default App;
