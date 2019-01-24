// 共通のページパーツ
$(function() {
  $('#common_nav').load('nav.html')
  $('#common_footer').load('footer.html')
})

// ページを開いたときや該当箇所にスクロールしたときに画像のフェードイン
$(function() {
  $(window).scroll(function() {
    $('.fadein').each(function() {
      var elemPos = $(this).offset().top
      var scroll = $(window).scrollTop()
      var windowHeight = $(window).height()
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin')
      }
    })
  })
})

// ページの途中から現れ、スクロールに追随してくるボタン
$(document).ready(function() {
  $('.gotop').hide()
  // ↑ページトップボタンを非表示にする

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 400) {
      // ↑ スクロール位置が100よりも小さい場合に以下の処理をする
      $('.gotop').slideDown('fast')
      // ↑ (100より小さい時は)ページトップボタンをスライドダウン
    } else {
      $('.gotop').slideUp('fast')
      // ↑ それ以外の場合の場合はスライドアップする。
    }

    // フッター固定する

    // scrollHeight = $(document).height();
    // // ドキュメントの高さ
    // scrollPosition = $(window).height() + $(window).scrollTop();
    // //　ウィンドウの高さ+スクロールした高さ→　現在のトップからの位置
    // footHeight = $("footer").innerHeight();
    // // フッターの高さ

    // if (scrollHeight - scrollPosition <= footHeight) {
    //     // 現在の下から位置が、フッターの高さの位置にはいったら
    //     //  ".gotop"のpositionをabsoluteに変更し、フッターの高さの位置にする
    //     $(".gotop").css({
    //         "position": "absolute",
    //         "bottom": footHeight
    //     });
    // } else {
    //     // それ以外の場合は元のcssスタイルを指定
    //     $(".gotop").css({
    //         "position": "fixed",
    //         "bottom": "0px"
    //     });
    // }
  })

  // トップへスムーススクロール
  $('.gotop a').click(function() {
    $('body,html').animate(
      {
        scrollTop: 0
      },
      500
    )
    // ページのトップへ 500 のスピードでスクロールする
    return false
  })
})


// カテゴリーボタンのアコーディオン設定
$(function() {
  // 親メニュー処理
  $('.cmn__dropdown-btn').click(function() {
    // メニュー表示/非表示
    $(this)
      .next('#catsDropdown')
      .slideToggle('fast')
  })
})







$(function() {
  //global nav
  var btn = $('.exhibition-show__info-foot-menu-btn')
  var submenu = $('.exhibition-show__info-foot-menu')
  var submenulink = $('.exhibition-show__info-foot-menu li a')
  //click
  $(btn).bind('click', 'focus', function(event) {
    var shownav = $(this).find('.exhibition-show__info-foot-menu')
    if ($(shownav).css('display') == 'none') {
      $(shownav).slideDown('fast')
    } else {
      $(shownav).slideUp('fast')
    }
  })
  //hover
  $(btn).hover(
    function() {},
    function() {
      $(submenu).slideUp('fast')
    }
  )
})

//いいねボタンのカウント
window.onload = function() {
  document.getElementById('sampleButtonB').onclick = function() {
    countUp()
  }
}
var $count = 0

function countUp() {
  document.getElementById('sampleOutputB').innerHTML = ++$count
}

