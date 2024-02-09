/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AverageScore } from '../models/AverageScore';
import type { NagareCount } from '../models/NagareCount';
import type { YakuCount } from '../models/YakuCount';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StatisticsService {
    /**
     * Get Average Score By Player
     * @param datasetId
     * @param startDate
     * @param endDate
     * @returns AverageScore Successful Response
     * @throws ApiError
     */
    public static getAverageScoreByPlayerStatisticsAverageScoreByPlayerGet(
        datasetId: string,
        startDate: string,
        endDate: string,
    ): CancelablePromise<Array<AverageScore>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statistics/average_score_by_player',
            query: {
                'dataset_id': datasetId,
                'start_date': startDate,
                'end_date': endDate,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Yaku Count
     * @param datasetId
     * @param startDate
     * @param endDate
     * @returns YakuCount Successful Response
     * @throws ApiError
     */
    public static getYakuCountStatisticsYakuCountGet(
        datasetId: string,
        startDate: string,
        endDate: string,
    ): CancelablePromise<Array<YakuCount>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statistics/yaku_count',
            query: {
                'dataset_id': datasetId,
                'start_date': startDate,
                'end_date': endDate,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Nagare Count
     * @param datasetId
     * @param startDate
     * @param endDate
     * @returns NagareCount Successful Response
     * @throws ApiError
     */
    public static getNagareCountStatisticsNagareCountGet(
        datasetId: string,
        startDate: string,
        endDate: string,
    ): CancelablePromise<Array<NagareCount>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statistics/nagare_count',
            query: {
                'dataset_id': datasetId,
                'start_date': startDate,
                'end_date': endDate,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
