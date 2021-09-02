import React from "react";
import {Button, TextField} from "@material-ui/core";

export function MessegeInput () {



    return (
        <form onClick="">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained" color="contained">Send</Button>
        </form>
    );
}