import React from 'react'

import SideBar from './SideBar'

class Navigation extends React.Component {
    state = {
        isOpen: false
    }
    toggleHandler= () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
}