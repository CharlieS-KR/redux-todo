import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TodoCard from './TodoCard';

const styles = {
    minHeight: '200px',
    marginTop: '80px'
}

class TodoContainer extends Component {
    state = {
        todoItems: [{ id: 1, title: 'title', content: 'content', complete: false }]
    }

    handleRenderTodoCards = () => {
        return this.state.todoItems.map(todoItem => {
            return <TodoCard key={todoItem.id} todoItem={todoItem} />
        });
    }

    render() {
        return (
            <section>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {this.handleRenderTodoCards()}
                </Grid>
            </section>
        )
    }
};

export default TodoContainer;