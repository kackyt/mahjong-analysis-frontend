import { User, useAuth0 } from '@auth0/auth0-react'
import { AccountCircle } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Button,
  Card,
  CardContent,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useCallback, useRef, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { signOut } from '../../hooks/common/useToken'

type UserMenuProps = {
  anchorRef: React.RefObject<HTMLButtonElement>
  handleSignOut: () => Promise<void>
  openAccountMenu: boolean
  user?: User
  isLoading: boolean
  isAuthenticated: boolean
}

export const DefaultLayout: React.FC = () => {
  const { logout, isLoading, isAuthenticated, user, loginWithRedirect } =
    useAuth0()
  const [openAccountMenu, setOpenAccountMenu] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleSignOut = useCallback(async () => {
    setOpenAccountMenu(false)
    await signOut(logout)
  }, [logout])

  const toggleAccountMenu = () => {
    setOpenAccountMenu((prevOpen) => !prevOpen)
  }

  const UserMenu = React.memo(
    ({
      anchorRef,
      handleSignOut,
      openAccountMenu,
      user,
      isLoading,
      isAuthenticated,
    }: UserMenuProps) => {
      if (isLoading) {
        return <CircularProgress />
      }
      if (!isAuthenticated || !user) {
        return (
          <Button
            variant="outlined"
            onClick={() => {
              loginWithRedirect()
            }}
            sx={{ mx: 3, my: 3 }}
          >
            Sign in
          </Button>
        )
      }
      return (
        <Box sx={{ flexGrow: 0 }}>
          <IconButton
            id="account-button"
            ref={anchorRef}
            onClick={toggleAccountMenu}
            aria-controls={openAccountMenu ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openAccountMenu ? 'true' : undefined}
          >
            {user.picture ? (
              <Avatar alt={user.name} src={user.picture} />
            ) : (
              <AccountCircle />
            )}
          </IconButton>
          <Menu
            id="account-menu"
            anchorEl={anchorRef.current}
            open={openAccountMenu}
            onClose={() => setOpenAccountMenu(false)}
            MenuListProps={{ 'aria-labelledby': 'account-button' }}
          >
            <Card>
              <CardContent>
                <Typography>{user.name}</Typography>
                <Typography variant="caption" component="div">
                  {user.email}
                </Typography>
              </CardContent>
            </Card>
            <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
          </Menu>
        </Box>
      )
    }
  )

  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link
                to="/"
                replace={false}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Mahjong Analysis
              </Link>
            </Typography>
            <UserMenu
              anchorRef={anchorRef}
              handleSignOut={handleSignOut}
              isLoading={isLoading}
              isAuthenticated={isAuthenticated}
              user={user}
              openAccountMenu={openAccountMenu}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Box>
  )
}
