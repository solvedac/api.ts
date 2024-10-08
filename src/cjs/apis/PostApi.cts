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


import * as runtime from '../runtime.cjs';
import type {
  Language,
  Post,
} from '../models/index.cjs';

export interface GetPostByIdRequest {
    postId: string;
    xSolvedacLanguage?: Language;
}

/**
 * 
 */
export class PostApi extends runtime.BaseAPI {

    /**
     * 해당 제목의 게시글을 가져옵니다.
     * 게시글 제목으로 게시글 가져오기
     */
    async getPostByIdRaw(requestParameters: GetPostByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Post>> {
        if (requestParameters['postId'] == null) {
            throw new runtime.RequiredError(
                'postId',
                'Required parameter "postId" was null or undefined when calling getPostById().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['postId'] != null) {
            queryParameters['postId'] = requestParameters['postId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSolvedacLanguage'] != null) {
            headerParameters['x-solvedac-language'] = String(requestParameters['xSolvedacLanguage']);
        }

        const response = await this.request({
            path: `/post/show`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 해당 제목의 게시글을 가져옵니다.
     * 게시글 제목으로 게시글 가져오기
     */
    async getPostById(requestParameters: GetPostByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Post> {
        const response = await this.getPostByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
