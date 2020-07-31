viewManager = require('./storageManager/viewManager')
connectManager = require('./storageManager/connectManager')

module.exports.getViewPath = viewManager.getViewPath
module.exports.getRightPath = viewManager.getRightPath
module.exports.getLeftPath = viewManager.getLeftPath

module.exports.addGroup = connectManager.addGroup
module.exports.deleteGroup = connectManager.deleteGroup