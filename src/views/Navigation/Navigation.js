import React from 'react'
import AppBar from 'material-ui/AppBar'
import SideBar from './SideBar'
import { connect } from 'react-redux'
import { toggleSidebarAction } from '../../state/navigation'
import FlatButton from 'material-ui/FlatButton';
import {onLogOutAction} from '../../state/auth'


const Navigation = (props) => (
    <div>
        <AppBar
            title={'Messengers'}
            onLeftIconButtonClick={props._toggleSidebarAction}
            iconElementRight={
                <FlatButton
                    label="Logout"
                    onClick={props._onLogOutAction}
                />
            }
        />
        <SideBar
            toggleHandler={props._toggleSidebarAction}
            isSideBarOpen={props._isOpen}
        />
    </div>
)

const mapStateToProps = state => ({
    _isOpen: state.navigation.isOpen
})

const mapDispatchToProps = dispatch => ({
    _toggleSidebarAction: () => dispatch(toggleSidebarAction()),
    _onLogOutAction: () => dispatch(onLogOutAction()),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)