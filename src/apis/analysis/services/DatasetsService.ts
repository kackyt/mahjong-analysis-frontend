/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dataset } from '../models/Dataset';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DatasetsService {
    /**
     * Get Datasets
     * @returns Dataset Successful Response
     * @throws ApiError
     */
    public static getDatasetsDatasetsGet(): CancelablePromise<Array<Dataset>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/datasets',
        });
    }
}
