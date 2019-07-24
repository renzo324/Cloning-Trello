const initialData = {
    tasks: {
        'task1': { id: 'task1', content: 'Learn React' },
        'task2': { id: 'task2', content: 'Prepare slides?'},
        'task3': { id: 'task3', content: 'Find Nemo' },
        'task4': { id: 'task4', content: 'Get down to business'},
        'task5': { id: 'task5', content: 'Defeat the Huns'},
    },
    columns: {
        'column1': {
            id: 'column1',
            title: 'To do',
            taskIds: ['task4', 'task5'],
        },
        'column2': {
            id: 'column2',
            title: 'Doing',
            taskIds: ['task1', 'task2' ],
        },
        'column3': {
            id: 'column3',
            title: 'Done',
            taskIds: ['task3'],
        },
    },
    columnOrder: ['column1', 'column2', 'column3'],
}

export default initialData;