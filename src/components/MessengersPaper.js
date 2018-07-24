import React from 'react'
import Paper from 'material-ui/Paper'

const styles = {
    padding: '20px',
    margin: '20px'
}

const MessengersPaper = (props) => (
    <Paper
        style={styles}
    >
        {props.children}
    </Paper>
)

export default MessengersPaper