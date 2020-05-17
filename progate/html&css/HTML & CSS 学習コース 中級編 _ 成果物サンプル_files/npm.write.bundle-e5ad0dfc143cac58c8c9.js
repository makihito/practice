(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[155],{gBAr:function(module,exports,__webpack_require__){"use strict";
/*!
 * write <https://github.com/jonschlinkert/write>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var fs=__webpack_require__("Po9p");var path=__webpack_require__("33yf");var mkdir=__webpack_require__("Cepn");module.exports=function writeFile(dest,str,cb){var dir=path.dirname(dest);fs.exists(dir,function(exists){if(exists){fs.writeFile(dest,str,cb)}else{mkdir(dir,function(err){if(err){return cb(err)}else{fs.writeFile(dest,str,cb)}})}})};module.exports.sync=function writeFileSync(dest,str){var dir=path.dirname(dest);if(!fs.existsSync(dir)){mkdir.sync(dir)}fs.writeFileSync(dest,str)};module.exports.stream=function writeFileStream(dest){var dir=path.dirname(dest);if(!fs.existsSync(dir)){mkdir.sync(dir)}return fs.createWriteStream(dest)}}}]);