/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Kyoku } from '../models/Kyoku';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KyokusService {
    /**
     * Get Kyokus Count
     * @param datasetId
     * @param startDate
     * @param endDate
     * @param gameId
     * @returns number Successful Response
     * @throws ApiError
     */
    public static getKyokusCountKyokusCountGet(
        datasetId: string,
        startDate: string,
        endDate: string,
        gameId?: (string | null),
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/kyokus/count',
            query: {
                'dataset_id': datasetId,
                'start_date': startDate,
                'end_date': endDate,
                'game_id': gameId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Kyokus
     * @param datasetId
     * @param startDate
     * @param endDate
     * @param limit
     * @param offset
     * @param gameId
     * @returns Kyoku Successful Response
     * @throws ApiError
     */
    public static getKyokusKyokusGet(
        datasetId: string,
        startDate: string,
        endDate: string,
        limit: number = 20,
        offset?: number,
        gameId?: (string | null),
    ): CancelablePromise<Array<Kyoku>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/kyokus',
            query: {
                'dataset_id': datasetId,
                'start_date': startDate,
                'end_date': endDate,
                'limit': limit,
                'offset': offset,
                'game_id': gameId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
