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
  GetProblemsByIdList200Response,
  GetUserClassStatsClassStat,
  GetUserContributionStatsContributionStat,
  GetUserProblemStatsProblemStat,
  GetUserProblemTagStats200Response,
  Language,
  Organization,
  SocialUser,
  UserAdditionalInfo,
} from '../models/index.js';

export interface GetUserAdditionalInfoRequest {
    handle: string;
}

export interface GetUserByHandleRequest {
    handle: string;
    xSolvedacLanguage?: Language;
}

export interface GetUserClassStatsRequest {
    handle: string;
}

export interface GetUserContributionStatsRequest {
    handle: string;
}

export interface GetUserOrganizationsRequest {
    handle: string;
}

export interface GetUserProblemStatsRequest {
    handle: string;
}

export interface GetUserProblemTagStatsRequest {
    handle: string;
}

export interface GetUserTop100Request {
    handle: string;
    xSolvedacLanguage?: Language;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * 해당 핸들을 가진 사용자의 부가 정보를 가져옵니다.
     * 사용자 핸들로 부가 정보 가져오기
     */
    async getUserAdditionalInfoRaw(requestParameters: GetUserAdditionalInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserAdditionalInfo>> {
        if (requestParameters['handle'] == null) {
            throw new runtime.RequiredError(
                'handle',
                'Required parameter "handle" was null or undefined when calling getUserAdditionalInfo().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['handle'] != null) {
            queryParameters['handle'] = requestParameters['handle'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/additional_info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 해당 핸들을 가진 사용자의 부가 정보를 가져옵니다.
     * 사용자 핸들로 부가 정보 가져오기
     */
    async getUserAdditionalInfo(requestParameters: GetUserAdditionalInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserAdditionalInfo> {
        const response = await this.getUserAdditionalInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 해당 핸들의 사용자 정보를 가져옵니다. 만약 요청자가 로그인 중이라면 라이벌 여부도 가져옵니다. 로그인 중이 아니라면 라이벌 등 로그인해야 알 수 있는 정보는 기본값 처리됩니다.
     * 사용자 핸들로 정보 가져오기
     */
    async getUserByHandleRaw(requestParameters: GetUserByHandleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SocialUser>> {
        if (requestParameters['handle'] == null) {
            throw new runtime.RequiredError(
                'handle',
                'Required parameter "handle" was null or undefined when calling getUserByHandle().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['handle'] != null) {
            queryParameters['handle'] = requestParameters['handle'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }

        const response = await this.request({
            path: `/user/show`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 해당 핸들의 사용자 정보를 가져옵니다. 만약 요청자가 로그인 중이라면 라이벌 여부도 가져옵니다. 로그인 중이 아니라면 라이벌 등 로그인해야 알 수 있는 정보는 기본값 처리됩니다.
     * 사용자 핸들로 정보 가져오기
     */
    async getUserByHandle(requestParameters: GetUserByHandleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SocialUser> {
        const response = await this.getUserByHandleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 해당 핸들의 사용자가 푼 문제 수를 클래스별로 나누어 가져옵니다.
     * 클래스별로 사용자가 푼 문제 수 가져오기
     */
    async getUserClassStatsRaw(requestParameters: GetUserClassStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetUserClassStatsClassStat>>> {
        if (requestParameters['handle'] == null) {
            throw new runtime.RequiredError(
                'handle',
                'Required parameter "handle" was null or undefined when calling getUserClassStats().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['handle'] != null) {
            queryParameters['handle'] = requestParameters['handle'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/class_stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 해당 핸들의 사용자가 푼 문제 수를 클래스별로 나누어 가져옵니다.
     * 클래스별로 사용자가 푼 문제 수 가져오기
     */
    async getUserClassStats(requestParameters: GetUserClassStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetUserClassStatsClassStat>> {
        const response = await this.getUserClassStatsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 해당 핸들의 사용자가 기여한 문제 수를 문제 수준별로 나누어 가져옵니다.
     * 문제 수준별로 사용자가 기여한 문제 수 가져오기
     */
    async getUserContributionStatsRaw(requestParameters: GetUserContributionStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetUserContributionStatsContributionStat>>> {
        if (requestParameters['handle'] == null) {
            throw new runtime.RequiredError(
                'handle',
                'Required parameter "handle" was null or undefined when calling getUserContributionStats().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['handle'] != null) {
            queryParameters['handle'] = requestParameters['handle'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/contribution_stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 해당 핸들의 사용자가 기여한 문제 수를 문제 수준별로 나누어 가져옵니다.
     * 문제 수준별로 사용자가 기여한 문제 수 가져오기
     */
    async getUserContributionStats(requestParameters: GetUserContributionStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetUserContributionStatsContributionStat>> {
        const response = await this.getUserContributionStatsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 해당 핸들의 사용자 정보를 가져옵니다. 만약 요청자가 로그인 중이라면 라이벌 여부도 가져옵니다. 로그인 중이 아니라면 라이벌 등 로그인해야 알 수 있는 정보는 기본값 처리됩니다.
     * 사용자 핸들로 단체 가져오기
     */
    async getUserOrganizationsRaw(requestParameters: GetUserOrganizationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Organization>>> {
        if (requestParameters['handle'] == null) {
            throw new runtime.RequiredError(
                'handle',
                'Required parameter "handle" was null or undefined when calling getUserOrganizations().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['handle'] != null) {
            queryParameters['handle'] = requestParameters['handle'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/organizations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 해당 핸들의 사용자 정보를 가져옵니다. 만약 요청자가 로그인 중이라면 라이벌 여부도 가져옵니다. 로그인 중이 아니라면 라이벌 등 로그인해야 알 수 있는 정보는 기본값 처리됩니다.
     * 사용자 핸들로 단체 가져오기
     */
    async getUserOrganizations(requestParameters: GetUserOrganizationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Organization>> {
        const response = await this.getUserOrganizationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 해당 핸들의 사용자가 푼 문제 수를 문제 수준별로 나누어 가져옵니다.
     * 문제 수준별로 사용자가 푼 문제 수 가져오기
     */
    async getUserProblemStatsRaw(requestParameters: GetUserProblemStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetUserProblemStatsProblemStat>>> {
        if (requestParameters['handle'] == null) {
            throw new runtime.RequiredError(
                'handle',
                'Required parameter "handle" was null or undefined when calling getUserProblemStats().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['handle'] != null) {
            queryParameters['handle'] = requestParameters['handle'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/problem_stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 해당 핸들의 사용자가 푼 문제 수를 문제 수준별로 나누어 가져옵니다.
     * 문제 수준별로 사용자가 푼 문제 수 가져오기
     */
    async getUserProblemStats(requestParameters: GetUserProblemStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetUserProblemStatsProblemStat>> {
        const response = await this.getUserProblemStatsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 해당 핸들의 사용자가 푼 문제 수를 태그별로 나누어 가져옵니다.
     * 태그별로 사용자가 푼 문제 수 가져오기
     */
    async getUserProblemTagStatsRaw(requestParameters: GetUserProblemTagStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUserProblemTagStats200Response>> {
        if (requestParameters['handle'] == null) {
            throw new runtime.RequiredError(
                'handle',
                'Required parameter "handle" was null or undefined when calling getUserProblemTagStats().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['handle'] != null) {
            queryParameters['handle'] = requestParameters['handle'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/problem_tag_stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 해당 핸들의 사용자가 푼 문제 수를 태그별로 나누어 가져옵니다.
     * 태그별로 사용자가 푼 문제 수 가져오기
     */
    async getUserProblemTagStats(requestParameters: GetUserProblemTagStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUserProblemTagStats200Response> {
        const response = await this.getUserProblemTagStatsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 사용자가 푼 문제 중 문제 수준이 높은 상위 100 문제를 가져옵니다
     * 상위 100 문제 가져오기
     */
    async getUserTop100Raw(requestParameters: GetUserTop100Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProblemsByIdList200Response>> {
        if (requestParameters['handle'] == null) {
            throw new runtime.RequiredError(
                'handle',
                'Required parameter "handle" was null or undefined when calling getUserTop100().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['handle'] != null) {
            queryParameters['handle'] = requestParameters['handle'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }

        const response = await this.request({
            path: `/user/top_100`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 사용자가 푼 문제 중 문제 수준이 높은 상위 100 문제를 가져옵니다
     * 상위 100 문제 가져오기
     */
    async getUserTop100(requestParameters: GetUserTop100Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProblemsByIdList200Response> {
        const response = await this.getUserTop100Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
