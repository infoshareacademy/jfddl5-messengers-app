import React from 'react'
import Message from './Message'

const styles = {
    alignContent: 'center'
}

const ListOfMessages = (props) => (
    props.allMessages ?
        props.allMessages.slice(0).reverse().map((el) => (
            <div style={styles} key={el.id}>
                <Message
                    userAvatar={el.userAvatar}
                    handleFavourite={() => props.handleFavourite(props.channelId, el.id)}
                    text={el.messageText}
                    id={el.id}
                    favourite={el.favourite}
                    dateOfMessage={el.dateOfMessage}
                />
            </div>
        ))
        :
        <p>Ładowanie danych ...</p>
)

export default ListOfMessages