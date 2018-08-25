import React from 'react'
import ListOfMessages from '../../components/ListOfMessages/ListOfMessages'

import { connect } from 'react-redux'
import { startChannelSync, stopChannelSync } from '../../state/messageView'

class FavouritesMessagesView extends React.Component {
    componentDidMount() {
        this.props.channels && Object.keys(this.props.channels).forEach(channelId => {
            console.log(channelId)
            this.props.startChannelSync(channelId)
        })
    }

    componentWillReceiveProps(newProps) {
        if (newProps.channels === this.props.channels) return

        newProps.channels && Object.keys(newProps.channels).forEach(channelId => {
            console.log(channelId)
            this.props.startChannelSync(channelId)
        })
    }

    componentWillUnmount() {
        this.props.channels && Object.keys(this.props.channels).forEach(channelId => {
            this.props.stopChannelSync(channelId)
        })
    }

    render() {
        const allMessages = this.props.allMessages && Object.values(this.props.allMessages).reduce((r, messagesFromOneChannel) => r.concat(messagesFromOneChannel), [])
        const messagesFromOneChannel = messagesFromOneChannel.filter((messagesFromOneChannel)=> { return FavouritesMessagesView})
        //zrobić filtra

        console.log(allMessages)

        return (
            <div>
                <div>
                    {/* <ListOfMessages
                        allMessages={this.state.list}
                    /> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    allMessages: state.messageView.allMessages,
    channels: state.channels.chanels
})

const mapDispatchToProps = dispatch => ({
    startChannelSync: (newChannelId) => dispatch(startChannelSync(newChannelId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavouritesMessagesView)