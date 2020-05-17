(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59],{"4MqD":function(module,exports,__webpack_require__){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module state-toggle
 * @fileoverview Enter/exit a state.
 */module.exports=factory;function factory(key,state,ctx){return function(){var context=ctx||this;var current=context[key];context[key]=!state;return function(){context[key]=current}}}}}]);