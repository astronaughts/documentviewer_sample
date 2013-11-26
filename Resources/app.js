// ファイルのパス
var file_path = 'files/appcelerator_titanium_up_and_running.pdf';

// ウィンドウを作る
var win = Ti.UI.createWindow({
    title: 'DocumentViewer',
    backgroundColor: '#fff'
});

// クイックルックで開くボタン
var button_quicklook = Ti.UI.createButton({
    height: 40,
    width: 150,
    title: 'Open in Quicklook'
});
button_quicklook.addEventListener('click', function () {
    var viewer = Ti.UI.iOS.createDocumentViewer({
        url: file_path
    });
    viewer.show();
});

// アクションボタン
var button_action = Ti.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.ACTION
});
button_action.addEventListener('click', function () {
    var viewer = Ti.UI.iOS.createDocumentViewer({
        url: file_path
    });

});

// タブ周りを作る
var tab = Ti.UI.createTab({
    icon: 'KS_nav_views.png',
    title: 'Tab',
    window: win
});
var tab_group = Ti.UI.createTabGroup();
tab_group.addTab(tab);

// 表示
win.rightNavButton = button_action;
win.add(button_quicklook);
tab_group.open();