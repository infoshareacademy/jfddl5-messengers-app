import React from 'react'
import ListOfMessages from '../../components/ListOfMessages/ListOfMessages'

class FavouritesMessagesView extends React.Component {
    state = {
        data: null,
        list: []
    }

    componentDidMount() {
        fetch('https://jfddl5-messengers.firebaseio.com/messeges/-LJUAF34bUu4jb-xz4wl.json')
            .then(response => response.json())
            .then(dataResponse => {
                const newArrayData = Object.entries(dataResponse || {})
                return (newArrayData.map(el => ({
                    id: el[0],
                    ...el[1]
                }
                )))
            })
            .then(newArrayData => newArrayData.filter(function (favo, index, array) {
                return favo.favourite === true
            }))
            .then(data =>
                this.setState({ list: data })
            )
    }

    render() {
        return (
            <div>
                <div>
                    <ListOfMessages
                        allMessages={this.state.list}
                    />
                    <h1>FavouritesMessagesView</h1>
                </div>
            </div>
        )
    }
}

export default FavouritesMessagesView