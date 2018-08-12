import React from 'react'
import Message from './Message'


const MapMessages = (props, handleId) => {
    if (props === 0) {
        return <p>Ładowanie danych ...</p>
    } else {
        return (props.slice(0).reverse().map((el) => {
            return (
                <div style={styles}>
                    <Message
                        userAvatar={el.userAvatar}
                        handleId={handleId}
                        handleFavourite={props.handleFavourite}
                        text={el.messageText}
                        id={el.id}
                        favourite={el.favourite}
                    />
                </div>
            )
        }))
    }
}

const styles={
    alignContent: 'center'
}

const ListOfMessages = (props) => (
    <div >
        {MapMessages(props.allMessages, props.handleFavourite)}
    </div>
)



export default ListOfMessages