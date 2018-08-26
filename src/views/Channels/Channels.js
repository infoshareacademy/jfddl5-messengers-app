import React from 'react'
import { MenuItem } from 'material-ui'
import { Link } from 'react-router-dom'
import { toggleSidebarAction } from '../../state/navigation'
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
                to={'/channels/' + channel.key}
                style={{ textDecoration: 'none' }}
                >
                    <MenuItem
                onClick={props.toggleSidebarAction}
                    >
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
    toggleSidebarAction: () => dispatch(toggleSidebarAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Channels)