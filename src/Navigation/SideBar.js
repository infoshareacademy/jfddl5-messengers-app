import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import { MenuItem } from 'material-ui'

class SideBar extends React.Component {
    render() {
        return (

            <Drawer
                open={this.props.isSideBarOpen}

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

export default SideBar