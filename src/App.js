import React from 'react';

import Container from '@material-ui/core/Container';

import './App.css';
import './theme.js'
import Title from './components/title.js'
import 'typeface-roboto'

function App() {
    return (
        <Container maxWidth="sm">
            <Title/>
        </Container>
    );
}

export default App;
