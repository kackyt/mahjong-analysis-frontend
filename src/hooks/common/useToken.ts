import {
  GetTokenSilentlyOptions,
  LogoutOptions,
} from '@auth0/auth0-react'
import useSWR, { SWRResponse, mutate } from 'swr'

export const useAuth0Token = (): SWRResponse<string | undefined, Error> => {
  return useSWR('auth0/token', null, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
}

export const useAPIToken = (): SWRResponse<string | undefined, Error> => {
  return useSWR('auth0/api-token', null, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
}

export const fetchAPIToken = async (
  getAccessTokenSilently: (options?: GetTokenSilentlyOptions) => Promise<string>
) => {
  const token = await getAccessTokenSilently({
    authorizationParams:{
      audience: import.meta.env.VITE_AUTH0_API_AUDIENCE,
      scope: import.meta.env.VITE_AUTH0_API_SCOPE,        
    }
  })
  // CeresAPI.TOKEN = token
  mutate('auth0/api-token', token)
}


export const signOut = async (logout: (options?: LogoutOptions) => Promise<void>) => {
  await logout({
    openUrl: (url) => {
      window.location.replace(url)
    }
  })

  mutate('auth0/idtoken', undefined)
  mutate('auth0/token', undefined)
}
