import React from 'react'
import Message from './Message'

const MapMessages = (props) => (
    props.allMessages ?
        props.allMessages.slice(0).reverse().map((el) => (
            <div style={styles} key={el.id}>
                <Message
                    userAvatar={el.userAvatar}
                    handleId={props.handleId}
                    handleFavourite={() => props.handleFavourite(el.id)}
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


const styles = {
    alignContent: 'center'
}

const ListOfMessages = (props) => (
    <div >
        <MapMessages
            allMessages={props.allMessages}
            handleId={props.handleFavourite}
        />
    </div>
)




export default ListOfMessages