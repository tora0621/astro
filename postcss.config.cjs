module.exports = {
  'plugins': {
    '@fullhuman/postcss-purgecss':
      // PurgeCSSをproduction環境でのみ実行
      process.env.NODE_ENV === 'production'
        ? {
            content: ['./src/pages/*.astro'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: ['tinymce', 'tbody', 'thead', 'resize-animation-stopper', 'body', 'html'],
              deep: [],
              greedy: [/^-/, /^data-/, /^is-/, /^aos-/, /flatpickr/, /^wp-/, /swiper/, /^svg-/, /^modal/],
              keyframes: [],
              variables: [],
            },
            rejected: true,
            keyframes: true, // 未使用の@keyframesを削除
            variables: true, // 未使用のCSS変数を削除
            fontFace: true, // 未使用の@font-faceを削除
          }
        : false,
    tailwindcss: {},
  },
};
