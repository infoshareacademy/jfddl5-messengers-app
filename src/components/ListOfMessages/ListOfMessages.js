import React from 'react'
import Message from './Message'

const styles = {

}

const MapMessages = (props, handleId) => {
    if (props===0){
        return <p>Ładowanie danych ...</p>
    }else{
    return (props.slice(0).reverse().map((el) => {
        return (
            <div>
            <Message 
            userAvatar={el.userAvatar}
            handleId={handleId}
            handleFavourite={props.handleFavourite}
            text={el.messageText}
            id={el.id}
            />
            </div>
        )
    }))
}}


const ListOfMessages = (props) => (
    <div style={styles}>
        {MapMessages(props.allMessages, props.handleFavourite)}
  </div>
)



export default ListOfMessages