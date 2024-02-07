import useSWR, { SWRConfiguration } from 'swr'
import { GamesService } from '../../../apis/analysis'
import { useAPIToken } from '../../common/useToken'

export const useGames = (
  datasetId: string,
  startDate: string,
  endDate: string,
  config?: Partial<SWRConfiguration>
) => {
  const { data: token } = useAPIToken()
  return useSWR(
    ['games', token, datasetId, startDate, endDate],
    () => GamesService.getGamesGamesGet(datasetId, startDate, endDate),
    {
      ...config,
    }
  )
}
