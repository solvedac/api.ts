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
import {
    InlineResponse20010,
    InlineResponse2004,
    InlineResponse2005,
    InlineResponse2006,
    InlineResponse2007,
    InlineResponse2008,
    InlineResponse2009,
} from '../models/index.js';

export interface GetOrganizationRankingRequest {
    page?: number;
}

export interface GetRankingByClassRequest {
    page?: number;
}

export interface GetRankingByContributionRequest {
    page?: number;
}

export interface GetRankingByStreakRequest {
    page?: number;
}

export interface GetRankingByTierRequest {
    page?: number;
}

export interface GetReverseRivalRankingRequest {
    page?: number;
}

export interface GetRivalRankingRequest {
    page?: number;
}

/**
 * 
 */
export class RankingApi extends runtime.BaseAPI {

    /**
     * 레이팅에 따른 조직 순위를 가져옵니다.
     * 조직 순위 가져오기
     */
    async getOrganizationRankingRaw(requestParameters: GetOrganizationRankingRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse20010>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ranking/organization`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 레이팅에 따른 조직 순위를 가져옵니다.
     * 조직 순위 가져오기
     */
    async getOrganizationRanking(requestParameters: GetOrganizationRankingRequest, initOverrides?: RequestInit): Promise<InlineResponse20010> {
        const response = await this.getOrganizationRankingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 사용자 CLASS에 따른 순위를 가져옵니다.
     * CLASS 순위 가져오기
     */
    async getRankingByClassRaw(requestParameters: GetRankingByClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2005>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ranking/class`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 사용자 CLASS에 따른 순위를 가져옵니다.
     * CLASS 순위 가져오기
     */
    async getRankingByClass(requestParameters: GetRankingByClassRequest, initOverrides?: RequestInit): Promise<InlineResponse2005> {
        const response = await this.getRankingByClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 기여 횟수에 따른 순위를 가져옵니다.
     * 기여 순위 가져오기
     */
    async getRankingByContributionRaw(requestParameters: GetRankingByContributionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2007>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ranking/contribution`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 기여 횟수에 따른 순위를 가져옵니다.
     * 기여 순위 가져오기
     */
    async getRankingByContribution(requestParameters: GetRankingByContributionRequest, initOverrides?: RequestInit): Promise<InlineResponse2007> {
        const response = await this.getRankingByContributionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 최장 스트릭에 따른 순위를 가져옵니다.
     * 최장 스트릭 순위 가져오기
     */
    async getRankingByStreakRaw(requestParameters: GetRankingByStreakRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2006>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ranking/streak`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 최장 스트릭에 따른 순위를 가져옵니다.
     * 최장 스트릭 순위 가져오기
     */
    async getRankingByStreak(requestParameters: GetRankingByStreakRequest, initOverrides?: RequestInit): Promise<InlineResponse2006> {
        const response = await this.getRankingByStreakRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 사용자 티어에 따른 순위를 가져옵니다.
     * 티어 순위 가져오기
     */
    async getRankingByTierRaw(requestParameters: GetRankingByTierRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2004>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ranking/tier`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 사용자 티어에 따른 순위를 가져옵니다.
     * 티어 순위 가져오기
     */
    async getRankingByTier(requestParameters: GetRankingByTierRequest, initOverrides?: RequestInit): Promise<InlineResponse2004> {
        const response = await this.getRankingByTierRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 현재 사용자의 역라이벌 티어 순위를 가져옵니다.
     * 역라이벌 순위 가져오기
     */
    async getReverseRivalRankingRaw(requestParameters: GetReverseRivalRankingRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2009>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ranking/reverse_rival`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 현재 사용자의 역라이벌 티어 순위를 가져옵니다.
     * 역라이벌 순위 가져오기
     */
    async getReverseRivalRanking(requestParameters: GetReverseRivalRankingRequest, initOverrides?: RequestInit): Promise<InlineResponse2009> {
        const response = await this.getReverseRivalRankingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 현재 사용자의 라이벌 티어 순위를 가져옵니다.
     * 라이벌 순위 가져오기
     */
    async getRivalRankingRaw(requestParameters: GetRivalRankingRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2008>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ranking/rival`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 현재 사용자의 라이벌 티어 순위를 가져옵니다.
     * 라이벌 순위 가져오기
     */
    async getRivalRanking(requestParameters: GetRivalRankingRequest, initOverrides?: RequestInit): Promise<InlineResponse2008> {
        const response = await this.getRivalRankingRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
