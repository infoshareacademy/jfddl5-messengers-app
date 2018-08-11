import React from 'react'
import Message from './Message'

const styles = {

}

const ListOfMessages = (props) => (
    <div style={styles}>
        <Message 
        allMessages={props.allMessages}
        />
  </div>
)



export default ListOfMessages