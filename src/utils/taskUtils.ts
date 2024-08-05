export const validateTask = (task: string): string | null => {
    if (task.length <= 1) return 'A tarefa deve ter mais de uma letra.';
    if (task.length > 120) return 'A tarefa deve ter no máximo 120 letras.';
    return null;
  };
  