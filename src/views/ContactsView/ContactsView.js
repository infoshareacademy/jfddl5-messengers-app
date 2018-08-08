import React from 'react'
import Paper from 'material-ui/Paper';

const style = {
    display: 'flex',
    height: '80vh',
    width: 'calc(100vw-20)',
    margin: 20,
    textAlign: 'center',
}

const ContactsView = () => (
    <h1>
        <Paper
            style={style} zDepth={1} />
    </h1>
)

export default ContactsView