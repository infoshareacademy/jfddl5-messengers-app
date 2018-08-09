import React, { Component } from 'react'
import Search from "./Search"
import FindMessagesList from './FindMessagesList'

class FindMessagesView extends Component {
    state = {
        messeges: [
            {
                key: '',
                text: '',
                date: null,
                favourite: false,
                searchPhrase: ''
            }]
    }



    onSearchPhraseChanged = event => {
        this.setState({
            searchPhrase: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Search
                    searchPhrase={this.state.messeges.searchPhrase}
                    onSearchPhraseChanged={this.onSearchPhraseChanged}
                />
                <FindMessagesList />
            </div>
        )
    }
}


export default FindMessagesView