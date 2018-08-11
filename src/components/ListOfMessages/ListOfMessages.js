import React from 'react'
import Message from './Message'

const styles = {

}

const MapMessages = (props) => {
    if (props===0){
        return <p>Ładowanie danych ...</p>
    }else{
    return (props.map((el) => {
        return (
            <div>
            <Message 
            
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