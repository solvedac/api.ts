/* tslint:disable */
/* eslint-disable */
/**
 * @solvedac/unofficial-documentation
 * 이 프로젝트는 [solved.ac](https://solved.ac/) API를 문서화하는 커뮤니티 프로젝트입니다. 이 저장소는 원작자의 요청에 따라 언제든 지워질 수 있으며, 현재 API와 일치하지 않을 수도 있는 점 양해 부탁드립니다.  <sup>   solved.ac 서비스는 shiftpsh가 기획·개발·디자인·운영하는 프로젝트로,   이 저장소와는 solved.ac의 API를 문서화해둔 것 이외에는 아무런 관련이 없습니다. </sup>  [GitHub에서 보기](https://github.com/solvedac/unofficial-documentation)  ![@solvedac/unofficial-documentation banner](./assets/solvedac-ud-compact.png) 
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
    CoinshopProduct,
    InlineResponse2001,
} from '../models/index.js';

/**
 * 
 */
export class CoinsApi extends runtime.BaseAPI {

    /**
     * 코인샵에서 팔고 있는 상품 목록을 가져옵니다. 
     * 코인샵 판매 목록 가져오기
     */
    async getCoinShopProductsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<CoinshopProduct>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/coins/shop/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 코인샵에서 팔고 있는 상품 목록을 가져옵니다. 
     * 코인샵 판매 목록 가져오기
     */
    async getCoinShopProducts(initOverrides?: RequestInit): Promise<Array<CoinshopProduct>> {
        const response = await this.getCoinShopProductsRaw(initOverrides);
        return await response.value();
    }

    /**
     * 현재 코인 → 별조각 환율을 가져옵니다. 
     * 코인 → 별조각 환율 가져오기
     */
    async getCoinsExchangeRateRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2001>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/coins/exchange_rate`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 현재 코인 → 별조각 환율을 가져옵니다. 
     * 코인 → 별조각 환율 가져오기
     */
    async getCoinsExchangeRate(initOverrides?: RequestInit): Promise<InlineResponse2001> {
        const response = await this.getCoinsExchangeRateRaw(initOverrides);
        return await response.value();
    }

}
