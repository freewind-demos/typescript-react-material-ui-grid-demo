import * as React from 'react'

import {List, ListItem, ListItemText, ListItemIcon, Collapse} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import {ExpandMore, ExpandLess} from '@material-ui/icons'
import Grid from "@material-ui/core/Grid";

class MyList extends React.Component {
  state = {
    open: false
  }

  toggleSublist = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return <Grid container spacing={16} className='container'>
      <Grid item xs={3} className='item'>
        <Grid container className='container'>
          <Grid item xs={6} className='item'>Select1</Grid>
          <Grid item xs={6} className='item'>Select2</Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} className='item'>
        <Grid container className='container'>
          <Grid item xs={3} className='item'>Button1</Grid>
          <Grid item xs className='item'>Button2</Grid>
        </Grid>
      </Grid>
      <Grid item xs className='item'>Textarea1</Grid>
    </Grid>
  }
}

export default MyList
