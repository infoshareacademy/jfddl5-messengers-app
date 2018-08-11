import React from 'react'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import List from '../../components/List/List'

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
        newMessage: {
            dateOfMessage: 1533918739807,
            favourite: false,
            messageText: '',
            userAvatar: "https://4vector.com/i/free-vector-ee-train-clip-art_116884_Ee_Train_clip_art_small.png",
            userId: 767678686778
        },
        allMessages: null
    }

    getMesseges = () => {
        const request = {
            method: 'GET'
        }
        fetch('https://jfddl5-messengers.firebaseio.com/messeges/-LJUAF34bUu4jb-xz4wl.json', request)
            .then(response => response.json())
            .then(responseData => {
                const newArr = Object.entries(responseData)
                return newArr.map(el => (
                    {
                        id: el[0],
                        ...el[1]
                    }
                ))
            })
            .then(data => this.setState({
                allMessages: data
            }))
    }

    sendMessageText = () => {
        const request = {
            method: 'POST',
            body: JSON.stringify(this.state.newMessage)
        }
        fetch('https://jfddl5-messengers.firebaseio.com/messeges/-LJUAF34bUu4jb-xz4wl.json', request)
    }

    handleChange = (event) => {
        const text = event.target.value
        this.setState({
            newMessage: {
                dateOfMessage: Date.now(),
                favourite: false,
                messageText: text,
                userAvatar: "https://4vector.com/i/free-vector-ee-train-clip-art_116884_Ee_Train_clip_art_small.png",
                userId: 767678686778
            }
        })
    }

    render() {
        return (
            <div style={containerStyles}>
                <div style={displayStyles}>
                {console.log(this.state.allMessages)}
                    <TextField
                        hintText="Type your message ..."
                        multiLine={true}
                        rowsMax={4}
                        fullWidth={true}
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    {console.log(this.state.messageText)}
                    <FlatButton label="Send" name='name'
                        onClick={this.getMesseges}
                    />
                </div>
                <div><br />
                    <Paper style={style} zDepth={1} >
                        <List />
                    </Paper>
                </div>
            </div>
        )
    }
}


export default MessagesView