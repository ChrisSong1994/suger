!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.suger=t():e.suger=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),u=n(2);t.default=function(e){if(!r.default(e))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)u.default(e,n)&&t.push(n);return t}},function(e,t,n){"use strict";t.__esModule=!0;t.default=function(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},function(e,t,n){"use strict";t.__esModule=!0;t.default=function(e,t){return null!==e&&Object.prototype.hasOwnProperty.call(e,t)}},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]});t.__esModule=!0,r(t,n(0),"default","keys"),r(t,n(4),"default","entries"),r(t,n(2),"default","has"),r(t,n(5),"default","allKeys"),r(t,n(6),"default","debounce"),r(t,n(7),"default","throttle")},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),u=function(e){if(void 0===e&&(e={}),Object.entries)return Object.entries(e);for(var t=r.default(e),n=t.length,u=Array(n),o=0;o<n;o++)u[o]=[t[o],e[t[o]]];return u};t.default=u,console.log(u({a:"a",b:"b"}))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1);t.default=function(e){if(!r.default(e))return[];var t=[];for(var n in e)t.push(n);return t}},function(e,t,n){"use strict";t.__esModule=!0;t.default=function(e,t,n){var r=null;return function(){for(var u=this,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];r&&clearTimeout(r),n&&!r&&e.apply(this,o),r=setTimeout((function(){e.apply(u,o)}),t)}}},function(e,t,n){"use strict";var r=this;t.__esModule=!0;t.default=function(e,t){var n=0,u=null;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var f=+new Date;f-n<t?(u&&clearTimeout(u),u=setTimeout((function(){n=f,e.apply(r,o)}),t)):(n=f,e.apply(r,o))}}}])}));