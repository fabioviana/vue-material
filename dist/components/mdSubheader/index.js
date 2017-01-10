/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(n){if(r[n])return r[n].exports;var s=r[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)})({0:function(e,t,r){e.exports=r(96)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},96:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){e.component("md-subheader",e.extend(a.default)),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var o=r(295),a=n(o),d=r(242),u=n(d);e.exports=t.default},149:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),o=n(s);t.default={mixins:[o.default]},e.exports=t.default},215:function(e,t){},242:function(e,t){e.exports=".THEME_NAME.md-subheader.md-primary{color:PRIMARY-COLOR}.THEME_NAME.md-subheader.md-accent{color:ACCENT-COLOR}.THEME_NAME.md-subheader.md-warn{color:WARN-COLOR}\n"},295:function(e,t,r){var n,s;r(215),n=r(149);var o=r(360);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,e.exports=n},360:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return"md-list"===e.$parent.$options._componentTag?r("li",{staticClass:"md-subheader",class:[e.themeClass]},[e._t("default")],2):r("div",{staticClass:"md-subheader",class:[e.themeClass]},[e._t("default")],2)},staticRenderFns:[]}}})}));