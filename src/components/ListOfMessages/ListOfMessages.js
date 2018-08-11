import React from 'react'
import Message from './Message'

const styles = {

}

const MapMessages = (props) => {
    if (props===0){
        return <p>Ładowanie danych ...</p>
    }else{
    return (props.slice(0).reverse().map((el) => {
        return (
            <div>
            <Message 
            text={el.messageText}
            />
            </div>
        )
    }))
}}


const ListOfMessages = (props) => (
    <div style={styles}>
        {MapMessages(props.allMessages)}
        {console.log('111',props.allMessages)}
  </div>
)



export default ListOfMessages