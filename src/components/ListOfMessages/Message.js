import React from 'react'
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import DateOfMessages from './DateOfMessages'

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);



const Message = (props) => (
  <div >
    {console.log(props)}
    <List >
      {console.log('przekazane propsy: ', props)}
      <DateOfMessages
        dateOfMessage={props.dateOfMessage}
      />
      <ListItem

        leftAvatar={<Avatar src={props.userAvatar} />}
        rightIconButton={
          <IconMenu iconButtonElement={iconButtonElement}>
            <MenuItem>Reply</MenuItem>
            <MenuItem>Forward</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem
              onClick={() => {
                props.handleId(props.id)
              }}
            >{props.favourite === true ? 'Unlike' : 'Like'}</MenuItem>
          </IconMenu>
        }
        primaryText="Brendan Lim"
        secondaryText={
          <p>
            {props.text}
          </p>
        }
        secondaryTextLines={2}
        />
      <Divider
          style={{ width: '80%' }}
          inset={true} />
    </List>
  </div>
    )
    
export default Message