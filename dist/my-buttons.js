/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},o=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${o}--\x3e`,r=new RegExp(`${o}|${s}`);class n{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],n=document.createTreeWalker(e.content,133,null,!1);let l=0,p=-1,h=0;const{strings:u,values:{length:g}}=t;for(;h<g;){const t=n.nextNode();if(null!==t){if(p++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let o=0;for(let t=0;t<i;t++)a(e[t].name,"$lit$")&&o++;for(;o-- >0;){const e=u[h],i=d.exec(e)[2],o=i.toLowerCase()+"$lit$",s=t.getAttribute(o);t.removeAttribute(o);const n=s.split(r);this.parts.push({type:"attribute",index:p,name:i,strings:n}),h+=n.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const o=t.parentNode,s=e.split(r),n=s.length-1;for(let e=0;e<n;e++){let i,r=s[e];if(""===r)i=c();else{const t=d.exec(r);null!==t&&a(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(r)}o.insertBefore(i,t),this.parts.push({type:"node",index:++p})}""===s[n]?(o.insertBefore(c(),t),i.push(t)):t.data=s[n],h+=n}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&p!==l||(p++,e.insertBefore(c(),t)),l=p,this.parts.push({type:"node",index:p}),null===t.nextSibling?t.data="":(i.push(t),p--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),h++}}else n.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const a=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(t,e){const{element:{content:i},parts:o}=t,s=document.createTreeWalker(i,133,null,!1);let r=u(o),n=o[r],a=-1,l=0;const c=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==n&&n.index===a;)n.index=null!==d?-1:n.index-l,r=u(o,r),n=o[r]}c.forEach(t=>t.parentNode.removeChild(t))}const h=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},u=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const g=new WeakMap,m=t=>"function"==typeof t&&g.has(t),f={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],o=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let r,n=0,a=0,c=s.nextNode();for(;n<o.length;)if(r=o[n],l(r)){for(;a<r.index;)a++,"TEMPLATE"===c.nodeName&&(i.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=i.pop(),c=s.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));n++}else this.__parts.push(void 0),n++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${o} `;class x{constructor(t,e,i,o){this.strings=t,this.values=e,this.type=i,this.processor=o}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const a=d.exec(t);e+=null===a?t+(i?w:s):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+o}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==_&&(e=_.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class ${constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let o="";for(let s=0;s<e;s++){o+=t[s];const e=i[s];if(void 0!==e){const t=e.value;if(b(t)||!S(t))o+="string"==typeof t?t:String(t);else for(const e of t)o+="string"==typeof e?e:String(e)}}return o+=t[e],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||b(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class P{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof x?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const i=new y(e,t.processor,this.options),o=i._clone();i.update(t.values),this.__commitNode(o),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,o=0;for(const s of t)i=e[o],void 0===i&&(i=new P(this.options),e.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(e[o-1])),i.setValue(s),i.commit(),o++;o<e.length&&(e.length=o,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class k{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class T extends ${constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends C{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class E{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function O(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(o);return i=e.keyString.get(s),void 0===i&&(i=new n(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const V=new Map,D=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,o){const s=e[0];if("."===s){return new T(t,e.slice(1),i).parts}if("@"===s)return[new E(t,e.slice(1),o.eventContext)];if("?"===s)return[new k(t,e.slice(1),i)];return new $(t,e,i).parts}handleTextExpression(t){return new P(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const z=(t,...e)=>new x(t,e,"html",H)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,Y=(t,e)=>`${t}--${e}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const U=t=>e=>{const i=Y(e.type,t);let s=V.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(i,s));let r=s.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(o);if(r=s.keyString.get(a),void 0===r){const i=e.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(i,t),r=new n(e,i),s.keyString.set(a,r)}return s.stringsArray.set(e.strings,r),r},R=["html","svg"],j=new Set,I=(t,e,i)=>{j.add(t);const o=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(o,t);const n=document.createElement("style");for(let t=0;t<r;t++){const e=s[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}(t=>{R.forEach(e=>{const i=V.get(Y(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),p(t,i)})})})(t);const a=o.content;i?function(t,e,i=null){const{element:{content:o},parts:s}=t;if(null==i)return void o.appendChild(e);const r=document.createTreeWalker(o,133,null,!1);let n=u(s),a=0,l=-1;for(;r.nextNode();){l++;for(r.currentNode===i&&(a=h(e),i.parentNode.insertBefore(e,i));-1!==n&&s[n].index===l;){if(a>0){for(;-1!==n;)s[n].index+=a,n=u(s,n);return}n=u(s,n)}}}(i,n,a.firstChild):a.insertBefore(n,a.firstChild),window.ShadyCSS.prepareTemplateStyles(o,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(n,a.firstChild);const t=new Set;t.add(n),p(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),F={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:B};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const o=this._attributeNameForProperty(i,e);void 0!==o&&(this._attributeToPropertyMap.set(o,i),t.push(o))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=F){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdateInternal(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||F}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=B){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,o=e.converter||q,s="function"==typeof o?o:o.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,o=e.converter;return(o&&o.toAttribute||q.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=F){const o=this.constructor,s=o._attributeNameForProperty(t,i);if(void 0!==s){const t=o._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(t);if(void 0!==o){const t=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let o=!0;if(void 0!==t){const s=this.constructor;i=i||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function X(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Z(t,e)}function G(t){return X({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class tt{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const i=e.reduce((e,i,o)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[o+1],t[0]);return new tt(i,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const it={};class ot extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),o=[];i.forEach(t=>o.unshift(t)),this._styles=o}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==it&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return it}}ot.finalized=!0,ot.render=(t,e,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const s=o.scopeName,r=D.has(e),n=L&&11===e.nodeType&&!!e.host,a=n&&!j.has(s),l=a?document.createDocumentFragment():e;if(((t,e,o)=>{let s=D.get(e);void 0===s&&(i(e,e.firstChild),D.set(e,s=new P(Object.assign({templateFactory:O},o))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:U(s)},o)),a){const t=D.get(l);D.delete(l);const o=t.value instanceof y?t.value.template:void 0;I(s,l,o),i(e,e.firstChild),e.appendChild(l),D.set(e,t)}!r&&n&&window.ShadyCSS.styleElement(e.host)};var st=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,rt="[^\\s]+",nt=/\[([^]*?)\]/gm;function at(t,e){for(var i=[],o=0,s=t.length;o<s;o++)i.push(t[o].substr(0,e));return i}var lt=function(t){return function(e,i){var o=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return o>-1?o:null}};function ct(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var o=0,s=e;o<s.length;o++){var r=s[o];for(var n in r)t[n]=r[n]}return t}var dt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],pt=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=at(pt,3),ut={dayNamesShort:at(dt,3),dayNames:dt,monthNamesShort:ht,monthNames:pt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},gt=ct({},ut),mt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},ft={D:function(t){return String(t.getDate())},DD:function(t){return mt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return mt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return mt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return mt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return mt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return mt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return mt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return mt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return mt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return mt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return mt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(Math.floor(Math.abs(e)/60),2)+":"+mt(Math.abs(e)%60,2)}},vt=function(t){return+t-1},yt=[null,"[1-9]\\d?"],_t=[null,rt],wt=["isPm",rt,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],xt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],bt=(lt("monthNamesShort"),lt("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var St=function(t,e,i){if(void 0===e&&(e=bt.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var o=[];e=(e=bt[e]||e).replace(nt,(function(t,e){return o.push(e),"@@@"}));var s=ct(ct({},gt),i);return(e=e.replace(st,(function(e){return ft[e](t,s)}))).replace(/@@@/g,(function(){return o.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var $t=["closed","locked","off"],Ct=function(t,e,i,o){o=o||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return s.detail=i,t.dispatchEvent(s),s},Pt=function(t){Ct(window,"haptic",t)},kt=function(t,e,i,o){var s;if("double_tap"===o&&i.double_tap_action?s=i.double_tap_action:"hold"===o&&i.hold_action?s=i.hold_action:"tap"===o&&i.tap_action&&(s=i.tap_action),s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(Pt("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&Ct(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Ct(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,s=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===s?"homeassistant":s;switch(s){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(r,o,{entity_id:e})})(t,e,$t.includes(t.states[e].state))}(e,i.entity),Pt("success"));break;case"call-service":if(!s.service)return void Pt("failure");var r=s.service.split(".",2);e.callService(r[0],r[1],s.service_data),Pt("success")}};function Tt(t){return void 0!==t&&"none"!==t.action}const Nt={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let Mt=class extends ot{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}get _tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.tap_action)||{action:"more-info"}}get _hold_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.hold_action)||{action:"none"}}get _double_tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return z``;this._helpers.importMoreInfoControl("climate");const t=Object.keys(this.hass.states).filter(t=>"sun"===t.substr(0,t.indexOf(".")));return z`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Nt.required.icon}></ha-icon>
            <div class="title">${Nt.required.name}</div>
          </div>
          <div class="secondary">${Nt.required.secondary}</div>
        </div>
        ${Nt.required.show?z`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(t=>z`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Nt.actions.icon}></ha-icon>
            <div class="title">${Nt.actions.name}</div>
          </div>
          <div class="secondary">${Nt.actions.secondary}</div>
        </div>
        ${Nt.actions.show?z`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Nt.actions.options.tap.icon}></ha-icon>
                    <div class="title">${Nt.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${Nt.actions.options.tap.secondary}</div>
                </div>
                ${Nt.actions.options.tap.show?z`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Nt.actions.options.hold.icon}></ha-icon>
                    <div class="title">${Nt.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${Nt.actions.options.hold.secondary}</div>
                </div>
                ${Nt.actions.options.hold.show?z`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Nt.actions.options.double_tap.icon}></ha-icon>
                    <div class="title">${Nt.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${Nt.actions.options.double_tap.secondary}</div>
                </div>
                ${Nt.actions.options.double_tap.show?z`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Nt.appearance.icon}></ha-icon>
            <div class="title">${Nt.appearance.name}</div>
          </div>
          <div class="secondary">${Nt.appearance.secondary}</div>
        </div>
        ${Nt.appearance.show?z`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-formfield .label=${"Toggle warning "+(this._show_warning?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_warning}
                    .configValue=${"show_warning"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${"Toggle error "+(this._show_error?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_error}
                    .configValue=${"show_error"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            `:""}
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(t){this._toggleThing(t,Nt.actions.options)}_toggleOption(t){this._toggleThing(t,Nt)}_toggleThing(t,e){const i=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=i,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;if(this["_"+e.configValue]!==e.value){if(e.configValue)if(""===e.value){const t=Object.assign({},this._config);delete t[e.configValue],this._config=t}else this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value});Ct(this,"config-changed",{config:this._config})}}static get styles(){return et`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};t([X({attribute:!1})],Mt.prototype,"hass",void 0),t([G()],Mt.prototype,"_config",void 0),t([G()],Mt.prototype,"_toggle",void 0),t([G()],Mt.prototype,"_helpers",void 0),Mt=t([J("boilerplate-card-editor")],Mt);const Et="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class At extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Et?"100px":"50px",height:Et?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime)},o=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Ct(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Ct(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Ct(t,"action",{action:"double_tap"})):Ct(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",t=>{13===t.keyCode&&o(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-boilerplate",At);const Ot=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-boilerplate"))return t.querySelector("action-handler-boilerplate");const e=document.createElement("action-handler-boilerplate");return t.appendChild(e),e})();i&&i.bind(t,e)},Vt=(Dt=(t={})=>e=>{Ot(e.committer.element,t)},(...t)=>{const e=Dt(...t);return g.set(e,!0),e});var Dt;var Ht={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},zt={common:Ht},Yt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Lt={common:Yt};const Ut={en:Object.freeze({__proto__:null,common:Ht,default:zt}),nb:Object.freeze({__proto__:null,common:Yt,default:Lt})};function Rt(t,e="",i=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=t.split(".").reduce((t,e)=>t[e],Ut[o])}catch(e){s=t.split(".").reduce((t,e)=>t[e],Ut.en)}return void 0===s&&(s=t.split(".").reduce((t,e)=>t[e],Ut.en)),""!==e&&""!==i&&(s=s.replace(e,i)),s}console.info(`%c  MY-BUTTON-LIGHT \n%c  ${Rt("common.version")} 0.0.1    `,"color: orange; font-weight: bold; background: green","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"my-button-light",name:"My Button Light",description:"This is just my custom button card, it does what I need it to do without to much customization."});let jt=class extends ot{static async getConfigElement(){return document.createElement("boilerplate-card-editor")}static getStubConfig(){return{}}static get properties(){return{hass:{},config:{},active:{}}}setConfig(t){if(!t)throw new Error(Rt("common.invalid_configuration"));if(!t.entity)throw new Error("You need to define an entity");this.config=Object.assign({name:"MyButtonLight"},t)}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var o=e.get("hass");return!o||o.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){var t,e=JSON.parse(JSON.stringify(this.config));const i=this.config.entity,o=null===(t=this.config.entity)||void 0===t?void 0:t.split(".")[1],s=this.hass.states[""+i];e.row1=e.row1?e.row1:{},e.row2=e.row2?e.row2:{},e.row3=e.row3?e.row3:{},e.slider=e.slider?e.slider:{},e.styles=e.styles?e.styles:{},e.styles.card=e.styles.card?e.styles.card:{},e.styles.icon=e.styles.icon?e.styles.icon:{},e.styles.slider=e.styles.slider?e.styles.slider:{},e.styles.text=e.styles.text?e.styles.text:{},e.styles.text.row1=e.styles.text.row1?e.styles.text.row1:{},e.styles.text.row2=e.styles.text.row2?e.styles.text.row2:{},e.styles.text.row3=e.styles.text.row3?e.styles.text.row3:{};let r=e.actionArea?e.actionArea:"main",n=e.styles.card.height?e.styles.card.height:"100%",a=e.styles.card.width?e.styles.card.width:"100%";this.style.height=n,this.style.width=a;let l=this.offsetWidth,c=this.offsetHeight;window.addEventListener("resize",()=>{l=this.offsetWidth,c=this.offsetHeight});let d=e.styles.card.borderRadius?e.styles.card.borderRadius:"10%",p=e.styles.card.backgroundColor?e.styles.card.backgroundColor:"rgba(255, 255, 255, 1)",h=e.styles.card.backgroundColorOff?e.styles.card.backgroundColorOff:"rgba(230, 230, 230, 0.5)",u=e.icon?e.icon:"mdi:alert-circle",g=e.styles.icon.size?e.styles.icon.size:1.3,m=e.styles.icon.color?e.styles.icon.color:"rgba(253, 216, 53, 1)",f=e.styles.icon.colorOff?e.styles.icon.colorOff:"rgba(0, 0, 0, 1)",v=e.styles.icon.position?e.styles.icon.position:"absolute",y=e.styles.icon.top?e.styles.icon.top:"15%",_=e.styles.icon.left?e.styles.icon.left:"10%",w=e.slider?e.slider:{},x=(e.styles.slider.position&&e.styles.slider.position,e.styles.slider.height?e.styles.slider.height:"40px"),b=e.styles.slider.backgroundColor?e.styles.slider.backgroundColor:"transparent",S=e.styles.slider.progressColor?e.styles.slider.progressColor:m,$=e.slider.maxSet?e.slider.maxSet:100,C=e.slider.minSet?e.slider.minSet:0,P=e.slider.maxBar?e.slider.maxBar:100,k=e.slider.minBar?e.slider.minBar:0,T=e.row1.text?e.row1.text:"",N=e.row1.textOff?e.row1.textOff:"",M=e.styles.text.row1.color?e.styles.text.row1.color:"black",E=!e.styles.text.row1.oneLine||e.styles.text.row1.oneLine,A=e.styles.text.row1.size?e.styles.text.row1.size:"15px",O=e.styles.text.row1.margin?e.styles.text.row1.margin:"0 0 10px 12px",V=e.row2.text?e.row2.text:"",D=e.row2.textOff?e.row2.textOff:"",H=e.styles.text.row2.color?e.styles.text.row2.color:"black",Y=!e.styles.text.row2.oneLine||e.styles.text.row2.oneLine,L=e.styles.text.row2.size?e.styles.text.row2.size:"13px",U=e.styles.text.row2.margin?e.styles.text.row2.margin:"0 0 5px 14px",R=e.row3.text?e.row3.text:"",j=e.row3.textOff?e.row3.textOff:"",I=e.styles.text.row3.color?e.styles.text.row3.color:"black",q=!e.styles.text.row3.oneLine||e.styles.text.row3.oneLine,B=e.styles.text.row3.size?e.styles.text.row3.size:"13px",F=e.styles.text.row3.margin?e.styles.text.row3.margin:"0 0 25px 14px";"<light_percentage>"===T?(""===N&&(N="0%"),T="off"===s.state?N:Math.round(s.attributes.brightness/2.55)+"%"):T=e.row1.text?e.row1.text:s.attributes.friendly_name,"<light_percentage>"===V&&(""===D&&(D="0%"),V="off"===s.state?D:Math.round(s.attributes.brightness/2.55)+"%"),"<light_percentage>"===R&&(""===j&&(j="0%"),R="off"===s.state?j:Math.round(s.attributes.brightness/2.55)+"%");const W=`\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tborder-radius: ${d};\n\t\t\tbackground-color: ${"off"===s.state||"unavailable"===s.state||null==s.state?h:p};\n\t\t\toverflow: hidden;\n\t\t`,J=`\n\t\t\t--icon-color: ${"off"===s.state||"unavailable"===s.state||null==s.state?f:m}; \n\t\t\t--icon-size: ${g};\n\t\t\t--icon-position: ${v}; \n\t\t\t--icon-top: ${y}; \n\t\t\t--icon-left: ${_};\n\t\t`;var Z=`\n\t\t\t--card-height: ${n};\n\t\t\t--card-width: ${a};\n\t\t\t--card-border-radius: ${d};\n\t\t`,X=`\n\t\t\t--slider-height: ${x};\n\t\t\t--slider-width: ${c+10}px;\n\t\t\t--slider-left-pos: ${c/2-parseInt(x)/2+2}px;\n\t\t\t--slider-top-pos: ${c/2-parseInt(x)/2+2}px;\n\t\t\t--slider-background-color: ${b};\n\t\t\t--slider-progress-color: ${"off"===s.state||"unavailable"===s.state||null==s.state?"transparent":S}\n\n\t  \t`,G=`\n\t\t\t--row-1-color: ${M};\n\t\t\t--row-2-color: ${H};\n\t\t\t--row-3-color: ${I};\n\t\t\t--row-1-size: ${A};\n\t\t\t--row-1-line-height: ${parseInt(A)+2}px;\n\t\t\t--row-2-size: ${L};\n\t\t\t--row-2-line-height: ${parseInt(L)+2}px;\n\t\t\t--row-3-size: ${B};\n\t\t\t--row-3-line-height: ${parseInt(B)+2}px;\n\t\t\t--row-1-margin: ${O};\n\t\t\t--row-2-margin: ${U};\n\t\t\t--row-3-margin: ${F};\n\t\t`;return z`
			<ha-card style="${W}">

				<div class="root-container" style="${Z}">
					${(()=>{let t=z``;return t="main"===r?z`
					<div class="info-container" style="${G}" 
						@action=${this._handleAction}
						.actionHandler=${Vt({hasHold:Tt(this.config.hold_action),hasDoubleClick:Tt(this.config.double_tap_action)})} >
							
						<p class="row-3 ${E?"text-oneline":"text"}">${R}</p>
						<p class="row-2 ${Y?"text-oneline":"text"}">${V}</p>
						<p class="row-1 ${q?"text-oneline":"text"}">${T}</p>
						
					</div>
				`:z`
					<div class="info-container" style="${G}" >
						<p class="row-3 ${E?"text-oneline":"text"}">${R}</p>
						<p class="row-2 ${Y?"text-oneline":"text"}">${V}</p>
						<p class="row-1 ${q?"text-oneline":"text"}">${T}</p>
					</div>
				`,t})()}

					${(()=>{let t=z``;return t="icon"===r?z`
					<ha-icon class="my-button-light-icon" icon="${u}" style="${J}" 
					@action=${this._handleAction}
					.actionHandler=${Vt({hasHold:Tt(this.config.hold_action),hasDoubleClick:Tt(this.config.double_tap_action)})} ></ha-icon>
				`:z`
					<ha-icon class="my-button-light-icon" icon="${u}" style="${J}"></ha-icon>
				`,t})()}

					${(()=>{let t=z``;return(w||0!==Object.keys(w).length)&&(t=z`
					<input class="input-slider" id="${o}-slider" style="${X}" orient="vertical" type="range" step="1" 
						value="${"off"===s.state?0:Math.round(s.attributes.brightness/2.55)}" 
						min="${k}" max="${P}"
						@input=${t=>this._handleSliderAction(s,t.target,C,$)}>
				`),t})()}
				</div>

			</ha-card>
		`}_handleAction(t){console.log("Test 3"),this.hass&&this.config&&t.detail.action&&kt(this,this.hass,this.config,t.detail.action)}_handleSliderAction(t,e,i,o){let s=e.value;s>o?s=o:s<i&&(s=i),this.hass.callService("light","turn_on",{entity_id:t.entity_id,brightness:2.55*s}),e.value=s}_setSliderValueTransition(t,e,i){if(console.log("Setting Slider with Transition",t),i>e)for(var o=e;o<i;o++)setTimeout(()=>{console.log("Hello")},200);else for(o=i;o<e;o++);}static get styles(){const t=et`
		/* vertical slider styling */
		.slider-container {
			padding: 0;
			margin: 0;
		}
		.input-slider {
			-webkit-appearance: none;
			background: var(--slider-background-color);
			height: var(--slider-height);
			width: var(--slider-width);
			border-radius: 0;
			border: none;
			outline: none;
			margin: 0;
			padding: 0;

			-webkit-transform: rotate(-90deg);
			-moz-transform: rotate(-90deg);
			-o-transform: rotate(-90deg);
			-ms-transform: rotate(-90deg);
			transform: rotate(-90deg);


			position: absolute;
			left: var(--slider-left-pos);
			top: var(--slider-top-pos);
			
		}
		
		.input-slider::-webkit-slider-runnable-track {
		}

		
		
		.input-slider::-webkit-slider-thumb {
			-webkit-appearance: none;
			width: 8px; /* 1 */
			height: 40px;
			background: var(--slider-progress-color);
			box-shadow: 5px 0px 5px var(--slider-progress-color),
						0px 0px 5px var(--slider-progress-color),
						-5px 0px 5px var(--slider-progress-color),
						-10px 0px 5px var(--slider-progress-color),
						-15px 0px 5px var(--slider-progress-color),
						-20px 0px 5px var(--slider-progress-color),
						-25px 0px 5px var(--slider-progress-color),
						-30px 0px 5px var(--slider-progress-color),
						-35px 0px 5px var(--slider-progress-color),
						-40px 0px 5px var(--slider-progress-color),
						-45px 0px 5px var(--slider-progress-color),
						-50px 0px 5px var(--slider-progress-color),
						-55px 0px 5px var(--slider-progress-color),
						-60px 0px 5px var(--slider-progress-color),
						-65px 0px 5px var(--slider-progress-color),
						-70px 0px 5px var(--slider-progress-color),
						-75px 0px 5px var(--slider-progress-color),
						-80px 0px 5px var(--slider-progress-color),
						-85px 0px 5px var(--slider-progress-color),
						-90px 0px 5px var(--slider-progress-color),
						-95px 0px 5px var(--slider-progress-color),
						-100px 0px 5px var(--slider-progress-color),
						-105px 0px 5px var(--slider-progress-color),
						-110px 0px 5px var(--slider-progress-color),
						-115px 0px 5px var(--slider-progress-color),
						-120px 0px 5px var(--slider-progress-color),
						-125px 0px 5px var(--slider-progress-color),
						-130px 0px 5px var(--slider-progress-color),
						-135px 0px 5px var(--slider-progress-color),
						-140px 0px 5px var(--slider-progress-color),
						-145px 0px 5px var(--slider-progress-color),
						-150px 0px 5px var(--slider-progress-color),
						-155px 0px 5px var(--slider-progress-color),
						-160px 0px 5px var(--slider-progress-color),
						-165px 0px 5px var(--slider-progress-color),
						-170px 0px 5px var(--slider-progress-color),
						-175px 0px 5px var(--slider-progress-color),
						-180px 0px 5px var(--slider-progress-color),
						-185px 0px 5px var(--slider-progress-color),
						-190px 0px 5px var(--slider-progress-color),
						-195px 0px 5px var(--slider-progress-color),
						-200px 0px 5px var(--slider-progress-color);
			border-top: 5px solid transparent;
			border-right: 5px solid transparent;
			border-bottom: 5px solid transparent;
			border-left: 5px solid transparent;
			cursor: pointer;
		}
		
		`,e=et`
			.my-button-light-icon {
				color: var(--icon-color); 
				width: var(--icon-width); 
				height: var(--icon-height); 
				position: var(--icon-position); 
				top: var(--icon-top); 
				left: var(--icon-left); 
				transform: scale(var(--icon-size));
			}
		`;return et`
		${t}
		${e}
		.root-container {
			height: var(--card-height);
			width: var(--card-width);
		}

        .info-container {
			height: 100%;
			width: 100%;
            display: flex;
            flex-direction: column-reverse;
        }

        .text-oneline {
            padding: 0;
            margin: 0;
			overflow: hidden;
			white-space: nowrap;
        }
		.text {
            padding: 0;
            margin: 0;
		}

		.row-1 {
			margin: var(--row-1-margin);
            font-weight: bold;
			font-size: var(--row-1-size);
			line-height: var(--row-1-line-height);
			height: var(--row-1-line-height);

			color: var(--row-1-color);
		}
		.row-2 {
			margin: var(--row-2-margin);
			font-size: 13px;
			line-height: var(--row-2-line-height);
			height: var(--row-2-line-height);
			color: var(--row-2-color);
		}
		.row-3 {
			margin: var(--row-3-margin);
			font-size: 13px;
			line-height: var(--row-3-line-height);
			height: var(--row-3-line-height);
			color: var(--row-3-color);
		}


    `}};t([X({attribute:!1})],jt.prototype,"hass",void 0),t([G()],jt.prototype,"config",void 0),jt=t([J("my-button-light")],jt);export{jt as MyButtonLight};
