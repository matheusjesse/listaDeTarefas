import { startTransition } from 'react';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #fffefa;
  height: 100%;
`;

const TitleText = styled.Text`
  text-align: center;
  font-size: 24px;
  margin: 12px 0px 12px 0px;
  color: #1f1c18;
`;

const StyledScrollView = styled.ScrollView``;

const StyledTextInput = styled.TextInput`
  background-color: white;
  width: 200px;
  height: 44px;
  margin: 12px;
  border-radius: 12px;
  border: 1px solid #edede4;
  padding-left: 17px;
  font-size: 16px;
`;

const AddTaskView = styled.View`
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
const StyledTouchableOpacity = styled.TouchableOpacity`
  height: 44px;
  background-color: red;
  width: 120px;
  color: black;
  align-items: center;
  justify-content: center;
  margin: 12px 12px 12px 0;
  border-radius: 12px;
  background-color: #1f6b5e;
`;

const AddTaskText = styled.Text`
  font-size: 20px;
  color: white;
`;

const LeftTaskView = styled.View`
  flex: 1;
  flex-direction: row;
`;

const TaskView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 12px 0px 12px;
  margin: 0px 0px 12px 0px;
  border-bottom-width: 0.2px;
  border-bottom-color: #d6d6c5;
`;
const TaskText = styled.Text`
  color: #1f1c18;
  text-align: start;
  font-size: 18px;
  font-weight: 400;
  padding-top: 2px;
  width: 90%;
`;

const RemoveTaskButton = styled.TouchableOpacity``;
const RemoveTaskText = styled.Text`
  font-weight: 700;
  font-size: 16px;
  border-radius: 8px;
  color: #ff8e26;
  padding: 4px;
  text-align: right;
`;

const StyledErrorText = styled.Text`
  text-align: center;
  margin-top: -7px;
`;

const StyledTextLength = styled.Text `
text-align: center;
margin-top: -7px;
`

const CompletedTaskText = styled.Text`
  text-align: center;
  font-size: 22px;
`;

export default StyledScrollView;
export {
  StyledTextInput,
  StyledTouchableOpacity,
  RemoveTaskButton,
  AddTaskText,
  AddTaskView,
  TaskView,
  LeftTaskView,
  TaskText,
  StyledSafeAreaView,
  RemoveTaskText,
  TitleText,
  StyledErrorText,
  CompletedTaskText,
  StyledTextLength,
};
