import useSWR, { SWRConfiguration } from 'swr'
import { DatasetsService } from '../../../apis/analysis'
import { useAPIToken } from '../../common/useToken'

export const useDatasets = (config?: Partial<SWRConfiguration>) => {
  const { data: token } = useAPIToken()

  return useSWR(['datasets', token], DatasetsService.getDatasetsDatasetsGet, {
    ...config,
  })
}
