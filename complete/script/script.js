$(function() {
  // スクロールする速度
  var scrollSpeed = 500;

  // href属性が「#」で始まるaタグがクリックされたとき
  $('a[href^="#"]').on('click', function() {
    // aタグのhref属性の値を取得
    var href = $(this).attr('href');

    // ページの先頭へリンク指定されているとき
    if (href === '#' || href === '#top') {
      // ページトップへスクロールさせる
      $('html, body').animate({ scrollTop: 0 }, scrollSpeed, 'swing');
      return false;
    }

    // 遷移先要素の位置を取得
    var offset = $(href).offset().top;
    // 要素までスクロールさせる
    $('html, body').animate({ scrollTop: offset }, scrollSpeed, 'swing');
    return false;
  });
});
