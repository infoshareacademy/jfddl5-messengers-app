import React from 'react'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';


const displayStyles = {
    display: 'flex',
    margin: 20
}

const containerStyles = {

}

const style = {
    display: 'flex',
    height: '80vh',
    width: 'calc(100vw-20)',
    margin: 20,
    textAlign: 'center',
};



class MessagesView extends React.Component {
    state = {
        favourite: false
    }

    isFavourite = () => {
        this.setState({
            favourite: !this.state.favourite
        })
    }
    


    render() {
        return (
            <div style={containerStyles}>
                <div style={displayStyles}>
                    <TextField
                        hintText="Type your message ..."
                        multiLine={true}
                        rowsMax={4}
                        fullWidth={true}
                    />
                    <FlatButton label="Send" />
                </div>
                <div><br />
                    <Paper style={style} zDepth={1}>
                        < ListItem primaryText="Favourite" leftIcon={<ActionGrade />} />
                    </Paper>
                </div>
            </div>
        )
    }

}

export default MessagesView