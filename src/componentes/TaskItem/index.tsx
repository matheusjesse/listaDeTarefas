import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TaskView, LeftTaskView, TaskText, RemoveTaskButton, RemoveTaskText } from './style';

type TaskItemProps = {
  id: number;
  name: string;
  checked: boolean;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ id, name, checked, onToggle, onRemove }) => {
  return (
    <TaskView key={id}>
      <LeftTaskView>
        <BouncyCheckbox
          isChecked={checked}
          onPressIn={() => onToggle(id)}
        />
        <TaskText>{name}</TaskText>
      </LeftTaskView>
      <RemoveTaskButton onPress={() => onRemove(id)}>
        <RemoveTaskText>Remover</RemoveTaskText>
      </RemoveTaskButton>
    </TaskView>
  );
};

export default TaskItem;
