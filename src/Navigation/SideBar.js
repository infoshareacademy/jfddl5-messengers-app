import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import { MenuItem } from 'material-ui'

import { connect } from 'react-redux'
import { toggleSidebarAction } from '../state/navigation'

class SideBar extends React.Component {
    render() {
        return (
            <Drawer
                open={this.props.isSideBarOpen}
                onRequestChange={this.props.toggleHandler}
                docked={false}
            >
                <Link
                    onClick={this.props.toggleHandler}
                    to={'/contacts'}
                    style={{ textDecoration: 'none' }}
                >
                    <MenuItem>
                        Kontakty
                </MenuItem>
                </Link>
                <Link
                    onClick={this.props.toggleHandler}
                    to={'/messages'}
                    style={{ textDecoration: 'none' }}
                >
                    <MenuItem>
                        Wiadomości
                </MenuItem>
                </Link>
                <Link
                    onClick={this.props.toggleHandler}
                    to={'/last-messages'}
                    style={{ textDecoration: 'none' }}
                >
                    <MenuItem>
                        Ostatnie Wiadomości
                </MenuItem>
                </Link>
                <Link
                    onClick={this.props.toggleHandler}
                    to={'/find-messages'}
                    style={{ textDecoration: 'none' }}
                >
                    <MenuItem>
                        Wyszukaj
                </MenuItem>
                </Link>
                <Link
                    onClick={this.props.toggleHandler}
                    to={'/favourite-messages'}
                    style={{ textDecoration: 'none' }}
                >
                    <MenuItem>
                        Ulubione
                </MenuItem>
                </Link>
            </Drawer>
        )
    }
}

const mapStateToProps = state => ({
    _isOpen: state.navigation.isOpen
})

const mapDispatchToProps = dispatch => ({
    _toggleSidebarAction: () => dispatch(toggleSidebarAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar)