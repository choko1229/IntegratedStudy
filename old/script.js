// DOMContentLoaded イベントでスタイルを変更し、トランジションを有効にする
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var footerElement = document.querySelector('footer');
        if (footerElement) {
            footerElement.classList.add('moved');
            setTimeout(function () {
                footerElement.classList.remove('moved');
            }, 1500); // 1秒後に元に戻す
        }
    }, 0); // 1秒後にスタイル変更を適用
});