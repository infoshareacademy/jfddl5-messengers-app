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
import FontIcon from 'material-ui/FontIcon';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

const Message = (props) => (
  <div >
    <List >
      <DateOfMessages
        dateOfMessage={props.dateOfMessage}
      />
      <ListItem

        leftAvatar={<Avatar src={props.userAvatar} />}
        rightIconButton={
          <FontIcon
            label="Favorites"
            icon={favoritesIcon}
            onClick={() => {
              props.handleId(props.id)
            }}
          >{props.favourite === true ? 'Unlike' : 'Like'}
          </FontIcon>
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