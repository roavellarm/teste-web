import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Tooltip,
  IconButton,
} from '@material-ui/core'
import Dropdown from './Dropdown'
import { useStore } from '../../../core/store'

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const useStyles = makeStyles({
  root: { flexGrow: 1 },
  title: { flexGrow: 1 },
})

export default withRouter(({ isAuthenticated, history }) => {
  const classes = useStyles()
  const { store, setStore } = useStore()

  const onLogout = async () => {
    try {
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('database')
      localStorage.removeItem('currentUser')
      setStore({ isAuthenticated: false })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar fluid="true" position="static" color="inherit">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            <StyledLink to="/">
              <img src="/logo.png" alt="logo" height="28px" align="center" />
            </StyledLink>
          </Typography>
          {isAuthenticated && (
            <StyledLink to="/">
              <IconButton color="inherit" aria-label="menu">
                <Tooltip title="Dashboard">
                  <DashboardIcon />
                </Tooltip>
              </IconButton>
            </StyledLink>
          )}

          {!isAuthenticated && (
            <>
              <StyledLink to="/sign-in">
                <Button color="primary">Sign in</Button>
              </StyledLink>

              <StyledLink to="/sign-up">
                <Button color="secondary">Sign up</Button>
              </StyledLink>
            </>
          )}
          {isAuthenticated && (
            <>
              <Dropdown
                dropdownItems={[
                  {
                    text: 'Profile',
                    onClick: () => history.push('/user-profile'),
                  },
                  { text: 'Logout', onClick: () => onLogout() },
                ]}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
})
