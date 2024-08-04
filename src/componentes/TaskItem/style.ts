import styled from "styled-components/native";

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

const RemoveTaskButton = styled.TouchableOpacity`
  width: 74px;
  margin-left: 80%;
`;

const RemoveTaskText = styled.Text`
  font-weight: 700;
  font-size: 16px;
  border-radius: 8px;
  color: #ff8e26;
  padding: 4px;
  text-align: right;
`;

export {
  RemoveTaskButton,
  TaskView,
  LeftTaskView,
  TaskText,
  RemoveTaskText,
}
