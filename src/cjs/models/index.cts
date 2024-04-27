/* tslint:disable */
/* eslint-disable */

/**
 * <solved-icon type="arena-tier:0"></solved-icon> <span class="arena-tier unrated">Unrated</span>를 0,
 * <solved-icon type="arena-tier:1"></solved-icon> <span class="arena-tier c">C</span>를 1,
 * ...,
 * <solved-icon type="arena-tier:12"></solved-icon> <span class="arena-tier sss+">SSS+</span>을 12,
 * <solved-icon type="arena-tier:13"></solved-icon> <span class="arena-tier x">X</span>를 13으로 표현하는 아레나 티어입니다.
 * 자세한 값 정보는 표1. 아레나 레이팅 표를 펼쳐 참고하십시오.
 * 
 * <details>
 * <summary>
 * 표1. 아레나 레이팅 표
 * </summary>
 * 
 * | 수치 | 이름                                                                                            |                                    요구 레이팅 |
 * | ---: | :---------------------------------------------------------------------------------------------- | ---------------------------------------------: |
 * |    0 | <solved-icon type="arena-tier:0"></solved-icon> <span class="arena-tier unrated">Unrated</span> | <span class="bold arena-tier unrated">-</span> |
 * |    1 |             <solved-icon type="arena-tier:1"></solved-icon> <span class="arena-tier c">C</span> |       <span class="bold arena-tier c">1</span> |
 * |    2 |           <solved-icon type="arena-tier:2"></solved-icon> <span class="arena-tier c+">C+</span> |    <span class="bold arena-tier c+">400</span> |
 * |    3 |             <solved-icon type="arena-tier:3"></solved-icon> <span class="arena-tier b">B</span> |     <span class="bold arena-tier b">800</span> |
 * |    4 |           <solved-icon type="arena-tier:4"></solved-icon> <span class="arena-tier b+">B+</span> |   <span class="bold arena-tier b+">1000</span> |
 * |    5 |             <solved-icon type="arena-tier:5"></solved-icon> <span class="arena-tier a">A</span> |    <span class="bold arena-tier a">1200</span> |
 * |    6 |           <solved-icon type="arena-tier:6"></solved-icon> <span class="arena-tier a+">A+</span> |   <span class="bold arena-tier a+">1400</span> |
 * |    7 |             <solved-icon type="arena-tier:7"></solved-icon> <span class="arena-tier s">S</span> |    <span class="bold arena-tier s">1600</span> |
 * |    8 |           <solved-icon type="arena-tier:8"></solved-icon> <span class="arena-tier s+">S+</span> |   <span class="bold arena-tier s+">1800</span> |
 * |    9 |           <solved-icon type="arena-tier:9"></solved-icon> <span class="arena-tier ss">SS</span> |   <span class="bold arena-tier ss">2000</span> |
 * |   10 |        <solved-icon type="arena-tier:10"></solved-icon> <span class="arena-tier ss+">SS+</span> |  <span class="bold arena-tier ss+">2200</span> |
 * |   11 |        <solved-icon type="arena-tier:11"></solved-icon> <span class="arena-tier sss">SSS</span> |  <span class="bold arena-tier sss">2400</span> |
 * |   12 |      <solved-icon type="arena-tier:12"></solved-icon> <span class="arena-tier sss+">SSS+</span> | <span class="bold arena-tier sss+">2600</span> |
 * |   13 |            <solved-icon type="arena-tier:13"></solved-icon> <span class="arena-tier x">X</span> |    <span class="bold arena-tier x">3000</span> |
 * 
 * </details>
 * @export
 */
export const ArenaTier = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10,
    NUMBER_11: 11,
    NUMBER_12: 12,
    NUMBER_13: 13
} as const;
export type ArenaTier = typeof ArenaTier[keyof typeof ArenaTier];

/**
 * 사용자가 획득할 수 있는 배경입니다.
 * @export
 * @interface Background
 */
export interface Background {
    /**
     * 배경의 고유 ID입니다.
     * @type {string}
     * @memberof Background
     */
    backgroundId: string;
    /**
     * 배경 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof Background
     */
    backgroundImageUrl: string;
    /**
     * 일러스트 배경 보기가 꺼져있을 때 보여줄 수 있는 대안 배경 사진으로 가는 하이퍼링크입니다.
     * 일러스트를 포함하지 않은 배경이거나, 배경 제작자가 따로 준비하지 않은 경우 `null` 값일 수 있습니다.
     * @type {string}
     * @memberof Background
     */
    fallbackBackgroundImageUrl?: string;
    /**
     * 움직이는 배경이 켜져있을 때 보여줄 수 있는 배경 영상으로 가는 하이퍼링크입니다.
     * 배경 제작자가 따로 준비하지 않은 경우 `null` 값일 수 있습니다.
     * @type {string}
     * @memberof Background
     */
    backgroundVideoUrl?: string;
    /**
     * 배경을 획득한 사용자 수입니다.
     * @type {number}
     * @memberof Background
     */
    unlockedUserCount: number;
    /**
     * 배경의 표시 이름입니다.
     * @type {string}
     * @memberof Background
     */
    displayName: string;
    /**
     * 배경의 설명입니다.
     * @type {string}
     * @memberof Background
     */
    displayDescription: string;
    /**
     * 배경을 얻는 조건입니다.
     * 조건이 숨겨진 경우, 해당 값이 내려오지 않습니다.
     * @type {string}
     * @memberof Background
     */
    conditions?: string;
    /**
     * 배경 획득 조건이 숨겨져 있는지 여부입니다.
     * @type {boolean}
     * @memberof Background
     */
    hiddenConditions: boolean;
    /**
     * 일러스트 배경인지 여부입니다.
     * @type {boolean}
     * @memberof Background
     */
    isIllust: boolean;
    /**
     * 배경 획득 유형 분류입니다.
     * @type {BackgroundCategory}
     * @memberof Background
     */
    backgroundCategory: BackgroundCategory;
    /**
     * solved.ac 회사가 권리를 보유하는지 여부입니다.
     * @type {boolean}
     * @memberof Background
     */
    solvedCompanyRights: boolean;
    /**
     * 배경을 작업한 작가 목록입니다. 빈 배열일 수 있습니다.
     * @type {Array<BackgroundAuthor>}
     * @memberof Background
     */
    authors: Array<BackgroundAuthor>;
}
/**
 * 배경을 작업한 작가입니다.
 * @export
 * @interface BackgroundAuthor
 */
export interface BackgroundAuthor {
    /**
     * 작가 고유 ID입니다.
     * @type {string}
     * @memberof BackgroundAuthor
     */
    authorId: string;
    /**
     * 수행한 역할입니다.
     * @type {string}
     * @memberof BackgroundAuthor
     */
    role: string;
    /**
     * 작가 홈페이지로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof BackgroundAuthor
     */
    authorUrl?: string;
    /**
     * 작가의 solved.ac 핸들입니다.
     * @type {string}
     * @memberof BackgroundAuthor
     */
    handle?: string;
    /**
     * 작가의 Twitter ID입니다.
     * @type {string}
     * @memberof BackgroundAuthor
     */
    twitter?: string;
    /**
     * 작가의 인스타그램 ID입니다.
     * @type {string}
     * @memberof BackgroundAuthor
     */
    instagram?: string;
    /**
     * 작가의 표시 이름입니다.
     * @type {string}
     * @memberof BackgroundAuthor
     */
    displayName: string;
}

/**
 * 배경 획득 유형 분류입니다.
 * @export
 */
export const BackgroundCategory = {
    Event: 'event',
    Arena: 'arena',
    Achievement: 'achievement',
    Season: 'season',
    Contest: 'contest'
} as const;
export type BackgroundCategory = typeof BackgroundCategory[keyof typeof BackgroundCategory];

/**
 * 사용자가 획득할 수 있는 뱃지입니다.
 * @export
 * @interface Badge
 */
export interface Badge {
    /**
     * 뱃지의 고유 ID입니다.
     * @type {string}
     * @memberof Badge
     */
    badgeId: string;
    /**
     * 뱃지 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof Badge
     */
    badgeImageUrl: string;
    /**
     * 뱃지가 표시되는 이름입니다.
     * @type {string}
     * @memberof Badge
     */
    displayName: string;
    /**
     * 뱃지의 설명입니다.
     * @type {string}
     * @memberof Badge
     */
    displayDescription: string;
    /**
     * 뱃지를 획득한 사용자 수입니다.
     * @type {number}
     * @memberof Badge
     */
    unlockedUserCount: number;
    /**
     * 
     * @type {BadgeTier}
     * @memberof Badge
     */
    badgeTier: BadgeTier;
    /**
     * 
     * @type {BadgeCategory}
     * @memberof Badge
     */
    badgeCategory: BadgeCategory;
    /**
     * solved.ac 회사가 권리를 보유하는지 여부입니다.
     * @type {boolean}
     * @memberof Badge
     */
    solvedCompanyRights: boolean;
    /**
     * 뱃지가 만들어진 시각입니다.
     * @type {string}
     * @memberof Badge
     */
    createdAt: string;
}

/**
 * 뱃지 획득 유형 분류입니다.
 * @export
 */
export const BadgeCategory = {
    Achievement: 'achievement',
    Season: 'season',
    Event: 'event',
    Contest: 'contest'
} as const;
export type BadgeCategory = typeof BadgeCategory[keyof typeof BadgeCategory];


/**
 * 뱃지의 등급입니다.
 * @export
 */
export const BadgeTier = {
    Bronze: 'bronze',
    Silver: 'silver',
    Gold: 'gold',
    Master: 'master'
} as const;
export type BadgeTier = typeof BadgeTier[keyof typeof BadgeTier];

/**
 * 코인샵에서 판매하고 있는 상품입니다.
 * @export
 * @interface CoinShopProduct
 */
export interface CoinShopProduct {
    /**
     * 재고(Stock Keeping Unit) ID입니다.
     * @type {number}
     * @memberof CoinShopProduct
     */
    skuId: number;
    /**
     * 
     * @type {Item}
     * @memberof CoinShopProduct
     */
    item: Item;
    /**
     * 1회 구매 시 획득하는 아이템 개수입니다.
     * @type {number}
     * @memberof CoinShopProduct
     */
    units: number;
    /**
     * 가격입니다.
     * 코인의 경우 나누기 100을 해야 표시 가격이 됩니다.
     * @type {number}
     * @memberof CoinShopProduct
     */
    price: number;
    /**
     * 가격 단위입니다.
     * @type {string}
     * @memberof CoinShopProduct
     */
    priceUnit: CoinShopProductPriceUnitEnum;
    /**
     * 아이템 사용 시간 제한 여부입니다.
     * @type {boolean}
     * @memberof CoinShopProduct
     */
    itemUseTimeLimited: boolean;
    /**
     * 아이템 구매 기간 제한 여부입니다.
     * @type {boolean}
     * @memberof CoinShopProduct
     */
    itemSellTimeLimited: boolean;
}


/**
 * @export
 */
export const CoinShopProductPriceUnitEnum = {
    Coins: 'coins',
    Stardusts: 'stardusts'
} as const;
export type CoinShopProductPriceUnitEnum = typeof CoinShopProductPriceUnitEnum[keyof typeof CoinShopProductPriceUnitEnum];

/**
 * 난이도 투표 등에 사용할 수 있는 이모티콘입니다.
 * @export
 * @interface Emoticon
 */
export interface Emoticon {
    /**
     * 고유 식별자입니다.
     * @type {string}
     * @memberof Emoticon
     */
    emoticonId: string;
    /**
     * 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof Emoticon
     */
    emoticonUrl: string;
    /**
     * 한국어 이름입니다.
     * @type {string}
     * @memberof Emoticon
     */
    displayName: string;
}
/**
 * 
 * @export
 * @interface GetClassesProblemCountClassEntry
 */
export interface GetClassesProblemCountClassEntry {
    /**
     * 클래스 숫자입니다.
     * @type {number}
     * @memberof GetClassesProblemCountClassEntry
     */
    _class: GetClassesProblemCountClassEntryClassEnum;
    /**
     * 총 문제 수입니다.
     * @type {number}
     * @memberof GetClassesProblemCountClassEntry
     */
    total: number;
    /**
     * 에센셜 문제 수입니다.
     * @type {number}
     * @memberof GetClassesProblemCountClassEntry
     */
    essentials: number;
    /**
     * 취득에 필요한 문제 수입니다.
     * @type {number}
     * @memberof GetClassesProblemCountClassEntry
     */
    criteria: number;
}


/**
 * @export
 */
export const GetClassesProblemCountClassEntryClassEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10
} as const;
export type GetClassesProblemCountClassEntryClassEnum = typeof GetClassesProblemCountClassEntryClassEnum[keyof typeof GetClassesProblemCountClassEntryClassEnum];

/**
 * 
 * @export
 * @interface GetCoinStardustExchangeRateExchangeRate
 */
export interface GetCoinStardustExchangeRateExchangeRate {
    /**
     * 1 코인을 별조각으로 바꾸는 환율입니다.
     * 별조각을 코인으로 환전할 때에는 수수료가 1%(소수점은 내림) 붙습니다.
     * @type {number}
     * @memberof GetCoinStardustExchangeRateExchangeRate
     */
    rate: number;
}
/**
 * 페이지네이션 가능한 쿼리의 응답 결과입니다.
 * @export
 * @interface GetOrganizationRankingByACRating200Response
 */
export interface GetOrganizationRankingByACRating200Response {
    /**
     * 전체 원소 수입니다.
     * @type {number}
     * @memberof GetOrganizationRankingByACRating200Response
     */
    count: number;
    /**
     * 현재 페이지의 원소 목록입니다.
     * @type {Array<GetOrganizationRankingByACRating200ResponseItemsInner>}
     * @memberof GetOrganizationRankingByACRating200Response
     */
    items: Array<GetOrganizationRankingByACRating200ResponseItemsInner>;
}
/**
 * 페이지네이션 가능한 쿼리의 응답 결과입니다.
 * @export
 * @interface GetOrganizationRankingByACRating200ResponseItemsInner
 */
export interface GetOrganizationRankingByACRating200ResponseItemsInner {
    /**
     * ID입니다.
     * @type {number}
     * @memberof GetOrganizationRankingByACRating200ResponseItemsInner
     */
    organizationId: number;
    /**
     * 이름입니다.
     * @type {string}
     * @memberof GetOrganizationRankingByACRating200ResponseItemsInner
     */
    name: string;
    /**
     * 유형입니다.
     * @type {OrganizationType}
     * @memberof GetOrganizationRankingByACRating200ResponseItemsInner
     */
    type: OrganizationType;
    /**
     * 문제풀이 레이팅입니다.
     * @type {number}
     * @memberof GetOrganizationRankingByACRating200ResponseItemsInner
     */
    rating: number;
    /**
     * 속한 사용자 수입니다.
     * @type {number}
     * @memberof GetOrganizationRankingByACRating200ResponseItemsInner
     */
    userCount: number;
    /**
     * 난이도 기여 수입니다.
     * @type {number}
     * @memberof GetOrganizationRankingByACRating200ResponseItemsInner
     */
    voteCount: number;
    /**
     * 푼 문제 수입니다.
     * @type {number}
     * @memberof GetOrganizationRankingByACRating200ResponseItemsInner
     */
    solvedCount: number;
    /**
     * 상징 색입니다.
     * @type {string}
     * @memberof GetOrganizationRankingByACRating200ResponseItemsInner
     */
    color: string;
    /**
     * 순위입니다.
     * @type {number}
     * @memberof GetOrganizationRankingByACRating200ResponseItemsInner
     */
    rank: number;
}
/**
 * 페이지네이션 가능한 쿼리의 응답 결과입니다.
 * @export
 * @interface GetProblemsByIdList200Response
 */
export interface GetProblemsByIdList200Response {
    /**
     * 전체 원소 수입니다.
     * @type {number}
     * @memberof GetProblemsByIdList200Response
     */
    count: number;
    /**
     * 현재 페이지의 원소 목록입니다.
     * @type {Array<Problem>}
     * @memberof GetProblemsByIdList200Response
     */
    items: Array<Problem>;
}
/**
 * 
 * @export
 * @interface GetProblemsCountGroupByLevelLevelEntry
 */
export interface GetProblemsCountGroupByLevelLevelEntry {
    /**
     * 
     * @type {ProblemLevel}
     * @memberof GetProblemsCountGroupByLevelLevelEntry
     */
    level: ProblemLevel;
    /**
     * 문제 수입니다.
     * @type {number}
     * @memberof GetProblemsCountGroupByLevelLevelEntry
     */
    count: number;
}
/**
 * 페이지네이션 가능한 쿼리의 응답 결과입니다.
 * @export
 * @interface GetRankingByClass200Response
 */
export interface GetRankingByClass200Response {
    /**
     * 전체 원소 수입니다.
     * @type {number}
     * @memberof GetRankingByClass200Response
     */
    count: number;
    /**
     * 현재 페이지의 원소 목록입니다.
     * @type {Array<RivalUser>}
     * @memberof GetRankingByClass200Response
     */
    items: Array<RivalUser>;
}
/**
 * 고급 검색 관련 자동 완성입니다.
 * @export
 * @interface GetSearchAutoCompletionsAutoCompleteEntry
 */
export interface GetSearchAutoCompletionsAutoCompleteEntry {
    /**
     * 자동 완성 제목입니다.
     * 만약 href이 없을 경우 누르면 해당 값으로 자동 완성합니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsAutoCompleteEntry
     */
    caption: string;
    /**
     * 자동 완성 요소의 설명입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsAutoCompleteEntry
     */
    description: string;
}
/**
 * 요악한 문제 정보입니다.
 * @export
 * @interface GetSearchAutoCompletionsBriefProblemEntry
 */
export interface GetSearchAutoCompletionsBriefProblemEntry {
    /**
     * 문제 ID입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsBriefProblemEntry
     */
    id: number;
    /**
     * 문제 제목입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsBriefProblemEntry
     */
    title: string;
    /**
     * 
     * @type {ProblemLevel}
     * @memberof GetSearchAutoCompletionsBriefProblemEntry
     */
    level: ProblemLevel;
    /**
     * 푼 사람 수입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsBriefProblemEntry
     */
    solved: number;
    /**
     * 자동 완성 제목입니다.
     * 만약 href이 없을 경우 누르면 해당 값으로 자동 완성합니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsBriefProblemEntry
     */
    caption: string;
    /**
     * 자동 완성 요소의 설명입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsBriefProblemEntry
     */
    description: string;
}
/**
 * 요약한 태그 정보입니다.
 * @export
 * @interface GetSearchAutoCompletionsBriefProblemTagEntry
 */
export interface GetSearchAutoCompletionsBriefProblemTagEntry {
    /**
     * solved.ac에서 쓰는 태그 ID입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsBriefProblemTagEntry
     */
    key: string;
    /**
     * 태그 이름입니다.
     * 사용자 언어에 따라 번역되지 않습니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsBriefProblemTagEntry
     */
    name: string;
    /**
     * 태그가 붙은 문제 수입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsBriefProblemTagEntry
     */
    problemCount: number;
    /**
     * 자동 완성 제목입니다.
     * 만약 href이 없을 경우 누르면 해당 값으로 자동 완성합니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsBriefProblemTagEntry
     */
    caption: string;
    /**
     * 자동 완성 요소의 설명입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsBriefProblemTagEntry
     */
    description: string;
}
/**
 * 
 * @export
 * @interface GetSearchAutoCompletionsSuggestion
 */
export interface GetSearchAutoCompletionsSuggestion {
    /**
     * 
     * @type {Array<GetSearchAutoCompletionsAutoCompleteEntry>}
     * @memberof GetSearchAutoCompletionsSuggestion
     */
    autocomplete: Array<GetSearchAutoCompletionsAutoCompleteEntry>;
    /**
     * 
     * @type {Array<GetSearchAutoCompletionsBriefProblemEntry>}
     * @memberof GetSearchAutoCompletionsSuggestion
     */
    problems: Array<GetSearchAutoCompletionsBriefProblemEntry>;
    /**
     * 검색 결과로 나올 총 문제 수입니다
     * @type {number}
     * @memberof GetSearchAutoCompletionsSuggestion
     */
    problemCount: number;
    /**
     * 
     * @type {Array<GetSearchAutoCompletionsBriefProblemTagEntry>}
     * @memberof GetSearchAutoCompletionsSuggestion
     */
    tags: Array<GetSearchAutoCompletionsBriefProblemTagEntry>;
    /**
     * 검색 결과로 나올 총 태그 수입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsSuggestion
     */
    tagCount: number;
    /**
     * 
     * @type {Array<GetSearchAutoCompletionsUserEntry>}
     * @memberof GetSearchAutoCompletionsSuggestion
     */
    users: Array<GetSearchAutoCompletionsUserEntry>;
    /**
     * 검색 결과로 나올 총 사용자 수입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsSuggestion
     */
    userCount: number;
}
/**
 * 사용자 정보입니다.
 * @export
 * @interface GetSearchAutoCompletionsUserEntry
 */
export interface GetSearchAutoCompletionsUserEntry {
    /**
     * 사용자명입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    handle: string;
    /**
     * 자기소개입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    bio: string;
    /**
     * 장착 중인 뱃지 ID입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    badgeId?: string;
    /**
     * 장착 중인 배경 ID입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    backgroundId: string;
    /**
     * 프로필 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    profileImageUrl?: string;
    /**
     * 푼 문제 수입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    solvedCount: number;
    /**
     * 난이도 기여 수입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    voteCount: number;
    /**
     * 취득한 CLASS입니다.
     * 취득한 CLASS가 없다면 0으로 표현합니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    _class: GetSearchAutoCompletionsUserEntryClassEnum;
    /**
     * CLASS 완성도에 따른 장식입니다.
     * <solved-icon type="class:1"></solved-icon> 장식 없음 (`"none"`),
     * <solved-icon type="class:1s"></solved-icon> 은장<sup>+</sup> (`"silver"`),
     * <solved-icon type="class:1g"></solved-icon> 금장<sup>++</sup> (`"gold"`)이 있습니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    classDecoration: GetSearchAutoCompletionsUserEntryClassDecorationEnum;
    /**
     * 라이벌 수입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    rivalCount: number;
    /**
     * 역라이벌 수입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    reverseRivalCount: number;
    /**
     * 
     * @type {SolveTier}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    tier: SolveTier;
    /**
     * 문제풀이 레이팅입니다
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    rating: number;
    /**
     * 상위 100 문제 난이도 합으로 얻은 레이팅입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    ratingByProblemsSum: number;
    /**
     * 취득한 CLASS에 따라 얻은 레이팅입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    ratingByClass: number;
    /**
     * 푼 문제 수로 얻은 레이팅입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    ratingBySolvedCount: number;
    /**
     * 문제 난이도에 기여한 횟수로 받은 레이팅입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    ratingByVoteCount: number;
    /**
     * 현재 아레나 티어입니다.
     * @type {ArenaTier}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    arenaTier: ArenaTier;
    /**
     * 현재 아레나 레이팅입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    arenaRating: number;
    /**
     * 역대 받은 아레나 티어 중 최고점일 때의 아레나 티어입니다.
     * @type {ArenaTier}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    arenaMaxTier: ArenaTier;
    /**
     * 역대 받은 아레나 레이팅 중 최고점일 때의 아레나 레이팅입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    arenaMaxRating: number;
    /**
     * 참여한 아레나 라운드 수입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    arenaCompetedRoundCount: number;
    /**
     * 유지한 최대 스트릭의 길이입니다. (일 단위)
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    maxStreak: number;
    /**
     * 보유 중인 코인에 100을 곱한 값입니다.
     * 만약, 실제로 보유한 코인이 0.15라면 15로 기록됩니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    coins: number;
    /**
     * 보유 중인 별가루 양입니다.
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    stardusts: number;
    /**
     * 가입 시각입니다.
     * 일부 계정에 대해 2021년 6월 19일 0시 (UTC)로 백필된 흔적이 있습니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    joinedAt: string;
    /**
     * 정지 종료 시각입니다.
     * 정지 이력이 없을 경우 Unix Timestamp 0 값을 포매팅한 문자열입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    bannedUntil: string;
    /**
     * [솔브드 서포터](https://solved.ac/support) 종료 시각입니다.
     * 활성화 이력이 없을 경우 Unix Timestamp 0 값을 포매팅한 문자열입니다.
     * @type {string}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    proUntil: string;
    /**
     * 순위입니다.
     * 이 값은 요청하는 엔드포인트의 정렬 기준에 따라 다를 수 있습니다.
     * 예) /ranking/* 엔드포인트에서는 해당 랭킹의 순위, /show 엔드포인트에서는 문제풀이 레이팅 순위
     * @type {number}
     * @memberof GetSearchAutoCompletionsUserEntry
     */
    rank: number;
}


/**
 * @export
 */
export const GetSearchAutoCompletionsUserEntryClassEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10
} as const;
export type GetSearchAutoCompletionsUserEntryClassEnum = typeof GetSearchAutoCompletionsUserEntryClassEnum[keyof typeof GetSearchAutoCompletionsUserEntryClassEnum];

/**
 * @export
 */
export const GetSearchAutoCompletionsUserEntryClassDecorationEnum = {
    None: 'none',
    Silver: 'silver',
    Gold: 'gold'
} as const;
export type GetSearchAutoCompletionsUserEntryClassDecorationEnum = typeof GetSearchAutoCompletionsUserEntryClassDecorationEnum[keyof typeof GetSearchAutoCompletionsUserEntryClassDecorationEnum];

/**
 * 
 * @export
 * @interface GetUserProblemStatsProblemStat
 */
export interface GetUserProblemStatsProblemStat {
    /**
     * 
     * @type {ProblemLevel}
     * @memberof GetUserProblemStatsProblemStat
     */
    level: ProblemLevel;
    /**
     * solved.ac에 등록된 해당 수준 문제 수입니다.
     * @type {number}
     * @memberof GetUserProblemStatsProblemStat
     */
    total: number;
    /**
     * 사용자가 푼 문제 수입니다.
     * @type {number}
     * @memberof GetUserProblemStatsProblemStat
     */
    solved: number;
    /**
     * 사용자가 부분 성공한 문제 수입니다.
     * @type {number}
     * @memberof GetUserProblemStatsProblemStat
     */
    partial: number;
    /**
     * 사용자가 시도해 본 문제 수입니다.
     * @type {number}
     * @memberof GetUserProblemStatsProblemStat
     */
    tried: number;
}
/**
 * 사용자가 사용할 수 있는 아이템입니다.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * ID입니다.
     * @type {string}
     * @memberof Item
     */
    itemId: string;
    /**
     * 아이템 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof Item
     */
    itemImageUrl: string;
    /**
     * 최대 소유 가능 개수입니다.
     * 사람에 따라 다를 수 있습니다.
     * @type {number}
     * @memberof Item
     */
    inventoryMaxUnits: number;
    /**
     * 사용 가능 여부입니다.
     * @type {boolean}
     * @memberof Item
     */
    usable: boolean;
    /**
     * 국제화된 이름입니다.
     * @type {string}
     * @memberof Item
     */
    displayName: string;
    /**
     * 국제화된 설명입니다.
     * @type {string}
     * @memberof Item
     */
    displayDescription: string;
}

/**
 * solved.ac에서 지원하는 사용자 언어입니다
 * @export
 */
export const Language = {
    Ko: 'ko',
    En: 'en',
    Ja: 'ja'
} as const;
export type Language = typeof Language[keyof typeof Language];

/**
 * solved.ac에 등록한 단체입니다.
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * ID입니다.
     * @type {number}
     * @memberof Organization
     */
    organizationId: number;
    /**
     * 이름입니다.
     * @type {string}
     * @memberof Organization
     */
    name: string;
    /**
     * 유형입니다.
     * @type {OrganizationType}
     * @memberof Organization
     */
    type: OrganizationType;
    /**
     * 문제풀이 레이팅입니다.
     * @type {number}
     * @memberof Organization
     */
    rating: number;
    /**
     * 속한 사용자 수입니다.
     * @type {number}
     * @memberof Organization
     */
    userCount: number;
    /**
     * 난이도 기여 수입니다.
     * @type {number}
     * @memberof Organization
     */
    voteCount: number;
    /**
     * 푼 문제 수입니다.
     * @type {number}
     * @memberof Organization
     */
    solvedCount: number;
    /**
     * 상징 색입니다.
     * @type {string}
     * @memberof Organization
     */
    color: string;
}

/**
 * 단체 유형입니다.
 * @export
 */
export const OrganizationType = {
    University: 'university',
    Company: 'company',
    Community: 'community',
    HighSchool: 'high_school',
    MiddleSchool: 'middle_school',
    ElementarySchool: 'elementary_school',
    Undefined: 'undefined'
} as const;
export type OrganizationType = typeof OrganizationType[keyof typeof OrganizationType];

/**
 * 문제 정보입니다.
 * @export
 * @interface Problem
 */
export interface Problem {
    /**
     * 백준 문제 번호로, 문제마다 고유합니다.
     * @type {number}
     * @memberof Problem
     */
    problemId: number;
    /**
     * 한국어 문제 제목입니다.
     * HTML 엔티티나 LaTeX 수식을 포함할 수 있습니다.
     * @type {string}
     * @memberof Problem
     */
    titleKo: string;
    /**
     * 언어별 문제 제목 목록입니다.
     * @type {Array<ProblemTitleTranslated>}
     * @memberof Problem
     */
    titles: Array<ProblemTitleTranslated>;
    /**
     * 채점 가능 여부입니다.
     * @type {boolean}
     * @memberof Problem
     */
    isSolvable: boolean;
    /**
     * 부분 점수/서브태스크 문제 여부입니다.
     * @type {boolean}
     * @memberof Problem
     */
    isPartial: boolean;
    /**
     * 맞은 사람 수입니다.
     * @type {number}
     * @memberof Problem
     */
    acceptedUserCount: number;
    /**
     * 
     * @type {ProblemLevel}
     * @memberof Problem
     */
    level: ProblemLevel;
    /**
     * 난이도 기여자 수입니다.
     * @type {number}
     * @memberof Problem
     */
    votedUserCount: number;
    /**
     * 새싹 문제 여부입니다.
     * @type {boolean}
     * @memberof Problem
     */
    sprout: boolean;
    /**
     * 레이팅을 주지 않는지 여부입니다.
     * @type {boolean}
     * @memberof Problem
     */
    givesNoRating: boolean;
    /**
     * 난이도 기여 제한 여부입니다.
     * @type {boolean}
     * @memberof Problem
     */
    isLevelLocked: boolean;
    /**
     * 평균 시도 횟수입니다.
     * @type {number}
     * @memberof Problem
     */
    averageTries: number;
    /**
     * 공식 문제 여부입니다.
     * 번외 문제 등은 비공식 문제로 분류됩니다.
     * @type {boolean}
     * @memberof Problem
     */
    official: boolean;
    /**
     * 태그 목록입니다.
     * @type {Array<ProblemTag>}
     * @memberof Problem
     */
    tags: Array<ProblemTag>;
    /**
     * 
     * @type {any}
     * @memberof Problem
     */
    metadata: any | null;
}

/**
 * <solved-icon type="solve-tier:0"></solved-icon> <span class="solve-tier zero">Unrated</span> / <solved-icon type="solve-tier:nr"></solved-icon> <span class="solve-tier zero">Not Ratable</span>를 0,
 * <solved-icon type="solve-tier:1"></solved-icon> <span class="solve-tier bronze5">Bronze V</span>를 1,
 * <solved-icon type="solve-tier:2"></solved-icon> <span class="solve-tier bronze4">Bronze IV</span>를 2,
 * ...,
 * <solved-icon type="solve-tier:29"></solved-icon> <span class="solve-tier ruby2">Ruby II</span>을 29,
 * <solved-icon type="solve-tier:30"></solved-icon> <span class="solve-tier ruby1">Ruby I</span>를 30으로 표현하는 문제 난이도입니다.
 * 자세한 값 정보는 표1. 문제 난이도 표를 펼쳐 참고하십시오.
 * 
 * <details>
 * <summary>
 * 표1. 문제 난이도 표
 * </summary>
 * 
 * | 수치 | 이름                                                                                                                                                                                             |
 * | ---: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * |    0 | <solved-icon type="solve-tier:0"></solved-icon> <span class="solve-tier zero">Unrated</span> / <solved-icon type="solve-tier:nr"></solved-icon> <span class="solve-tier zero">Not Ratable</span> |
 * |    1 |                                                                                                 <solved-icon type="solve-tier:1"></solved-icon> <span class="solve-tier bronze5">Bronze V</span> |
 * |    2 |                                                                                                <solved-icon type="solve-tier:2"></solved-icon> <span class="solve-tier bronze4">Bronze IV</span> |
 * |    3 |                                                                                               <solved-icon type="solve-tier:3"></solved-icon> <span class="solve-tier bronze3">Bronze III</span> |
 * |    4 |                                                                                                <solved-icon type="solve-tier:4"></solved-icon> <span class="solve-tier bronze2">Bronze II</span> |
 * |    5 |                                                                                                 <solved-icon type="solve-tier:5"></solved-icon> <span class="solve-tier bronze1">Bronze I</span> |
 * |    6 |                                                                                                 <solved-icon type="solve-tier:6"></solved-icon> <span class="solve-tier silver5">Silver V</span> |
 * |    7 |                                                                                                <solved-icon type="solve-tier:7"></solved-icon> <span class="solve-tier silver4">Silver IV</span> |
 * |    8 |                                                                                               <solved-icon type="solve-tier:8"></solved-icon> <span class="solve-tier silver3">Silver III</span> |
 * |    9 |                                                                                                <solved-icon type="solve-tier:9"></solved-icon> <span class="solve-tier silver2">Silver II</span> |
 * |   10 |                                                                                                <solved-icon type="solve-tier:10"></solved-icon> <span class="solve-tier silver1">Silver I</span> |
 * |   11 |                                                                                                    <solved-icon type="solve-tier:11"></solved-icon> <span class="solve-tier gold5">Gold V</span> |
 * |   12 |                                                                                                   <solved-icon type="solve-tier:12"></solved-icon> <span class="solve-tier gold4">Gold IV</span> |
 * |   13 |                                                                                                  <solved-icon type="solve-tier:13"></solved-icon> <span class="solve-tier gold3">Gold III</span> |
 * |   14 |                                                                                                   <solved-icon type="solve-tier:14"></solved-icon> <span class="solve-tier gold2">Gold II</span> |
 * |   15 |                                                                                                    <solved-icon type="solve-tier:15"></solved-icon> <span class="solve-tier gold1">Gold I</span> |
 * |   16 |                                                                                            <solved-icon type="solve-tier:16"></solved-icon> <span class="solve-tier platinum5">Platinum V</span> |
 * |   17 |                                                                                           <solved-icon type="solve-tier:17"></solved-icon> <span class="solve-tier platinum4">Platinum IV</span> |
 * |   18 |                                                                                          <solved-icon type="solve-tier:18"></solved-icon> <span class="solve-tier platinum3">Platinum III</span> |
 * |   19 |                                                                                           <solved-icon type="solve-tier:19"></solved-icon> <span class="solve-tier platinum2">Platinum II</span> |
 * |   20 |                                                                                            <solved-icon type="solve-tier:20"></solved-icon> <span class="solve-tier platinum1">Platinum I</span> |
 * |   21 |                                                                                              <solved-icon type="solve-tier:21"></solved-icon> <span class="solve-tier diamond5">Diamond V</span> |
 * |   22 |                                                                                             <solved-icon type="solve-tier:22"></solved-icon> <span class="solve-tier diamond4">Diamond IV</span> |
 * |   23 |                                                                                            <solved-icon type="solve-tier:23"></solved-icon> <span class="solve-tier diamond3">Diamond III</span> |
 * |   24 |                                                                                             <solved-icon type="solve-tier:24"></solved-icon> <span class="solve-tier diamond2">Diamond II</span> |
 * |   25 |                                                                                              <solved-icon type="solve-tier:25"></solved-icon> <span class="solve-tier diamond1">Diamond I</span> |
 * |   26 |                                                                                                    <solved-icon type="solve-tier:26"></solved-icon> <span class="solve-tier ruby5">Ruby V</span> |
 * |   27 |                                                                                                   <solved-icon type="solve-tier:27"></solved-icon> <span class="solve-tier ruby4">Ruby IV</span> |
 * |   28 |                                                                                                  <solved-icon type="solve-tier:28"></solved-icon> <span class="solve-tier ruby3">Ruby III</span> |
 * |   29 |                                                                                                   <solved-icon type="solve-tier:29"></solved-icon> <span class="solve-tier ruby2">Ruby II</span> |
 * |   30 |                                                                                                    <solved-icon type="solve-tier:30"></solved-icon> <span class="solve-tier ruby1">Ruby I</span> |
 * 
 * </details>
 * @export
 */
export const ProblemLevel = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10,
    NUMBER_11: 11,
    NUMBER_12: 12,
    NUMBER_13: 13,
    NUMBER_14: 14,
    NUMBER_15: 15,
    NUMBER_16: 16,
    NUMBER_17: 17,
    NUMBER_18: 18,
    NUMBER_19: 19,
    NUMBER_20: 20,
    NUMBER_21: 21,
    NUMBER_22: 22,
    NUMBER_23: 23,
    NUMBER_24: 24,
    NUMBER_25: 25,
    NUMBER_26: 26,
    NUMBER_27: 27,
    NUMBER_28: 28,
    NUMBER_29: 29,
    NUMBER_30: 30
} as const;
export type ProblemLevel = typeof ProblemLevel[keyof typeof ProblemLevel];

/**
 * 
 * @export
 * @interface ProblemTag
 */
export interface ProblemTag {
    /**
     * solved.ac에서 쓰는 태그 ID입니다.
     * @type {string}
     * @memberof ProblemTag
     */
    key: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProblemTag
     */
    isMeta: boolean;
    /**
     * 백준 온라인 저지에서 쓰는 태그 ID입니다.
     * @type {number}
     * @memberof ProblemTag
     */
    bojTagId: number;
    /**
     * 태그가 붙은 문제 수입니다.
     * @type {number}
     * @memberof ProblemTag
     */
    problemCount: number;
    /**
     * 언어별 태그 이름 목록입니다.
     * @type {Array<ProblemTagNameTranslated>}
     * @memberof ProblemTag
     */
    displayNames: Array<ProblemTagNameTranslated>;
    /**
     * 별명 목록입니다. 빈 배열일 수 있습니다.
     * @type {Array<ProblemTagAlias>}
     * @memberof ProblemTag
     */
    aliases: Array<ProblemTagAlias>;
}
/**
 * 태그의 별칭을 나타냅니다.
 * @export
 * @interface ProblemTagAlias
 */
export interface ProblemTagAlias {
    /**
     * 별칭입니다
     * @type {string}
     * @memberof ProblemTagAlias
     */
    alias: string;
}
/**
 * 
 * @export
 * @interface ProblemTagNameTranslated
 */
export interface ProblemTagNameTranslated {
    /**
     * 태그 이름이 작성된 언어입니다.
     * @type {Language}
     * @memberof ProblemTagNameTranslated
     */
    language: Language;
    /**
     * 이름입니다.
     * @type {string}
     * @memberof ProblemTagNameTranslated
     */
    name: string;
    /**
     * 짧은 이름입니다.
     * 따로 없을 경우 `name`과 같은 값입니다.
     * @type {string}
     * @memberof ProblemTagNameTranslated
     */
    _short: string;
}
/**
 * 언어별 문제 제목입니다.
 * @export
 * @interface ProblemTitleTranslated
 */
export interface ProblemTitleTranslated {
    /**
     * 문제 제목이 작성된 언어입니다.
     * @type {Language}
     * @memberof ProblemTitleTranslated
     */
    language: Language;
    /**
     * 문제 제목이 작성된 언어의 이름입니다.
     * @type {string}
     * @memberof ProblemTitleTranslated
     */
    languageDisplayName: string;
    /**
     * 문제 제목입니다.
     * @type {string}
     * @memberof ProblemTitleTranslated
     */
    title: string;
    /**
     * 원본과 동일한지 여부입니다.
     * @type {boolean}
     * @memberof ProblemTitleTranslated
     */
    isOriginal: boolean;
}
/**
 * 
 * @export
 * @interface RedeemCodeRequest
 */
export interface RedeemCodeRequest {
    /**
     * 리딤 코드입니다.
     * @type {string}
     * @memberof RedeemCodeRequest
     */
    code: string;
}
/**
 * 
 * @export
 * @interface RivalUser
 */
export interface RivalUser {
    /**
     * 라이벌 여부입니다.
     * @type {boolean}
     * @memberof RivalUser
     */
    isRival: boolean;
    /**
     * 역라이벌 여부입니다.
     * @type {boolean}
     * @memberof RivalUser
     */
    isReverseRival: boolean;
    /**
     * 사용자명입니다.
     * @type {string}
     * @memberof RivalUser
     */
    handle: string;
    /**
     * 자기소개입니다.
     * @type {string}
     * @memberof RivalUser
     */
    bio: string;
    /**
     * 장착 중인 뱃지 ID입니다.
     * @type {string}
     * @memberof RivalUser
     */
    badgeId?: string;
    /**
     * 장착 중인 배경 ID입니다.
     * @type {string}
     * @memberof RivalUser
     */
    backgroundId: string;
    /**
     * 프로필 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof RivalUser
     */
    profileImageUrl?: string;
    /**
     * 푼 문제 수입니다.
     * @type {number}
     * @memberof RivalUser
     */
    solvedCount: number;
    /**
     * 난이도 기여 수입니다.
     * @type {number}
     * @memberof RivalUser
     */
    voteCount: number;
    /**
     * 취득한 CLASS입니다.
     * 취득한 CLASS가 없다면 0으로 표현합니다.
     * @type {number}
     * @memberof RivalUser
     */
    _class: RivalUserClassEnum;
    /**
     * CLASS 완성도에 따른 장식입니다.
     * <solved-icon type="class:1"></solved-icon> 장식 없음 (`"none"`),
     * <solved-icon type="class:1s"></solved-icon> 은장<sup>+</sup> (`"silver"`),
     * <solved-icon type="class:1g"></solved-icon> 금장<sup>++</sup> (`"gold"`)이 있습니다.
     * @type {string}
     * @memberof RivalUser
     */
    classDecoration: RivalUserClassDecorationEnum;
    /**
     * 라이벌 수입니다.
     * @type {number}
     * @memberof RivalUser
     */
    rivalCount: number;
    /**
     * 역라이벌 수입니다.
     * @type {number}
     * @memberof RivalUser
     */
    reverseRivalCount: number;
    /**
     * 
     * @type {SolveTier}
     * @memberof RivalUser
     */
    tier: SolveTier;
    /**
     * 문제풀이 레이팅입니다
     * @type {number}
     * @memberof RivalUser
     */
    rating: number;
    /**
     * 상위 100 문제 난이도 합으로 얻은 레이팅입니다.
     * @type {number}
     * @memberof RivalUser
     */
    ratingByProblemsSum: number;
    /**
     * 취득한 CLASS에 따라 얻은 레이팅입니다.
     * @type {number}
     * @memberof RivalUser
     */
    ratingByClass: number;
    /**
     * 푼 문제 수로 얻은 레이팅입니다.
     * @type {number}
     * @memberof RivalUser
     */
    ratingBySolvedCount: number;
    /**
     * 문제 난이도에 기여한 횟수로 받은 레이팅입니다.
     * @type {number}
     * @memberof RivalUser
     */
    ratingByVoteCount: number;
    /**
     * 현재 아레나 티어입니다.
     * @type {ArenaTier}
     * @memberof RivalUser
     */
    arenaTier: ArenaTier;
    /**
     * 현재 아레나 레이팅입니다.
     * @type {number}
     * @memberof RivalUser
     */
    arenaRating: number;
    /**
     * 역대 받은 아레나 티어 중 최고점일 때의 아레나 티어입니다.
     * @type {ArenaTier}
     * @memberof RivalUser
     */
    arenaMaxTier: ArenaTier;
    /**
     * 역대 받은 아레나 레이팅 중 최고점일 때의 아레나 레이팅입니다.
     * @type {number}
     * @memberof RivalUser
     */
    arenaMaxRating: number;
    /**
     * 참여한 아레나 라운드 수입니다.
     * @type {number}
     * @memberof RivalUser
     */
    arenaCompetedRoundCount: number;
    /**
     * 유지한 최대 스트릭의 길이입니다. (일 단위)
     * @type {number}
     * @memberof RivalUser
     */
    maxStreak: number;
    /**
     * 보유 중인 코인에 100을 곱한 값입니다.
     * 만약, 실제로 보유한 코인이 0.15라면 15로 기록됩니다.
     * @type {number}
     * @memberof RivalUser
     */
    coins: number;
    /**
     * 보유 중인 별가루 양입니다.
     * @type {number}
     * @memberof RivalUser
     */
    stardusts: number;
    /**
     * 가입 시각입니다.
     * 일부 계정에 대해 2021년 6월 19일 0시 (UTC)로 백필된 흔적이 있습니다.
     * @type {string}
     * @memberof RivalUser
     */
    joinedAt: string;
    /**
     * 정지 종료 시각입니다.
     * 정지 이력이 없을 경우 Unix Timestamp 0 값을 포매팅한 문자열입니다.
     * @type {string}
     * @memberof RivalUser
     */
    bannedUntil: string;
    /**
     * [솔브드 서포터](https://solved.ac/support) 종료 시각입니다.
     * 활성화 이력이 없을 경우 Unix Timestamp 0 값을 포매팅한 문자열입니다.
     * @type {string}
     * @memberof RivalUser
     */
    proUntil: string;
    /**
     * 순위입니다.
     * 이 값은 요청하는 엔드포인트의 정렬 기준에 따라 다를 수 있습니다.
     * 예) /ranking/* 엔드포인트에서는 해당 랭킹의 순위, /show 엔드포인트에서는 문제풀이 레이팅 순위
     * @type {number}
     * @memberof RivalUser
     */
    rank: number;
}


/**
 * @export
 */
export const RivalUserClassEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10
} as const;
export type RivalUserClassEnum = typeof RivalUserClassEnum[keyof typeof RivalUserClassEnum];

/**
 * @export
 */
export const RivalUserClassDecorationEnum = {
    None: 'none',
    Silver: 'silver',
    Gold: 'gold'
} as const;
export type RivalUserClassDecorationEnum = typeof RivalUserClassDecorationEnum[keyof typeof RivalUserClassDecorationEnum];


/**
 * 검색 결과 정렬 방향
 * @export
 */
export const SearchProblemQueryDirection = {
    Asc: 'asc',
    Desc: 'desc'
} as const;
export type SearchProblemQueryDirection = typeof SearchProblemQueryDirection[keyof typeof SearchProblemQueryDirection];


/**
 * 검색 결과 정렬 기준
 * @export
 */
export const SearchProblemQuerySort = {
    Id: 'id',
    Level: 'level',
    Title: 'title',
    Solved: 'solved',
    AverageTry: 'average_try',
    Random: 'random'
} as const;
export type SearchProblemQuerySort = typeof SearchProblemQuerySort[keyof typeof SearchProblemQuerySort];

/**
 * 페이지네이션 가능한 쿼리의 응답 결과입니다.
 * @export
 * @interface SearchProblemTag200Response
 */
export interface SearchProblemTag200Response {
    /**
     * 전체 원소 수입니다.
     * @type {number}
     * @memberof SearchProblemTag200Response
     */
    count: number;
    /**
     * 현재 페이지의 원소 목록입니다.
     * @type {Array<ProblemTag>}
     * @memberof SearchProblemTag200Response
     */
    items: Array<ProblemTag>;
}
/**
 * 페이지네이션 가능한 쿼리의 응답 결과입니다.
 * @export
 * @interface SearchUser200Response
 */
export interface SearchUser200Response {
    /**
     * 전체 원소 수입니다.
     * @type {number}
     * @memberof SearchUser200Response
     */
    count: number;
    /**
     * 현재 페이지의 원소 목록입니다.
     * @type {Array<User>}
     * @memberof SearchUser200Response
     */
    items: Array<User>;
}
/**
 * solved.ac 사이트의 통계 정보입니다.
 * @export
 * @interface SiteStatistics
 */
export interface SiteStatistics {
    /**
     * 여태까지 색인된 백준 문제 수입니다.
     * @type {number}
     * @memberof SiteStatistics
     */
    problemCount: number;
    /**
     * 여태까지 난이도가 기여된 백준 문제 수입니다.
     * @type {number}
     * @memberof SiteStatistics
     */
    problemVotedCount: number;
    /**
     * 여태까지 등록한 사용자 수입니다.
     * @type {number}
     * @memberof SiteStatistics
     */
    userCount: number;
    /**
     * 여태까지 난이도에 기여한 사용자 수입니다
     * @type {number}
     * @memberof SiteStatistics
     */
    contributorCount: number;
    /**
     * 여태까지 이루어진 난이도 기여의 수입니다.
     * @type {number}
     * @memberof SiteStatistics
     */
    contributionCount: number;
}
/**
 * solved.ac 사용자 정보입니다.
 * @export
 * @interface SocialUser
 */
export interface SocialUser {
    /**
     * 로그인한 사용자가 해당 사용자를 차단했는지 여부입니다.
     * @type {boolean}
     * @memberof SocialUser
     */
    blocked: boolean;
    /**
     * 로그인한 사용자가 해당 사용자에게 차단당했는지 여부입니다.
     * @type {boolean}
     * @memberof SocialUser
     */
    reverseBlocked: boolean;
    /**
     * 라이벌 여부입니다.
     * @type {boolean}
     * @memberof SocialUser
     */
    isRival: boolean;
    /**
     * 역라이벌 여부입니다.
     * @type {boolean}
     * @memberof SocialUser
     */
    isReverseRival: boolean;
    /**
     * 사용자명입니다.
     * @type {string}
     * @memberof SocialUser
     */
    handle: string;
    /**
     * 자기소개입니다.
     * @type {string}
     * @memberof SocialUser
     */
    bio: string;
    /**
     * 장착 중인 뱃지 ID입니다.
     * @type {string}
     * @memberof SocialUser
     */
    badgeId?: string;
    /**
     * 장착 중인 배경 ID입니다.
     * @type {string}
     * @memberof SocialUser
     */
    backgroundId: string;
    /**
     * 프로필 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof SocialUser
     */
    profileImageUrl?: string;
    /**
     * 푼 문제 수입니다.
     * @type {number}
     * @memberof SocialUser
     */
    solvedCount: number;
    /**
     * 난이도 기여 수입니다.
     * @type {number}
     * @memberof SocialUser
     */
    voteCount: number;
    /**
     * 취득한 CLASS입니다.
     * 취득한 CLASS가 없다면 0으로 표현합니다.
     * @type {number}
     * @memberof SocialUser
     */
    _class: SocialUserClassEnum;
    /**
     * CLASS 완성도에 따른 장식입니다.
     * <solved-icon type="class:1"></solved-icon> 장식 없음 (`"none"`),
     * <solved-icon type="class:1s"></solved-icon> 은장<sup>+</sup> (`"silver"`),
     * <solved-icon type="class:1g"></solved-icon> 금장<sup>++</sup> (`"gold"`)이 있습니다.
     * @type {string}
     * @memberof SocialUser
     */
    classDecoration: SocialUserClassDecorationEnum;
    /**
     * 라이벌 수입니다.
     * @type {number}
     * @memberof SocialUser
     */
    rivalCount: number;
    /**
     * 역라이벌 수입니다.
     * @type {number}
     * @memberof SocialUser
     */
    reverseRivalCount: number;
    /**
     * 
     * @type {SolveTier}
     * @memberof SocialUser
     */
    tier: SolveTier;
    /**
     * 문제풀이 레이팅입니다
     * @type {number}
     * @memberof SocialUser
     */
    rating: number;
    /**
     * 상위 100 문제 난이도 합으로 얻은 레이팅입니다.
     * @type {number}
     * @memberof SocialUser
     */
    ratingByProblemsSum: number;
    /**
     * 취득한 CLASS에 따라 얻은 레이팅입니다.
     * @type {number}
     * @memberof SocialUser
     */
    ratingByClass: number;
    /**
     * 푼 문제 수로 얻은 레이팅입니다.
     * @type {number}
     * @memberof SocialUser
     */
    ratingBySolvedCount: number;
    /**
     * 문제 난이도에 기여한 횟수로 받은 레이팅입니다.
     * @type {number}
     * @memberof SocialUser
     */
    ratingByVoteCount: number;
    /**
     * 현재 아레나 티어입니다.
     * @type {ArenaTier}
     * @memberof SocialUser
     */
    arenaTier: ArenaTier;
    /**
     * 현재 아레나 레이팅입니다.
     * @type {number}
     * @memberof SocialUser
     */
    arenaRating: number;
    /**
     * 역대 받은 아레나 티어 중 최고점일 때의 아레나 티어입니다.
     * @type {ArenaTier}
     * @memberof SocialUser
     */
    arenaMaxTier: ArenaTier;
    /**
     * 역대 받은 아레나 레이팅 중 최고점일 때의 아레나 레이팅입니다.
     * @type {number}
     * @memberof SocialUser
     */
    arenaMaxRating: number;
    /**
     * 참여한 아레나 라운드 수입니다.
     * @type {number}
     * @memberof SocialUser
     */
    arenaCompetedRoundCount: number;
    /**
     * 유지한 최대 스트릭의 길이입니다. (일 단위)
     * @type {number}
     * @memberof SocialUser
     */
    maxStreak: number;
    /**
     * 보유 중인 코인에 100을 곱한 값입니다.
     * 만약, 실제로 보유한 코인이 0.15라면 15로 기록됩니다.
     * @type {number}
     * @memberof SocialUser
     */
    coins: number;
    /**
     * 보유 중인 별가루 양입니다.
     * @type {number}
     * @memberof SocialUser
     */
    stardusts: number;
    /**
     * 가입 시각입니다.
     * 일부 계정에 대해 2021년 6월 19일 0시 (UTC)로 백필된 흔적이 있습니다.
     * @type {string}
     * @memberof SocialUser
     */
    joinedAt: string;
    /**
     * 정지 종료 시각입니다.
     * 정지 이력이 없을 경우 Unix Timestamp 0 값을 포매팅한 문자열입니다.
     * @type {string}
     * @memberof SocialUser
     */
    bannedUntil: string;
    /**
     * [솔브드 서포터](https://solved.ac/support) 종료 시각입니다.
     * 활성화 이력이 없을 경우 Unix Timestamp 0 값을 포매팅한 문자열입니다.
     * @type {string}
     * @memberof SocialUser
     */
    proUntil: string;
    /**
     * 순위입니다.
     * 이 값은 요청하는 엔드포인트의 정렬 기준에 따라 다를 수 있습니다.
     * 예) /ranking/* 엔드포인트에서는 해당 랭킹의 순위, /show 엔드포인트에서는 문제풀이 레이팅 순위
     * @type {number}
     * @memberof SocialUser
     */
    rank: number;
}


/**
 * @export
 */
export const SocialUserClassEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10
} as const;
export type SocialUserClassEnum = typeof SocialUserClassEnum[keyof typeof SocialUserClassEnum];

/**
 * @export
 */
export const SocialUserClassDecorationEnum = {
    None: 'none',
    Silver: 'silver',
    Gold: 'gold'
} as const;
export type SocialUserClassDecorationEnum = typeof SocialUserClassDecorationEnum[keyof typeof SocialUserClassDecorationEnum];


/**
 * <solved-icon type="solve-tier:0"></solved-icon> <span class="solve-tier zero">Unrated</span>를 0,
 * <solved-icon type="solve-tier:1"></solved-icon> <span class="solve-tier bronze5">Bronze V</span>를 1,
 * ...,
 * <solved-icon type="solve-tier:30"></solved-icon> <span class="solve-tier ruby1">Ruby I</span>을 30,
 * <solved-icon type="solve-tier:31"></solved-icon> <span class="solve-tier master">Master</span>를 31로 표현하는 문제해결 티어입니다.
 * 자세한 값 정보는 표1. 문제 풀이 레이팅 표를 펼쳐 참고하십시오.
 * 
 * <details>
 * <summary>
 * 표1. 문제 풀이 레이팅 표
 * </summary>
 * 
 * | 수치 | 이름                                                                                                    |                                         요구 레이팅 |
 * | ---: | :------------------------------------------------------------------------------------------------------ | --------------------------------------------------: |
 * |    0 |            <solved-icon type="solve-tier:0"></solved-icon> <span class="solve-tier zero">Unrated</span> |         <span class="bold solve-tier zero">0</span> |
 * |    1 |        <solved-icon type="solve-tier:1"></solved-icon> <span class="solve-tier bronze5">Bronze V</span> |     <span class="bold solve-tier bronze5">30</span> |
 * |    2 |       <solved-icon type="solve-tier:2"></solved-icon> <span class="solve-tier bronze4">Bronze IV</span> |     <span class="bold solve-tier bronze4">60</span> |
 * |    3 |      <solved-icon type="solve-tier:3"></solved-icon> <span class="solve-tier bronze3">Bronze III</span> |     <span class="bold solve-tier bronze3">90</span> |
 * |    4 |       <solved-icon type="solve-tier:4"></solved-icon> <span class="solve-tier bronze2">Bronze II</span> |    <span class="bold solve-tier bronze2">120</span> |
 * |    5 |        <solved-icon type="solve-tier:5"></solved-icon> <span class="solve-tier bronze1">Bronze I</span> |    <span class="bold solve-tier bronze1">150</span> |
 * |    6 |        <solved-icon type="solve-tier:6"></solved-icon> <span class="solve-tier silver5">Silver V</span> |    <span class="bold solve-tier silver5">200</span> |
 * |    7 |       <solved-icon type="solve-tier:7"></solved-icon> <span class="solve-tier silver4">Silver IV</span> |    <span class="bold solve-tier silver4">300</span> |
 * |    8 |      <solved-icon type="solve-tier:8"></solved-icon> <span class="solve-tier silver3">Silver III</span> |    <span class="bold solve-tier silver3">400</span> |
 * |    9 |       <solved-icon type="solve-tier:9"></solved-icon> <span class="solve-tier silver2">Silver II</span> |    <span class="bold solve-tier silver2">500</span> |
 * |   10 |       <solved-icon type="solve-tier:10"></solved-icon> <span class="solve-tier silver1">Silver I</span> |    <span class="bold solve-tier silver1">650</span> |
 * |   11 |           <solved-icon type="solve-tier:11"></solved-icon> <span class="solve-tier gold5">Gold V</span> |      <span class="bold solve-tier gold5">800</span> |
 * |   12 |          <solved-icon type="solve-tier:12"></solved-icon> <span class="solve-tier gold4">Gold IV</span> |      <span class="bold solve-tier gold4">950</span> |
 * |   13 |         <solved-icon type="solve-tier:13"></solved-icon> <span class="solve-tier gold3">Gold III</span> |     <span class="bold solve-tier gold3">1100</span> |
 * |   14 |          <solved-icon type="solve-tier:14"></solved-icon> <span class="solve-tier gold2">Gold II</span> |     <span class="bold solve-tier gold2">1250</span> |
 * |   15 |           <solved-icon type="solve-tier:15"></solved-icon> <span class="solve-tier gold1">Gold I</span> |     <span class="bold solve-tier gold1">1400</span> |
 * |   16 |   <solved-icon type="solve-tier:16"></solved-icon> <span class="solve-tier platinum5">Platinum V</span> | <span class="bold solve-tier platinum5">1600</span> |
 * |   17 |  <solved-icon type="solve-tier:17"></solved-icon> <span class="solve-tier platinum4">Platinum IV</span> | <span class="bold solve-tier platinum4">1750</span> |
 * |   18 | <solved-icon type="solve-tier:18"></solved-icon> <span class="solve-tier platinum3">Platinum III</span> | <span class="bold solve-tier platinum3">1900</span> |
 * |   19 |  <solved-icon type="solve-tier:19"></solved-icon> <span class="solve-tier platinum2">Platinum II</span> | <span class="bold solve-tier platinum2">2000</span> |
 * |   20 |   <solved-icon type="solve-tier:20"></solved-icon> <span class="solve-tier platinum1">Platinum I</span> | <span class="bold solve-tier platinum1">2100</span> |
 * |   21 |     <solved-icon type="solve-tier:21"></solved-icon> <span class="solve-tier diamond5">Diamond V</span> |  <span class="bold solve-tier diamond5">2200</span> |
 * |   22 |    <solved-icon type="solve-tier:22"></solved-icon> <span class="solve-tier diamond4">Diamond IV</span> |  <span class="bold solve-tier diamond4">2300</span> |
 * |   23 |   <solved-icon type="solve-tier:23"></solved-icon> <span class="solve-tier diamond3">Diamond III</span> |  <span class="bold solve-tier diamond3">2400</span> |
 * |   24 |    <solved-icon type="solve-tier:24"></solved-icon> <span class="solve-tier diamond2">Diamond II</span> |  <span class="bold solve-tier diamond2">2500</span> |
 * |   25 |     <solved-icon type="solve-tier:25"></solved-icon> <span class="solve-tier diamond1">Diamond I</span> |  <span class="bold solve-tier diamond1">2600</span> |
 * |   26 |           <solved-icon type="solve-tier:26"></solved-icon> <span class="solve-tier ruby5">Ruby V</span> |     <span class="bold solve-tier ruby5">2700</span> |
 * |   27 |          <solved-icon type="solve-tier:27"></solved-icon> <span class="solve-tier ruby4">Ruby IV</span> |     <span class="bold solve-tier ruby4">2800</span> |
 * |   28 |         <solved-icon type="solve-tier:28"></solved-icon> <span class="solve-tier ruby3">Ruby III</span> |     <span class="bold solve-tier ruby3">2850</span> |
 * |   29 |          <solved-icon type="solve-tier:29"></solved-icon> <span class="solve-tier ruby2">Ruby II</span> |     <span class="bold solve-tier ruby2">2900</span> |
 * |   30 |           <solved-icon type="solve-tier:30"></solved-icon> <span class="solve-tier ruby1">Ruby I</span> |     <span class="bold solve-tier ruby1">2950</span> |
 * |   31 |          <solved-icon type="solve-tier:31"></solved-icon> <span class="solve-tier master">Master</span> |    <span class="bold solve-tier master">3000</span> |
 * 
 * </details>
 * @export
 */
export const SolveTier = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10,
    NUMBER_11: 11,
    NUMBER_12: 12,
    NUMBER_13: 13,
    NUMBER_14: 14,
    NUMBER_15: 15,
    NUMBER_16: 16,
    NUMBER_17: 17,
    NUMBER_18: 18,
    NUMBER_19: 19,
    NUMBER_20: 20,
    NUMBER_21: 21,
    NUMBER_22: 22,
    NUMBER_23: 23,
    NUMBER_24: 24,
    NUMBER_25: 25,
    NUMBER_26: 26,
    NUMBER_27: 27,
    NUMBER_28: 28,
    NUMBER_29: 29,
    NUMBER_30: 30,
    NUMBER_31: 31
} as const;
export type SolveTier = typeof SolveTier[keyof typeof SolveTier];

/**
 * 
 * @export
 * @interface UpdateAccountSettingsRequest
 */
export interface UpdateAccountSettingsRequest {
    /**
     * 업데이트할 설정의 이름입니다.
     * @type {string}
     * @memberof UpdateAccountSettingsRequest
     */
    key?: string;
    /**
     * 업데이트할 설정의 새로운 값입니다.
     * @type {any}
     * @memberof UpdateAccountSettingsRequest
     */
    value?: any;
}
/**
 * solved.ac 사용자 정보입니다.
 * @export
 * @interface User
 */
export interface User {
    /**
     * 사용자명입니다.
     * @type {string}
     * @memberof User
     */
    handle: string;
    /**
     * 자기소개입니다.
     * @type {string}
     * @memberof User
     */
    bio: string;
    /**
     * 장착 중인 뱃지 ID입니다.
     * @type {string}
     * @memberof User
     */
    badgeId?: string;
    /**
     * 장착 중인 배경 ID입니다.
     * @type {string}
     * @memberof User
     */
    backgroundId: string;
    /**
     * 프로필 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof User
     */
    profileImageUrl?: string;
    /**
     * 푼 문제 수입니다.
     * @type {number}
     * @memberof User
     */
    solvedCount: number;
    /**
     * 난이도 기여 수입니다.
     * @type {number}
     * @memberof User
     */
    voteCount: number;
    /**
     * 취득한 CLASS입니다.
     * 취득한 CLASS가 없다면 0으로 표현합니다.
     * @type {number}
     * @memberof User
     */
    _class: UserClassEnum;
    /**
     * CLASS 완성도에 따른 장식입니다.
     * <solved-icon type="class:1"></solved-icon> 장식 없음 (`"none"`),
     * <solved-icon type="class:1s"></solved-icon> 은장<sup>+</sup> (`"silver"`),
     * <solved-icon type="class:1g"></solved-icon> 금장<sup>++</sup> (`"gold"`)이 있습니다.
     * @type {string}
     * @memberof User
     */
    classDecoration: UserClassDecorationEnum;
    /**
     * 라이벌 수입니다.
     * @type {number}
     * @memberof User
     */
    rivalCount: number;
    /**
     * 역라이벌 수입니다.
     * @type {number}
     * @memberof User
     */
    reverseRivalCount: number;
    /**
     * 
     * @type {SolveTier}
     * @memberof User
     */
    tier: SolveTier;
    /**
     * 문제풀이 레이팅입니다
     * @type {number}
     * @memberof User
     */
    rating: number;
    /**
     * 상위 100 문제 난이도 합으로 얻은 레이팅입니다.
     * @type {number}
     * @memberof User
     */
    ratingByProblemsSum: number;
    /**
     * 취득한 CLASS에 따라 얻은 레이팅입니다.
     * @type {number}
     * @memberof User
     */
    ratingByClass: number;
    /**
     * 푼 문제 수로 얻은 레이팅입니다.
     * @type {number}
     * @memberof User
     */
    ratingBySolvedCount: number;
    /**
     * 문제 난이도에 기여한 횟수로 받은 레이팅입니다.
     * @type {number}
     * @memberof User
     */
    ratingByVoteCount: number;
    /**
     * 현재 아레나 티어입니다.
     * @type {ArenaTier}
     * @memberof User
     */
    arenaTier: ArenaTier;
    /**
     * 현재 아레나 레이팅입니다.
     * @type {number}
     * @memberof User
     */
    arenaRating: number;
    /**
     * 역대 받은 아레나 티어 중 최고점일 때의 아레나 티어입니다.
     * @type {ArenaTier}
     * @memberof User
     */
    arenaMaxTier: ArenaTier;
    /**
     * 역대 받은 아레나 레이팅 중 최고점일 때의 아레나 레이팅입니다.
     * @type {number}
     * @memberof User
     */
    arenaMaxRating: number;
    /**
     * 참여한 아레나 라운드 수입니다.
     * @type {number}
     * @memberof User
     */
    arenaCompetedRoundCount: number;
    /**
     * 유지한 최대 스트릭의 길이입니다. (일 단위)
     * @type {number}
     * @memberof User
     */
    maxStreak: number;
    /**
     * 보유 중인 코인에 100을 곱한 값입니다.
     * 만약, 실제로 보유한 코인이 0.15라면 15로 기록됩니다.
     * @type {number}
     * @memberof User
     */
    coins: number;
    /**
     * 보유 중인 별가루 양입니다.
     * @type {number}
     * @memberof User
     */
    stardusts: number;
    /**
     * 가입 시각입니다.
     * 일부 계정에 대해 2021년 6월 19일 0시 (UTC)로 백필된 흔적이 있습니다.
     * @type {string}
     * @memberof User
     */
    joinedAt: string;
    /**
     * 정지 종료 시각입니다.
     * 정지 이력이 없을 경우 Unix Timestamp 0 값을 포매팅한 문자열입니다.
     * @type {string}
     * @memberof User
     */
    bannedUntil: string;
    /**
     * [솔브드 서포터](https://solved.ac/support) 종료 시각입니다.
     * 활성화 이력이 없을 경우 Unix Timestamp 0 값을 포매팅한 문자열입니다.
     * @type {string}
     * @memberof User
     */
    proUntil: string;
    /**
     * 순위입니다.
     * 이 값은 요청하는 엔드포인트의 정렬 기준에 따라 다를 수 있습니다.
     * 예) /ranking/* 엔드포인트에서는 해당 랭킹의 순위, /show 엔드포인트에서는 문제풀이 레이팅 순위
     * @type {number}
     * @memberof User
     */
    rank: number;
}


/**
 * @export
 */
export const UserClassEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10
} as const;
export type UserClassEnum = typeof UserClassEnum[keyof typeof UserClassEnum];

/**
 * @export
 */
export const UserClassDecorationEnum = {
    None: 'none',
    Silver: 'silver',
    Gold: 'gold'
} as const;
export type UserClassDecorationEnum = typeof UserClassDecorationEnum[keyof typeof UserClassDecorationEnum];

/**
 * 사용자 동의 여부입니다.
 * @export
 * @interface VerifyCredentialsAgreements
 */
export interface VerifyCredentialsAgreements {
    /**
     * 동의한 약관 버전입니다.
     * @type {string}
     * @memberof VerifyCredentialsAgreements
     */
    tos: string;
    /**
     * 동의한 개인정보 처리방침 버전입니다.
     * @type {string}
     * @memberof VerifyCredentialsAgreements
     */
    privacy: string;
}
/**
 * 
 * @export
 * @interface VerifyCredentialsCredential
 */
export interface VerifyCredentialsCredential {
    /**
     * 
     * @type {VerifyCredentialsUserWithSettings}
     * @memberof VerifyCredentialsCredential
     */
    user: VerifyCredentialsUserWithSettings;
    /**
     * 
     * @type {VerifyCredentialsAgreements}
     * @memberof VerifyCredentialsCredential
     */
    aggredOn: VerifyCredentialsAgreements;
    /**
     * 보유할 수 있는 모든 이모티콘에 대해 이모티콘 정보에 덧붙여 보유 여부를 함께 담은 목록입니다.
     * @type {Array<VerifyCredentialsEmoticonUnlockStatus>}
     * @memberof VerifyCredentialsCredential
     */
    emoticons: Array<VerifyCredentialsEmoticonUnlockStatus>;
    /**
     * 
     * @type {any}
     * @memberof VerifyCredentialsCredential
     */
    bookmarks: any | null;
    /**
     * 받은 알림 수입니다.
     * @type {number}
     * @memberof VerifyCredentialsCredential
     */
    notificationCount: number;
    /**
     * 마지막으로 솔브드 상태가 변한 시각입니다.
     * @type {string}
     * @memberof VerifyCredentialsCredential
     */
    lastSolvedStateChangedAt: string;
}
/**
 * 
 * @export
 * @interface VerifyCredentialsEmoticonUnlockStatus
 */
export interface VerifyCredentialsEmoticonUnlockStatus {
    /**
     * 해금 여부입니다.
     * @type {boolean}
     * @memberof VerifyCredentialsEmoticonUnlockStatus
     */
    unlocked: boolean;
    /**
     * 고유 식별자입니다.
     * @type {string}
     * @memberof VerifyCredentialsEmoticonUnlockStatus
     */
    emoticonId: string;
    /**
     * 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof VerifyCredentialsEmoticonUnlockStatus
     */
    emoticonUrl: string;
    /**
     * 한국어 이름입니다.
     * @type {string}
     * @memberof VerifyCredentialsEmoticonUnlockStatus
     */
    displayName: string;
}
/**
 * 
 * @export
 * @interface VerifyCredentialsUserSettings
 */
export interface VerifyCredentialsUserSettings {
    /**
     * 
     * @type {string}
     * @memberof VerifyCredentialsUserSettings
     */
    twitterPostOnProblemSolve: VerifyCredentialsUserSettingsTwitterPostOnProblemSolveEnum;
    /**
     * 
     * @type {string}
     * @memberof VerifyCredentialsUserSettings
     */
    screenTheme: VerifyCredentialsUserSettingsScreenThemeEnum;
    /**
     * 
     * @type {string}
     * @memberof VerifyCredentialsUserSettings
     */
    twitterPostHandle: VerifyCredentialsUserSettingsTwitterPostHandleEnum;
    /**
     * 
     * @type {string}
     * @memberof VerifyCredentialsUserSettings
     */
    twitterPostOnRatingIncrease: VerifyCredentialsUserSettingsTwitterPostOnRatingIncreaseEnum;
    /**
     * 
     * @type {string}
     * @memberof VerifyCredentialsUserSettings
     */
    twitterPostOnTierIncrease: VerifyCredentialsUserSettingsTwitterPostOnTierIncreaseEnum;
    /**
     * 
     * @type {string}
     * @memberof VerifyCredentialsUserSettings
     */
    twitterPostOnClassIncrease: VerifyCredentialsUserSettingsTwitterPostOnClassIncreaseEnum;
    /**
     * 
     * @type {string}
     * @memberof VerifyCredentialsUserSettings
     */
    proHideAds: VerifyCredentialsUserSettingsProHideAdsEnum;
    /**
     * 
     * @type {string}
     * @memberof VerifyCredentialsUserSettings
     */
    siteLanguage: VerifyCredentialsUserSettingsSiteLanguageEnum;
    /**
     * 
     * @type {string}
     * @memberof VerifyCredentialsUserSettings
     */
    showIllustBackground: VerifyCredentialsUserSettingsShowIllustBackgroundEnum;
    /**
     * 
     * @type {string}
     * @memberof VerifyCredentialsUserSettings
     */
    showMovieBackground: VerifyCredentialsUserSettingsShowMovieBackgroundEnum;
}


/**
 * @export
 */
export const VerifyCredentialsUserSettingsTwitterPostOnProblemSolveEnum = {
    True: 'true'
} as const;
export type VerifyCredentialsUserSettingsTwitterPostOnProblemSolveEnum = typeof VerifyCredentialsUserSettingsTwitterPostOnProblemSolveEnum[keyof typeof VerifyCredentialsUserSettingsTwitterPostOnProblemSolveEnum];

/**
 * @export
 */
export const VerifyCredentialsUserSettingsScreenThemeEnum = {
    Default: 'default'
} as const;
export type VerifyCredentialsUserSettingsScreenThemeEnum = typeof VerifyCredentialsUserSettingsScreenThemeEnum[keyof typeof VerifyCredentialsUserSettingsScreenThemeEnum];

/**
 * @export
 */
export const VerifyCredentialsUserSettingsTwitterPostHandleEnum = {
    True: 'true'
} as const;
export type VerifyCredentialsUserSettingsTwitterPostHandleEnum = typeof VerifyCredentialsUserSettingsTwitterPostHandleEnum[keyof typeof VerifyCredentialsUserSettingsTwitterPostHandleEnum];

/**
 * @export
 */
export const VerifyCredentialsUserSettingsTwitterPostOnRatingIncreaseEnum = {
    True: 'true'
} as const;
export type VerifyCredentialsUserSettingsTwitterPostOnRatingIncreaseEnum = typeof VerifyCredentialsUserSettingsTwitterPostOnRatingIncreaseEnum[keyof typeof VerifyCredentialsUserSettingsTwitterPostOnRatingIncreaseEnum];

/**
 * @export
 */
export const VerifyCredentialsUserSettingsTwitterPostOnTierIncreaseEnum = {
    True: 'true'
} as const;
export type VerifyCredentialsUserSettingsTwitterPostOnTierIncreaseEnum = typeof VerifyCredentialsUserSettingsTwitterPostOnTierIncreaseEnum[keyof typeof VerifyCredentialsUserSettingsTwitterPostOnTierIncreaseEnum];

/**
 * @export
 */
export const VerifyCredentialsUserSettingsTwitterPostOnClassIncreaseEnum = {
    True: 'true'
} as const;
export type VerifyCredentialsUserSettingsTwitterPostOnClassIncreaseEnum = typeof VerifyCredentialsUserSettingsTwitterPostOnClassIncreaseEnum[keyof typeof VerifyCredentialsUserSettingsTwitterPostOnClassIncreaseEnum];

/**
 * @export
 */
export const VerifyCredentialsUserSettingsProHideAdsEnum = {
    True: 'true'
} as const;
export type VerifyCredentialsUserSettingsProHideAdsEnum = typeof VerifyCredentialsUserSettingsProHideAdsEnum[keyof typeof VerifyCredentialsUserSettingsProHideAdsEnum];

/**
 * @export
 */
export const VerifyCredentialsUserSettingsSiteLanguageEnum = {
    Ko: 'ko'
} as const;
export type VerifyCredentialsUserSettingsSiteLanguageEnum = typeof VerifyCredentialsUserSettingsSiteLanguageEnum[keyof typeof VerifyCredentialsUserSettingsSiteLanguageEnum];

/**
 * @export
 */
export const VerifyCredentialsUserSettingsShowIllustBackgroundEnum = {
    True: 'true'
} as const;
export type VerifyCredentialsUserSettingsShowIllustBackgroundEnum = typeof VerifyCredentialsUserSettingsShowIllustBackgroundEnum[keyof typeof VerifyCredentialsUserSettingsShowIllustBackgroundEnum];

/**
 * @export
 */
export const VerifyCredentialsUserSettingsShowMovieBackgroundEnum = {
    True: 'true'
} as const;
export type VerifyCredentialsUserSettingsShowMovieBackgroundEnum = typeof VerifyCredentialsUserSettingsShowMovieBackgroundEnum[keyof typeof VerifyCredentialsUserSettingsShowMovieBackgroundEnum];

/**
 * 
 * @export
 * @interface VerifyCredentialsUserWithSettings
 */
export interface VerifyCredentialsUserWithSettings {
    /**
     * 설정입니다.
     * @type {VerifyCredentialsUserSettings}
     * @memberof VerifyCredentialsUserWithSettings
     */
    settings: VerifyCredentialsUserSettings;
    /**
     * 사용 중인 이메일 주소입니다.
     * @type {string}
     * @memberof VerifyCredentialsUserWithSettings
     */
    email: string;
    /**
     * 사용자명입니다.
     * @type {string}
     * @memberof VerifyCredentialsUserWithSettings
     */
    handle: string;
    /**
     * 자기소개입니다.
     * @type {string}
     * @memberof VerifyCredentialsUserWithSettings
     */
    bio: string;
    /**
     * 장착 중인 뱃지 ID입니다.
     * @type {string}
     * @memberof VerifyCredentialsUserWithSettings
     */
    badgeId?: string;
    /**
     * 장착 중인 배경 ID입니다.
     * @type {string}
     * @memberof VerifyCredentialsUserWithSettings
     */
    backgroundId: string;
    /**
     * 프로필 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof VerifyCredentialsUserWithSettings
     */
    profileImageUrl?: string;
    /**
     * 푼 문제 수입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    solvedCount: number;
    /**
     * 난이도 기여 수입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    voteCount: number;
    /**
     * 취득한 CLASS입니다.
     * 취득한 CLASS가 없다면 0으로 표현합니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    _class: VerifyCredentialsUserWithSettingsClassEnum;
    /**
     * CLASS 완성도에 따른 장식입니다.
     * <solved-icon type="class:1"></solved-icon> 장식 없음 (`"none"`),
     * <solved-icon type="class:1s"></solved-icon> 은장<sup>+</sup> (`"silver"`),
     * <solved-icon type="class:1g"></solved-icon> 금장<sup>++</sup> (`"gold"`)이 있습니다.
     * @type {string}
     * @memberof VerifyCredentialsUserWithSettings
     */
    classDecoration: VerifyCredentialsUserWithSettingsClassDecorationEnum;
    /**
     * 라이벌 수입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    rivalCount: number;
    /**
     * 역라이벌 수입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    reverseRivalCount: number;
    /**
     * 
     * @type {SolveTier}
     * @memberof VerifyCredentialsUserWithSettings
     */
    tier: SolveTier;
    /**
     * 문제풀이 레이팅입니다
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    rating: number;
    /**
     * 상위 100 문제 난이도 합으로 얻은 레이팅입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    ratingByProblemsSum: number;
    /**
     * 취득한 CLASS에 따라 얻은 레이팅입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    ratingByClass: number;
    /**
     * 푼 문제 수로 얻은 레이팅입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    ratingBySolvedCount: number;
    /**
     * 문제 난이도에 기여한 횟수로 받은 레이팅입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    ratingByVoteCount: number;
    /**
     * 현재 아레나 티어입니다.
     * @type {ArenaTier}
     * @memberof VerifyCredentialsUserWithSettings
     */
    arenaTier: ArenaTier;
    /**
     * 현재 아레나 레이팅입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    arenaRating: number;
    /**
     * 역대 받은 아레나 티어 중 최고점일 때의 아레나 티어입니다.
     * @type {ArenaTier}
     * @memberof VerifyCredentialsUserWithSettings
     */
    arenaMaxTier: ArenaTier;
    /**
     * 역대 받은 아레나 레이팅 중 최고점일 때의 아레나 레이팅입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    arenaMaxRating: number;
    /**
     * 참여한 아레나 라운드 수입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    arenaCompetedRoundCount: number;
    /**
     * 유지한 최대 스트릭의 길이입니다. (일 단위)
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    maxStreak: number;
    /**
     * 보유 중인 코인에 100을 곱한 값입니다.
     * 만약, 실제로 보유한 코인이 0.15라면 15로 기록됩니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    coins: number;
    /**
     * 보유 중인 별가루 양입니다.
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    stardusts: number;
    /**
     * 가입 시각입니다.
     * 일부 계정에 대해 2021년 6월 19일 0시 (UTC)로 백필된 흔적이 있습니다.
     * @type {string}
     * @memberof VerifyCredentialsUserWithSettings
     */
    joinedAt: string;
    /**
     * 정지 종료 시각입니다.
     * 정지 이력이 없을 경우 Unix Timestamp 0 값을 포매팅한 문자열입니다.
     * @type {string}
     * @memberof VerifyCredentialsUserWithSettings
     */
    bannedUntil: string;
    /**
     * [솔브드 서포터](https://solved.ac/support) 종료 시각입니다.
     * 활성화 이력이 없을 경우 Unix Timestamp 0 값을 포매팅한 문자열입니다.
     * @type {string}
     * @memberof VerifyCredentialsUserWithSettings
     */
    proUntil: string;
    /**
     * 순위입니다.
     * 이 값은 요청하는 엔드포인트의 정렬 기준에 따라 다를 수 있습니다.
     * 예) /ranking/* 엔드포인트에서는 해당 랭킹의 순위, /show 엔드포인트에서는 문제풀이 레이팅 순위
     * @type {number}
     * @memberof VerifyCredentialsUserWithSettings
     */
    rank: number;
}


/**
 * @export
 */
export const VerifyCredentialsUserWithSettingsClassEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10
} as const;
export type VerifyCredentialsUserWithSettingsClassEnum = typeof VerifyCredentialsUserWithSettingsClassEnum[keyof typeof VerifyCredentialsUserWithSettingsClassEnum];

/**
 * @export
 */
export const VerifyCredentialsUserWithSettingsClassDecorationEnum = {
    None: 'none',
    Silver: 'silver',
    Gold: 'gold'
} as const;
export type VerifyCredentialsUserWithSettingsClassDecorationEnum = typeof VerifyCredentialsUserWithSettingsClassDecorationEnum[keyof typeof VerifyCredentialsUserWithSettingsClassDecorationEnum];

