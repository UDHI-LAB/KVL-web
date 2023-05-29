// シェアボタンのリンク先
var shareUrl  = 'https://twitter.com/intent/tweet';
    shareUrl += '?text='+encodeURIComponent('ツイート内容テキスト');
    shareUrl += '&url='+encodeURIComponent(location.href);
 
// シェアボタン追加
var shareArea = document.getElementById('share-area');
var shareLink = '<a href="' + shareUrl + '" target="_blank"><i class="lab la-twitter"></i></a>';
shareArea.innerHTML = shareLink;