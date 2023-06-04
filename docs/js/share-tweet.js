// シェアボタンのリンク先
let shareUrl  = 'https://twitter.com/intent/tweet';
    shareUrl += '?text='+encodeURIComponent(''); //ここにツイート内容のテキストを入れる
    shareUrl += '&url='+encodeURIComponent(location.href);
 
// シェアボタン追加
let shareArea = document.getElementById('share-area');
let shareLink = '<a href="' + shareUrl + '" target="_blank"><i class="lab la-twitter"></i></a>';
shareArea.innerHTML = shareLink;
