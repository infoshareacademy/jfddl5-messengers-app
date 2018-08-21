import React from 'react'

class ChannelsView extends React.Component {
    render() {
        return (
            this.props.match.params.id
        )
    }
}

export default ChannelsView