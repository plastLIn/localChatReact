import React from "react";
import {makeStyles} from "@material-ui/core";
import Header from "../header";
import LoginPage from "../loginPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ChatPage from "../chatPage";
import HomePage from "../homePage";
import {useSelector} from "react-redux";

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

    const userId = useSelector((state) => state.auth.userId);
    console.log("App user id: ", userId)

    return (
        <Router>
            <div className={classes.root}>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
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