import React from "react";
import {connect} from "react-redux";
import {deleteMessege} from "../../redux/actions";

function ChatMonitor ({ syncMesseges, deleteMessege }) {

    function onDeleteMessege (el) {
        deleteMessege(el.target.id);
    }

    const el = syncMesseges.map((messege) => {
        return (
            <div key={ messege.id }>
                <span>{ messege.time } </span>
                <span>{ messege.text }</span>
                <button id={ messege.id }
                    onClick={onDeleteMessege}>Delete</button>
            </div>
        )
    });
    return (
        <div>
            { el }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        syncMesseges: state.messeges.messeges,
    };
}

const mapDispatchToProps = {
    deleteMessege
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMonitor);