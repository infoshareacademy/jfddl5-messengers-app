import React from 'react'

import AppBar from 'material-ui/AppBar'
import SideBar from './SideBar'

import { connect } from 'react-redux'
import { toggleSidebarAction } from '../state/navigation'

const Navigation = (props) => (
    <div>
        <AppBar
            title={'Messengers'}
            onLeftIconButtonClick={props._toggleSidebarAction}

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
    _toggleSidebarAction: () => dispatch(toggleSidebarAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)