import {Button, makeStyles, TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {createMessage, incrementIdCounter} from "../../redux/actions";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    inputMessageForm: {
        backgroundColor: "red",
    },
}));

function MessageInput ({ messageId, createMessage, incrementIdCounter }) {

    const [ text, setText ] = useState('');

    const muiClasses = useStyles();
    let classes = '';

    function onLabelChange (e) {
        setText(e.target.value)
    }

    function onEnterMessage (e) {
        e.preventDefault();
        if (text.length){
            incrementIdCounter()
            const time = new Date();
            createMessage({ text,
                            id: messageId + 1,
                            time: `${time.getHours()}:${time.getMinutes()}`,
                            isCorrecting: false})
            setText('');
        } else {
            classes += muiClasses.inputMessageForm;
        }
    }

    return (
        <form onSubmit={ onEnterMessage }>
            <TextField id="outlined-basic"
                       label=""
                       variant="outlined"
                       value={ text }
                       className={classes}
                       placeholder="Enter sending message"
                       onChange={onLabelChange}/>
                <Button type="submit"
                        variant="contained">
                    Send</Button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        messageId: state.messages.messageIdCounter
    };
};

const mapDispatchToProps = {
    createMessage,
    incrementIdCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);