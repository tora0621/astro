/**
 * スムーススクロールを設定
 * @description aタグにhref属性の値が#前方一致で該当コンテンツにスクロール移動 href属性が、#のみ又は、値なしの場合は画面一番上にスクロール移動
 */
export function setSmoothScroll(): void {
  setPageScroll();
  openPageScroll();
}

// 開いたページでページ内スクロールを実行する
function openPageScroll(): void {
  const hash: string = location.hash;
  if (hash !== '') {
    window.addEventListener('load', function () {
      ankerScroll(hash);
    });
  }
}

// ページ内スクロールを設定する
function setPageScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const me = e.currentTarget as HTMLElement;
      if (me.classList.contains('noscroll')) return false;
      ankerScroll(me.getAttribute('href') || '');
    });
  });
}

// アンカー位置にページスクロールさせる
function ankerScroll(href: string): void {
  const target = href === '#' || href === undefined || href === '' ? document.documentElement : document.querySelector(href);
  const header = document.querySelector('.header') as HTMLElement;
  const fix = header ? header.offsetHeight : 0;
  const top = (target ? target.getBoundingClientRect().top + window.pageYOffset : 0) - fix;
  window.scrollTo({
    top: top,
    behavior: 'smooth',
  });
}
