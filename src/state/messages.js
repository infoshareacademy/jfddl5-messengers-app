import {database} from '../firebaseConfig'

const MESSAGES_SYNC = 'messages/MESSAGES_SYNC'

export const initMessagesSync = () => (dispatch, getState) => {
    database.ref('/messeges/').on(
        'value',
        snapshot => {
            const data = snapshot.val()
            dispatch(setMessagesSyncAction(data))
        }
    )
}

export const setMessagesSyncAction = (data) => ({
    type: MESSAGES_SYNC,
    data
})

const initialState = {
    messages: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case MESSAGES_SYNC:
        return {
            ...state,
            messages: action.data
        }
        default:
        return state
    }
}