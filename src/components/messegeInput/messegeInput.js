import {Button, makeStyles, TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {createMessege, incrementIdCounter} from "../../redux/actions";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    inputMessegeForm: {
        backgroundColor: "red",
    },
}));

function MessegeInput ({ messegeId, createMessege, incrementIdCounter }) {

    const [ text, setText ] = useState('');

    const muiClasses = useStyles();
    let classes = '';

    function onLabelChange (e) {
        setText(e.target.value)
    }

    function onEnterMessege (e) {
        e.preventDefault();
        if (text.length){
            incrementIdCounter()
            const time = new Date();
            createMessege({ text,
                            id: messegeId + 1,
                            time: `${time.getHours()}:${time.getMinutes()}`,
                            isCorrecting: false})
            setText('');
        } else {
            classes += muiClasses.inputMessegeForm;
        }
    }

    return (
        <form onSubmit={ onEnterMessege }>
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
        messegeId: state.messeges.messegeIdCounter
    };
};

const mapDispatchToProps = {
    createMessege,
    incrementIdCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(MessegeInput);