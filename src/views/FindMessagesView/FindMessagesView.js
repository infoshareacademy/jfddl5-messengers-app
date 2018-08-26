import React, { Component } from 'react'
import Search from "./Search"
import ListOfMessages from '../../components/ListOfMessages/ListOfMessages'

class FindMessagesView extends Component {
    state = {
        newMessage: {
            dateOfMessage: 1533918739807,
            favourite: false,
            messageText: '',
            userAvatar: "https://4vector.com/i/free-vector-ee-train-clip-art_116884_Ee_Train_clip_art_small.png",
            userId: 767678686778
        },
        allMessages: 0,
        searchPhrase: ''
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
                return newArr.concat(...data)
                
            })
            .then(data => this.setState({
                allMessages: data
            }
            ))
    }

    onSearchPhraseChanged = event => {
        this.setState({
            searchPhrase: event.target.value
        })
    }

    render() {
        const filteredMessages = this.state.allMessages && this.state.allMessages.filter(
            messages => messages.messageText.indexOf(this.state.searchPhrase) !== -1
        )

        return (
            <div>
                <Search
                    searchPhrase={this.state.searchPhrase}
                    onSearchPhraseChanged={this.onSearchPhraseChanged}
                />
                <ListOfMessages
                    allMessages={filteredMessages}
                />
            </div>
        )
    }
}

export default FindMessagesView