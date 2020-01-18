import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles'
import { Layout } from './templates'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundImage: `url(https://source.unsplash.com/random/800x600)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  mainFeaturedPostContent: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(14),
    },
  },
  overlay: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  text: {
    padding: theme.spacing(4, 8, 8, 8),
    textAlign: 'left',
  },
}))

export default () => {
  const classes = useStyles()

  const home = (
    <>
      <Paper className={classes.mainFeaturedPost}>
        <Grid container>
          <Grid
            item
            sm={12}
            xs={12}
            lg={12}
            className={classes.mainFeaturedPostContent}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Lorem Ipsum
            </Typography>
            <Typography variant="h5" color="inherit">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid item sm={8} className={classes.text}>
        <ThemeProvider theme={theme}>
          <Typography variant="h6" color="textSecondary" paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </ThemeProvider>
      </Grid>
    </>
  )
  return <Layout content={home} />
}
