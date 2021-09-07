import React from "react";
import {connect} from "react-redux";
import {deleteMessage, correctTextMessage, setCorrectingMessage} from "../../redux/actions";
import {ChatMessage} from "../chatMessage/chatMessage";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    chatMonitor: {
        height: '600px',
        overflowY: 'scroll',
    },
}));

function ChatMonitor({ syncMessages, deleteMessage, setCorrectingMessage, correctTextMessage}) {

    const classes = useStyle();

    const el = syncMessages.map((message) => {
        return (<ChatMessage message={message}
                             onDeleteMessage={deleteMessage}
                             onSetCorrectingMessage={setCorrectingMessage}
                             onCorrectTextMessage={correctTextMessage}/>);
    });

    return (
        <div className={classes.chatMonitor}>
            { el }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        syncMessages: state.messages.messages
    };
}

const mapDispatchToProps = {
    deleteMessage: deleteMessage,
    correctTextMessage,
    setCorrectingMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMonitor);