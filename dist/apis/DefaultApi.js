/* tslint:disable */
/* eslint-disable */
/**
 * @solvedac/unofficial-documentation
 * 이 프로젝트는 [solved.ac](https://solved.ac/) API를 문서화하는 커뮤니티 프로젝트입니다. 이 저장소는 원작자의 요청에 따라 언제든 지워질 수 있으며, 현재 API와 일치하지 않을 수도 있는 점 양해 부탁드립니다.  <sup>   solved.ac 서비스는 shiftpsh가 기획·개발·디자인·운영하는 프로젝트로,   이 저장소와는 solved.ac의 API를 문서화해둔 것 이외에는 아무런 관련이 없습니다. </sup>  [GitHub에서 보기](https://github.com/solvedac/unofficial-documentation)  ![@solvedac/unofficial-documentation banner](./assets/solvedac-ud-compact.png)
 *
 * The version of the OpenAPI document: 3.2021.09+b1
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
export class DefaultApi extends runtime.BaseAPI {
    /**
     * TODO
     */
    async accountRedeemPostRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/account/redeem`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async accountRedeemPost(initOverrides) {
        await this.accountRedeemPostRaw(initOverrides);
    }
    /**
     * TODO
     */
    async postShowGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/post/show`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async postShowGet(initOverrides) {
        await this.postShowGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async problemClassGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/problem/class`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async problemClassGet(initOverrides) {
        await this.problemClassGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async rankingClassGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/ranking/class`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async rankingClassGet(initOverrides) {
        await this.rankingClassGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async rankingContributionGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/ranking/contribution`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async rankingContributionGet(initOverrides) {
        await this.rankingContributionGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async rankingOrganizationGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/ranking/organization`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async rankingOrganizationGet(initOverrides) {
        await this.rankingOrganizationGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async rankingReverseRivalGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/ranking/reverse_rival`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async rankingReverseRivalGet(initOverrides) {
        await this.rankingReverseRivalGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async rankingRivalGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/ranking/rival`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async rankingRivalGet(initOverrides) {
        await this.rankingRivalGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async rankingStreakGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/ranking/streak`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async rankingStreakGet(initOverrides) {
        await this.rankingStreakGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async rankingTierGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/ranking/tier`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async rankingTierGet(initOverrides) {
        await this.rankingTierGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async tagListGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/tag/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async tagListGet(initOverrides) {
        await this.tagListGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async userClassStatsGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/user/class_stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async userClassStatsGet(initOverrides) {
        await this.userClassStatsGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async userContributionStatsGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/user/contribution_stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async userContributionStatsGet(initOverrides) {
        await this.userContributionStatsGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async userProblemTagStatsGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/user/problem_tag_stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async userProblemTagStatsGet(initOverrides) {
        await this.userProblemTagStatsGetRaw(initOverrides);
    }
    /**
     * TODO
     */
    async userShowGetRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/user/show`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     * TODO
     */
    async userShowGet(initOverrides) {
        await this.userShowGetRaw(initOverrides);
    }
}
