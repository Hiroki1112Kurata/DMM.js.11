$(function() {
  $('.menu-trigger').on('click', function(event) {
    // ハンバーガーアイコンの変更
    $(this).toggleClass('active');
    // ハンバーガーメニューのフェードイン・アウト
    $('#sp-menu').fadeToggle();
    // aタグの機能を無効にするメソッド
    event.preventDefault();
  });
});