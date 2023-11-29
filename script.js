let leaving = false;

// ページ離脱時の処理
window.addEventListener('beforeunload', function(event) {
  leaving = true;
  document.querySelector('footer').classList.add('leaving');
});

// ページ再訪問時の処理
window.addEventListener('load', function(event) {
  if (leaving) {
    document.querySelector('footer').classList.add('leaving');
  }
});