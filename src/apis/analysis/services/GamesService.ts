/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Game } from '../models/Game';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GamesService {
    /**
     * Get Games Count
     * @param datasetId
     * @param startDate
     * @param endDate
     * @returns number Successful Response
     * @throws ApiError
     */
    public static getGamesCountGamesCountGet(
        datasetId: string,
        startDate: string,
        endDate: string,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games/count',
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
     * Get Games
     * @param datasetId
     * @param startDate
     * @param endDate
     * @param limit
     * @param offset
     * @returns Game Successful Response
     * @throws ApiError
     */
    public static getGamesGamesGet(
        datasetId: string,
        startDate: string,
        endDate: string,
        limit: number = 20,
        offset?: number,
    ): CancelablePromise<Array<Game>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/games',
            query: {
                'dataset_id': datasetId,
                'start_date': startDate,
                'end_date': endDate,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
