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



// 個展ページ内SNSボタン表示（吹きだしメニュー）
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


//検索機能
searchWord = function () {
  var searchResult,
    searchText = $(this).val(), // 検索ボックスに入力された値
    targetText,
    hitNum;

  // 検索結果を格納するための配列を用意
  searchResult = [];

  // 検索結果エリアの表示を空にする
  $('#search-result__list').empty();
  $('.search-result__hit-num').empty();

  // 検索ボックスに値が入ってる場合
  if (searchText != '') {
    $('#container div').each(function () {
      targetText = $(this).text();

      // 検索対象となるリストに入力された文字列が存在するかどうかを判断
      if (targetText.indexOf(searchText) != -1) {
        // 存在する場合はそのリストのテキストを用意した配列に格納
        searchResult.push(targetText);
      }
    });

    // 検索結果をページに出力
    for (var i = 0; i < searchResult.length; i++) {
      $('<span>').text(searchResult[i]).appendTo('#search-result__list');
    }

    // ヒットの件数をページに出力
    hitNum = '<span>検索結果</span>：' + searchResult.length + '件見つかりました。';
    $('.search-result__hit-num').append(hitNum);
  }
};

// searchWordの実行
$('#search-text').on('input', searchWord);

