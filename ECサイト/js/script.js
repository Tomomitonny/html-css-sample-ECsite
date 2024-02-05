document.getElementById('mobile-menu').addEventListener('click', function() {
  document.getElementById('navi').classList.toggle('menu-open');
});


function openPopup(clickedImage) {
  // クリックされたイメージのソースを取得
  var imgSource = clickedImage.src;

  // ポップアップ用のコンテナとイメージを取得
  var popupContainer = document.getElementById('popupContainer');
  var popupImage = document.getElementById('popupImage');

  // ポップアップ用のイメージにクリックされたイメージのソースを設定
  popupImage.src = imgSource;

  // ポップアップ用のコンテナを表示
  popupContainer.style.display = 'flex';
}

function closePopup() {
  // ポップアップ用のコンテナを非表示
  var popupContainer = document.getElementById('popupContainer');
  popupContainer.style.display = 'none';
}