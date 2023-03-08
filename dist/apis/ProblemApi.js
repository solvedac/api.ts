/* tslint:disable */
/* eslint-disable */
/**
 * @solvedac/unofficial-documentation
 * 이 프로젝트는 [solved.ac](https://solved.ac/) API를 문서화하는 커뮤니티 프로젝트입니다. 이 저장소는 원작자의 요청에 따라 언제든 지워질 수 있으며, 현재 API와 일치하지 않을 수도 있는 점 양해 부탁드립니다.  <sup>   solved.ac 서비스는 shiftpsh가 기획·개발·디자인·운영하는 프로젝트로,   이 저장소와는 solved.ac의 API를 문서화해둔 것 이외에는 아무런 관련이 없습니다. </sup>  [GitHub에서 보기](https://github.com/solvedac/unofficial-documentation)  **주의**: (2023/03/08~) CORS 문제로 인해 API는 사이트 내에서 호출할 수 없으므로 별도 도구를 이용해주십시오. ([#51](https://github.com/solvedac/unofficial-documentation/issues/51))  ![@solvedac/unofficial-documentation banner](./assets/solvedac-ud-compact.png)
 *
 * The version of the OpenAPI document: 3.2022.02+b1
 * Contact: public.ranolp@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime.js';
/**
 *
 */
export class ProblemApi extends runtime.BaseAPI {
    /**
     * 문제 개수를 문제 CLASS별로 가져옵니다.
     * CLASS별 문제 수 가져오기
     */
    async getClassProblemCountRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/problem/class`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 문제 개수를 문제 CLASS별로 가져옵니다.
     * CLASS별 문제 수 가져오기
     */
    async getClassProblemCount(initOverrides) {
        const response = await this.getClassProblemCountRaw(initOverrides);
        return await response.value();
    }
    /**
     * 해당하는 ID의 문제를 가져옵니다.
     * ID로 문제 가져오기
     */
    async getProblemByIdRaw(requestParameters, initOverrides) {
        if (requestParameters.problemId === null || requestParameters.problemId === undefined) {
            throw new runtime.RequiredError('problemId', 'Required parameter requestParameters.problemId was null or undefined when calling getProblemById.');
        }
        const queryParameters = {};
        if (requestParameters.problemId !== undefined) {
            queryParameters['problemId'] = requestParameters.problemId;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/problem/show`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 해당하는 ID의 문제를 가져옵니다.
     * ID로 문제 가져오기
     */
    async getProblemById(requestParameters, initOverrides) {
        const response = await this.getProblemByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * 해당하는 ID의 문제 목록을 가져옵니다.
     * ID 목록으로 문제 목록 가져오기
     */
    async getProblemByIdArrayRaw(requestParameters, initOverrides) {
        if (requestParameters.problemIds === null || requestParameters.problemIds === undefined) {
            throw new runtime.RequiredError('problemIds', 'Required parameter requestParameters.problemIds was null or undefined when calling getProblemByIdArray.');
        }
        const queryParameters = {};
        if (requestParameters.problemIds !== undefined) {
            queryParameters['problemIds'] = requestParameters.problemIds;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/problem/lookup`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 해당하는 ID의 문제 목록을 가져옵니다.
     * ID 목록으로 문제 목록 가져오기
     */
    async getProblemByIdArray(requestParameters, initOverrides) {
        const response = await this.getProblemByIdArrayRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * 문제 개수를 문제 수준별로 가져옵니다.
     * 수준별 문제 수 가져오기
     */
    async getProblemLevelRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/problem/level`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 문제 개수를 문제 수준별로 가져옵니다.
     * 수준별 문제 수 가져오기
     */
    async getProblemLevel(initOverrides) {
        const response = await this.getProblemLevelRaw(initOverrides);
        return await response.value();
    }
}
