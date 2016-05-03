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
"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,t,r){return t&&e(a.prototype,t),r&&e(a,r),a}}(),_Base16LowerTable=require("./Base16LowerTable"),Base16=function(){function e(){var a=arguments.length<=0||void 0===arguments[0]?_Base16LowerTable.BASE16_LOWER_ENCODE_TABLE:arguments[0],t=arguments.length<=1||void 0===arguments[1]?_Base16LowerTable.BASE16_LOWER_DECODE_TABLE:arguments[1];_classCallCheck(this,e),this._base16Offset=0,this._base16Buffer=0,this._encodeTable=a,this._decodeTable=t}return _createClass(e,[{key:"encode",value:function(e){for(var a=(arguments.length<=1||void 0===arguments[1]?!0:arguments[1],arguments.length<=2||void 0===arguments[2]?null:arguments[2]),t=e.length,r=0,n=a||new Uint8Array(2*t),s=0;t>s;++s,r+=2)n[r]=this._encodeTable[e[s]>>>4&15],n[r+1]=this._encodeTable[15&e[s]];return a?a.subarray(0,r):n}},{key:"decode",value:function(e){var a=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],t=arguments.length<=2||void 0===arguments[2]?null:arguments[2];if(a&&this._base16Offset+e.length&1)throw new Error("Invaild base16 data.");var r=e.length,n=t||new Uint8Array(Math.floor((this._base16Offset+r)/2)),s=0;if(r>0){var o=0,i=0;if(this._base16Offset>0){if(o=this._decodeTable[127&this._base16Buffer],i=this._decodeTable[127&e[0]],0>o||0>i)throw new Error("Invaild base16 data.");n[s++]=o<<4|i}for(var l=this._base16Offset>0?1:0;r>=l+2;l+=2){if(o=this._decodeTable[127&e[l]],i=this._decodeTable[127&e[l+1]],0>o||0>i)throw new Error("Invaild base16 data.");n[s++]=o<<4|i}this._base16Offset=r-l,this._base16Offset>0&&(this._base16Buffer=e[r-1])}return t?t.subarray(0,s):n}},{key:"encodeTable",get:function(){return this._encodeTable}},{key:"decodeTable",get:function(){return this._decodeTable}}]),e}();exports["default"]=Base16;

},{"./Base16LowerTable":2}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var BASE16_LOWER_ENCODE_TABLE=exports.BASE16_LOWER_ENCODE_TABLE=new Int8Array([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102]),BASE16_LOWER_DECODE_TABLE=exports.BASE16_LOWER_DECODE_TABLE=new Int8Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,11,12,13,14,15,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);

},{}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var BASE16_UPPER_ENCODE_TABLE=exports.BASE16_UPPER_ENCODE_TABLE=new Int8Array([48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70]),BASE16_UPPER_DECODE_TABLE=exports.BASE16_UPPER_DECODE_TABLE=new Int8Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,10,11,12,13,14,15,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);

},{}],4:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),_Base32DefaultTable=require("./Base32DefaultTable"),PADCHAR=61,Base32=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0],s=arguments.length<=1||void 0===arguments[1]?_Base32DefaultTable.BASE32_DEFAULT_ENCODE_TABLE:arguments[1],a=arguments.length<=2||void 0===arguments[2]?_Base32DefaultTable.BASE32_DEFAULT_DECODE_TABLE:arguments[2];_classCallCheck(this,e),this._withPadchar=t,this._encodeTable=s,this._decodeTable=a,this._bytesBuffer=new Uint8Array(5),this._bytesOffset=0,this._base32Buffer=new Uint8Array(8),this._base32Offset=0}return _createClass(e,[{key:"encode",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],s=arguments.length<=2||void 0===arguments[2]?null:arguments[2],a=e.length,i=5-this._bytesOffset,f=0,h=s||this._createEncodeBuffer(a+this._bytesOffset,t);return a>=i?(5!=i?(this._bytesBuffer.set(e.subarray(0,i),this._bytesOffset),f=this._updateEncode(this._bytesBuffer,0,h,0)):i=0,f=this._updateEncode(e,i,h,f),this._bytesOffset=(a-i)%5,this._bytesOffset>0&&this._bytesBuffer.set(e.subarray(a-this._bytesOffset),0)):a>0&&(this._bytesBuffer.set(e,this._bytesOffset),this._bytesOffset+=a),t&&(f=this._finalsEncode(h,f),this._bytesOffset=0),s?s.subarray(0,f):h}},{key:"decode",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],s=arguments.length<=2||void 0===arguments[2]?null:arguments[2];if(t){var a=e.length+this._base32Offset;if(a%8==0&&a>0){for(var i=0,f=0,h=0,r=1;6>=r&&(i=a-r,f=this._base32Offset>i?this._base32Buffer[i]:e[i-this._base32Offset],PADCHAR==f);++r)++h;h>0&&(i=a-h,this._base32Offset>i?(this._base32Offset=i,e=e.subarray(0,0)):e=e.subarray(0,i-this._base32Offset),a=this._base32Offset+e.length)}if(a%8==1||a%8==3||a%8==6)throw new Error("Invaild base32 data.")}var _=e.length,b=8-this._base32Offset,d=0,n=s||this._createDecodeBuffer(_+this._base32Offset,t);return _>=b?(8!=b?(this._base32Buffer.set(e.subarray(0,b),this._base32Offset),d=this._updateDecode(this._base32Buffer,0,n,0)):b=0,d=this._updateDecode(e,b,n,d),this._base32Offset=(_-b)%8,this._base32Offset>0&&this._base32Buffer.set(e.subarray(_-this._base32Offset),0)):_>0&&(this._base32Buffer.set(e,this._base32Offset),this._base32Offset+=_),t&&(d=this._finalsDecode(n,d),this._base32Offset=0),s?s.subarray(0,d):n}},{key:"_createEncodeBuffer",value:function(e,t){var s=e%5,a=8*Math.floor(e/5);return t&&s&&(a+=this._withPadchar?8:Math.ceil(8*s/5)),new Uint8Array(a)}},{key:"_createDecodeBuffer",value:function(e,t){var s=e%8,a=5*Math.floor(e/8);return t&&s&&(a+=Math.floor(5*s/8)),new Uint8Array(a)}},{key:"_updateEncode",value:function(e,t,s,a){for(var i=0,f=0,h=0,r=0,_=0,b=e.length;b>=t+5;t+=5,a+=8)i=e[t],f=e[t+1],h=e[t+2],r=e[t+3],_=e[t+4],s[a]=this._encodeTable[i>>>3&31],s[a+1]=this._encodeTable[(7&i)<<2|f>>>6&3],s[a+2]=this._encodeTable[f>>>1&31],s[a+3]=this._encodeTable[(1&f)<<4|h>>>4&15],s[a+4]=this._encodeTable[(15&h)<<1|r>>>7&1],s[a+5]=this._encodeTable[r>>>2&31],s[a+6]=this._encodeTable[(3&r)<<3|_>>>5&7],s[a+7]=this._encodeTable[31&_];return a}},{key:"_updateDecode",value:function(e,t,s,a){for(var i=0,f=0,h=0,r=0,_=0,b=0,d=0,n=0,o=e.length;o>=t+8;t+=8,a+=5){if(i=this._decodeTable[127&e[t]],f=this._decodeTable[127&e[t+1]],h=this._decodeTable[127&e[t+2]],r=this._decodeTable[127&e[t+3]],_=this._decodeTable[127&e[t+4]],b=this._decodeTable[127&e[t+5]],d=this._decodeTable[127&e[t+6]],n=this._decodeTable[127&e[t+7]],0>i||0>f||0>h||0>r||0>_||0>b||0>d||0>n)throw new Error("Invaild base32 data.");s[a]=i<<3|f>>>2,s[a+1]=(3&f)<<6|h<<1|r>>>4,s[a+2]=(15&r)<<4|_>>>1,s[a+3]=(1&_)<<7|b<<2|d>>>3,s[a+4]=(7&d)<<5|n}return a}},{key:"_finalsEncode",value:function(e,t){var s=0,a=0,i=0,f=0;return 1==this._bytesOffset&&(s=this._bytesBuffer[0],e[t++]=this._encodeTable[s>>>3&31],e[t++]=this._encodeTable[(7&s)<<2],this._withPadchar&&(e[t++]=PADCHAR,e[t++]=PADCHAR,e[t++]=PADCHAR,e[t++]=PADCHAR,e[t++]=PADCHAR,e[t++]=PADCHAR)),2==this._bytesOffset&&(s=this._bytesBuffer[0],a=this._bytesBuffer[1],e[t++]=this._encodeTable[s>>>3&31],e[t++]=this._encodeTable[(7&s)<<2|a>>>6&3],e[t++]=this._encodeTable[a>>>1&31],e[t++]=this._encodeTable[(1&a)<<4],this._withPadchar&&(e[t++]=PADCHAR,e[t++]=PADCHAR,e[t++]=PADCHAR,e[t++]=PADCHAR)),3==this._bytesOffset&&(s=this._bytesBuffer[0],a=this._bytesBuffer[1],i=this._bytesBuffer[2],e[t++]=this._encodeTable[s>>>3&31],e[t++]=this._encodeTable[(7&s)<<2|a>>>6&3],e[t++]=this._encodeTable[a>>>1&31],e[t++]=this._encodeTable[(1&a)<<4|i>>>4&15],e[t++]=this._encodeTable[(15&i)<<1],this._withPadchar&&(e[t++]=PADCHAR,e[t++]=PADCHAR,e[t++]=PADCHAR)),4==this._bytesOffset&&(s=this._bytesBuffer[0],a=this._bytesBuffer[1],i=this._bytesBuffer[2],f=this._bytesBuffer[3],e[t++]=this._encodeTable[s>>>3&31],e[t++]=this._encodeTable[(7&s)<<2|a>>>6&3],e[t++]=this._encodeTable[a>>>1&31],e[t++]=this._encodeTable[(1&a)<<4|i>>>4&15],e[t++]=this._encodeTable[(15&i)<<1|f>>>7&1],e[t++]=this._encodeTable[f>>>2&31],e[t++]=this._encodeTable[(3&f)<<3],this._withPadchar&&(e[t++]=PADCHAR)),t}},{key:"_finalsDecode",value:function(e,t){var s=0,a=0,i=0,f=0,h=0,r=0,_=0;if(2==this._base32Offset){if(s=this._decodeTable[127&this._base32Buffer[0]],a=this._decodeTable[127&this._base32Buffer[1]],0>s||0>a)throw new Error("Invaild base32 data.");e[t++]=s<<3|a>>>2}if(4==this._base32Offset){if(s=this._decodeTable[127&this._base32Buffer[0]],a=this._decodeTable[127&this._base32Buffer[1]],i=this._decodeTable[127&this._base32Buffer[2]],f=this._decodeTable[127&this._base32Buffer[3]],0>s||0>a||0>i||0>f)throw new Error("Invaild base32 data.");e[t++]=s<<3|a>>>2,e[t++]=(3&a)<<6|i<<1|f>>>4}if(5==this._base32Offset){if(s=this._decodeTable[127&this._base32Buffer[0]],a=this._decodeTable[127&this._base32Buffer[1]],i=this._decodeTable[127&this._base32Buffer[2]],f=this._decodeTable[127&this._base32Buffer[3]],h=this._decodeTable[127&this._base32Buffer[4]],0>s||0>a||0>i||0>f||0>h)throw new Error("Invaild base32 data.");e[t++]=s<<3|a>>>2,e[t++]=(3&a)<<6|i<<1|f>>>4,e[t++]=(15&f)<<4|h>>>1}if(7==this._base32Offset){if(s=this._decodeTable[127&this._base32Buffer[0]],a=this._decodeTable[127&this._base32Buffer[1]],i=this._decodeTable[127&this._base32Buffer[2]],f=this._decodeTable[127&this._base32Buffer[3]],h=this._decodeTable[127&this._base32Buffer[4]],r=this._decodeTable[127&this._base32Buffer[5]],_=this._decodeTable[127&this._base32Buffer[6]],0>s||0>a||0>i||0>f||0>h||0>r||0>_)throw new Error("Invaild base32 data.");e[t++]=s<<3|a>>>2,e[t++]=(3&a)<<6|i<<1|f>>>4,e[t++]=(15&f)<<4|h>>>1,e[t++]=(1&h)<<7|r<<2|_>>>3}return t}},{key:"withPadchar",get:function(){return this._withPadchar}},{key:"encodeTable",get:function(){return this._encodeTable}},{key:"decodeTable",get:function(){return this._decodeTable}}]),e}();exports["default"]=Base32;

},{"./Base32DefaultTable":5}],5:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var BASE32_DEFAULT_ENCODE_TABLE=exports.BASE32_DEFAULT_ENCODE_TABLE=new Int8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,50,51,52,53,54,55]),BASE32_DEFAULT_DECODE_TABLE=exports.BASE32_DEFAULT_DECODE_TABLE=new Int8Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);

},{}],6:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),_Base64DefaultTable=require("./Base64DefaultTable"),PADCHAR=61,Base64=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0],s=arguments.length<=1||void 0===arguments[1]?_Base64DefaultTable.BASE64_DEFAULT_ENCODE_TABLE:arguments[1],a=arguments.length<=2||void 0===arguments[2]?_Base64DefaultTable.BASE64_DEFAULT_DECODE_TABLE:arguments[2];_classCallCheck(this,e),this._withPadchar=t,this._encodeTable=s,this._decodeTable=a,this._bytesBuffer=new Uint8Array(3),this._bytesOffset=0,this._base64Buffer=new Uint8Array(4),this._base64Offset=0}return _createClass(e,[{key:"encode",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],s=arguments.length<=2||void 0===arguments[2]?null:arguments[2],a=e.length,f=3-this._bytesOffset,i=0,r=s||this._createEncodeBuffer(a+this._bytesOffset,t);return a>=f?(3!=f?(this._bytesBuffer.set(e.subarray(0,f),this._bytesOffset),i=this._updateEncode(this._bytesBuffer,0,r,0)):f=0,i=this._updateEncode(e,f,r,i),this._bytesOffset=(a-f)%3,this._bytesOffset>0&&this._bytesBuffer.set(e.subarray(a-this._bytesOffset),0)):a>0&&(this._bytesBuffer.set(e,this._bytesOffset),this._bytesOffset+=a),t&&(i=this._finalsEncode(r,i),this._bytesOffset=0),s?s.subarray(0,i):r}},{key:"decode",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],s=arguments.length<=2||void 0===arguments[2]?null:arguments[2];if(t){var a=e.length+this._base64Offset;if(a%4==1)throw new Error("Invaild base64 data.");if(a%4==0&&a>0){var f=a-1;this._base64Offset>f?this._base64Buffer[f]==PADCHAR&&(this._base64Buffer[f-1]==PADCHAR?this._base64Offset-=2:--this._base64Offset):(f-=this._base64Offset,e[f]==PADCHAR&&(e.length>=2?e=e[f-1]==PADCHAR?e.subarray(0,e.length-2):e.subarray(0,e.length-1):(e=e.subarray(0,e.length-1),this._base64Buffer[this._base64Offset-1]==PADCHAR&&--this._base64Offset)))}}var i=e.length,r=4-this._base64Offset,h=0,n=s||this._createDecodeBuffer(i+this._base64Offset,t);return i>=r?(4!=r?(this._base64Buffer.set(e.subarray(0,r),this._base64Offset),h=this._updateDecode(this._base64Buffer,0,n,0)):r=0,h=this._updateDecode(e,r,n,h),this._base64Offset=(i-r)%4,this._base64Offset>0&&this._base64Buffer.set(e.subarray(i-this._base64Offset),0)):i>0&&(this._base64Buffer.set(e,this._base64Offset),this._base64Offset+=i),t&&(h=this._finalsDecode(n,h),this._base64Offset=0),s?s.subarray(0,h):n}},{key:"_createEncodeBuffer",value:function(e,t){var s=e%3,a=4*Math.floor(e/3);return t&&s&&(a+=this._withPadchar?4:2==s?3:2),new Uint8Array(a)}},{key:"_createDecodeBuffer",value:function(e,t){var s=e%4,a=3*Math.floor(e/4);return t&&s&&(a+=3==s?2:1),new Uint8Array(a)}},{key:"_updateEncode",value:function(e,t,s,a){for(var f=0,i=0,r=0,h=e.length;h>=t+3;t+=3,a+=4)f=e[t],i=e[t+1],r=e[t+2],s[a]=this._encodeTable[f>>>2&63],s[a+1]=this._encodeTable[(3&f)<<4|i>>>4&15],s[a+2]=this._encodeTable[(15&i)<<2|r>>>6&3],s[a+3]=this._encodeTable[63&r];return a}},{key:"_updateDecode",value:function(e,t,s,a){for(var f=0,i=0,r=0,h=0,n=e.length;n>=t+4;t+=4,a+=3){if(f=this._decodeTable[127&e[t]],i=this._decodeTable[127&e[t+1]],r=this._decodeTable[127&e[t+2]],h=this._decodeTable[127&e[t+3]],0>f||0>i||0>r||0>h)throw new Error("Invaild base64 data.");s[a]=f<<2|i>>>4,s[a+1]=(15&i)<<4|r>>>2,s[a+2]=(3&r)<<6|h}return a}},{key:"_finalsEncode",value:function(e,t){var s=0,a=0;return 1==this._bytesOffset&&(s=this._bytesBuffer[0],e[t++]=this._encodeTable[s>>>2&63],e[t++]=this._encodeTable[(3&s)<<4],this._withPadchar&&(e[t++]=PADCHAR,e[t++]=PADCHAR)),2==this._bytesOffset&&(s=this._bytesBuffer[0],a=this._bytesBuffer[1],e[t++]=this._encodeTable[s>>>2&63],e[t++]=this._encodeTable[(3&s)<<4|a>>>4&15],e[t++]=this._encodeTable[(15&a)<<2],this._withPadchar&&(e[t++]=PADCHAR)),t}},{key:"_finalsDecode",value:function(e,t){var s=0,a=0,f=0;if(2==this._base64Offset){if(s=this._decodeTable[127&this._base64Buffer[0]],a=this._decodeTable[127&this._base64Buffer[1]],0>s||1>a)throw new Error("Invaild base64 data.");e[t++]=s<<2|a>>>4}if(3==this._base64Offset){if(s=this._decodeTable[127&this._base64Buffer[0]],a=this._decodeTable[127&this._base64Buffer[1]],f=this._decodeTable[127&this._base64Buffer[2]],0>s||0>a||0>f)throw new Error("Invaild base64 data.");e[t++]=s<<2|a>>>4,e[t++]=(15&a)<<4|f>>>2}return t}},{key:"withPadchar",get:function(){return this._withPadchar}},{key:"encodeTable",get:function(){return this._encodeTable}},{key:"decodeTable",get:function(){return this._decodeTable}}]),e}();exports["default"]=Base64;

},{"./Base64DefaultTable":7}],7:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var BASE64_DEFAULT_ENCODE_TABLE=exports.BASE64_DEFAULT_ENCODE_TABLE=new Int8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47]),BASE64_DEFAULT_DECODE_TABLE=exports.BASE64_DEFAULT_DECODE_TABLE=new Int8Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1]);

},{}],8:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function toBuffer(e){for(var o=new Uint8Array(e.length),a=0;a<o.length;++a)o[a]=e.charCodeAt(a);return o}function toString(e){return String.fromCharCode.apply(String,e)}function join(e){return"["+Array.prototype.join.call(e,",")+"]"}var _Base=require("./data/codec/Base16"),_Base2=_interopRequireDefault(_Base),_Base3=require("./data/codec/Base32"),_Base4=_interopRequireDefault(_Base3),_Base5=require("./data/codec/Base64"),_Base6=_interopRequireDefault(_Base5),_Base16UpperTable=require("./data/codec/Base16UpperTable"),base64=new _Base6["default"];console.log("Base64-1:",""==toString(base64.encode(toBuffer("")))),console.log("Base64-2:","Zg=="==toString(base64.encode(toBuffer("f")))),console.log("Base64-3:","Zm8="==toString(base64.encode(toBuffer("fo")))),console.log("Base64-4:","Zm9v"==toString(base64.encode(toBuffer("foo")))),console.log("Base64-5:","Zm9vYg=="==toString(base64.encode(toBuffer("foob")))),console.log("Base64-6:","Zm9vYmE="==toString(base64.encode(toBuffer("fooba")))),console.log("Base64-7:","Zm9vYmFy"==toString(base64.encode(toBuffer("foobar")))),console.log("Base64-8:",toString(base64.decode(toBuffer("Zm9vYg==")))),console.log("Base64-9:",toString(base64.decode(toBuffer("Zm9vYmE=")))),console.log("Base64-0:",toString(base64.decode(toBuffer("Zm9vYmFy"))));var base16=new _Base2["default"](_Base16UpperTable.BASE16_UPPER_ENCODE_TABLE,_Base16UpperTable.BASE16_UPPER_DECODE_TABLE);console.log("Base16-1:","000102030405060708090A0B0C0D0E0F"==toString(base16.encode(new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])))),console.log("Base16-2:",join(base16.decode(toBuffer("000102030405060708090A0B0C0D0E0F"))));var base32=new _Base4["default"](!1);console.log("Base32-1:",""==toString(base32.encode(toBuffer("")))),console.log("Base32-2:","MZXW6"==toString(base32.encode(toBuffer("foo")))),console.log("Base32-3:","MZXW6YQ"==toString(base32.encode(toBuffer("foob")))),console.log("Base32-4:","MZXW6YTB"==toString(base32.encode(toBuffer("fooba")))),console.log("Base32-5:","MZXW6YTBOI"==toString(base32.encode(toBuffer("foobar")))),console.log("Base32-6:",toString(base32.encode(new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])))),console.log("Base32-7:",toString(base32.encode(base32.decode(toBuffer("AAAQEAYEAUDAOCAJBIFQYDIOB4IBCEQTCQKRMFYYDENBWHA5DYPQ===="))))),console.log("Base32-8:",join(base32.decode(toBuffer("AAAQEAYEAUDAOCAJBIFQYDIOB4IBCEQTCQKRMFYYDENBWHA5DYPQ"))));

},{"./data/codec/Base16":1,"./data/codec/Base16UpperTable":3,"./data/codec/Base32":4,"./data/codec/Base64":6}]},{},[8])
//# sourceMappingURL=bundle.js.map
