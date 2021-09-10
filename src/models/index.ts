/* tslint:disable */
/* eslint-disable */
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
}
/**
 * 난이도 아이콘 표시 정책입니다.
 * @export
 * @enum {string}
 */
export enum IconScheme {
    Default = 'default',
    HideWarn = 'hide-warn',
    Hide = 'hide'
}
/**
 * 
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * 업데이트할 설정의 이름입니다.
     * @type {string}
     * @memberof InlineObject
     */
    key?: string;
    /**
     * 업데이트할 설정의 새로운 값입니다.
     * @type {object}
     * @memberof InlineObject
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
     * @type {Schema & object}
     * @memberof InlineResponse200
     */
    user?: Schema & object;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
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
     * @memberof InlineResponse2001
     */
    level?: number;
    /**
     * 이 문제 수준인 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse2001
     */
    count?: number;
}
/**
 * 
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 찾은 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse2002
     */
    count?: number;
    /**
     * 찾은 문제 목록입니다.
     * @type {Array<Schema4>}
     * @memberof InlineResponse2002
     */
    items?: Array<Schema4>;
}
/**
 * 
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * 
     * @type {Array<InlineResponse2003Autocomplete>}
     * @memberof InlineResponse2003
     */
    autocomplete?: Array<InlineResponse2003Autocomplete>;
    /**
     * 찾은 문제 목록입니다.
     * @type {Array<Schema4>}
     * @memberof InlineResponse2003
     */
    problems?: Array<Schema4>;
    /**
     * 찾은 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse2003
     */
    problemCount?: number;
    /**
     * 찾은 사용자 목록입니다.
     * @type {Array<Schema>}
     * @memberof InlineResponse2003
     */
    users?: Array<Schema>;
    /**
     * 찾은 사용자 수입니다.
     * @type {number}
     * @memberof InlineResponse2003
     */
    userCount?: number;
    /**
     * 찾은 태그 목록입니다.
     * @type {Array<Schema5>}
     * @memberof InlineResponse2003
     */
    tags?: Array<Schema5>;
    /**
     * 찾은 태그 수입니다.
     * @type {number}
     * @memberof InlineResponse2003
     */
    tagCount?: number;
}
/**
 * 
 * @export
 * @interface InlineResponse2003Autocomplete
 */
export interface InlineResponse2003Autocomplete {
    /**
     * 자동완성 제목입니다. 해당 값으로 자동완성됩니다.
     * @type {string}
     * @memberof InlineResponse2003Autocomplete
     */
    caption?: string;
    /**
     * 자동완성 요소에 대한 설명입니다.
     * @type {string}
     * @memberof InlineResponse2003Autocomplete
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
    /**
     * 찾은 태그 수입니다.
     * @type {number}
     * @memberof InlineResponse2004
     */
    count?: number;
    /**
     * 찾은 태그 목록입니다.
     * @type {Array<Schema5>}
     * @memberof InlineResponse2004
     */
    items?: Array<Schema5>;
}
/**
 * 
 * @export
 * @interface InlineResponse2005
 */
export interface InlineResponse2005 {
    /**
     * 찾은 사용자 수입니다.
     * @type {number}
     * @memberof InlineResponse2005
     */
    count?: number;
    /**
     * 찾은 사용자 목록입니다.
     * @type {Array<Schema6>}
     * @memberof InlineResponse2005
     */
    items?: Array<Schema6>;
}
/**
 * 
 * @export
 * @interface InlineResponse2006
 */
export interface InlineResponse2006 {
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
     * @memberof InlineResponse2006
     */
    level?: number;
    /**
     * solved.ac에 등록된 해당 레벨의 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse2006
     */
    total?: number;
    /**
     * 사용자가 푼 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse2006
     */
    solved?: number;
    /**
     * 사용자가 부분 성공한 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse2006
     */
    partial?: number;
    /**
     * 사용자가 시도해본 문제 수입니다.
     * @type {number}
     * @memberof InlineResponse2006
     */
    tried?: number;
    /**
     * 사용자가 해당 레벨에서 획득한 경험치의 합입니다.
     * @type {number}
     * @memberof InlineResponse2006
     */
    exp?: number;
}
/**
 * 언어입니다.
 * @export
 * @enum {string}
 */
export enum Language {
    Ko = 'ko',
    En = 'en'
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
     * @type {Schema10}
     * @memberof ProblemTagDisplayNames
     */
    language?: Schema10;
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
     * 사용자가 속한 조직 목록입니다.
     * @type {Array<Schema12>}
     * @memberof RankedUser
     */
    organizations: Array<Schema12>;
    /**
     * 
     * @type {Schema8}
     * @memberof RankedUser
     */
    badge?: Schema8;
    /**
     * 
     * @type {UserBackground}
     * @memberof RankedUser
     */
    background: UserBackground;
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
     * 사용자가 취득한 Class의 수준입니다.
     * @type {string}
     * @memberof RankedUser
     */
    classDecoration: RankedUserClassDecorationEnum;
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
     * 사용자의 순위입니다.
     * @type {number}
     * @memberof RankedUser
     */
    rank?: number;
}

/**
* @export
* @enum {string}
*/
export enum RankedUserClassDecorationEnum {
    None = 'none',
    Silver = 'silver',
    Gold = 'gold'
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
 * 사용자 정보입니다.
 * @export
 * @interface Schema
 */
export interface Schema {
    /**
     * 사용자명입니다.
     * @type {string}
     * @memberof Schema
     */
    handle: string;
    /**
     * 사용자의 자기소개입니다.
     * @type {string}
     * @memberof Schema
     */
    bio: string;
    /**
     * 사용자가 속한 조직 목록입니다.
     * @type {Array<Schema12>}
     * @memberof Schema
     */
    organizations: Array<Schema12>;
    /**
     * 
     * @type {Schema8}
     * @memberof Schema
     */
    badge?: Schema8;
    /**
     * 
     * @type {UserBackground}
     * @memberof Schema
     */
    background: UserBackground;
    /**
     * 사용자의 프로필 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof Schema
     */
    profileImageUrl: string | null;
    /**
     * 사용자가 푼 문제 수입니다.
     * @type {number}
     * @memberof Schema
     */
    solvedCount: number;
    /**
     * 사용자가 난이도 기여를 한 횟수입니다.
     * @type {number}
     * @memberof Schema
     */
    voteCount: number;
    /**
     * 사용자가 여태까지 획득한 경험치량입니다.
     * @type {number}
     * @memberof Schema
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
     * @memberof Schema
     */
    tier: number;
    /**
     * 사용자의 레이팅입니다.
     * @type {number}
     * @memberof Schema
     */
    rating: number;
    /**
     * 푼 문제의 난이도 합으로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof Schema
     */
    ratingByProblemsSum: number;
    /**
     * 취득한 클래스에 따른 사용자의 레이팅입니다.
     * @type {number}
     * @memberof Schema
     */
    ratingByClass: number;
    /**
     * 푼 문제 수로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof Schema
     */
    ratingBySolvedCount: number;
    /**
     * 문제 난이도에 기여한 횟수로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof Schema
     */
    ratingByVoteCount: number;
    /**
     * 사용자가 취득한 Class입니다.
     * @type {number}
     * @memberof Schema
     */
    _class: number;
    /**
     * 사용자가 취득한 Class의 수준입니다.
     * @type {string}
     * @memberof Schema
     */
    classDecoration: SchemaClassDecorationEnum;
    /**
     * 사용자의 라이벌 수입니다.
     * @type {number}
     * @memberof Schema
     */
    rivalCount: number;
    /**
     * 사용자의 역라이벌 수입니다.
     * @type {number}
     * @memberof Schema
     */
    reverseRivalCount: number;
    /**
     * 최대 연속 문제 풀이일 수입니다.
     * @type {number}
     * @memberof Schema
     */
    maxStreak: number;
}

/**
* @export
* @enum {string}
*/
export enum SchemaClassDecorationEnum {
    None = 'none',
    Silver = 'silver',
    Gold = 'gold'
}
/**
 * 사용자의 solved.ac 설정 정보입니다.
 * @export
 * @interface Schema1
 */
export interface Schema1 {
    /**
     * 사이트 디자인 테마입니다.
     * @type {string}
     * @memberof Schema1
     */
    screenTheme?: Schema1ScreenThemeEnum;
    /**
     * 
     * @type {Schema10}
     * @memberof Schema1
     */
    tagDisplayLanguage?: Schema10;
    /**
     * 
     * @type {Schema9}
     * @memberof Schema1
     */
    iconSchemeSolved?: Schema9;
    /**
     * 
     * @type {Schema9}
     * @memberof Schema1
     */
    iconSchemeNotSolved?: Schema9;
    /**
     * 문제 목록의 기본 정렬 순서입니다.
     * @type {string}
     * @memberof Schema1
     */
    problemSortBy?: Schema1ProblemSortByEnum;
    /**
     * 트윗에 핸들을 포함하는지 여부입니다.
     * @type {boolean}
     * @memberof Schema1
     */
    twitterPostHandle?: boolean;
    /**
     * CLASS가 올랐을 때 트윗을 보내는지 여부입니다.
     * @type {boolean}
     * @memberof Schema1
     */
    twitterPostOnClassIncrease?: boolean;
    /**
     * 문제를 처음 해결했을 때 트윗을 보내는지 여부입니다.
     * @type {boolean}
     * @memberof Schema1
     */
    twitterPostOnProblemSolve?: boolean;
    /**
     * AC 레이팅이 올랐을 때 트윗을 보내는지 여부입니다.
     * @type {boolean}
     * @memberof Schema1
     */
    twitterPostOnRatingIncrease?: boolean;
    /**
     * 티어가 올랐을 때 트윗을 보내는지 여부입니다.
     * @type {boolean}
     * @memberof Schema1
     */
    twitterPostOnTierIncrease?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum Schema1ScreenThemeEnum {
    Default = 'default',
    Light = 'light',
    Dark = 'dark',
    Black = 'black'
}/**
* @export
* @enum {string}
*/
export enum Schema1ProblemSortByEnum {
    Id = 'id',
    Level = 'level',
    Title = 'title',
    Solved = 'solved',
    AverageTry = 'average_try',
    Random = 'random'
}
/**
 * 언어입니다.
 * @export
 * @enum {string}
 */
export enum Schema10 {
    Ko = 'ko',
    En = 'en'
}
/**
 * 
 * @export
 * @interface Schema12
 */
export interface Schema12 {
    /**
     * 조직의 ID입니다.
     * @type {number}
     * @memberof Schema12
     */
    organizationId?: number;
    /**
     * 조직의 이름입니다.
     * @type {string}
     * @memberof Schema12
     */
    name?: string;
    /**
     * 조직의 구분입니다.
     * @type {string}
     * @memberof Schema12
     */
    type?: Schema12TypeEnum;
    /**
     * 조직의 레이팅입니다.
     * @type {number}
     * @memberof Schema12
     */
    rating?: number;
    /**
     * 조직에 포함된 사용자의 수입니다.
     * @type {number}
     * @memberof Schema12
     */
    userCount?: number;
    /**
     * 조직의 총 난이도 기여 수입니다.
     * @type {number}
     * @memberof Schema12
     */
    voteCount?: number;
    /**
     * 조직의 총 푼 문제 수입니다.
     * @type {number}
     * @memberof Schema12
     */
    solvedCount?: number;
    /**
     * 조직의 색깔입니다.
     * @type {string}
     * @memberof Schema12
     */
    color?: string;
}

/**
* @export
* @enum {string}
*/
export enum Schema12TypeEnum {
    Community = 'community',
    University = 'university',
    Company = 'company',
    HighSchool = 'high_school'
}
/**
 * 문제 정보입니다.
 * @export
 * @interface Schema2
 */
export interface Schema2 {
    /**
     * 문제 ID입니다.
     * @type {number}
     * @memberof Schema2
     */
    problemId?: number;
    /**
     * 한국어 문제 제목입니다. HTML 엔티티나 LaTeX 수식을 포함할 수 있습니다.
     * @type {string}
     * @memberof Schema2
     */
    titleKo?: string;
    /**
     * 채점 가능 여부입니다.
     * @type {boolean}
     * @memberof Schema2
     */
    isSolvable?: boolean;
    /**
     * 부분 점수 혹은 서브태스크 문제 여부입니다.
     * @type {boolean}
     * @memberof Schema2
     */
    isPartial?: boolean;
    /**
     * 맞은 사람 수입니다.
     * @type {number}
     * @memberof Schema2
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
     * @memberof Schema2
     */
    level?: number;
    /**
     * 난이도 기여자의 수입니다.
     * @type {number}
     * @memberof Schema2
     */
    votedUserCount?: number;
    /**
     * 난이도 기여 제한 여부입니다.
     * @type {boolean}
     * @memberof Schema2
     */
    isLevelLocked?: boolean;
    /**
     * 평균 시도 횟수입니다.
     * @type {number}
     * @memberof Schema2
     */
    averageTries?: number;
    /**
     * 태그 목록입니다.
     * @type {Array<Schema5>}
     * @memberof Schema2
     */
    tags?: Array<Schema5>;
}
/**
 * 문제 정보입니다.
 * @export
 * @interface Schema4
 */
export interface Schema4 {
    /**
     * 문제 ID입니다.
     * @type {number}
     * @memberof Schema4
     */
    problemId?: number;
    /**
     * 한국어 문제 제목입니다. HTML 엔티티나 LaTeX 수식을 포함할 수 있습니다.
     * @type {string}
     * @memberof Schema4
     */
    titleKo?: string;
    /**
     * 채점 가능 여부입니다.
     * @type {boolean}
     * @memberof Schema4
     */
    isSolvable?: boolean;
    /**
     * 부분 점수 혹은 서브태스크 문제 여부입니다.
     * @type {boolean}
     * @memberof Schema4
     */
    isPartial?: boolean;
    /**
     * 맞은 사람 수입니다.
     * @type {number}
     * @memberof Schema4
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
     * @memberof Schema4
     */
    level?: number;
    /**
     * 난이도 기여자의 수입니다.
     * @type {number}
     * @memberof Schema4
     */
    votedUserCount?: number;
    /**
     * 난이도 기여 제한 여부입니다.
     * @type {boolean}
     * @memberof Schema4
     */
    isLevelLocked?: boolean;
    /**
     * 평균 시도 횟수입니다.
     * @type {number}
     * @memberof Schema4
     */
    averageTries?: number;
}
/**
 * 
 * @export
 * @interface Schema5
 */
export interface Schema5 {
    /**
     * 태그의 ID입니다.
     * @type {string}
     * @memberof Schema5
     */
    key?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Schema5
     */
    isMeta?: boolean;
    /**
     * 백준에서 사용되는 이 태그의 ID입니다.
     * @type {number}
     * @memberof Schema5
     */
    bojTagId?: number;
    /**
     * 이 태그를 포함하는 문제의 수입니다.
     * @type {number}
     * @memberof Schema5
     */
    problemCount?: number;
    /**
     * 언어별 태그의 이름 목록입니다.
     * @type {Array<ProblemTagDisplayNames>}
     * @memberof Schema5
     */
    displayNames?: Array<ProblemTagDisplayNames>;
    /**
     * 태그의 별칭입니다.
     * @type {Array<ProblemTagAliases>}
     * @memberof Schema5
     */
    aliases?: Array<ProblemTagAliases>;
}
/**
 * 사용자 정보입니다.
 * @export
 * @interface Schema6
 */
export interface Schema6 {
    /**
     * 사용자명입니다.
     * @type {string}
     * @memberof Schema6
     */
    handle: string;
    /**
     * 사용자의 자기소개입니다.
     * @type {string}
     * @memberof Schema6
     */
    bio: string;
    /**
     * 사용자가 속한 조직 목록입니다.
     * @type {Array<Schema12>}
     * @memberof Schema6
     */
    organizations: Array<Schema12>;
    /**
     * 
     * @type {Schema8}
     * @memberof Schema6
     */
    badge?: Schema8;
    /**
     * 
     * @type {UserBackground}
     * @memberof Schema6
     */
    background: UserBackground;
    /**
     * 사용자의 프로필 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof Schema6
     */
    profileImageUrl: string | null;
    /**
     * 사용자가 푼 문제 수입니다.
     * @type {number}
     * @memberof Schema6
     */
    solvedCount: number;
    /**
     * 사용자가 난이도 기여를 한 횟수입니다.
     * @type {number}
     * @memberof Schema6
     */
    voteCount: number;
    /**
     * 사용자가 여태까지 획득한 경험치량입니다.
     * @type {number}
     * @memberof Schema6
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
     * @memberof Schema6
     */
    tier: number;
    /**
     * 사용자의 레이팅입니다.
     * @type {number}
     * @memberof Schema6
     */
    rating: number;
    /**
     * 푼 문제의 난이도 합으로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof Schema6
     */
    ratingByProblemsSum: number;
    /**
     * 취득한 클래스에 따른 사용자의 레이팅입니다.
     * @type {number}
     * @memberof Schema6
     */
    ratingByClass: number;
    /**
     * 푼 문제 수로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof Schema6
     */
    ratingBySolvedCount: number;
    /**
     * 문제 난이도에 기여한 횟수로 계산한 사용자의 레이팅입니다.
     * @type {number}
     * @memberof Schema6
     */
    ratingByVoteCount: number;
    /**
     * 사용자가 취득한 Class입니다.
     * @type {number}
     * @memberof Schema6
     */
    _class: number;
    /**
     * 사용자가 취득한 Class의 수준입니다.
     * @type {string}
     * @memberof Schema6
     */
    classDecoration: Schema6ClassDecorationEnum;
    /**
     * 사용자의 라이벌 수입니다.
     * @type {number}
     * @memberof Schema6
     */
    rivalCount: number;
    /**
     * 사용자의 역라이벌 수입니다.
     * @type {number}
     * @memberof Schema6
     */
    reverseRivalCount: number;
    /**
     * 최대 연속 문제 풀이일 수입니다.
     * @type {number}
     * @memberof Schema6
     */
    maxStreak: number;
    /**
     * 사용자의 순위입니다.
     * @type {number}
     * @memberof Schema6
     */
    rank?: number;
}

/**
* @export
* @enum {string}
*/
export enum Schema6ClassDecorationEnum {
    None = 'none',
    Silver = 'silver',
    Gold = 'gold'
}
/**
 * 
 * @export
 * @interface Schema7
 */
export interface Schema7 {
    /**
     * 여태까지 색인된 백준 문제 수입니다.
     * @type {number}
     * @memberof Schema7
     */
    problemCount?: number;
    /**
     * 여태까지 난이도가 기여된 백준 문제 수입니다.
     * @type {number}
     * @memberof Schema7
     */
    problemVotedCount?: number;
    /**
     * 여태까지 등록한 사용자 수입니다.
     * @type {number}
     * @memberof Schema7
     */
    userCount?: number;
    /**
     * 여태까지 난이도에 기여한 사용자 수입니다.
     * @type {number}
     * @memberof Schema7
     */
    contributorCount?: number;
    /**
     * 여태까지 이루어진 난이도 기여의 수입니다.
     * @type {number}
     * @memberof Schema7
     */
    contributionCount?: number;
}
/**
 * 사용자가 사용할 수 있는 뱃지입니다.
 * @export
 * @interface Schema8
 */
export interface Schema8 {
    /**
     * 뱃지의 ID입니다.
     * @type {string}
     * @memberof Schema8
     */
    badgeId: string;
    /**
     * 뱃지 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof Schema8
     */
    badgeImageUrl: string;
    /**
     * 뱃지의 이름입니다.
     * @type {string}
     * @memberof Schema8
     */
    displayName: string;
    /**
     * 뱃지의 설명입니다.
     * @type {string}
     * @memberof Schema8
     */
    displayDescription: string;
}
/**
 * 난이도 아이콘 표시 정책입니다.
 * @export
 * @enum {string}
 */
export enum Schema9 {
    Default = 'default',
    HideWarn = 'hide-warn',
    Hide = 'hide'
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
     * @type {Schema10}
     * @memberof Settings
     */
    tagDisplayLanguage?: Schema10;
    /**
     * 
     * @type {Schema9}
     * @memberof Settings
     */
    iconSchemeSolved?: Schema9;
    /**
     * 
     * @type {Schema9}
     * @memberof Settings
     */
    iconSchemeNotSolved?: Schema9;
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
export enum SettingsScreenThemeEnum {
    Default = 'default',
    Light = 'light',
    Dark = 'dark',
    Black = 'black'
}/**
* @export
* @enum {string}
*/
export enum SettingsProblemSortByEnum {
    Id = 'id',
    Level = 'level',
    Title = 'title',
    Solved = 'solved',
    AverageTry = 'average_try',
    Random = 'random'
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
     * @type {Array<Schema5>}
     * @memberof TaggedProblem
     */
    tags?: Array<Schema5>;
}
/**
 * 
 * @export
 * @interface TaggedProblemAllOf
 */
export interface TaggedProblemAllOf {
    /**
     * 태그 목록입니다.
     * @type {Array<Schema5>}
     * @memberof TaggedProblemAllOf
     */
    tags?: Array<Schema5>;
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
     * 사용자가 속한 조직 목록입니다.
     * @type {Array<Schema12>}
     * @memberof User
     */
    organizations: Array<Schema12>;
    /**
     * 
     * @type {Schema8}
     * @memberof User
     */
    badge?: Schema8;
    /**
     * 
     * @type {UserBackground}
     * @memberof User
     */
    background: UserBackground;
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
     * 사용자가 취득한 Class의 수준입니다.
     * @type {string}
     * @memberof User
     */
    classDecoration: UserClassDecorationEnum;
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
}

/**
* @export
* @enum {string}
*/
export enum UserClassDecorationEnum {
    None = 'none',
    Silver = 'silver',
    Gold = 'gold'
}
/**
 * 사용자의 배경 사진입니다.
 * @export
 * @interface UserBackground
 */
export interface UserBackground {
    /**
     * 배경의 고유 ID입니다.
     * @type {string}
     * @memberof UserBackground
     */
    backgroundId?: string;
    /**
     * 배경 사진으로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof UserBackground
     */
    backgroundImageUrl?: string;
    /**
     * 배경의 제작자를 표시하는 문구입니다.
     * @type {string}
     * @memberof UserBackground
     */
    author?: string;
    /**
     * 배경의 제작자와 관련된 사이트로 가는 하이퍼링크입니다.
     * @type {string}
     * @memberof UserBackground
     */
    authorUrl?: string;
    /**
     * 배경의 이름입니다.
     * @type {string}
     * @memberof UserBackground
     */
    displayName?: string;
    /**
     * 배경의 설명입니다.
     * @type {string}
     * @memberof UserBackground
     */
    displayDescription?: string;
}
