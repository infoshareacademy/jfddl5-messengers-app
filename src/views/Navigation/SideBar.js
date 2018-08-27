import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import { MenuItem } from 'material-ui'
import Divider from 'material-ui/Divider'
import Channels from '../Channels'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'
import {setNewChannel, handleChannelText, clearChannelText} from '../../state/sideBar'



const SideBar = (props) => (
    <Drawer
        open={props.isSideBarOpen}
        onRequestChange={props.toggleHandler}
        docked={false}
    >
        {/* <Link
            onClick={props.toggleHandler}
            to={'/contacts'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                Kontakty
            </MenuItem>
        </Link> */}
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
        <div style={{
            display: 'flex', justifyContent: 'center', padding: '15px'
        }}>
            <TextField
                hintText="Nazwa kanału..."
                onChange={(event)=>{props.handleChannelText(event.target.value)}}
                value={props.newChannelText}
                name='new_channel_textField'
            />
            <FlatButton label="Dodaj" primary={true} onClick={props.setNewChannel} />
        </div>
    </Drawer>
)

const mapStateToProps = state => ({
    newChannelText: state.sideBar.newChannelText
})

const mapDispatchToProps = dispatch => ({
    setNewChannel: () => dispatch(setNewChannel()),
    handleChannelText: (text) => dispatch(handleChannelText(text)),
    clearChannelText: () => dispatch(clearChannelText())
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)