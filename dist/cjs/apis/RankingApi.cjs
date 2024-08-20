"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingApi = void 0;
const runtime = __importStar(require("../runtime.cjs"));
/**
 *
 */
class RankingApi extends runtime.BaseAPI {
    /**
     * 역라이벌인 사용자 중에서 문제풀이 레이팅이 높은 단체가 먼저 오도록 정렬한 목록을 가져옵니다.
     * 문제풀이 레이팅 순 단체 랭킹 가져오기
     */
    async getOrganizationRankingByACRatingRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }
        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/ranking/organization`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 역라이벌인 사용자 중에서 문제풀이 레이팅이 높은 단체가 먼저 오도록 정렬한 목록을 가져옵니다.
     * 문제풀이 레이팅 순 단체 랭킹 가져오기
     */
    async getOrganizationRankingByACRating(requestParameters = {}, initOverrides) {
        const response = await this.getOrganizationRankingByACRatingRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * 해당 단체에 속한 사용자 중에서 문제풀이 레이팅이 높은 사용자가 먼저 오도록 정렬한 목록을 가져옵니다.
     * 문제풀이 레이팅 순 단체 내 랭킹 가져오기
     */
    async getRankingByACRatingInOrganizationRaw(requestParameters, initOverrides) {
        if (requestParameters['organizationId'] == null) {
            throw new runtime.RequiredError('organizationId', 'Required parameter "organizationId" was null or undefined when calling getRankingByACRatingInOrganization().');
        }
        const queryParameters = {};
        if (requestParameters['organizationId'] != null) {
            queryParameters['organizationId'] = requestParameters['organizationId'];
        }
        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/ranking/in_organization`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 해당 단체에 속한 사용자 중에서 문제풀이 레이팅이 높은 사용자가 먼저 오도록 정렬한 목록을 가져옵니다.
     * 문제풀이 레이팅 순 단체 내 랭킹 가져오기
     */
    async getRankingByACRatingInOrganization(requestParameters, initOverrides) {
        const response = await this.getRankingByACRatingInOrganizationRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * 해당 단체에 속한 사용자 중에서 아레나 레이팅이 높은 사용자가 먼저 오도록 정렬한 목록을 가져옵니다.
     * 아레나 레이팅 순 단체 내 랭킹 가져오기
     */
    async getRankingByArenaRatingInOrganizationRaw(requestParameters, initOverrides) {
        if (requestParameters['organizationId'] == null) {
            throw new runtime.RequiredError('organizationId', 'Required parameter "organizationId" was null or undefined when calling getRankingByArenaRatingInOrganization().');
        }
        const queryParameters = {};
        if (requestParameters['organizationId'] != null) {
            queryParameters['organizationId'] = requestParameters['organizationId'];
        }
        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/ranking/arena_in_organization`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 해당 단체에 속한 사용자 중에서 아레나 레이팅이 높은 사용자가 먼저 오도록 정렬한 목록을 가져옵니다.
     * 아레나 레이팅 순 단체 내 랭킹 가져오기
     */
    async getRankingByArenaRatingInOrganization(requestParameters, initOverrides) {
        const response = await this.getRankingByArenaRatingInOrganizationRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * CLASS가 높은 사용자가 먼저 오도록 정렬한 사용자 목록을 가져옵니다.
     * CLASS 순 사용자 랭킹 가져오기
     */
    async getRankingByClassRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }
        const headerParameters = {};
        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }
        const response = await this.request({
            path: `/ranking/class`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * CLASS가 높은 사용자가 먼저 오도록 정렬한 사용자 목록을 가져옵니다.
     * CLASS 순 사용자 랭킹 가져오기
     */
    async getRankingByClass(requestParameters = {}, initOverrides) {
        const response = await this.getRankingByClassRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * 기여 횟수가 높은 사용자가 먼저 오도록 정렬한 사용자 목록을 가져옵니다.
     * 기여 순 사용자 랭킹 가져오기
     */
    async getRankingByContributionRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }
        const headerParameters = {};
        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }
        const response = await this.request({
            path: `/ranking/contribution`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 기여 횟수가 높은 사용자가 먼저 오도록 정렬한 사용자 목록을 가져옵니다.
     * 기여 순 사용자 랭킹 가져오기
     */
    async getRankingByContribution(requestParameters = {}, initOverrides) {
        const response = await this.getRankingByContributionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * 치장 스트릭 유지일이 높은 사용자가 먼저 오도록 정렬한 사용자 목록을 가져옵니다.
     * 최장 스트릭 순 사용자 랭킹 가져오기
     */
    async getRankingByMaxStreakRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }
        const headerParameters = {};
        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }
        const response = await this.request({
            path: `/ranking/streak`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 치장 스트릭 유지일이 높은 사용자가 먼저 오도록 정렬한 사용자 목록을 가져옵니다.
     * 최장 스트릭 순 사용자 랭킹 가져오기
     */
    async getRankingByMaxStreak(requestParameters = {}, initOverrides) {
        const response = await this.getRankingByMaxStreakRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * 문제풀이 레이팅이 높은 사용자가 먼저 오도록 정렬한 사용자 목록을 가져옵니다.
     * 문제풀이 레이팅 순 사용자 랭킹 가져오기
     */
    async getRankingBySolveACRatingRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }
        const headerParameters = {};
        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }
        const response = await this.request({
            path: `/ranking/tier`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 문제풀이 레이팅이 높은 사용자가 먼저 오도록 정렬한 사용자 목록을 가져옵니다.
     * 문제풀이 레이팅 순 사용자 랭킹 가져오기
     */
    async getRankingBySolveACRating(requestParameters = {}, initOverrides) {
        const response = await this.getRankingBySolveACRatingRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * 역라이벌인 사용자 중에서 문제풀이 레이팅이 높은 사용자가 먼저 오도록 정렬한 목록을 가져옵니다.
     * 문제풀이 레이팅 순 역라이벌 랭킹 가져오기
     */
    async getReverseRivalRankingByACRatingRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }
        const headerParameters = {};
        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }
        const response = await this.request({
            path: `/ranking/reverse_rival`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 역라이벌인 사용자 중에서 문제풀이 레이팅이 높은 사용자가 먼저 오도록 정렬한 목록을 가져옵니다.
     * 문제풀이 레이팅 순 역라이벌 랭킹 가져오기
     */
    async getReverseRivalRankingByACRating(requestParameters = {}, initOverrides) {
        const response = await this.getReverseRivalRankingByACRatingRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * 라이벌인 사용자 중에서 문제풀이 레이팅이 높은 사용자가 먼저 오도록 정렬한 목록을 가져옵니다.
     * 문제풀이 레이팅 순 라이벌 랭킹 가져오기
     */
    async getRivalRankingByACRatingRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }
        const headerParameters = {};
        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }
        const response = await this.request({
            path: `/ranking/rival`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    /**
     * 라이벌인 사용자 중에서 문제풀이 레이팅이 높은 사용자가 먼저 오도록 정렬한 목록을 가져옵니다.
     * 문제풀이 레이팅 순 라이벌 랭킹 가져오기
     */
    async getRivalRankingByACRating(requestParameters = {}, initOverrides) {
        const response = await this.getRivalRankingByACRatingRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.RankingApi = RankingApi;
