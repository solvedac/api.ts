/* tslint:disable */
/* eslint-disable */
/**
 * @solvedac/unofficial-documentation
 * 이 프로젝트는 [solved.ac](https://solved.ac/) API를 문서화하는 커뮤니티 프로젝트입니다. 이 저장소는 원작자의 요청에 따라 언제든 지워질 수 있으며, 현재 API와 일치하지 않을 수도 있는 점 양해 부탁드립니다.  <sup>   solved.ac 서비스는 shiftpsh가 기획·개발·디자인·운영하는 프로젝트로,   이 저장소와는 solved.ac의 API를 문서화해둔 것 이외에는 아무런 관련이 없습니다. </sup>  [GitHub에서 보기](https://github.com/solvedac/unofficial-documentation)  ![@solvedac/unofficial-documentation banner](./assets/solvedac-ud-compact.png)
 *
 * The version of the OpenAPI document: 3.2021.09+b2
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
export class UserApi extends runtime.BaseAPI {
    /**
     * 사용자의 정보를 가져옵니다. 만약 로그인한 경우, 라이벌 여부도 가져옵니다.
     * 사용자 정보 가져오기
     */
    async getUserRaw(requestParameters, initOverrides) {
        if (requestParameters.handle === null || requestParameters.handle === undefined) {
            throw new runtime.RequiredError('handle', 'Required parameter requestParameters.handle was null or undefined when calling getUser.');
        }
        const queryParameters = {};
        if (requestParameters.handle !== undefined) {
            queryParameters['handle'] = requestParameters.handle;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/user/show`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 사용자의 정보를 가져옵니다. 만약 로그인한 경우, 라이벌 여부도 가져옵니다.
     * 사용자 정보 가져오기
     */
    async getUser(requestParameters, initOverrides) {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * 사용자가 푼 문제 개수를 문제 수준별로 가져옵니다.
     * 사용자가 푼 문제 개수 수준별로 가져오기
     */
    async getUserProblemStatsRaw(requestParameters, initOverrides) {
        if (requestParameters.handle === null || requestParameters.handle === undefined) {
            throw new runtime.RequiredError('handle', 'Required parameter requestParameters.handle was null or undefined when calling getUserProblemStats.');
        }
        const queryParameters = {};
        if (requestParameters.handle !== undefined) {
            queryParameters['handle'] = requestParameters.handle;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/user/problem_stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 사용자가 푼 문제 개수를 문제 수준별로 가져옵니다.
     * 사용자가 푼 문제 개수 수준별로 가져오기
     */
    async getUserProblemStats(requestParameters, initOverrides) {
        const response = await this.getUserProblemStatsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
