import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #fffefa;
  height: 100%;
`;

const StyledScrollView = styled.ScrollView``;

const StyledText = styled.Text`
  color: red;
`;

const StyledTextInput = styled.TextInput`
  background-color: white;
  width: 200px;
  height: 44px;
  margin: 12px;
  border-radius: 12px;
  border: 1px solid #edede4;
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
  background-color: #1F6B5E;
`;

const AddTaskText = styled.Text`
  font-size: 20;
  color: white;
`;

const LeftTaskView = styled.View`
  flex: 1;
  flex-direction: row;
`;

const TaskView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 12px 0px 12px;
  margin: 0px 0px 12px 0px;
`;
const TaskText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 18;
  font-weight: 400;
  padding-top: 4px;
`;
const RemoveTastButton = styled.Button`
`;
export default StyledScrollView;
export {
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  RemoveTastButton,
  AddTaskText,
  AddTaskView,
  TaskView,
  LeftTaskView,
  TaskText,
  StyledSafeAreaView,
};
