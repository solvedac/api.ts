/* tslint:disable */
/* eslint-disable */
/**
 * @solvedac/unofficial-documentation
 * 이 프로젝트는 [solved.ac](https://solved.ac/) API를 문서화하는 커뮤니티 프로젝트입니다. 이 저장소는 원작자의 요청에 따라 언제든 지워질 수 있으며, 현재 API와 일치하지 않을 수도 있는 점 양해 부탁드립니다.  <sup>   solved.ac 서비스는 shiftpsh가 기획·개발·디자인·운영하는 프로젝트로,   이 저장소와는 solved.ac의 API를 문서화해둔 것 이외에는 아무런 관련이 없습니다. </sup>  **주의**: account 하위 루트를 탐색할 경우, 현재 로그인된 solvedacToken이 노출·오용될 수 있으니 주의하십시오.  [GitHub에서 보기](https://github.com/solvedac/unofficial-documentation)  ![@solvedac/unofficial-documentation banner](./assets/solvedac-ud-compact.png) 
 *
 * The version of the OpenAPI document: 3.2022.02+b1
 * Contact: public.ranolp@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime.js';
import {
    InlineResponse20011,
    InlineResponse20012,
    InlineResponse20013,
    InlineResponse20014,
} from '../models/index.js';

export interface GetSearchAutoCompletionRequest {
    query: string;
}

export interface SearchProblemRequest {
    query: string;
    page?: number;
    sort?: SearchProblemSortEnum;
    direction?: SearchProblemDirectionEnum;
}

export interface SearchProblemTagRequest {
    query: string;
    page?: number;
}

export interface SearchUserRequest {
    query: string;
    page?: number;
}

/**
 * 
 */
export class SearchApi extends runtime.BaseAPI {

    /**
     * 주어진 쿼리에 따라 검색해보고, 자동 완성에 적합하도록 가공한 정보를 돌려줍니다.
     * 검색 자동완성 구하기
     */
    async getSearchAutoCompletionRaw(requestParameters: GetSearchAutoCompletionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse20012>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling getSearchAutoCompletion.');
        }

        const queryParameters: any = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/search/suggestion`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 주어진 쿼리에 따라 검색해보고, 자동 완성에 적합하도록 가공한 정보를 돌려줍니다.
     * 검색 자동완성 구하기
     */
    async getSearchAutoCompletion(requestParameters: GetSearchAutoCompletionRequest, initOverrides?: RequestInit): Promise<InlineResponse20012> {
        const response = await this.getSearchAutoCompletionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 주어진 쿼리에 따라 문제를 검색합니다.
     * 문제 검색하기
     */
    async searchProblemRaw(requestParameters: SearchProblemRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse20011>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling searchProblem.');
        }

        const queryParameters: any = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.direction !== undefined) {
            queryParameters['direction'] = requestParameters.direction;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/search/problem`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 주어진 쿼리에 따라 문제를 검색합니다.
     * 문제 검색하기
     */
    async searchProblem(requestParameters: SearchProblemRequest, initOverrides?: RequestInit): Promise<InlineResponse20011> {
        const response = await this.searchProblemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 주어진 쿼리에 따라 문제 태그를 검색합니다.
     * 문제 태그 검색하기
     */
    async searchProblemTagRaw(requestParameters: SearchProblemTagRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse20013>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling searchProblemTag.');
        }

        const queryParameters: any = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/search/tag`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 주어진 쿼리에 따라 문제 태그를 검색합니다.
     * 문제 태그 검색하기
     */
    async searchProblemTag(requestParameters: SearchProblemTagRequest, initOverrides?: RequestInit): Promise<InlineResponse20013> {
        const response = await this.searchProblemTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 주어진 쿼리에 따라 사용자를 검색합니다.
     * 사용자 검색하기
     */
    async searchUserRaw(requestParameters: SearchUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse20014>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling searchUser.');
        }

        const queryParameters: any = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/search/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 주어진 쿼리에 따라 사용자를 검색합니다.
     * 사용자 검색하기
     */
    async searchUser(requestParameters: SearchUserRequest, initOverrides?: RequestInit): Promise<InlineResponse20014> {
        const response = await this.searchUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum SearchProblemSortEnum {
    Id = 'id',
    Level = 'level',
    Title = 'title',
    Solved = 'solved',
    AverageTry = 'average_try',
    Random = 'random'
}
/**
    * @export
    * @enum {string}
    */
export enum SearchProblemDirectionEnum {
    Asc = 'asc',
    Desc = 'desc'
}
