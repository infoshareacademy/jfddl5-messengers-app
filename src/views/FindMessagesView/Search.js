import React from 'react'
import TextField from 'material-ui/TextField'

const displayStyles = {
    display: 'flex',
    margin: 20
}

const Search = (props) => (
    <div style={displayStyles}>
        <TextField
            hintText="wpisz szukaną wiadomość"
            fullWidth={true}
            value={props.searchPhrase}
            onChange={props.onSearchPhraseChanged}
        />
    </div>
)

export default Search