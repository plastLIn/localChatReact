import React from "react";
import {connect} from "react-redux";
import {deleteMessege, correctTextMessege, setCorrectingMessege} from "../../redux/actions";
import {ChatMessage} from "../chatMessege/chatMessage";

function ChatMonitor({ syncMessages, deleteMessege, setCorrectingMessege, correctTextMessege}) {

    const el = syncMessages.map((message) => {
        return (<ChatMessage message={message}
                             onDeleteMessage={deleteMessege}
                             onSetCorrectingMessage={setCorrectingMessege}
                             onCorrectTextMessage={correctTextMessege}/>);
    });

    return (
        <div>
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