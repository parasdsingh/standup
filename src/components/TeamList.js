import React from 'react';
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 500,
    }
}));

function TeamList({teamMembers}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List>
                {teamMembers.map(tm => <ListItem><ListItemText>{tm}</ListItemText></ListItem>)}
            </List>
        </div>
    )
}

export default TeamList;