import React, {useState} from "react";
import {Button, makeStyles, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {onLoginUser} from "../../redux/authAction";

const useStyle = makeStyles((theme) => ({
    loginForm: {
        width: '70%',
        margin: 'auto',
        marginTop: '20%',
    },
    loginButton: {
    },
}));

export function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyle();

    const dispatch = useDispatch()

    function onLogin(e) {
        e.preventDefault();
        if (login === 'test@a.com') {
            if (password === 'test') {
                dispatch(onLoginUser(login, password));
                setLogin('');
                console.log("Accepted")
            }
        }

        setPassword('');
    }

    return (
        <form onSubmit={onLogin} className={classes.loginForm}>
            <div>
                <TextField id="outlined-basic"
                           label="Login"
                           variant="outlined"
                           type="email"
                           onChange={(e) => setLogin(e.target.value)}/>
            </div>
            <div>
                <TextField id="outlined-basic"
                           label="Password"
                           variant="outlined"
                           type="password"
                           onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <Button type="submit"
                    className={classes.loginButton}
                    variant="contained">
                Login</Button>
        </form>
    )
}