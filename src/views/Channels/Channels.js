import React from 'react'

import { connect } from 'react-redux'
import { MapObjectToArray } from '../../utils'

const Channels = props => (
    <div>
        {/* {MapObjectToArray(data)} */}
        Chanels
    </div>
)

const mapStateToProps = state => ({
    _chanels: state.channels.chanels
})

const mapDispatchToProps = dispatch => ({
    // _setChannelsAction: dispatch(setChannelsAction(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Channels)