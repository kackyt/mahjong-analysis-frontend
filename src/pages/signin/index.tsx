import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'

export const SignIn = () => {
  const { loginWithRedirect } = useAuth0()
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
