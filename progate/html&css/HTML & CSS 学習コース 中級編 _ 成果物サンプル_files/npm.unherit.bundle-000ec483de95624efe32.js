(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"5t69":function(module,exports,__webpack_require__){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module unherit
 * @fileoverview Create a custom constructor which can be modified
 *   without affecting the original class.
 */var xtend=__webpack_require__("U6jy");var inherits=__webpack_require__("P7XM");module.exports=unherit;function unherit(Super){var result;var key;var value;inherits(Of,Super);inherits(From,Of);result=Of.prototype;for(key in result){value=result[key];if(value&&typeof value==="object"){result[key]="concat"in value?value.concat():xtend(value)}}return Of;function From(parameters){return Super.apply(this,parameters)}function Of(){if(!(this instanceof Of)){return new From(arguments)}return Super.apply(this,arguments)}}}}]);