/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2016 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 1.0.0 | http://apidev.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
///                                              }|
///                                              }|
///                                              }|     　 へ　　　 ／|    
///      _______     _______         ______      }|      /　│　　 ／ ／
///     /  ___  |   |_   __ \      .' ____ '.    }|     │　Z ＿,＜　／　　 /`ヽ
///    |  (__ \_|     | |__) |     | (____) |    }|     │　　　　　ヽ　　 /　　〉
///     '.___`-.      |  __ /      '_.____. |    }|      Y　　　　　`　 /　　/
///    |`\____) |    _| |  \ \_    | \____| |    }|    ｲ●　､　●　　⊂⊃〈　　/
///    |_______.'   |____| |___|    \______,'    }|    ()　 v　　　　|　＼〈
///    |=========================================\|    　>ｰ ､_　 ィ　 │ ／／
///    |> LESS IS MORE                           ||     / へ　　 /　ﾉ＜|＼＼
///    `=========================================/|    ヽ_ﾉ　　(_／　 │／／
///                                              }|     7　　　　　　  |／
///                                              }|     ＞―r￣￣`ｰ―＿`
///                                              }|
///                                              }|
/// Permission is hereby granted, free of charge, to any person obtaining a copy
/// of this software and associated documentation files (the "Software"), to deal
/// in the Software without restriction, including without limitation the rights
/// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
/// copies of the Software, and to permit persons to whom the Software is
/// furnished to do so, subject to the following conditions:
///
/// The above copyright notice and this permission notice shall be included in all
/// copies or substantial portions of the Software.
///
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
/// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
/// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
/// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
/// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
/// THE SOFTWARE.
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),_Base64DefaultTable=require("./Base64DefaultTable"),PADCHAR=61,Base64=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0],s=arguments.length<=1||void 0===arguments[1]?_Base64DefaultTable.BASE64_DEFAULT_ENCODE_TABLE:arguments[1],a=arguments.length<=2||void 0===arguments[2]?_Base64DefaultTable.BASE64_DEFAULT_DECODE_TABLE:arguments[2];_classCallCheck(this,e),this._withPadchar=t,this._encodeTable=s,this._decodeTable=a,this._bytesBuffer=new Uint8Array(3),this._bytesOffset=0,this._base64Buffer=new Uint8Array(4),this._base64Offset=0}return _createClass(e,[{key:"encode",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],s=arguments.length<=2||void 0===arguments[2]?null:arguments[2],a=e.length,f=3-this._bytesOffset,i=0,r=s||this._createEncodeBuffer(a+this._bytesOffset,t);return a>=f?(3!=f?(this._bytesBuffer.set(e.subarray(0,f),this._bytesOffset),i=this._updateEncode(this._bytesBuffer,0,r,0)):f=0,i=this._updateEncode(e,f,r,i),this._bytesOffset=(a-f)%3,this._bytesOffset>0&&this._bytesBuffer.set(e.subarray(a-this._bytesOffset),0)):a>0&&(this._bytesBuffer.set(e,this._bytesOffset),this._bytesOffset+=a),t&&(i=this._finalsEncode(r,i),this._bytesOffset=0),s?s.subarray(0,i):r}},{key:"decode",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],s=arguments.length<=2||void 0===arguments[2]?null:arguments[2];if(t){var a=e.length+this._base64Offset;if(a%4==1)throw new Error("Invaild base64 data.");if(a%4==0&&a>0){var f=a-1;this._base64Offset>f?this._base64Buffer[f]==PADCHAR&&(this._base64Buffer[f-1]==PADCHAR?this._base64Offset-=2:--this._base64Offset):(f-=this._base64Offset,e[f]==PADCHAR&&(e.length>=2?e=e[f-1]==PADCHAR?e.subarray(0,e.length-2):e.subarray(0,e.length-1):(e=e.subarray(0,e.length-1),this._base64Buffer[this._base64Offset-1]==PADCHAR&&--this._base64Offset)))}}var i=e.length,r=4-this._base64Offset,h=0,n=s||this._createDecodeBuffer(i+this._base64Offset,t);return i>=r?(4!=r?(this._base64Buffer.set(e.subarray(0,r),this._base64Offset),h=this._updateDecode(this._base64Buffer,0,n,0)):r=0,h=this._updateDecode(e,r,n,h),this._base64Offset=(i-r)%4,this._base64Offset>0&&this._base64Buffer.set(e.subarray(i-this._base64Offset),0)):i>0&&(this._base64Buffer.set(e,this._base64Offset),this._base64Offset+=i),t&&(h=this._finalsDecode(n,h),this._base64Offset=0),s?s.subarray(0,h):n}},{key:"_createEncodeBuffer",value:function(e,t){var s=e%3,a=4*Math.floor(e/3);return t&&s&&(a+=this._withPadchar?4:2==s?3:2),new Uint8Array(a)}},{key:"_createDecodeBuffer",value:function(e,t){var s=e%4,a=3*Math.floor(e/4);return t&&s&&(a+=3==s?2:1),new Uint8Array(a)}},{key:"_updateEncode",value:function(e,t,s,a){for(var f=0,i=0,r=0,h=e.length;h>=t+3;t+=3,a+=4)f=e[t],i=e[t+1],r=e[t+2],s[a]=this._encodeTable[f>>>2&63],s[a+1]=this._encodeTable[(3&f)<<4|i>>>4&15],s[a+2]=this._encodeTable[(15&i)<<2|r>>>6&3],s[a+3]=this._encodeTable[63&r];return a}},{key:"_updateDecode",value:function(e,t,s,a){for(var f=0,i=0,r=0,h=0,n=e.length;n>=t+4;t+=4,a+=3){if(f=this._decodeTable[127&e[t]],i=this._decodeTable[127&e[t+1]],r=this._decodeTable[127&e[t+2]],h=this._decodeTable[127&e[t+3]],0>f||0>i||0>r||0>h)throw new Error("Invaild base64 data.");s[a]=f<<2|i>>>4,s[a+1]=(15&i)<<4|r>>>2,s[a+2]=(3&r)<<6|h}return a}},{key:"_finalsEncode",value:function(e,t){var s=0,a=0;return 1==this._bytesOffset&&(s=this._bytesBuffer[0],e[t++]=this._encodeTable[s>>>2&63],e[t++]=this._encodeTable[(3&s)<<4],this._withPadchar&&(e[t++]=PADCHAR,e[t++]=PADCHAR)),2==this._bytesOffset&&(s=this._bytesBuffer[0],a=this._bytesBuffer[1],e[t++]=this._encodeTable[s>>>2&63],e[t++]=this._encodeTable[(3&s)<<4|a>>>4&15],e[t++]=this._encodeTable[(15&a)<<2],this._withPadchar&&(e[t++]=PADCHAR)),t}},{key:"_finalsDecode",value:function(e,t){var s=0,a=0,f=0;if(2==this._base64Offset){if(s=this._decodeTable[127&this._base64Buffer[0]],a=this._decodeTable[127&this._base64Buffer[1]],0>s||1>a)throw new Error("Invaild base64 data.");e[t++]=s<<2|a>>>4}if(3==this._base64Offset){if(s=this._decodeTable[127&this._base64Buffer[0]],a=this._decodeTable[127&this._base64Buffer[1]],f=this._decodeTable[127&this._base64Buffer[2]],0>s||0>a||0>f)throw new Error("Invaild base64 data.");e[t++]=s<<2|a>>>4,e[t++]=(15&a)<<4|f>>>2}return t}},{key:"withPadchar",get:function(){return this._withPadchar}},{key:"encodeTable",get:function(){return this._encodeTable}},{key:"decodeTable",get:function(){return this._decodeTable}}]),e}();exports["default"]=Base64;

},{"./Base64DefaultTable":2}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var BASE64_DEFAULT_ENCODE_TABLE=exports.BASE64_DEFAULT_ENCODE_TABLE=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47],BASE64_DEFAULT_DECODE_TABLE=exports.BASE64_DEFAULT_DECODE_TABLE=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];

},{}],3:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function str2buf(e){for(var s=new Uint8Array(e.length),t=0;t<e.length;++t)s[t]=e.charCodeAt(t);return s}function buf2str(e){return String.fromCharCode.apply(String,e)}var _Base=require("./data/codec/Base64"),_Base2=_interopRequireDefault(_Base),b64=new _Base2["default"],str="Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.",dat="TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=";console.time("label");for(var buffers=str.split(""),i=0;i<buffers.length;++i)buffers[i]=str2buf(buffers[i]);console.log("length:",buffers.length,buffers.length%3);for(var results=[],i=0;i<buffers.length;++i)results[i]=b64.encode(buffers[i],i==buffers.length-1);for(var i=0;i<results.length;++i)results[i]=buf2str(results[i]);var enstr=results.join(""),enbuf=str2buf(enstr),debuf=b64.decode(enbuf,!0),destr=buf2str(debuf);console.log(dat),console.log(destr),console.log("Encode:",dat==enstr),console.log("Decode:",str==destr),console.timeEnd("label");

},{"./data/codec/Base64":1}]},{},[3])
//# sourceMappingURL=bundle.js.map
