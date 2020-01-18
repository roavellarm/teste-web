import React from 'react'
import { Typography, Link, Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    marginTop: 'auto',
  },
  text: {
    variant: 'subtitle2',
    align: 'center',
    color: 'textSecondary',
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="subtitle2" align="center" color="textSecondary">
          Lorem Ipsum - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          {'Copyright © '}
          <Link color="inherit" href="/">
            Lorem Ipsum
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </footer>
  )
}
