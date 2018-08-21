import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import ListOfMessages from '../../components/ListOfMessages/ListOfMessages'
import {connect} from 'react-redux'
import {saveMessagesAction, handleFavourite, getMesseges} from '../../state/messageView'

const displayStyles = {
    display: 'flex',
    margin: 20
}

const style = {
    textAlign: 'center',
}

class MessagesView extends React.Component {
    state = {
        newMessage: {
            dateOfMessage: 1533918739807,
            favourite: false,
            messageText: '',
            userAvatar: "https://randomuser.me/api/portraits/med/women/43.jpg",
            userId: 767678686778
        },
        allMessages: 0,
        favouriteMessege: null
    }

    handleFavourite = (naszeId) => {
        this.getMesseges()
        const newArr = this.state.allMessages.filter((el) => {
            return el.id === naszeId
        })
        const newArr1 =
            newArr[0].favourite === true ?
                newArr.map((el) => ({
                    id: el.id,
                    dateOfMessage: el.dateOfMessage,
                    favourite: false,
                    messageText: el.messageText,
                    userAvatar: el.userAvatar,
                    userId: el.userId
                }))
                :
                newArr.map((el) => ({
                    id: el.id,
                    dateOfMessage: el.dateOfMessage,
                    favourite: true,
                    messageText: el.messageText,
                    userAvatar: el.userAvatar,
                    userId: el.userId
                }))

        const request = {
            method: 'PATCH',
            body: JSON.stringify(newArr1[0])
        }
        fetch(`https://jfddl5-messengers.firebaseio.com/messeges/-LJUAF34bUu4jb-xz4wl/${naszeId}.json`, request)
            .then(data => this.getMesseges())
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
        this.getMesseges()
    }

    handleChange = (event) => {
        const text = event.target.value
        this.setState({
            newMessage: {
                dateOfMessage: Date.now(),
                favourite: false,
                messageText: text,
                userAvatar: "https://randomuser.me/api/portraits/med/women/43.jpg",
                userId: 767678686778
            }
        })
    }

    componentWillMount(){
        this.props.getMesseges()
    }

    render() {
        return (
            <div>
                <div style={displayStyles}>
                    <TextField
                        multiLine={true}
                        rowsMax={4}
                        fullWidth={true}
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <FlatButton label="Send" name='name'
                        onClick={this.sendMessageText}
                    />
                </div>
                <div >
                    <ListOfMessages
                        style={style}
                        handleFavourite={this.handleFavourite}
                        allMessages={this.state.allMessages}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    saveMessagesAction: (data) => dispatch(saveMessagesAction(data)),
    handleFavourite: () => dispatch(handleFavourite()),
    getMesseges: () => dispatch(getMesseges())
})


export default connect(mapStateToProps, mapDispatchToProps)(MessagesView)