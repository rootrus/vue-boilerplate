import {getCookie} from '../utils/helpers.js';

import EN from './en.js';
import CN from './cn.js';
import TH from './th.js';
import KR from './kr.js';
import VN from './vn.js';
import MY from './my.js';

export const EN_SHORT = 'EN';
export const CN_SHORT = 'CN';
export const TH_SHORT = 'TH';
export const KR_SHORT = 'KR';
export const VN_SHORT = 'VN';
export const MY_SHORT = 'MY';

export const EN_CODE = '0';
export const CN_CODE = '1';
export const TH_CODE = '2';
export const KR_CODE = '3';
export const VN_CODE = '4';
export const MY_CODE = '5';

export const declare_default_language = 'TH';

export const LANG = {
  [EN_CODE]: EN,
  [CN_CODE]: CN,
  [TH_CODE]: TH,
  [KR_CODE]: KR,
  [VN_CODE]: VN,
  [MY_CODE]: MY,
}

export const LANG_SHORT_CODE = {
  [EN_CODE]: EN_SHORT,
  [CN_CODE]: CN_SHORT,
  [TH_CODE]: TH_SHORT,
  [KR_CODE]: KR_SHORT,
  [VN_CODE]: VN_SHORT,
  [MY_CODE]: MY_SHORT,
}

export const LANG_CODE = {
  [EN_SHORT]: EN_CODE,
  [CN_SHORT]: CN_CODE,
  [TH_SHORT]: TH_CODE,
  [KR_SHORT]: KR_CODE,
  [VN_SHORT]: VN_CODE,
  [MY_SHORT]: MY_CODE,
}



//export const i18n = LANG[LANG_CODE[defaultLanguage]];

export function i18n(data = ''){
  let defaultLanguage = getCookie('EPWEB_LANG') || declare_default_language;
  let i18nData =  LANG[LANG_CODE[defaultLanguage]];
  if (i18nData[data]) {
    return i18nData[data]
  }
  console.log("translation '"+data+"': '"+data+"',= ");
  return data;
}

export function langIdx() {
  let defaultLanguage = getCookie('EPWEB_LANG') || declare_default_language;
  return LANG_CODE[defaultLanguage];
}