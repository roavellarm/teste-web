import React from 'react'
import Layout from './templates/Layout'
import unauthorized from '../assets/unauthorized.jpg'
import { makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  img: {
    marginTop: 20,
    width: '100%',
    height: 'auto',
  },
}))

export default () => {
  const classes = useStyles()

  const content = (
    <Grid item xs={12} sm={10} md={7} lg={6}>
      <img alt="unauthorized" src={unauthorized} className={classes.img} />
    </Grid>
  )
  return <Layout content={content} />
}
