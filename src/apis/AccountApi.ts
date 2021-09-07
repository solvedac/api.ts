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
import {
    InlineObject,
    InlineResponse200,
} from '../models';

export interface UpdateAccountSettingsRequest {
    inlineObject: InlineObject;
}

/**
 * 
 */
export class AccountApi extends runtime.BaseAPI {

    /**
     * 계정의 설정을 변경합니다.
     * 계정 설정 변경하기
     */
    async updateAccountSettingsRaw(requestParameters: UpdateAccountSettingsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.inlineObject === null || requestParameters.inlineObject === undefined) {
            throw new runtime.RequiredError('inlineObject','Required parameter requestParameters.inlineObject was null or undefined when calling updateAccountSettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/account/update_settings`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.inlineObject,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 계정의 설정을 변경합니다.
     * 계정 설정 변경하기
     */
    async updateAccountSettings(requestParameters: UpdateAccountSettingsRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updateAccountSettingsRaw(requestParameters, initOverrides);
    }

    /**
     * 현재 로그인한 계정 정보를 가져옵니다.
     * 로그인 정보 가져오기
     */
    async verifyAccountCredentialsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/verify_credentials`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 현재 로그인한 계정 정보를 가져옵니다.
     * 로그인 정보 가져오기
     */
    async verifyAccountCredentials(initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.verifyAccountCredentialsRaw(initOverrides);
        return await response.value();
    }

}