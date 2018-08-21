import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import DateOfMessages from './DateOfMessages'
import FontIcon from 'material-ui/FontIcon'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Favorite from 'material-ui/svg-icons/action/favorite'
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border'

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

const favoritesIcon = <FontIcon
  className="material-icons">favorite</FontIcon>;

const Message = (props) => (
  <div >
    <List >
      <DateOfMessages
        dateOfMessage={props.dateOfMessage}
      />
      <ListItem
        leftAvatar={<Avatar src={props.userAvatar} />}
        rightIconButton={
          props.favourite === true ?
            <Favorite
              onClick={() => {
                props.handleId(props.id)
              }}
            />
            :
            <FavoriteBorder
              onClick={() => {
                props.handleId(props.id)
              }}
            />
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