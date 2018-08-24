import {database} from '../firebaseConfig'

const HANDLE_CHANNEL_TEXT = 'sidebar/HANDLE_CHANNEL_TEXT'

export const handleChannelText = (text) => ({type: HANDLE_CHANNEL_TEXT, text})
export const setNewChannel = () => (dispatch, getState) => (
    database.ref(`chanels`).push({
        isPriv: false,
        name: getState().sideBar.newChannelText
    })
)

const initialState = {

}

export default (state = initialState, action) => {
    switch(action.type){
        case HANDLE_CHANNEL_TEXT:
        return {
            ...state,
            newChannelText: action.text
        }
    }
    return state
}