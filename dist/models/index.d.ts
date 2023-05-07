/**
 * 사용자가 사용할 수 있는 배경입니다.
 * @export
 * @interface Background
 */
export interface Background {
    /**
     * 배경의 ID입니다.
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
     * 배경 사진이 없을 때 대체로 사용할 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof Background
     */
    fallbackBackgroundImageUrl?: string | null;
    /**
     * 배경 비디오로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof Background
     */
    backgroundVideoUrl?: string | null;
    /**
     * 해당 배경을 획득한 사용자의 수입니다.
     * @type {number}
     * @memberof Background
     */
    unlockedUserCount: number;
    /**
     * 배경의 이름입니다.
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
     * 해당 배경을 얻을 수 있는 조건입니다.
     * @type {string}
     * @memberof Background
     */
    conditions: string;
    /**
     * 해당 배경을 얻을 수 있는 조건이 숨겨져 있는지 여부입니다.
     * @type {boolean}
     * @memberof Background
     */
    hiddenConditions: boolean;
    /**
     * 해당 배경이 일러스트인지 여부입니다.
     * @type {boolean}
     * @memberof Background
     */
    isIllust: boolean;
    /**
     * 해당 배경을 만든 사람들의 정보입니다.
     * @type {Array<BackgroundAuthors>}
     * @memberof Background
     */
    authors: Array<BackgroundAuthors>;
}
/**
 *
 * @export
 * @interface BackgroundAuthors
 */
export interface BackgroundAuthors {
    /**
     * 작가의 ID입니다.
     * @type {string}
     * @memberof BackgroundAuthors
     */
    authorId?: string;
    /**
     * 작가의 역할입니다.
     * @type {string}
     * @memberof BackgroundAuthors
     */
    role?: string;
    /**
     * 작가의 홈페이지로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof BackgroundAuthors
     */
    authorUrl?: string | null;
    /**
     * 작가의 사용자 ID입니다.
     * @type {string}
     * @memberof BackgroundAuthors
     */
    handle?: string;
    /**
     * 작가의 트위터 ID입니다.
     * @type {string}
     * @memberof BackgroundAuthors
     */
    twitter?: string | null;
    /**
     * 작가의 인스타그램 ID입니다.
     * @type {string}
     * @memberof BackgroundAuthors
     */
    instagram?: string | null;
    /**
     * 작가의 이름입니다.
     * @type {string}
     * @memberof BackgroundAuthors
     */
    displayName?: string;
}
/**
 * 사용자가 사용할 수 있는 뱃지입니다.
 * @export
 * @interface Badge
 */
export interface Badge {
    /**
     * 뱃지의 ID입니다.
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
     * 뱃지의 이름입니다.
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
     *
     * @type {BadgeTier}
     * @memberof Badge
     */
    badgeTier?: BadgeTier;
    /**
     *
     * @type {BadgeCategory}
     * @memberof Badge
     */
    badgeCategory?: BadgeCategory;
}
/**
 * 뱃지 종류입니다.
 * @export
 * @enum {string}
 */
export declare enum BadgeCategory {
    Achievement = "achievement",
    Season = "season",
    Event = "event",
    Contest = "contest"
}
/**
 * 뱃지 티어입니다.
 * @export
 * @enum {string}
 */
export declare enum BadgeTier {
    Bronze = "bronze",
    Silver = "silver",
    Gold = "gold",
    Master = "master"
}
/**
 * 클래스 치장입니다.
 * @export
 * @enum {string}
 */
export declare enum ClassDecoration {
    None = "none",
    Silver = "silver",
    Gold = "gold"
}
/**
 * 코인샵에서 판매하고 있는 상품입니다.
 * @export
 * @interface CoinshopProduct
 */
export interface CoinshopProduct {
    /**
     * 상품의 ID입니다.
     * @type {number}
     * @memberof CoinshopProduct
     */
    skuId: number;
    /**
     *
     * @type {Item}
     * @memberof CoinshopProduct
     */
    item?: Item;
    /**
     * 1회 구매에 획득하는 개수입니다.
     * @type {number}
     * @memberof CoinshopProduct
     */
    units?: number;
    /**
     * 가격입니다. 별조각의 경우 나누기 100을 해야 표시 가격이 됩니다.
     * @type {number}
     * @memberof CoinshopProduct
     */
    price?: number;
    /**
     * 가격의 단위입니다.
     * @type {string}
     * @memberof CoinshopProduct
     */
    priceUnit?: CoinshopProductPriceUnitEnum;
    /**
     * 아이템 사용 시간의 제한 여부입니다.
     * @type {boolean}
     * @memberof CoinshopProduct
     */
    itemUseTimeLimited?: boolean;
    /**
     * 아이템 구매 시간의 제한 여부입니다.
     * @type {boolean}
     * @memberof CoinshopProduct
     */
    itemSellTimeLimited?: boolean;
}
/**
* @export
* @enum {string}
*/
export declare enum CoinshopProductPriceUnitEnum {
    Coins = "coins",
    Stardusts = "stardusts"
}
/**
 * 사용자 정보입니다.
 * @export
 * @interface FullUser
 */
export interface FullUser {
    /**
     * 사용자명입니다.
     * @type {string}
     * @memberof FullUser
     */
    handle: string;
    /**
     * 사용자의 자기소개입니다.
     * @type {string}
     * @memberof FullUser
     */
    bio: string;
    /**
     * 사용자가 지금 사용 중인 뱃지의 아이디입니다.
     * @type {string}
     * @memberof FullUser
     */
    badgeId?: string | null;
    /**
     * 사용자가 지금 사용 중인 배경의 아이디입니다.
     * @type {string}
     * @memberof FullUser
     */
    backgroundId: string;
    /**
     * 사용자의 프로필 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof FullUser
     */
    profileImageUrl: string | null;
    /**
     * 사용자가 푼 문제 수입니다.
     * @type {number}
     * @memberof FullUser
     */
    solvedCount: number;
    /**
     * 사용자가 난이도 기여를 한 횟수입니다.
     * @type {number}
     * @memberof FullUser
     */
    voteCount: number;
    /**
     * 사용자가 여태까지 획득한 경험치량입니다.
     * @type {number}
     * @memberof FullUser
     */
    exp: number;
    /**
     * Bronze V를 1, Bronze IV를 2, ..., Ruby I을 30, Master를 31로 표현하는 사용자 티어입니다.
     * 자세한 값 정보는 표1. 수치 - 이름 표를 펼쳐 참고하십시오.
     *
     * <details>
     *   <summary>
     *     표1. 수치 - 이름 표
     *   </summary>
     *
     *   | 수치 | 이름         |
     *   | ---: | ------------ |
     *   |    1 | Bronze V     |
     *   |    2 | Bronze IV    |
     *   |    3 | Bronze III   |
     *   |    4 | Bronze II    |
     *   |    5 | Bronze I     |
     *   |    6 | Silver V     |
     *   |    7 | Silver IV    |
     *   |    8 | Silver III   |
     *   |    9 | Silver II    |
     *   |   10 | Silver I     |
     *   |   11 | Gold V       |
     *   |   12 | Gold IV      |
     *   |   13 | Gold III     |
     *   |   14 | Gold II      |
     *   |   15 | Gold I       |
     *   |   16 | Platinum V   |
     *   |   17 | Platinum IV  |
     *   |   18 | Platinum III |
     *   |   19 | Platinum II  |
     *   |   20 | Platinum I   |
     *   |   21 | Diamond V    |
     *   |   22 | Diamond IV   |
     *   |   23 | Diamond III  |
     *   |   24 | Diamond II   |
     *   |   25 | Diamond I    |
     *   |   26 | Ruby V       |
     *   |   27 | Ruby IV      |
     *   |   28 | Ruby III     |
     *   |   29 | Ruby II      |
     *   |   30 | Ruby I       |
     *   |   31 | Master       |
     *
     * </details>
     * @type {number}
     * @memberof FullUser
     */
    tier: number;
    /**
     * 사용자의 레이팅입니다.
     * @type {number}
     * @memberof FullUser
     */
    rating: number;
    /**
     * 푼 문제의 난이도 합으로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof FullUser
     */
    ratingByProblemsSum: number;
    /**
     * 취득한 클래스에 따른 사용자의 레이팅입니다.
     * @type {number}
     * @memberof FullUser
     */
    ratingByClass: number;
    /**
     * 푼 문제 수로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof FullUser
     */
    ratingBySolvedCount: number;
    /**
     * 문제 난이도에 기여한 횟수로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof FullUser
     */
    ratingByVoteCount: number;
    /**
     * 사용자가 취득한 Class입니다.
     * @type {number}
     * @memberof FullUser
     */
    _class: number;
    /**
     *
     * @type {ClassDecoration}
     * @memberof FullUser
     */
    classDecoration: ClassDecoration;
    /**
     * 사용자의 라이벌 수입니다.
     * @type {number}
     * @memberof FullUser
     */
    rivalCount: number;
    /**
     * 사용자의 역라이벌 수입니다.
     * @type {number}
     * @memberof FullUser
     */
    reverseRivalCount: number;
    /**
     * 최대 연속 문제 풀이일 수입니다.
     * @type {number}
     * @memberof FullUser
     */
    maxStreak: number;
    /**
     * 사용자가 가지고 있는 코인의 수입니다.
     * @type {number}
     * @memberof FullUser
     */
    coins: number;
    /**
     * 사용자가 가지고 있는 별가루의 수입니다.
     * @type {number}
     * @memberof FullUser
     */
    stardusts: number;
    /**
     * 사용자가 가입한 날짜입니다.
     * @type {Date}
     * @memberof FullUser
     */
    joinedAt: Date;
    /**
     * 사용자의 정지 종료 날짜입니다.
     * @type {Date}
     * @memberof FullUser
     */
    bannedUntil: Date;
    /**
     * 사용자의 PRO 종료 날짜입니다.
     * @type {Date}
     * @memberof FullUser
     */
    proUntil: Date;
    /**
     * 사용자의 순위입니다.
     * @type {number}
     * @memberof FullUser
     */
    rank: number;
    /**
     * 라이벌 여부입니다.
     * @type {boolean}
     * @memberof FullUser
     */
    isRival?: boolean;
    /**
     * 역라이벌 여부입니다.
     * @type {boolean}
     * @memberof FullUser
     */
    isReverseRival?: boolean;
}
/**
 *
 * @export
 * @interface FullUserAllOf
 */
export interface FullUserAllOf {
    /**
     * 라이벌 여부입니다.
     * @type {boolean}
     * @memberof FullUserAllOf
     */
    isRival?: boolean;
    /**
     * 역라이벌 여부입니다.
     * @type {boolean}
     * @memberof FullUserAllOf
     */
    isReverseRival?: boolean;
}
/**
 * 난이도 아이콘 표시 정책입니다.
 * @export
 * @enum {string}
 */
export declare enum IconScheme {
    Default = "default",
    HideWarn = "hide-warn",
    Hide = "hide"
}
/**
 *
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * 리딤 코드입니다.
     * @type {string}
     * @memberof InlineObject
     */
    code?: string;
}
/**
 *
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
    /**
     * 업데이트할 설정의 이름입니다.
     * @type {string}
     * @memberof InlineObject1
     */
    key?: string;
    /**
     * 업데이트할 설정의 새로운 값입니다.
     * @type {object}
     * @memberof InlineObject1
     */
    value?: object;
}
/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 계정의 사용자 정보입니다.
     * @type {User & object}
     * @memberof InlineResponse200
     */
    user?: User & object;
    /**
     * 해당 계정의 사용자가 푼 문제 정보입니다.
     * @type {Array<InlineResponse200Solved>}
     * @memberof InlineResponse200
     */
    solved?: Array<InlineResponse200Solved>;
}
/**
 *
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 코인 → 별조각 환율입니다. 수수료 1%는 제외되어 있습니다.
     * @type {number}
     * @memberof InlineResponse2001
     */
    rate?: number;
}
/**
 *
 * @export
 * @interface InlineResponse20010
 */
export interface InlineResponse20010 {
    /**
     * 순위가 배정된 조직의 수입니다.
     * @type {number}
     * @memberof InlineResponse20010
     */
    count?: number;
    /**
     * 레이팅 순위로 정렬된 조직 목록입니다.
     * @type {Array<Organization>}
     * @memberof InlineResponse20010
     */
    items?: Array<Organization>;
}
/**
 *
 * @export
 * @interface InlineResponse20011
 */
export interface InlineResponse20011 {
    /**
     * 찾은 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse20011
     */
    count?: number;
    /**
     * 찾은 문제 목록입니다.
     * @type {Array<Problem>}
     * @memberof InlineResponse20011
     */
    items?: Array<Problem>;
}
/**
 *
 * @export
 * @interface InlineResponse20012
 */
export interface InlineResponse20012 {
    /**
     *
     * @type {Array<InlineResponse20012Autocomplete>}
     * @memberof InlineResponse20012
     */
    autocomplete?: Array<InlineResponse20012Autocomplete>;
    /**
     * 찾은 문제 목록입니다.
     * @type {Array<Problem>}
     * @memberof InlineResponse20012
     */
    problems?: Array<Problem>;
    /**
     * 찾은 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse20012
     */
    problemCount?: number;
    /**
     * 찾은 사용자 목록입니다.
     * @type {Array<User>}
     * @memberof InlineResponse20012
     */
    users?: Array<User>;
    /**
     * 찾은 사용자 수입니다.
     * @type {number}
     * @memberof InlineResponse20012
     */
    userCount?: number;
    /**
     * 찾은 태그 목록입니다.
     * @type {Array<ProblemTag>}
     * @memberof InlineResponse20012
     */
    tags?: Array<ProblemTag>;
    /**
     * 찾은 태그 수입니다.
     * @type {number}
     * @memberof InlineResponse20012
     */
    tagCount?: number;
}
/**
 *
 * @export
 * @interface InlineResponse20012Autocomplete
 */
export interface InlineResponse20012Autocomplete {
    /**
     * 자동완성 제목입니다. 해당 값으로 자동완성됩니다.
     * @type {string}
     * @memberof InlineResponse20012Autocomplete
     */
    caption?: string;
    /**
     * 자동완성 요소에 대한 설명입니다.
     * @type {string}
     * @memberof InlineResponse20012Autocomplete
     */
    description?: string;
}
/**
 *
 * @export
 * @interface InlineResponse20013
 */
export interface InlineResponse20013 {
    /**
     * 찾은 태그 수입니다.
     * @type {number}
     * @memberof InlineResponse20013
     */
    count?: number;
    /**
     * 찾은 태그 목록입니다.
     * @type {Array<ProblemTag>}
     * @memberof InlineResponse20013
     */
    items?: Array<ProblemTag>;
}
/**
 *
 * @export
 * @interface InlineResponse20014
 */
export interface InlineResponse20014 {
    /**
     * 찾은 사용자 수입니다.
     * @type {number}
     * @memberof InlineResponse20014
     */
    count?: number;
    /**
     * 찾은 사용자 목록입니다.
     * @type {Array<RankedUser>}
     * @memberof InlineResponse20014
     */
    items?: Array<RankedUser>;
}
/**
 *
 * @export
 * @interface InlineResponse20015
 */
export interface InlineResponse20015 {
    /**
     * Unrated를 0, Bronze V를 1, ... Ruby II를 29, Ruby I을 30으로 표현하는 문제 레벨입니다.
     * 자세한 값 정보는 표1. 수치 - 이름 표를 펼쳐 참고하십시오.
     *
     * <details>
     *   <summary>
     *     표1. 수치 - 이름 표
     *   </summary>
     *
     *   | 수치 | 이름         |
     *   | ---: | ------------ |
     *   |    0 | Unrated      |
     *   |    1 | Bronze V     |
     *   |    2 | Bronze IV    |
     *   |    3 | Bronze III   |
     *   |    4 | Bronze II    |
     *   |    5 | Bronze I     |
     *   |    6 | Silver V     |
     *   |    7 | Silver IV    |
     *   |    8 | Silver III   |
     *   |    9 | Silver II    |
     *   |   10 | Silver I     |
     *   |   11 | Gold V       |
     *   |   12 | Gold IV      |
     *   |   13 | Gold III     |
     *   |   14 | Gold II      |
     *   |   15 | Gold I       |
     *   |   16 | Platinum V   |
     *   |   17 | Platinum IV  |
     *   |   18 | Platinum III |
     *   |   19 | Platinum II  |
     *   |   20 | Platinum I   |
     *   |   21 | Diamond V    |
     *   |   22 | Diamond IV   |
     *   |   23 | Diamond III  |
     *   |   24 | Diamond II   |
     *   |   25 | Diamond I    |
     *   |   26 | Ruby V       |
     *   |   27 | Ruby IV      |
     *   |   28 | Ruby III     |
     *   |   29 | Ruby II      |
     *   |   30 | Ruby I       |
     *
     * </details>
     * @type {number}
     * @memberof InlineResponse20015
     */
    level?: number;
    /**
     * solved.ac에 등록된 해당 레벨의 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse20015
     */
    total?: number;
    /**
     * 사용자가 푼 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse20015
     */
    solved?: number;
    /**
     * 사용자가 부분 성공한 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse20015
     */
    partial?: number;
    /**
     * 사용자가 시도해본 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse20015
     */
    tried?: number;
    /**
     * 사용자가 해당 레벨에서 획득한 경험치의 합입니다.
     * @type {number}
     * @memberof InlineResponse20015
     */
    exp?: number;
}
/**
 *
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse2002
     */
    _class?: number;
    /**
     * 이 CLASS에 속한 에센셜이 아닌 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse2002
     */
    total?: number;
    /**
     * 이 CLASS에 속한 에센셜 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse2002
     */
    essentials?: number;
    /**
     * 이 CLASS를 취득하기 위한 최소 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse2002
     */
    criteria?: number;
}
/**
 *
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * Unrated를 0, Bronze V를 1, ... Ruby II를 29, Ruby I을 30으로 표현하는 문제 레벨입니다.
     * 자세한 값 정보는 표1. 수치 - 이름 표를 펼쳐 참고하십시오.
     *
     * <details>
     *   <summary>
     *     표1. 수치 - 이름 표
     *   </summary>
     *
     *   | 수치 | 이름         |
     *   | ---: | ------------ |
     *   |    0 | Unrated      |
     *   |    1 | Bronze V     |
     *   |    2 | Bronze IV    |
     *   |    3 | Bronze III   |
     *   |    4 | Bronze II    |
     *   |    5 | Bronze I     |
     *   |    6 | Silver V     |
     *   |    7 | Silver IV    |
     *   |    8 | Silver III   |
     *   |    9 | Silver II    |
     *   |   10 | Silver I     |
     *   |   11 | Gold V       |
     *   |   12 | Gold IV      |
     *   |   13 | Gold III     |
     *   |   14 | Gold II      |
     *   |   15 | Gold I       |
     *   |   16 | Platinum V   |
     *   |   17 | Platinum IV  |
     *   |   18 | Platinum III |
     *   |   19 | Platinum II  |
     *   |   20 | Platinum I   |
     *   |   21 | Diamond V    |
     *   |   22 | Diamond IV   |
     *   |   23 | Diamond III  |
     *   |   24 | Diamond II   |
     *   |   25 | Diamond I    |
     *   |   26 | Ruby V       |
     *   |   27 | Ruby IV      |
     *   |   28 | Ruby III     |
     *   |   29 | Ruby II      |
     *   |   30 | Ruby I       |
     *
     * </details>
     * @type {number}
     * @memberof InlineResponse2003
     */
    level?: number;
    /**
     * 이 문제 수준인 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse2003
     */
    count?: number;
}
/**
 *
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
    /**
     * 순위가 배정된 사용자의 수입니다.
     * @type {number}
     * @memberof InlineResponse2004
     */
    count?: number;
    /**
     * 티어 순위로 정렬된 사용자 목록입니다.
     * @type {Array<User>}
     * @memberof InlineResponse2004
     */
    items?: Array<User>;
}
/**
 *
 * @export
 * @interface InlineResponse2005
 */
export interface InlineResponse2005 {
    /**
     * 순위가 배정된 사용자의 수입니다.
     * @type {number}
     * @memberof InlineResponse2005
     */
    count?: number;
    /**
     * CLASS 순위로 정렬된 사용자 목록입니다.
     * @type {Array<User>}
     * @memberof InlineResponse2005
     */
    items?: Array<User>;
}
/**
 *
 * @export
 * @interface InlineResponse2006
 */
export interface InlineResponse2006 {
    /**
     * 순위가 배정된 사용자의 수입니다.
     * @type {number}
     * @memberof InlineResponse2006
     */
    count?: number;
    /**
     * 최장 스트릭 순위로 정렬된 사용자 목록입니다.
     * @type {Array<User>}
     * @memberof InlineResponse2006
     */
    items?: Array<User>;
}
/**
 *
 * @export
 * @interface InlineResponse2007
 */
export interface InlineResponse2007 {
    /**
     * 순위가 배정된 사용자의 수입니다.
     * @type {number}
     * @memberof InlineResponse2007
     */
    count?: number;
    /**
     * 기여 순위로 정렬된 사용자 목록입니다.
     * @type {Array<User>}
     * @memberof InlineResponse2007
     */
    items?: Array<User>;
}
/**
 *
 * @export
 * @interface InlineResponse2008
 */
export interface InlineResponse2008 {
    /**
     * 순위가 배정된 라이벌의 수입니다.
     * @type {number}
     * @memberof InlineResponse2008
     */
    count?: number;
    /**
     * 티어 순위로 정렬된 라이벌 목록입니다.
     * @type {Array<User>}
     * @memberof InlineResponse2008
     */
    items?: Array<User>;
}
/**
 *
 * @export
 * @interface InlineResponse2009
 */
export interface InlineResponse2009 {
    /**
     * 순위가 배정된 역라이벌의 수입니다.
     * @type {number}
     * @memberof InlineResponse2009
     */
    count?: number;
    /**
     * 티어 순위로 정렬된 역라이벌 목록입니다.
     * @type {Array<User>}
     * @memberof InlineResponse2009
     */
    items?: Array<User>;
}
/**
 *
 * @export
 * @interface InlineResponse200Solved
 */
export interface InlineResponse200Solved {
    /**
     * 문제 ID입니다.
     * @type {number}
     * @memberof InlineResponse200Solved
     */
    id?: number;
    /**
     * 현재 문제 풀이 상태입니다. 알려진 값은 다음이 있습니다.
     * `"solved"`, `"tried"`
     * @type {string}
     * @memberof InlineResponse200Solved
     */
    status?: string;
}
/**
 * 사용자가 사용할 수 있는 아이템입니다.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * 아이템의 ID입니다.
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
     * 최대 소유 가능 개수입니다. 호출자에 따라 달라질 수 있습니다.
     * @type {number}
     * @memberof Item
     */
    inventoryMaxUnits: number;
    /**
     * 아이템 사용 가능 여부입니다.
     * @type {boolean}
     * @memberof Item
     */
    usable: boolean;
    /**
     * 아이템의 이름입니다.
     * @type {string}
     * @memberof Item
     */
    displayName: string;
    /**
     * 아이템의 설명입니다.
     * @type {string}
     * @memberof Item
     */
    displayDescription: string;
}
/**
 * 언어입니다.
 * @export
 * @enum {string}
 */
export declare enum Language {
    Ko = "ko",
    En = "en"
}
/**
 *
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * 조직의 ID입니다.
     * @type {number}
     * @memberof Organization
     */
    organizationId?: number;
    /**
     * 조직의 이름입니다.
     * @type {string}
     * @memberof Organization
     */
    name?: string;
    /**
     * 조직의 구분입니다.
     * @type {string}
     * @memberof Organization
     */
    type?: OrganizationTypeEnum;
    /**
     * 조직의 레이팅입니다.
     * @type {number}
     * @memberof Organization
     */
    rating?: number;
    /**
     * 조직에 포함된 사용자의 수입니다.
     * @type {number}
     * @memberof Organization
     */
    userCount?: number;
    /**
     * 조직의 총 난이도 기여 수입니다.
     * @type {number}
     * @memberof Organization
     */
    voteCount?: number;
    /**
     * 조직의 총 푼 문제 수입니다.
     * @type {number}
     * @memberof Organization
     */
    solvedCount?: number;
    /**
     * 조직의 색깔입니다.
     * @type {string}
     * @memberof Organization
     */
    color?: string;
}
/**
* @export
* @enum {string}
*/
export declare enum OrganizationTypeEnum {
    Community = "community",
    University = "university",
    Company = "company",
    HighSchool = "high_school"
}
/**
 * 문제 정보입니다.
 * @export
 * @interface Problem
 */
export interface Problem {
    /**
     * 문제 ID입니다.
     * @type {number}
     * @memberof Problem
     */
    problemId?: number;
    /**
     * 한국어 문제 제목입니다. HTML 엔티티나 LaTeX 수식을 포함할 수 있습니다.
     * @type {string}
     * @memberof Problem
     */
    titleKo?: string;
    /**
     * 채점 가능 여부입니다.
     * @type {boolean}
     * @memberof Problem
     */
    isSolvable?: boolean;
    /**
     * 부분 점수 혹은 서브태스크 문제 여부입니다.
     * @type {boolean}
     * @memberof Problem
     */
    isPartial?: boolean;
    /**
     * 맞은 사람 수입니다.
     * @type {number}
     * @memberof Problem
     */
    acceptedUserCount?: number;
    /**
     * Unrated를 0, Bronze V를 1, ... Ruby II를 29, Ruby I을 30으로 표현하는 문제 레벨입니다.
     * 자세한 값 정보는 표1. 수치 - 이름 표를 펼쳐 참고하십시오.
     *
     * <details>
     *   <summary>
     *     표1. 수치 - 이름 표
     *   </summary>
     *
     *   | 수치 | 이름         |
     *   | ---: | ------------ |
     *   |    0 | Unrated      |
     *   |    1 | Bronze V     |
     *   |    2 | Bronze IV    |
     *   |    3 | Bronze III   |
     *   |    4 | Bronze II    |
     *   |    5 | Bronze I     |
     *   |    6 | Silver V     |
     *   |    7 | Silver IV    |
     *   |    8 | Silver III   |
     *   |    9 | Silver II    |
     *   |   10 | Silver I     |
     *   |   11 | Gold V       |
     *   |   12 | Gold IV      |
     *   |   13 | Gold III     |
     *   |   14 | Gold II      |
     *   |   15 | Gold I       |
     *   |   16 | Platinum V   |
     *   |   17 | Platinum IV  |
     *   |   18 | Platinum III |
     *   |   19 | Platinum II  |
     *   |   20 | Platinum I   |
     *   |   21 | Diamond V    |
     *   |   22 | Diamond IV   |
     *   |   23 | Diamond III  |
     *   |   24 | Diamond II   |
     *   |   25 | Diamond I    |
     *   |   26 | Ruby V       |
     *   |   27 | Ruby IV      |
     *   |   28 | Ruby III     |
     *   |   29 | Ruby II      |
     *   |   30 | Ruby I       |
     *
     * </details>
     * @type {number}
     * @memberof Problem
     */
    level?: number;
    /**
     * 난이도 기여자의 수입니다.
     * @type {number}
     * @memberof Problem
     */
    votedUserCount?: number;
    /**
     * 난이도 기여 제한 여부입니다.
     * @type {boolean}
     * @memberof Problem
     */
    isLevelLocked?: boolean;
    /**
     * 평균 시도 횟수입니다.
     * @type {number}
     * @memberof Problem
     */
    averageTries?: number;
}
/**
 *
 * @export
 * @interface ProblemTag
 */
export interface ProblemTag {
    /**
     * 태그의 ID입니다.
     * @type {string}
     * @memberof ProblemTag
     */
    key?: string;
    /**
     *
     * @type {boolean}
     * @memberof ProblemTag
     */
    isMeta?: boolean;
    /**
     * 백준에서 사용되는 이 태그의 ID입니다.
     * @type {number}
     * @memberof ProblemTag
     */
    bojTagId?: number;
    /**
     * 이 태그를 포함하는 문제의 수입니다.
     * @type {number}
     * @memberof ProblemTag
     */
    problemCount?: number;
    /**
     * 언어별 태그의 이름 목록입니다.
     * @type {Array<ProblemTagDisplayNames>}
     * @memberof ProblemTag
     */
    displayNames?: Array<ProblemTagDisplayNames>;
    /**
     * 태그의 별칭입니다.
     * @type {Array<ProblemTagAliases>}
     * @memberof ProblemTag
     */
    aliases?: Array<ProblemTagAliases>;
}
/**
 *
 * @export
 * @interface ProblemTagAliases
 */
export interface ProblemTagAliases {
    /**
     * 별칭입니다.
     * @type {string}
     * @memberof ProblemTagAliases
     */
    alias?: string;
}
/**
 *
 * @export
 * @interface ProblemTagDisplayNames
 */
export interface ProblemTagDisplayNames {
    /**
     *
     * @type {Language}
     * @memberof ProblemTagDisplayNames
     */
    language?: Language;
    /**
     * 태그의 이름입니다.
     * @type {string}
     * @memberof ProblemTagDisplayNames
     */
    name?: string;
    /**
     * 태그의 짧은 이름입니다.
     * @type {string}
     * @memberof ProblemTagDisplayNames
     */
    _short?: string;
}
/**
 * 사용자 정보입니다.
 * @export
 * @interface RankedUser
 */
export interface RankedUser {
    /**
     * 사용자명입니다.
     * @type {string}
     * @memberof RankedUser
     */
    handle: string;
    /**
     * 사용자의 자기소개입니다.
     * @type {string}
     * @memberof RankedUser
     */
    bio: string;
    /**
     * 사용자가 지금 사용 중인 뱃지의 아이디입니다.
     * @type {string}
     * @memberof RankedUser
     */
    badgeId?: string | null;
    /**
     * 사용자가 지금 사용 중인 배경의 아이디입니다.
     * @type {string}
     * @memberof RankedUser
     */
    backgroundId: string;
    /**
     * 사용자의 프로필 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof RankedUser
     */
    profileImageUrl: string | null;
    /**
     * 사용자가 푼 문제 수입니다.
     * @type {number}
     * @memberof RankedUser
     */
    solvedCount: number;
    /**
     * 사용자가 난이도 기여를 한 횟수입니다.
     * @type {number}
     * @memberof RankedUser
     */
    voteCount: number;
    /**
     * 사용자가 여태까지 획득한 경험치량입니다.
     * @type {number}
     * @memberof RankedUser
     */
    exp: number;
    /**
     * Bronze V를 1, Bronze IV를 2, ..., Ruby I을 30, Master를 31로 표현하는 사용자 티어입니다.
     * 자세한 값 정보는 표1. 수치 - 이름 표를 펼쳐 참고하십시오.
     *
     * <details>
     *   <summary>
     *     표1. 수치 - 이름 표
     *   </summary>
     *
     *   | 수치 | 이름         |
     *   | ---: | ------------ |
     *   |    1 | Bronze V     |
     *   |    2 | Bronze IV    |
     *   |    3 | Bronze III   |
     *   |    4 | Bronze II    |
     *   |    5 | Bronze I     |
     *   |    6 | Silver V     |
     *   |    7 | Silver IV    |
     *   |    8 | Silver III   |
     *   |    9 | Silver II    |
     *   |   10 | Silver I     |
     *   |   11 | Gold V       |
     *   |   12 | Gold IV      |
     *   |   13 | Gold III     |
     *   |   14 | Gold II      |
     *   |   15 | Gold I       |
     *   |   16 | Platinum V   |
     *   |   17 | Platinum IV  |
     *   |   18 | Platinum III |
     *   |   19 | Platinum II  |
     *   |   20 | Platinum I   |
     *   |   21 | Diamond V    |
     *   |   22 | Diamond IV   |
     *   |   23 | Diamond III  |
     *   |   24 | Diamond II   |
     *   |   25 | Diamond I    |
     *   |   26 | Ruby V       |
     *   |   27 | Ruby IV      |
     *   |   28 | Ruby III     |
     *   |   29 | Ruby II      |
     *   |   30 | Ruby I       |
     *   |   31 | Master       |
     *
     * </details>
     * @type {number}
     * @memberof RankedUser
     */
    tier: number;
    /**
     * 사용자의 레이팅입니다.
     * @type {number}
     * @memberof RankedUser
     */
    rating: number;
    /**
     * 푼 문제의 난이도 합으로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof RankedUser
     */
    ratingByProblemsSum: number;
    /**
     * 취득한 클래스에 따른 사용자의 레이팅입니다.
     * @type {number}
     * @memberof RankedUser
     */
    ratingByClass: number;
    /**
     * 푼 문제 수로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof RankedUser
     */
    ratingBySolvedCount: number;
    /**
     * 문제 난이도에 기여한 횟수로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof RankedUser
     */
    ratingByVoteCount: number;
    /**
     * 사용자가 취득한 Class입니다.
     * @type {number}
     * @memberof RankedUser
     */
    _class: number;
    /**
     *
     * @type {ClassDecoration}
     * @memberof RankedUser
     */
    classDecoration: ClassDecoration;
    /**
     * 사용자의 라이벌 수입니다.
     * @type {number}
     * @memberof RankedUser
     */
    rivalCount: number;
    /**
     * 사용자의 역라이벌 수입니다.
     * @type {number}
     * @memberof RankedUser
     */
    reverseRivalCount: number;
    /**
     * 최대 연속 문제 풀이일 수입니다.
     * @type {number}
     * @memberof RankedUser
     */
    maxStreak: number;
    /**
     * 사용자가 가지고 있는 코인의 수입니다.
     * @type {number}
     * @memberof RankedUser
     */
    coins: number;
    /**
     * 사용자가 가지고 있는 별가루의 수입니다.
     * @type {number}
     * @memberof RankedUser
     */
    stardusts: number;
    /**
     * 사용자가 가입한 날짜입니다.
     * @type {Date}
     * @memberof RankedUser
     */
    joinedAt: Date;
    /**
     * 사용자의 정지 종료 날짜입니다.
     * @type {Date}
     * @memberof RankedUser
     */
    bannedUntil: Date;
    /**
     * 사용자의 PRO 종료 날짜입니다.
     * @type {Date}
     * @memberof RankedUser
     */
    proUntil: Date;
    /**
     * 사용자의 순위입니다.
     * @type {number}
     * @memberof RankedUser
     */
    rank: number;
}
/**
 *
 * @export
 * @interface RankedUserAllOf
 */
export interface RankedUserAllOf {
    /**
     * 사용자의 순위입니다.
     * @type {number}
     * @memberof RankedUserAllOf
     */
    rank?: number;
}
/**
 * 사용자의 solved.ac 설정 정보입니다.
 * @export
 * @interface Settings
 */
export interface Settings {
    /**
     * 사이트 디자인 테마입니다.
     * @type {string}
     * @memberof Settings
     */
    screenTheme?: SettingsScreenThemeEnum;
    /**
     *
     * @type {Language}
     * @memberof Settings
     */
    tagDisplayLanguage?: Language;
    /**
     *
     * @type {IconScheme}
     * @memberof Settings
     */
    iconSchemeSolved?: IconScheme;
    /**
     *
     * @type {IconScheme}
     * @memberof Settings
     */
    iconSchemeNotSolved?: IconScheme;
    /**
     * 문제 목록의 기본 정렬 순서입니다.
     * @type {string}
     * @memberof Settings
     */
    problemSortBy?: SettingsProblemSortByEnum;
    /**
     * 트윗에 핸들을 포함하는지 여부입니다.
     * @type {boolean}
     * @memberof Settings
     */
    twitterPostHandle?: boolean;
    /**
     * CLASS가 올랐을 때 트윗을 보내는지 여부입니다.
     * @type {boolean}
     * @memberof Settings
     */
    twitterPostOnClassIncrease?: boolean;
    /**
     * 문제를 처음 해결했을 때 트윗을 보내는지 여부입니다.
     * @type {boolean}
     * @memberof Settings
     */
    twitterPostOnProblemSolve?: boolean;
    /**
     * AC 레이팅이 올랐을 때 트윗을 보내는지 여부입니다.
     * @type {boolean}
     * @memberof Settings
     */
    twitterPostOnRatingIncrease?: boolean;
    /**
     * 티어가 올랐을 때 트윗을 보내는지 여부입니다.
     * @type {boolean}
     * @memberof Settings
     */
    twitterPostOnTierIncrease?: boolean;
}
/**
* @export
* @enum {string}
*/
export declare enum SettingsScreenThemeEnum {
    Default = "default",
    Light = "light",
    Dark = "dark",
    Black = "black"
} /**
* @export
* @enum {string}
*/
export declare enum SettingsProblemSortByEnum {
    Id = "id",
    Level = "level",
    Title = "title",
    Solved = "solved",
    AverageTry = "average_try",
    Random = "random"
}
/**
 *
 * @export
 * @interface SolvedAcStatistics
 */
export interface SolvedAcStatistics {
    /**
     * 여태까지 색인된 백준 문제 수입니다.
     * @type {number}
     * @memberof SolvedAcStatistics
     */
    problemCount?: number;
    /**
     * 여태까지 난이도가 기여된 백준 문제 수입니다.
     * @type {number}
     * @memberof SolvedAcStatistics
     */
    problemVotedCount?: number;
    /**
     * 여태까지 등록한 사용자 수입니다.
     * @type {number}
     * @memberof SolvedAcStatistics
     */
    userCount?: number;
    /**
     * 여태까지 난이도에 기여한 사용자 수입니다.
     * @type {number}
     * @memberof SolvedAcStatistics
     */
    contributorCount?: number;
    /**
     * 여태까지 이루어진 난이도 기여의 수입니다.
     * @type {number}
     * @memberof SolvedAcStatistics
     */
    contributionCount?: number;
}
/**
 * 문제 정보입니다.
 * @export
 * @interface TaggedProblem
 */
export interface TaggedProblem {
    /**
     * 문제 ID입니다.
     * @type {number}
     * @memberof TaggedProblem
     */
    problemId?: number;
    /**
     * 한국어 문제 제목입니다. HTML 엔티티나 LaTeX 수식을 포함할 수 있습니다.
     * @type {string}
     * @memberof TaggedProblem
     */
    titleKo?: string;
    /**
     * 채점 가능 여부입니다.
     * @type {boolean}
     * @memberof TaggedProblem
     */
    isSolvable?: boolean;
    /**
     * 부분 점수 혹은 서브태스크 문제 여부입니다.
     * @type {boolean}
     * @memberof TaggedProblem
     */
    isPartial?: boolean;
    /**
     * 맞은 사람 수입니다.
     * @type {number}
     * @memberof TaggedProblem
     */
    acceptedUserCount?: number;
    /**
     * Unrated를 0, Bronze V를 1, ... Ruby II를 29, Ruby I을 30으로 표현하는 문제 레벨입니다.
     * 자세한 값 정보는 표1. 수치 - 이름 표를 펼쳐 참고하십시오.
     *
     * <details>
     *   <summary>
     *     표1. 수치 - 이름 표
     *   </summary>
     *
     *   | 수치 | 이름         |
     *   | ---: | ------------ |
     *   |    0 | Unrated      |
     *   |    1 | Bronze V     |
     *   |    2 | Bronze IV    |
     *   |    3 | Bronze III   |
     *   |    4 | Bronze II    |
     *   |    5 | Bronze I     |
     *   |    6 | Silver V     |
     *   |    7 | Silver IV    |
     *   |    8 | Silver III   |
     *   |    9 | Silver II    |
     *   |   10 | Silver I     |
     *   |   11 | Gold V       |
     *   |   12 | Gold IV      |
     *   |   13 | Gold III     |
     *   |   14 | Gold II      |
     *   |   15 | Gold I       |
     *   |   16 | Platinum V   |
     *   |   17 | Platinum IV  |
     *   |   18 | Platinum III |
     *   |   19 | Platinum II  |
     *   |   20 | Platinum I   |
     *   |   21 | Diamond V    |
     *   |   22 | Diamond IV   |
     *   |   23 | Diamond III  |
     *   |   24 | Diamond II   |
     *   |   25 | Diamond I    |
     *   |   26 | Ruby V       |
     *   |   27 | Ruby IV      |
     *   |   28 | Ruby III     |
     *   |   29 | Ruby II      |
     *   |   30 | Ruby I       |
     *
     * </details>
     * @type {number}
     * @memberof TaggedProblem
     */
    level?: number;
    /**
     * 난이도 기여자의 수입니다.
     * @type {number}
     * @memberof TaggedProblem
     */
    votedUserCount?: number;
    /**
     * 난이도 기여 제한 여부입니다.
     * @type {boolean}
     * @memberof TaggedProblem
     */
    isLevelLocked?: boolean;
    /**
     * 평균 시도 횟수입니다.
     * @type {number}
     * @memberof TaggedProblem
     */
    averageTries?: number;
    /**
     * 태그 목록입니다.
     * @type {Array<ProblemTag>}
     * @memberof TaggedProblem
     */
    tags?: Array<ProblemTag>;
}
/**
 *
 * @export
 * @interface TaggedProblemAllOf
 */
export interface TaggedProblemAllOf {
    /**
     * 태그 목록입니다.
     * @type {Array<ProblemTag>}
     * @memberof TaggedProblemAllOf
     */
    tags?: Array<ProblemTag>;
}
/**
 * 사용자 정보입니다.
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
     * 사용자의 자기소개입니다.
     * @type {string}
     * @memberof User
     */
    bio: string;
    /**
     * 사용자가 지금 사용 중인 뱃지의 아이디입니다.
     * @type {string}
     * @memberof User
     */
    badgeId?: string | null;
    /**
     * 사용자가 지금 사용 중인 배경의 아이디입니다.
     * @type {string}
     * @memberof User
     */
    backgroundId: string;
    /**
     * 사용자의 프로필 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof User
     */
    profileImageUrl: string | null;
    /**
     * 사용자가 푼 문제 수입니다.
     * @type {number}
     * @memberof User
     */
    solvedCount: number;
    /**
     * 사용자가 난이도 기여를 한 횟수입니다.
     * @type {number}
     * @memberof User
     */
    voteCount: number;
    /**
     * 사용자가 여태까지 획득한 경험치량입니다.
     * @type {number}
     * @memberof User
     */
    exp: number;
    /**
     * Bronze V를 1, Bronze IV를 2, ..., Ruby I을 30, Master를 31로 표현하는 사용자 티어입니다.
     * 자세한 값 정보는 표1. 수치 - 이름 표를 펼쳐 참고하십시오.
     *
     * <details>
     *   <summary>
     *     표1. 수치 - 이름 표
     *   </summary>
     *
     *   | 수치 | 이름         |
     *   | ---: | ------------ |
     *   |    1 | Bronze V     |
     *   |    2 | Bronze IV    |
     *   |    3 | Bronze III   |
     *   |    4 | Bronze II    |
     *   |    5 | Bronze I     |
     *   |    6 | Silver V     |
     *   |    7 | Silver IV    |
     *   |    8 | Silver III   |
     *   |    9 | Silver II    |
     *   |   10 | Silver I     |
     *   |   11 | Gold V       |
     *   |   12 | Gold IV      |
     *   |   13 | Gold III     |
     *   |   14 | Gold II      |
     *   |   15 | Gold I       |
     *   |   16 | Platinum V   |
     *   |   17 | Platinum IV  |
     *   |   18 | Platinum III |
     *   |   19 | Platinum II  |
     *   |   20 | Platinum I   |
     *   |   21 | Diamond V    |
     *   |   22 | Diamond IV   |
     *   |   23 | Diamond III  |
     *   |   24 | Diamond II   |
     *   |   25 | Diamond I    |
     *   |   26 | Ruby V       |
     *   |   27 | Ruby IV      |
     *   |   28 | Ruby III     |
     *   |   29 | Ruby II      |
     *   |   30 | Ruby I       |
     *   |   31 | Master       |
     *
     * </details>
     * @type {number}
     * @memberof User
     */
    tier: number;
    /**
     * 사용자의 레이팅입니다.
     * @type {number}
     * @memberof User
     */
    rating: number;
    /**
     * 푼 문제의 난이도 합으로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof User
     */
    ratingByProblemsSum: number;
    /**
     * 취득한 클래스에 따른 사용자의 레이팅입니다.
     * @type {number}
     * @memberof User
     */
    ratingByClass: number;
    /**
     * 푼 문제 수로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof User
     */
    ratingBySolvedCount: number;
    /**
     * 문제 난이도에 기여한 횟수로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof User
     */
    ratingByVoteCount: number;
    /**
     * 사용자가 취득한 Class입니다.
     * @type {number}
     * @memberof User
     */
    _class: number;
    /**
     *
     * @type {ClassDecoration}
     * @memberof User
     */
    classDecoration: ClassDecoration;
    /**
     * 사용자의 라이벌 수입니다.
     * @type {number}
     * @memberof User
     */
    rivalCount: number;
    /**
     * 사용자의 역라이벌 수입니다.
     * @type {number}
     * @memberof User
     */
    reverseRivalCount: number;
    /**
     * 최대 연속 문제 풀이일 수입니다.
     * @type {number}
     * @memberof User
     */
    maxStreak: number;
    /**
     * 사용자가 가지고 있는 코인의 수입니다.
     * @type {number}
     * @memberof User
     */
    coins: number;
    /**
     * 사용자가 가지고 있는 별가루의 수입니다.
     * @type {number}
     * @memberof User
     */
    stardusts: number;
    /**
     * 사용자가 가입한 날짜입니다.
     * @type {Date}
     * @memberof User
     */
    joinedAt: Date;
    /**
     * 사용자의 정지 종료 날짜입니다.
     * @type {Date}
     * @memberof User
     */
    bannedUntil: Date;
    /**
     * 사용자의 PRO 종료 날짜입니다.
     * @type {Date}
     * @memberof User
     */
    proUntil: Date;
    /**
     * 사용자의 순위입니다.
     * @type {number}
     * @memberof User
     */
    rank: number;
}
