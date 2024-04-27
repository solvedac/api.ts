/* tslint:disable */
/* eslint-disable */
/**
 * @solvedac/unofficial-documentation
 * 이 프로젝트는 [solved.ac](https://solved.ac/) API를 문서화하는 커뮤니티 프로젝트입니다.  이 저장소는 원작자의 요청에 따라 언제든 지워질 수 있으며, 현재 API와 일치하지 않을 수도 있는 점 양해 부탁드립니다.   <sup>   solved.ac 서비스는 shiftpsh가 기획·개발·디자인·운영하는 프로젝트로,   이 저장소와는 solved.ac의 API를 문서화해둔 것 이외에는 아무런 관련이 없습니다. </sup>   [GitHub에서 보기](https://github.com/solvedac/unofficial-documentation)   **주의**: (2023/03/08~) CORS 문제로 인해 API는 사이트 내에서 호출할 수 없으므로 별도 도구를 이용해주십시오. ([#51](https://github.com/solvedac/unofficial-documentation/issues/51)) <br> **참고**: 본 저장소를 내려받고, `pnpm dev`를 실행하시면 로컬 개발 서버를 프록시로 삼아 CORS를 무시할 수 있습니다.    ![@solvedac/unofficial-documentation banner](./assets/solvedac-ud-compact.png)
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
  GetClassesProblemCountClassEntry,
  GetProblemsByIdList200Response,
  GetProblemsCountGroupByLevelLevelEntry,
  Language,
  Problem,
} from '../models/index.cjs';

export interface GetClassesProblemCountRequest {
    xSolvedacLanguage?: Language;
}

export interface GetProblemByIdRequest {
    problemId: number;
    xSolvedacLanguage?: Language;
}

export interface GetProblemsByIdListRequest {
    problemIds: Array<number>;
    xSolvedacLanguage?: Language;
}

export interface GetProblemsCountGroupByLevelRequest {
    xSolvedacLanguage?: Language;
}

/**
 * 
 */
export class ProblemApi extends runtime.BaseAPI {

    /**
     * CLASS별 문제 수를 가져옵니다.
     * CLASS별 문제 수 가져오기
     */
    async getClassesProblemCountRaw(requestParameters: GetClassesProblemCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetClassesProblemCountClassEntry>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }

        const response = await this.request({
            path: `/problem/class`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * CLASS별 문제 수를 가져옵니다.
     * CLASS별 문제 수 가져오기
     */
    async getClassesProblemCount(requestParameters: GetClassesProblemCountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetClassesProblemCountClassEntry>> {
        const response = await this.getClassesProblemCountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 요청한 번호의 백준 문제에 해당하는 solved.ac 문제 정보를 가져옵니다.
     * 백준 문제 번호로 문제 가져오기
     */
    async getProblemByIdRaw(requestParameters: GetProblemByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Problem>> {
        if (requestParameters['problemId'] == null) {
            throw new runtime.RequiredError(
                'problemId',
                'Required parameter "problemId" was null or undefined when calling getProblemById().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['problemId'] != null) {
            queryParameters['problemId'] = requestParameters['problemId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }

        const response = await this.request({
            path: `/problem/show`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 요청한 번호의 백준 문제에 해당하는 solved.ac 문제 정보를 가져옵니다.
     * 백준 문제 번호로 문제 가져오기
     */
    async getProblemById(requestParameters: GetProblemByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Problem> {
        const response = await this.getProblemByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 요청한 번호 목록 각각의 백준 문제에 해당하는 solved.ac 문제 정보를 목록으로 가져옵니다.
     * 백준 문제 번호 목록으로 문제 가져오기
     */
    async getProblemsByIdListRaw(requestParameters: GetProblemsByIdListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProblemsByIdList200Response>> {
        if (requestParameters['problemIds'] == null) {
            throw new runtime.RequiredError(
                'problemIds',
                'Required parameter "problemIds" was null or undefined when calling getProblemsByIdList().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['problemIds'] != null) {
            queryParameters['problemIds'] = requestParameters['problemIds']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }

        const response = await this.request({
            path: `/problem/lookup`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 요청한 번호 목록 각각의 백준 문제에 해당하는 solved.ac 문제 정보를 목록으로 가져옵니다.
     * 백준 문제 번호 목록으로 문제 가져오기
     */
    async getProblemsByIdList(requestParameters: GetProblemsByIdListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProblemsByIdList200Response> {
        const response = await this.getProblemsByIdListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 난이도별 문제 수를 가져옵니다.
     * 난이도별 문제 수 가져오기
     */
    async getProblemsCountGroupByLevelRaw(requestParameters: GetProblemsCountGroupByLevelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetProblemsCountGroupByLevelLevelEntry>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }

        const response = await this.request({
            path: `/problem/level`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 난이도별 문제 수를 가져옵니다.
     * 난이도별 문제 수 가져오기
     */
    async getProblemsCountGroupByLevel(requestParameters: GetProblemsCountGroupByLevelRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetProblemsCountGroupByLevelLevelEntry>> {
        const response = await this.getProblemsCountGroupByLevelRaw(requestParameters, initOverrides);
        return await response.value();
    }

}