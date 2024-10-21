/**
 * @description 全ページ共通処理
 */

import { setSmoothScroll } from './common/setSmoothScroll';
import { swiper } from './modules/swiper';

export function index() {
  setSmoothScroll();
  swiper();
}
