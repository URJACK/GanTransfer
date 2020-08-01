"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeftPath = exports.getRightPath = exports.getViewPath = void 0;
var viewPrefix = 'views/';
var viewPostfix = '.html';
var viewList = ['index', 'receiver_sender', 'connectors', 'content', 'settings'];
//当前view的index
var viewIndex = -1;
function getViewPath(index) {
    viewIndex = index;
    return viewPrefix + viewList[index] + viewPostfix;
}
exports.getViewPath = getViewPath;
//取得当前View左边的view
function getLeftPath() {
    if (viewIndex > 0) {
        viewIndex--;
    }
    return viewPrefix + viewList[viewIndex] + viewPostfix;
}
exports.getLeftPath = getLeftPath;
//取得当前View右边的view
function getRightPath() {
    if (viewIndex < viewList.length - 1) {
        viewIndex++;
    }
    return viewPrefix + viewList[viewIndex] + viewPostfix;
}
exports.getRightPath = getRightPath;
