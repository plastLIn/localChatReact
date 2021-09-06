import React from "react";
import {connect} from "react-redux";
import {deleteMessege, correctTextMessege, setCorrectingMessege} from "../../redux/actions";
import {ChatMessage} from "../chatMessege/chatMessage";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    chatMonitor: {
        height: '600px',
        overflowY: 'scroll',
    },
}));

function ChatMonitor({ syncMessages, deleteMessege, setCorrectingMessege, correctTextMessege}) {

    const classes = useStyle();

    const el = syncMessages.map((message) => {
        return (<ChatMessage message={message}
                             onDeleteMessage={deleteMessege}
                             onSetCorrectingMessage={setCorrectingMessege}
                             onCorrectTextMessage={correctTextMessege}/>);
    });

    return (
        <div className={classes.chatMonitor}>
            { el }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        syncMessages: state.messeges.messeges
    };
}

const mapDispatchToProps = {
    deleteMessege,
    correctTextMessege,
    setCorrectingMessege
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMonitor);