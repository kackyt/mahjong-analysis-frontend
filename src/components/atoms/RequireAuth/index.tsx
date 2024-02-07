import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, useLocation } from 'react-router-dom'

type Props = {
  children?: React.ReactNode
  redirect: string
}

export const RequireAuth: React.FC<Props> = ({ children, redirect }) => {
  const { isLoading, isAuthenticated } = useAuth0()
  const location = useLocation()

  if (isLoading) {
    return <h6>Please Wait</h6>
  } else if (isAuthenticated) {
    return <>{children}</>
  } else {
    return <Navigate to={redirect} state={{ from: location }} replace={false} />
  }
}
