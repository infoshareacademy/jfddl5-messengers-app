import React from 'react'
import Subheader from 'material-ui/Subheader';
import moment from 'moment'

const DateOfMessages = (props) => (
    <Subheader>
        {moment(new Date(props.dateOfMessage).toUTCString()).calendar()}
    </Subheader>
)

export default DateOfMessages