import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import { MenuItem } from 'material-ui'
import Divider from 'material-ui/Divider'
import Channels from '../Channels'

const SideBar = (props) => (
    <Drawer
        open={props.isSideBarOpen}
        onRequestChange={props.toggleHandler}
        docked={false}
    >
        <Link
            onClick={props.toggleHandler}
            to={'/contacts'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                Kontakty
            </MenuItem>
        </Link>
    
        <Link
            onClick={props.toggleHandler}
            to={'/last-messages'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                Ostatnie Wiadomości
            </MenuItem>
        </Link>
        <Link
            onClick={props.toggleHandler}
            to={'/find-messages'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                Wyszukaj
            </MenuItem>
        </Link>
        <Link
            onClick={props.toggleHandler}
            to={'/favourite-messages'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                Ulubione
            </MenuItem>
        </Link>
        <Divider />
        <Channels />
    </Drawer>
)

export default SideBar