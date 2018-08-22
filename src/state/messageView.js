import { database } from '../firebaseConfig'


const HANDLE_FAVOURITE = 'messageView/HANDLE_FAVOURITE'
const SAVE_MESSAGES = 'messageView/SAVE_MESSAGES'

export const saveMessagesAction = (data) => ({ type: SAVE_MESSAGES, data })

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

export const startChannelSync = (channelKey = '-LJUAF34bUu4jb-xz4wl') => (dispatch, getState) => {
    database.ref(`/messeges/${channelKey}`).on(
        'value',
        (snapshot) => {
            const data = Object.entries(
                snapshot.val()
            ).map(el => (
                {
                    id: el[0],
                    ...el[1]
                }
            ))

            dispatch(saveMessagesAction(data))
        }
    )
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
                allMessages: action.data
            }
        default:
            return state
    }

}