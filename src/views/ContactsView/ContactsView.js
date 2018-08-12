import React from 'react'

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
    display: 'flex',
    height: '90vh',
    width: 'calc(100vw-10)',
    margin: 20,
    textAlign: 'center',
}

const styles = {
    display: 'flex',
    margin: 20,
    padding: 10
}

const ContactsView = () => (
    <div>
        <Paper style={style} zDepth={1} />
        <div style={styles}>
        <TextField
            hintText="Type your message ..."
            multiLine={true}
            rowsMax={4}
            fullWidth={true}
        />
        </div>
    </div>

)

export default ContactsView