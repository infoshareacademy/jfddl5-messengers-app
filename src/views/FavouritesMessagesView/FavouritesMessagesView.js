import React from 'react'

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

                return favo.favourite === false
            }))

            .then(data => data.map(el => {

                return <p>{el.messageText}</p>
            }))

            .then(data =>

                this.setState({ list: data })
            )

    }

    render() {

        return (
            <div>
                <div>
                    <h1>FavouritesMessagesView</h1>
                    <div>
                        <h2>{this.state.list}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default FavouritesMessagesView