import React from 'react'
import TextField from 'material-ui/TextField';


const MessagesView = () => (
    <div>
        <TextField
            hintText=""
            multiLine={true}
            rowsMax={4}
            fullWidth={true}
        />
    </div>
)

export default MessagesView