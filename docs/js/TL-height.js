//サイトを開いたときのウィンドウサイズをもとにTwitterタイムラインの高さを決める
//動的な変更は不可、サイトをリロードすればウィンドウサイズに合った高さになります
let Height;
if(innerWidth<768){
    Height = innerWidth * 0.6;
}else{
    Height = innerWidth * 0.32;
}
let TLArea = document.getElementById('tl-area');
let TLLink = '<a class="twitter-timeline"  data-height="'+Height+'" href="https://twitter.com/KimIToMIKU?ref_src=twsrc%5Etfw">Tweets by KimIToMIKU</a>';
TLArea.innerHTML = TLLink;