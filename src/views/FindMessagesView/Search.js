import React from 'react'
import TextField from 'material-ui/TextField'

 const Search = (props)=> (
    <div>
        <TextField
        hintText="wpisz szukaną wiadomość"
        fullWidth={true}
        value={props.searchPhrase}
        onChange={props.onSearchPhraseChanged}
         />
    </div>
 )
 export default Search