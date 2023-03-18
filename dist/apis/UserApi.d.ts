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
import { FullUser, InlineResponse20015, Organization } from '../models/index.js';
export interface GetUserRequest {
    handle: string;
}
export interface GetUserOrganizationsRequest {
    handle: string;
}
export interface GetUserProblemStatsRequest {
    handle: string;
}
/**
 *
 */
export declare class UserApi extends runtime.BaseAPI {
    /**
     * 사용자의 정보를 가져옵니다. 만약 로그인한 경우, 라이벌 여부도 가져옵니다.
     * 사용자 정보 가져오기
     */
    getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FullUser>>;
    /**
     * 사용자의 정보를 가져옵니다. 만약 로그인한 경우, 라이벌 여부도 가져옵니다.
     * 사용자 정보 가져오기
     */
    getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit): Promise<FullUser>;
    /**
     * 사용자가 속한 조직 목록를 가져옵니다.
     * 사용자가 속한 조직 목록 가져오기
     */
    getUserOrganizationsRaw(requestParameters: GetUserOrganizationsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Organization>>>;
    /**
     * 사용자가 속한 조직 목록를 가져옵니다.
     * 사용자가 속한 조직 목록 가져오기
     */
    getUserOrganizations(requestParameters: GetUserOrganizationsRequest, initOverrides?: RequestInit): Promise<Array<Organization>>;
    /**
     * 사용자가 푼 문제 개수를 문제 수준별로 가져옵니다.
     * 사용자가 푼 문제 개수 수준별로 가져오기
     */
    getUserProblemStatsRaw(requestParameters: GetUserProblemStatsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<InlineResponse20015>>>;
    /**
     * 사용자가 푼 문제 개수를 문제 수준별로 가져옵니다.
     * 사용자가 푼 문제 개수 수준별로 가져오기
     */
    getUserProblemStats(requestParameters: GetUserProblemStatsRequest, initOverrides?: RequestInit): Promise<Array<InlineResponse20015>>;
}
