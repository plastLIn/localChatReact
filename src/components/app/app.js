import React from "react";

import ChatMonitor from "../chatMonitor";
import MessegeInput from "../messegeInput";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
    },
}));

export function App () {

const classes = useStyles();

    return (
        <div className={classes.root}>
            <ChatMonitor />
            <MessegeInput />
        </div>
    );
}