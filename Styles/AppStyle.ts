import { startTransition } from 'react';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #fffefa;
  height: 100%;
`;

const TitleText = styled.Text`
  text-align: center;
  font-size: 22px;
  margin: 12px 0px 12px 0px;
  color: #1f1c18;
  height: 50px;  
  padding-top: 12px;
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
  AddTaskText,
  AddTaskView,
  StyledSafeAreaView,
  TitleText,
  StyledErrorText,
  CompletedTaskText,
  StyledTextLength,
};
