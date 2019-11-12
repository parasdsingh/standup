import React from 'react';
import {Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import TeamList from './TeamList.js';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 500,
    },
    input: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function Title() {
    const classes = useStyles();
    const [teamMembers, setTeamMembers] = React.useState([]);
    const [teamMemberName, setTeamMemberName] = React.useState("");
    const handleChange = (event) => {
        setTeamMemberName(event.target.value);
    };
    const handleClick = () => {
        setTeamMembers([...teamMembers, teamMemberName])
    };
    return (
        <div className={classes.root}>
            <Typography variant="h1" component="h2" gutterBottom> Stand App </Typography>
            <form className={classes.input} noValidate autoComplete="off">
                <div>
                    <TextField
                        id="outlined-required"
                        className={classes.textField}
                        label="Enter Participants"
                        margin="normal"
                        variant="filled"
                        onChange={handleChange}/>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
                        Add
                    </Button>
                    <TeamList teamMembers={teamMembers}/>
                </div>
            </form>
        </div>
    );
}

export default Title;