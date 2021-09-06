import React from "react";
import {makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: "space-between",
    },
    headerLeft: {
        display: 'flex',
    },
}));

export function Header() {

    const classes = useStyle();

    return (
        <div className={classes.header}>
            <div className={classes.headerLeft}>
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/">
                    <div>Chat</div>
                </Link>
            </div>
            <div>
                <Link to="/login">
                    <div>Login</div>
                </Link>
            </div>
        </div>
    )
}