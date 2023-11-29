// 別のページへの移動後、1秒後にスタイル変更を適用し、1秒後に元に戻す
setTimeout(function () {
    document.getElementById('footer').classList.add('moved');
    setTimeout(function () {
        document.getElementById('footer').classList.remove('moved');
    }, 1000); // 1秒後に元に戻す
}, 1000); // 1秒後にスタイル変更を適用