import './App.css';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import Reactroutes from './route';
import Layout from '../src/components/Layout/ index';

function App() {
    console.log(1312);
    return (
        <BrowserRouter>
            <Layout>
                <Reactroutes/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
