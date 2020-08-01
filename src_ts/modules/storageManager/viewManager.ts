const viewPrefix: string = 'views/'
const viewPostfix: string = '.html'
const viewList: Array<string> = ['index', 'receiver_sender', 'connectors', 'content', 'settings']
//当前view的index
let viewIndex: number = -1;
function getViewPath(index: number): string {
    viewIndex = index
    return viewPrefix + viewList[index] + viewPostfix
}
//取得当前View左边的view
function getLeftPath(): string {
    if (viewIndex > 0) {
        viewIndex--;
    }
    return viewPrefix + viewList[viewIndex] + viewPostfix
}
//取得当前View右边的view
function getRightPath(): string {
    if (viewIndex < viewList.length - 1) {
        viewIndex++;
    }
    return viewPrefix + viewList[viewIndex] + viewPostfix
}
export { getViewPath, getRightPath, getLeftPath }