import React from "react";
import ChatMonitor from "../chatMonitor";
import MessegeInput from "../messegeInput";
import {makeStyles} from "@material-ui/core";
import Header from "../header";
import LoginPage from "../loginPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
    },
}));

export function App () {

const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <ChatMonitor />
                        <MessegeInput />
                    </Route>
                    <Route path='/login'>
                        <LoginPage />
                    </Route>
                    <Route path='/chat'>
                        <ChatPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}