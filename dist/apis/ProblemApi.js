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
import * as runtime from '../runtime';
/**
 *
 */
export class ProblemApi extends runtime.BaseAPI {
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
