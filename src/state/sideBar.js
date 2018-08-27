import {database} from '../firebaseConfig'

const HANDLE_CHANNEL_TEXT = 'sidebar/HANDLE_CHANNEL_TEXT'
const CLEAR_CHANNEL_TEXT = 'sidebar/CLEAR_CHANNEL_TEXT'

export const handleChannelText = (text) => ({type: HANDLE_CHANNEL_TEXT, text})
export const setNewChannel = () => (dispatch, getState) => (
    database.ref(`chanels`).push({
        isPriv: false,
        name: getState().sideBar.newChannelText
    }).then(data => dispatch(clearChannelText())
)
)

export const clearChannelText = () => ({type: CLEAR_CHANNEL_TEXT})

const initialState = {
    newChannelText: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case HANDLE_CHANNEL_TEXT:
        return {
            ...state,
            newChannelText: action.text
        }
        case CLEAR_CHANNEL_TEXT:
        return {
            ...state,
            newChannelText: initialState.newChannelText
        }
        default:
        return {
            ...state
        }
    }
}