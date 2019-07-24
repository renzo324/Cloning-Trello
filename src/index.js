import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initData from './initData';
import Column from './column';

const Container = styled.div`
    display: flex;
`;

class App extends React.Component {
    state = initData;

    onDragStart = () => {
        // none for now
    }

    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        if (!destination) return;
        if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
            return;
        }
        //handle reordering
        const start = this.state.columns[source.droppableId];
        const end = this.state.columns[destination.droppableId];
        if (start === end) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };
            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            this.setState(newState);
            return;
        }

        // Move to another list
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const endTaskIds = Array.from(end.taskIds);
        endTaskIds.splice(destination.index, 0 ,draggableId);
        const newEnd = {
            ...end,
            taskIds: endTaskIds,
        };
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newEnd.id]: newEnd,
                [newStart.id]: newStart,
            },
        };
        this.setState(newState);
        return;
    }

    render() {
        return (
            <DragDropContext
              onDragEnd={this.onDragEnd}
              onDragStart={this.onDragStart}
            >
                <Container>
                    {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId];
                        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                        return <Column key={column.id} column={column} tasks={tasks} />;
                    })}
                </Container>
            </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
