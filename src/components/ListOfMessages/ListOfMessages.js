import React from 'react'
import Message from './Message'

const MapMessages = (props, handleId) => {
    if (props === 0) {
        return <p>Ładowanie danych ...</p>
    } else {
        return (props.slice(0).reverse().map((el) => {
            return (
                <div style={styles} key={el.id}>
                    <Message
                        userAvatar={el.userAvatar}
                        handleId={handleId}
                        handleFavourite={() => props.handleFavourite(el.id)}
                        text={el.messageText}
                        id={el.id}
                        favourite={el.favourite}
                        dateOfMessage={el.dateOfMessage}
                    />
                </div>
            )
        }))
    }
}

const styles = {
    alignContent: 'center'
}

const ListOfMessages = (props) => (
    <div >
        {MapMessages(props.allMessages, props.handleFavourite)}
    </div>
)



export default ListOfMessages