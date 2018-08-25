import { database } from '../firebaseConfig'


const HANDLE_FAVOURITE = 'messageView/HANDLE_FAVOURITE'
const SAVE_MESSAGES = 'messageView/SAVE_MESSAGES'
const HANDLE_NEW_MESSAGE_TEST = 'messageView/HANDLE_NEW_MESSAGE_TEST'

export const saveMessagesAction = (data, channelKey) => ({ type: SAVE_MESSAGES, data, channelKey })
export const handleNewMessageText = (value) => ({ type: HANDLE_NEW_MESSAGE_TEST, value })

export const sendNewMessageText = (channelKey) => (dispatch, getState) => (
    database.ref(`/messeges/${channelKey}`).push({
    dateOfMessage: Date.now(),
    favourite: false,
    messageText: getState().messageView.newMessageText,
    userAvatar: getState().auth.user.photoURL ? getState().auth.user.photoURL : "https://randomuser.me/api/portraits/med/women/43.jpg",
    userId: 767678686778,
    userName: getState().auth.user.displayName
})
)

export const handleFavourite = id => (dispatch, getState) => {
    const message = getState().messageView.allMessages.find(message => message.id === id)

    const request = {
        method: 'PATCH',
        body: JSON.stringify({
            favourite: !message.favourite
        })
    }

    console.log(message, request)
    fetch(`https://jfddl5-messengers.firebaseio.com/messeges/-LJUAF34bUu4jb-xz4wl/${id}.json`, request)
}

export const startChannelSync = (channelKey) => (dispatch, getState) => {
    console.log(channelKey)
    database.ref(`/messeges/${channelKey}`).on(
        'value',
        (snapshot) => {
            const data = Object.entries(
                snapshot.val() || {}
            ).map(el => ({
                id: el[0],
                ...el[1]
            }))

            dispatch(saveMessagesAction(data, channelKey))
        }
    )
}

export const stopChannelSync = (channelKey = '-LJUAF34bUu4jb-xz4wl') => (dispatch, getState) => {
    database.ref(`/messeges/${channelKey}`).off()
}


const initialState = {
    newMessage: {
        dateOfMessage: 1533918739807,
        favourite: false,
        messageText: '',
        userAvatar: "https://randomuser.me/api/portraits/med/women/43.jpg",
        userId: 767678686778
    },
    allMessages: 0,
    favouriteMessege: null,
    styles: {
        textAlign: 'center',
    },
    displayStyles: {
        display: 'flex',
        margin: 20
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_MESSAGES:
            return {
                ...state,
                allMessages: {
                    ...state.allMessages,
                    [action.channelKey]: action.data
                }
            }
        case HANDLE_NEW_MESSAGE_TEST:
            return {
                ...state,
                newMessageText: action.value
            }
        default:
            return state
    }

}