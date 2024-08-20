/* tslint:disable */
/* eslint-disable */
/**
 * @solvedac/unofficial-documentation
 * 이 프로젝트는 [solved.ac](https://solved.ac/) API를 문서화하는 커뮤니티 프로젝트입니다.  이 저장소는 원작자의 요청에 따라 언제든 지워질 수 있으며, 현재 API와 일치하지 않을 수도 있는 점 양해 부탁드립니다.   <sup>   solved.ac 서비스는 shiftpsh가 기획·개발·디자인·운영하는 프로젝트로,   이 저장소와는 solved.ac의 API를 문서화해둔 것 이외에는 아무런 관련이 없습니다. </sup>   [GitHub에서 보기](https://github.com/solvedac/unofficial-documentation)   **주의**: (2023/03/08~) CORS 문제로 인해 API는 사이트 내에서 호출할 수 없으므로 별도 도구를 이용해주십시오. ([#51](https://github.com/solvedac/unofficial-documentation/issues/51)) <br> **참고**: 본 저장소를 내려받고, `pnpm dev`를 실행하시면 로컬 개발 서버를 프록시로 삼아 CORS를 무시할 수 있습니다.    ![@solvedac/unofficial-documentation banner](/unofficial-documentation/assets/solvedac-ud-compact.png)
 *
 * The version of the OpenAPI document: 3.2024.03+b1
 * Contact: me@ranolp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime.cjs';
import type {
  GetProblemsByIdList200Response,
  GetRankingByArenaRatingInOrganization200Response,
  GetSearchAutoCompletionsSuggestion,
  Language,
  SearchProblemQueryDirection,
  SearchProblemQuerySort,
  SearchProblemTag200Response,
} from '../models/index.cjs';

export interface GetSearchAutoCompletionsRequest {
    query: string;
    xSolvedacLanguage?: Language;
}

export interface SearchProblemRequest {
    query: string;
    direction: SearchProblemQueryDirection;
    sort: SearchProblemQuerySort;
    xSolvedacLanguage?: Language;
    page?: number;
}

export interface SearchProblemTagRequest {
    query: string;
    xSolvedacLanguage?: Language;
    page?: number;
}

export interface SearchUserRequest {
    query: string;
    xSolvedacLanguage?: Language;
    page?: number;
}

/**
 * 
 */
export class SearchApi extends runtime.BaseAPI {

    /**
     * 주어진 쿼리에 따라 검색할 때 도움이 되도록 자동 완성 및 상위 검색 결과를 반환합니다. 자동 완성 결과는 언어에 의존적입니다.
     * 검색 자동완성 구하기
     */
    async getSearchAutoCompletionsRaw(requestParameters: GetSearchAutoCompletionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSearchAutoCompletionsSuggestion>> {
        if (requestParameters['query'] == null) {
            throw new runtime.RequiredError(
                'query',
                'Required parameter "query" was null or undefined when calling getSearchAutoCompletions().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }

        const response = await this.request({
            path: `/search/suggestion`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 주어진 쿼리에 따라 검색할 때 도움이 되도록 자동 완성 및 상위 검색 결과를 반환합니다. 자동 완성 결과는 언어에 의존적입니다.
     * 검색 자동완성 구하기
     */
    async getSearchAutoCompletions(requestParameters: GetSearchAutoCompletionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSearchAutoCompletionsSuggestion> {
        const response = await this.getSearchAutoCompletionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 주어진 쿼리에 따라 문제를 검색합니다.
     * 문제 검색하기
     */
    async searchProblemRaw(requestParameters: SearchProblemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProblemsByIdList200Response>> {
        if (requestParameters['query'] == null) {
            throw new runtime.RequiredError(
                'query',
                'Required parameter "query" was null or undefined when calling searchProblem().'
            );
        }

        if (requestParameters['direction'] == null) {
            throw new runtime.RequiredError(
                'direction',
                'Required parameter "direction" was null or undefined when calling searchProblem().'
            );
        }

        if (requestParameters['sort'] == null) {
            throw new runtime.RequiredError(
                'sort',
                'Required parameter "sort" was null or undefined when calling searchProblem().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['direction'] != null) {
            queryParameters['direction'] = requestParameters['direction'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }

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
    async searchProblem(requestParameters: SearchProblemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProblemsByIdList200Response> {
        const response = await this.searchProblemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 주어진 쿼리에 따라 문제 태그를 검색합니다.
     * 문제 태그 검색하기
     */
    async searchProblemTagRaw(requestParameters: SearchProblemTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchProblemTag200Response>> {
        if (requestParameters['query'] == null) {
            throw new runtime.RequiredError(
                'query',
                'Required parameter "query" was null or undefined when calling searchProblemTag().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }

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
    async searchProblemTag(requestParameters: SearchProblemTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchProblemTag200Response> {
        const response = await this.searchProblemTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 주어진 쿼리에 따라 사용자를 검색합니다.
     * 사용자 검색하기
     */
    async searchUserRaw(requestParameters: SearchUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetRankingByArenaRatingInOrganization200Response>> {
        if (requestParameters['query'] == null) {
            throw new runtime.RequiredError(
                'query',
                'Required parameter "query" was null or undefined when calling searchUser().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }

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
    async searchUser(requestParameters: SearchUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetRankingByArenaRatingInOrganization200Response> {
        const response = await this.searchUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
