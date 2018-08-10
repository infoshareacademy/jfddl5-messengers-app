import React from 'react'



class Messeges extends React.Component {
    state = {
        messeges: [
            {
                key: '001',
                text: 'Hello Mama',
                date: 1532616355143,
                favourite: false
            },
            {
                key: '002',
                text: 'Hello Tata',
                date: 1532616661063,
                favourite: true
            }],
        isAddedToFavourite: false
    }

    render() {
        return (
            <div>


            </div>
        )
    }
}


export default Messeges