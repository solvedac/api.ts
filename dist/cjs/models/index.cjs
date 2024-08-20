"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyCredentialsUserWithSettingsClassDecorationEnum = exports.VerifyCredentialsUserWithSettingsClassEnum = exports.VerifyCredentialsUserSettingsShowMovieBackgroundEnum = exports.VerifyCredentialsUserSettingsShowIllustBackgroundEnum = exports.VerifyCredentialsUserSettingsSiteLanguageEnum = exports.VerifyCredentialsUserSettingsProHideAdsEnum = exports.VerifyCredentialsUserSettingsTwitterPostOnClassIncreaseEnum = exports.VerifyCredentialsUserSettingsTwitterPostOnTierIncreaseEnum = exports.VerifyCredentialsUserSettingsTwitterPostOnRatingIncreaseEnum = exports.VerifyCredentialsUserSettingsTwitterPostHandleEnum = exports.VerifyCredentialsUserSettingsScreenThemeEnum = exports.VerifyCredentialsUserSettingsTwitterPostOnProblemSolveEnum = exports.UserClassDecorationEnum = exports.UserClassEnum = exports.SolveTier = exports.SocialUserClassDecorationEnum = exports.SocialUserClassEnum = exports.SearchProblemQuerySort = exports.SearchProblemQueryDirection = exports.RivalUserClassDecorationEnum = exports.RivalUserClassEnum = exports.ProblemLevel = exports.OrganizationType = exports.Language = exports.GetUserClassStatsClassStatClassEnum = exports.GetSearchAutoCompletionsUserEntryClassDecorationEnum = exports.GetSearchAutoCompletionsUserEntryClassEnum = exports.GetClassesProblemCountClassEntryClassEnum = exports.CoinShopProductPriceUnitEnum = exports.BadgeTier = exports.BadgeCategory = exports.BackgroundCategory = exports.ArenaTier = void 0;
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
exports.ArenaTier = {
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
};
/**
 * 배경 획득 유형 분류입니다.
 * @export
 */
exports.BackgroundCategory = {
    Event: 'event',
    Arena: 'arena',
    Achievement: 'achievement',
    Season: 'season',
    Contest: 'contest'
};
/**
 * 뱃지 획득 유형 분류입니다.
 * @export
 */
exports.BadgeCategory = {
    Achievement: 'achievement',
    Season: 'season',
    Event: 'event',
    Contest: 'contest'
};
/**
 * 뱃지의 등급입니다.
 * @export
 */
exports.BadgeTier = {
    Bronze: 'bronze',
    Silver: 'silver',
    Gold: 'gold',
    Master: 'master'
};
/**
 * @export
 */
exports.CoinShopProductPriceUnitEnum = {
    Coins: 'coins',
    Stardusts: 'stardusts'
};
/**
 * @export
 */
exports.GetClassesProblemCountClassEntryClassEnum = {
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
};
/**
 * @export
 */
exports.GetSearchAutoCompletionsUserEntryClassEnum = {
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
};
/**
 * @export
 */
exports.GetSearchAutoCompletionsUserEntryClassDecorationEnum = {
    None: 'none',
    Silver: 'silver',
    Gold: 'gold'
};
/**
 * @export
 */
exports.GetUserClassStatsClassStatClassEnum = {
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
};
/**
 * solved.ac에서 지원하는 사용자 언어입니다
 * @export
 */
exports.Language = {
    Ko: 'ko',
    En: 'en',
    Ja: 'ja'
};
/**
 * 단체 유형입니다.
 * @export
 */
exports.OrganizationType = {
    University: 'university',
    Company: 'company',
    Community: 'community',
    HighSchool: 'high_school',
    MiddleSchool: 'middle_school',
    ElementarySchool: 'elementary_school',
    Undefined: 'undefined'
};
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
exports.ProblemLevel = {
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
};
/**
 * @export
 */
exports.RivalUserClassEnum = {
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
};
/**
 * @export
 */
exports.RivalUserClassDecorationEnum = {
    None: 'none',
    Silver: 'silver',
    Gold: 'gold'
};
/**
 * 검색 결과 정렬 방향
 * @export
 */
exports.SearchProblemQueryDirection = {
    Asc: 'asc',
    Desc: 'desc'
};
/**
 * 검색 결과 정렬 기준
 * @export
 */
exports.SearchProblemQuerySort = {
    Id: 'id',
    Level: 'level',
    Title: 'title',
    Solved: 'solved',
    AverageTry: 'average_try',
    Random: 'random'
};
/**
 * @export
 */
exports.SocialUserClassEnum = {
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
};
/**
 * @export
 */
exports.SocialUserClassDecorationEnum = {
    None: 'none',
    Silver: 'silver',
    Gold: 'gold'
};
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
exports.SolveTier = {
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
};
/**
 * @export
 */
exports.UserClassEnum = {
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
};
/**
 * @export
 */
exports.UserClassDecorationEnum = {
    None: 'none',
    Silver: 'silver',
    Gold: 'gold'
};
/**
 * @export
 */
exports.VerifyCredentialsUserSettingsTwitterPostOnProblemSolveEnum = {
    True: 'true'
};
/**
 * @export
 */
exports.VerifyCredentialsUserSettingsScreenThemeEnum = {
    Default: 'default'
};
/**
 * @export
 */
exports.VerifyCredentialsUserSettingsTwitterPostHandleEnum = {
    True: 'true'
};
/**
 * @export
 */
exports.VerifyCredentialsUserSettingsTwitterPostOnRatingIncreaseEnum = {
    True: 'true'
};
/**
 * @export
 */
exports.VerifyCredentialsUserSettingsTwitterPostOnTierIncreaseEnum = {
    True: 'true'
};
/**
 * @export
 */
exports.VerifyCredentialsUserSettingsTwitterPostOnClassIncreaseEnum = {
    True: 'true'
};
/**
 * @export
 */
exports.VerifyCredentialsUserSettingsProHideAdsEnum = {
    True: 'true'
};
/**
 * @export
 */
exports.VerifyCredentialsUserSettingsSiteLanguageEnum = {
    Ko: 'ko'
};
/**
 * @export
 */
exports.VerifyCredentialsUserSettingsShowIllustBackgroundEnum = {
    True: 'true'
};
/**
 * @export
 */
exports.VerifyCredentialsUserSettingsShowMovieBackgroundEnum = {
    True: 'true'
};
/**
 * @export
 */
exports.VerifyCredentialsUserWithSettingsClassEnum = {
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
};
/**
 * @export
 */
exports.VerifyCredentialsUserWithSettingsClassDecorationEnum = {
    None: 'none',
    Silver: 'silver',
    Gold: 'gold'
};
