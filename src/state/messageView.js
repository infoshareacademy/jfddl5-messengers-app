
const HANDLE_FAVOURITE = 'messageView/HANDLE_FAVOURITE'
const SAVE_MESSAGES = 'messageView/SAVE_MESSAGES'

export const saveMessagesAction = (data) => ({type: SAVE_MESSAGES, data})

export const handleFavourite = (props, naszeId) => (dispatch, getState) => {
    getMesseges()
    const newArr = props.allMessages.filter((el) => {
        return el.id === naszeId
    })
    const newArr1 =
        newArr[0].favourite === true ?
            newArr.map((el) => ({
                id: el.id,
                dateOfMessage: el.dateOfMessage,
                favourite: false,
                messageText: el.messageText,
                userAvatar: el.userAvatar,
                userId: el.userId
            }))
            :
            newArr.map((el) => ({
                id: el.id,
                dateOfMessage: el.dateOfMessage,
                favourite: true,
                messageText: el.messageText,
                userAvatar: el.userAvatar,
                userId: el.userId
            }))

    const request = {
        method: 'PATCH',
        body: JSON.stringify(newArr1[0])
    }
    fetch(`https://jfddl5-messengers.firebaseio.com/messeges/-LJUAF34bUu4jb-xz4wl/${naszeId}.json`, request)
        .then(data => getMesseges())
}

export const getMesseges = (channelKey = '-LJUAF34bUu4jb-xz4wl') => (dispatch, getState) => {
    fetch(`https://jfddl5-messengers.firebaseio.com/messeges/${channelKey}.json`)
        .then(response => response.json())
        .then(responseData => {
            const newArr = Object.entries(responseData)
            return newArr.map(el => (
                {
                    id: el[0],
                    ...el[1]
                }
            ))
        })
        .then(data => dispatch(saveMessagesAction(data)))
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