import {
  GetTokenSilentlyOptions,
  GetTokenWithPopupOptions,
  LogoutOptions,
  PopupConfigOptions,
} from '@auth0/auth0-react'
import useSWR, { SWRResponse, mutate } from 'swr'
import { OpenAPI } from '../../apis/analysis'

export const useAPIToken = (): SWRResponse<string | undefined, Error> => {
  return useSWR('auth0/api-token', null, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
}

export const fetchAPIToken = async (
  getAccessTokenSilently: (
    options?: GetTokenSilentlyOptions
  ) => Promise<string>,
  getAccessTokenWithPopup: (
    options?: GetTokenWithPopupOptions,
    config?: PopupConfigOptions
  ) => Promise<string | undefined>
) => {
  const token =
    import.meta.env.VITE_ENV === 'local'
      ? await getAccessTokenWithPopup({
          authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_API_AUDIENCE,
            scope: import.meta.env.VITE_AUTH0_API_SCOPE,
          },
        })
      : await getAccessTokenSilently({
          authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_API_AUDIENCE,
            scope: import.meta.env.VITE_AUTH0_API_SCOPE,
          },
        })

  OpenAPI.TOKEN = token
  mutate('auth0/api-token', token)
}

export const signOut = async (
  logout: (options?: LogoutOptions) => Promise<void>
) => {
  await logout({
    openUrl: (url) => {
      window.location.replace(url)
    },
  })

  mutate('auth0/idtoken', undefined)
  mutate('auth0/api-token', undefined)
}
