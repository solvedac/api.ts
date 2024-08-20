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


import * as runtime from '../runtime.js';
import type {
  ProblemTag,
  SearchProblemTag200Response,
} from '../models/index.js';

export interface GetTagByKeyRequest {
    key: string;
}

export interface GetTagListRequest {
    page?: number;
}

/**
 * 
 */
export class TagApi extends runtime.BaseAPI {

    /**
     * 태그 ID로 태그 정보를 가져옵니다.
     * 태그 ID로 태그 정보 가져오기
     */
    async getTagByKeyRaw(requestParameters: GetTagByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProblemTag>> {
        if (requestParameters['key'] == null) {
            throw new runtime.RequiredError(
                'key',
                'Required parameter "key" was null or undefined when calling getTagByKey().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['key'] != null) {
            queryParameters['key'] = requestParameters['key'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tag/show`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 태그 ID로 태그 정보를 가져옵니다.
     * 태그 ID로 태그 정보 가져오기
     */
    async getTagByKey(requestParameters: GetTagByKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProblemTag> {
        const response = await this.getTagByKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 태그 목록을 가져옵니다.
     * 태그 목록 가져오기
     */
    async getTagListRaw(requestParameters: GetTagListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchProblemTag200Response>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tag/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 태그 목록을 가져옵니다.
     * 태그 목록 가져오기
     */
    async getTagList(requestParameters: GetTagListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchProblemTag200Response> {
        const response = await this.getTagListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
