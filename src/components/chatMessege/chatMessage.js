import React, {useState} from "react";
import {IconButton, makeStyles, TextField} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyle = makeStyles({
    messegeBox: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    messegeTextBox: {

    },
})

export function ChatMessage ({message, onCorrectTextMessage, onDeleteMessage, onSetCorrectingMessage}) {
    const [messageText, setMessageText] = useState('');

    const classes = useStyle();

    return (
        <div key={message.id} className={classes.messegeBox}>
            <div>
                <span>{message.time} </span>
                {message.isCorrecting && <TextField onChange={(e) => setMessageText(e.target.value)}
                                                    value={messageText}>{message.text}</TextField>}
                <span>{message.text}</span>
            </div>
            <div>
                <IconButton color="primary" onClick={() => onDeleteMessage(message.id)}>
                    <DeleteIcon /></IconButton>
                {!message.isCorrecting && <IconButton onClick={() => onSetCorrectingMessage(message.id)}>
                    <EditIcon /></IconButton>}
                {message.isCorrecting && <IconButton onClick={() => onCorrectTextMessage(messageText, message.id)}>
                    <EditIcon /></IconButton>}
            </div>
        </div>
    );
}

