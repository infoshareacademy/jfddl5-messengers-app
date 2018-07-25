import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import { MenuItem } from 'material-ui';

class SideBar extends React.Component {
    render() {
        return (

            <Drawer
                open={true}
            >
                <Link
                    to={'/contacts'}
                    style={{ textDecoration: 'none' }}
                >
                    <MenuItem>
                        Kontakty
                </MenuItem>
                </Link>
                <Link
                    to={'/messages'}
                    style={{ textDecoration: 'none' }}
                >
                    <MenuItem>
                        Wiadomości
                </MenuItem>
                </Link>
                <Link
                    to={'/last-messages'}
                    style={{ textDecoration: 'none' }}
                >
                    <MenuItem>
                        Ostatnie Wiadomości
                </MenuItem>
                </Link>
                <Link
                    to={'/find-messages'}
                    style={{ textDecoration: 'none' }}
                >
                    <MenuItem>
                        Wyszukaj
                </MenuItem>
                </Link>
                <Link
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