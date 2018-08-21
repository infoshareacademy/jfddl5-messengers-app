import React from 'react'
import { MenuItem } from 'material-ui'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { mapObjectToArray } from '../../utils'

const Channels = (props) => (
    <div>
        <MenuItem>
            <h4>CHANNELS</h4>
        </MenuItem>
        {
            mapObjectToArray(props._chanels).map(channel => (
                <Link
                    key={channel.key}
                    //  onClick={props.toggleHandler}
                    to={'/channels/' + channel.key}
                    style={{ textDecoration: 'none' }}
                >
                    <MenuItem>
                        {channel.name}
                    </MenuItem>
                </Link>
            ))
        }
    </div>
)

const mapStateToProps = state => ({
    _chanels: state.channels.chanels
})

const mapDispatchToProps = dispatch => ({
    // _setChannelsAction: () => dispatch(setChannelsAction(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Channels)