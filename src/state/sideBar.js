const SET_NEW_CHANNEL = 'SET_NEW_CHANNEL'

export default setNewChannel = () => ({
    type: SET_NEW_CHANNEL
})

initialState = {

}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_NEW_CHANNEL:
        return {
            ...state
        }
    }
}