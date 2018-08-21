import { database } from '../firebaseConfig'

const SET_CHANNELS = 'chanels/SET_CHANNELS'


export const initChannelsSync = () => (dispatch, getState) => {
    database.ref('/chanels/').on(
        'value',
        snapshot => {
            const data = snapshot.val()
            dispatch(setChannelsAction(data))
        }
    )
}

export const setChannelsAction = (data) => ({
    type: SET_CHANNELS,
    data
})

const initialState = {
    chanels: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CHANNELS:
            return {
                ...state,
                chanels: action.data
            }
        default:
            return state
    }
}