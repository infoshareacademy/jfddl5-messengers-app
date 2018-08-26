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

    componentDidMount() {
        fetch('https://jfddl5-messengers.firebaseio.com/messeges.json')
            .then(response => response.json())
            .then(responseData => {
                const newArr = Object.entries(responseData)
                return newArr.map(el => (
                    {
                        ...el[1]
                    }
                ))
            })
            .then(data => data.map(el => Object.values(el)))
            .then(data => {
                const newArr = []
                console.log(newArr.concat(...data))
                return newArr.concat(...data)
                
            })
            .then(newArrayData => newArrayData.filter(function (favo, index, array) {
                return favo.favourite === true
            }))
            .then(data =>
                this.setState({ list: data })
            )
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