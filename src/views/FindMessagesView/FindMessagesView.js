import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import Search from "./Search"
import FindMessagesList from './FindMessagesList'
import ListOfMessages from '../../components/ListOfMessages'

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


    componentDidMount () {
        fetch('https://jfddl5-messengers.firebaseio.com/messeges/-LJUAF34bUu4jb-xz4wl.json')
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
                
            }
        
        ))
        console.log("wiadomosci",allMessages)
    }


    onSearchPhraseChanged = event => {
        this.setState({
            searchPhrase: event.target.value
        })
    }

    render() {
        const filteredMessages = this.state.allMesseges && this.state.allMessages.filter(
                            messages => messages.messageText.indexOf(this.state.searchPhrase) !== -1
                        )


        return (
            <div>
                <Search
                    searchPhrase={this.state.messeges.searchPhrase}
                    onSearchPhraseChanged={this.onSearchPhraseChanged}
                />
                <Paper style={style} zDepth={1} >
                    <ListOfMessages
                        allMessages={filteredMessages}
                    />
                </Paper>
            </div>
        )
    }
}


export default FindMessagesView