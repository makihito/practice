(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{BEtg:function(module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
module.exports=function(obj){return obj!=null&&(isBuffer(obj)||isSlowBuffer(obj)||!!obj._isBuffer)};function isBuffer(obj){return!!obj.constructor&&typeof obj.constructor.isBuffer==="function"&&obj.constructor.isBuffer(obj)}function isSlowBuffer(obj){return typeof obj.readFloatLE==="function"&&typeof obj.slice==="function"&&isBuffer(obj.slice(0,0))}}}]);