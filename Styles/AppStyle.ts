import styled from 'styled-components/native';

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

const RemoveTastButton = styled.Button``;
export default StyledScrollView;
export {
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  RemoveTastButton,
  AddTaskText,
  AddTaskView,
};
