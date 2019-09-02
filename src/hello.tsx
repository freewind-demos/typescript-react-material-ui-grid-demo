import React from 'react'
import Grid from "@material-ui/core/Grid";

export default function MyList() {
  return <Grid container spacing={16}>
    <Grid item xs={3}>
      <Grid container>
        <Grid item xs={6} className='item'>Select1</Grid>
        <Grid item xs={6} className='item'>Select2</Grid>
      </Grid>
    </Grid>
    <Grid item container xs={4}>
      <Grid item xs={3} className='item'>Button1</Grid>
      <Grid item xs className='item'>Button2</Grid>
    </Grid>
    <Grid item xs className='item'>Textarea1</Grid>
    <Grid item xs className='item'>Textarea2</Grid>
  </Grid>
}
