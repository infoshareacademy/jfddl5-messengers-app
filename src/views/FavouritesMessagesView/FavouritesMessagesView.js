import React from 'react'
import ListOfMessages from '../../components/ListOfMessages/ListOfMessages'

class FavouritesMessagesView extends React.Component {
    state = {
        data: null,
        list: []
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
        return (
            <div>
                <div>
                    <ListOfMessages
                    allMessages={this.state.list}
                    />
                </div>
            </div>
        )
    }
}

export default FavouritesMessagesView