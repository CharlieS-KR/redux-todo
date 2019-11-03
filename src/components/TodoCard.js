import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/BUtton';

const TodoCard = ({ todoItem }) => {
    const { id, title, content, complete } = todoItem;

    return (
        <Grid item xs={10} sm={6} md={4}>
            <Card>
                <CardHeader title={title} />
                <CardContent>
                    {content}
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="primary">
                        {complete ? 'Mark Incomplete' : 'Mark Complete'}
                    </Button>
                    <Button variant="outlined">
                        Default
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default TodoCard;