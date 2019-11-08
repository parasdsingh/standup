import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button/'
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import './App.css';
import './theme.js'
import 'typeface-roboto'

function App() {
    return (
        <Container maxWidth="sm">
            <header className="App-header">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Stand App
                    </Typography>
                    <input type="text" className="input"/>
                    <Button>Start</Button>
                </Box>
            </header>
        </Container>
    );
}

export default App;
