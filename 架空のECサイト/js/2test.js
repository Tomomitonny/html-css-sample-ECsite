function openPopup(clickedImage,event) {
  event.preventDefault();
  // クリックされたイメージのソースを取得
  var imgSource = clickedImage.src;
  // ポップアップ用のコンテナとイメージを取得
  var popupContainer = document.getElementById('popupContainer');
  var popupImage = document.getElementById('popupImage');

  // ポップアップ用のイメージにクリックされたイメージのソースを設定
  popupImage.src = imgSource;

  // ポップアップ用のコンテナを表示
  popupContainer.style.display = 'flex';

  // クリックされたイメージがリンク内にある場合、そのリンクを取得
  var linkElement = "";//findParentLink(clickedImage);

  // リンクが存在する場合、そのリンクをコンソールに表示
  if (linkElement) {
      var imageLink = linkElement.href;
      console.log('Clicked Image Link:', imageLink);
  } else {
      console.log('Image is not wrapped in a link.');
  }
}

function closePopup() {
  // ポップアップ用のコンテナを非表示
  var popupContainer = document.getElementById('popupContainer');
  popupContainer.style.display = 'none';
}
function restoreDefaultBehavior() {
  // この関数は一度だけ実行されます
  // デフォルトのクリック動作を再度有効にする
  
  console.log('Restoring default behavior');
}

function findParentLink(element) {
  // 親要素がリンクかどうかを確認
  while (element && element.tagName !== 'A') {
      element = element.parentNode;
  }
  return element;
}