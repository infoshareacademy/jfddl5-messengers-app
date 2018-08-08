import React from 'react'
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';

const styles = {
    display: 'flex',
    width: '90vw',
    textAlign: 'center',
}

const constainerStyles = {
    display: 'block',
    textAlign: 'center'
}

const MessageBox = () => (
    <div style={constainerStyles}>
        <ListItem
            style={styles}
            leftAvatar={<Avatar src="images/ok-128.jpg" />}
            primaryText="Brunch this weekend?"
            secondaryText={
                <p>
                    <span style={{ color: darkBlack }}>Brendan Lim</span> --
                    I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
            }
            secondaryTextLines={2}
        />
    </div>
)


export default MessageBox