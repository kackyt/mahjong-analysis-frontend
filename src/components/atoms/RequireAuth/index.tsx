import { useAuth0 } from '@auth0/auth0-react'
import { ErrorBoundary } from '@sentry/react'
import { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import { fetchAPIToken, useAPIToken } from '../../../hooks/common/useToken'

type Props = {
  children?: React.ReactNode
  redirect: string
}

const AsyncComponent = ({ children, redirect }: Props) => {
  const { data } = useAPIToken()
  const {
    isLoading,
    isAuthenticated,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
  } = useAuth0()

  if (isLoading) throw new Promise((resolve) => setTimeout(resolve, 100)) // 待機

  if (!isAuthenticated) {
    return <Navigate to={redirect} />
  } else if (!data) {
    throw fetchAPIToken(getAccessTokenSilently, getAccessTokenWithPopup)
  }

  return <>{children}</>
}

export const RequireAuth: React.FC<Props> = ({ children, redirect }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h6>Please Wait</h6>}>
        <AsyncComponent redirect={redirect}>{children}</AsyncComponent>
      </Suspense>
    </ErrorBoundary>
  )
}
