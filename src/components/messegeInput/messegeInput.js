import {Button, TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {createMessege, incrementIdCounter} from "../../redux/actions";
import {useState} from "react";

function MessegeInput ({ messegeId, createMessege, incrementIdCounter }) {

    const [ text, setText ] = useState('');

    function onLabelChange (e) {
        setText(e.target.value)
    }

    // eslint-disable-next-line no-unused-expressions

    function onEnterMessege (e) {
        e.preventDefault();
        incrementIdCounter()
        const time = new Date();
        createMessege({ text, id: messegeId + 1, time: `${time.getHours()}:${time.getMinutes()}` })
        setText('');
    }

    return (
        <form onSubmit={ onEnterMessege }>
            <TextField id="outlined-basic"
                       label=""
                       variant="outlined"
                       value={ text }
                       onChange={onLabelChange}/>
            <Button type="submit" variant="contained" color="contained">Send</Button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        messegeId: state.messeges.messegeIdCounter
    };
};

const mapDispatchToProps = {
    createMessege,
    incrementIdCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(MessegeInput);