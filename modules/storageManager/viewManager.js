viewPrefix = 'views/'
viewPostfix = '.html'
viewList = ['index', 'receiver_sender', 'connectors', 'content', 'settings']
//当前view的index
viewIndex = -1;
function getViewPath(index) {
    viewIndex = index
    return viewPrefix + viewList[index] + viewPostfix
}
module.exports.getViewPath = getViewPath
//取得当前View左边的view
function getLeftPath() {
    if (viewIndex > 0) {
        viewIndex--;
    }
    return viewPrefix + viewList[viewIndex] + viewPostfix
}
//取得当前View右边的view
function getRightPath() {
    if (viewIndex < viewList.length - 1) {
        viewIndex++;
    }
    return viewPrefix + viewList[viewIndex] + viewPostfix
}
module.exports.getRightPath = getRightPath
module.exports.getLeftPath = getLeftPath