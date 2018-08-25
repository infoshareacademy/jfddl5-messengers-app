import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import ListOfMessages from '../../components/ListOfMessages/ListOfMessages'
import { connect } from 'react-redux'
import {
    saveMessagesAction,
    handleFavourite,
    startChannelSync,
    stopChannelSync,
    handleNewMessageText,
    sendNewMessageText,
    clearMessageInput
} from '../../state/messageView'

const displayStyles = {
    display: 'flex',
    margin: 20
}

const style = {
    textAlign: 'center',
}

class ChannelsView extends React.Component {
    componentDidMount() {
        const channelId = this.props.match.params.id
        this.props.startChannelSync(channelId)
    }

    componentWillUnmount() {
        const channelId = this.props.match.params.id
        this.props.stopChannelSync(channelId)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.id === this.props.match.params.id) return

        const oldChannelId = this.props.match.params.id
        const newChannelId = newProps.match.params.id

        this.props.stopChannelSync(oldChannelId)
        this.props.startChannelSync(newChannelId)
    }

    render() {
        const channelId = this.props.match.params.id

        return (
            <div>
                <div style={displayStyles}>
                    <TextField
                        multiLine={true}
                        rowsMax={4}
                        fullWidth={true}
                        onChange={(event) => this.props.handleNewMessageText(event.target.value)}
                        value={this.props.newMessageText}
                    />
                    <FlatButton label="Send" name='name' onClick={() => this.props.sendNewMessageText(channelId)}
                    />
                </div>
                <div >
                    <ListOfMessages
                        style={style}
                        handleFavourite={this.props.handleFavourite}
                        allMessages={this.props.allMessages[channelId]}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allMessages: state.messageView.allMessages,
    newMessageText: state.messageView.newMessageText
})

const mapDispatchToProps = dispatch => ({
    saveMessagesAction: (data) => dispatch(saveMessagesAction(data)),
    handleFavourite: (id) => dispatch(handleFavourite(id)),
    startChannelSync: (channelId) => dispatch(startChannelSync(channelId)),
    stopChannelSync: (channelId) => dispatch(stopChannelSync(channelId)),
    handleNewMessageText: (value) => dispatch(handleNewMessageText(value)),
    sendNewMessageText: (channelId) => dispatch(sendNewMessageText(channelId)),
    clearMessageInput: () => dispatch(clearMessageInput())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelsView)