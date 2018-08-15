const TOGGLE_SIDEBAR = 'navigation/TOGGLE_SIDEBAR'


export const toggleSidebarAction = () => ({
    type: TOGGLE_SIDEBAR
})

const initialState = {
    isOpen: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        default:
            return state
    }
}