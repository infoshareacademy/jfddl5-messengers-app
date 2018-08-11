import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
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

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const Message = () => (
    <div>
      <List>
          <DateOfMessages/>
        <ListItem
          leftAvatar={<Avatar src="images/ok-128.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="Brendan Lim"
          secondaryText={
            <p>
              I&apos;ll be in your neighborhoodbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb dob brunch?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
      </List>
    </div>
)

export default Message