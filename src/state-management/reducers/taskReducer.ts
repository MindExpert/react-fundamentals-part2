interface Task {
    id: number;
    title: string;
}

interface Action {
    type: 'ADD' | 'DELETE' | 'UPDATE';
};

interface AddTaskAction extends Action {
    type: 'ADD';
    task: Task;
};

interface DeleteTaskAction extends Action {
    type: 'DELETE';
    taskId: number;
};

interface UpdateTaskAction extends Action {
    type: 'UPDATE';
    task: Task;
};

type TaskAction = AddTaskAction | UpdateTaskAction | DeleteTaskAction;


const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case 'ADD':
            return [action.task, ...tasks];
        case 'DELETE':
            return tasks.filter((task) => task.id !== action.taskId);
        case 'UPDATE':
            return tasks.map((task) => {
                if (task.id === action.task.id) {
                    return action.task;
                }
                return task;
            });
        default:
            return tasks;
    }
};

export default taskReducer;