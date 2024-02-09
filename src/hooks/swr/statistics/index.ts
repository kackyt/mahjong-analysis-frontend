import { StatisticsService } from '../../../apis/analysis'

// hooksじゃないので本来ここに置くのはおかしいが、あとで移動する
export const getAverageScoreByPlayer = async (
  datasetId: string,
  startDate: string,
  endDate: string
) => {
  return await StatisticsService.getAverageScoreByPlayerStatisticsAverageScoreByPlayerGet(
    datasetId,
    startDate,
    endDate
  )
}

export const getYakuCount = async (
  datasetId: string,
  startDate: string,
  endDate: string
) => {
  return await StatisticsService.getYakuCountStatisticsYakuCountGet(
    datasetId,
    startDate,
    endDate
  )
}

export const getNagareCount = async (
  datasetId: string,
  startDate: string,
  endDate: string
) => {
  return await StatisticsService.getNagareCountStatisticsNagareCountGet(
    datasetId,
    startDate,
    endDate
  )
}
