"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[7441],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),i=a(6550),u=a(1980),s=a(7392),c=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var v=a(2389);const y="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==i&&(p(t),u(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",g,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",y)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function T(e){const t=(0,v.Z)();return n.createElement(x,(0,r.Z)({key:String(t)},e))}},339:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={},u="editor.leap",s={unversionedId:"extras/editor/leap",id:"extras/editor/leap",title:"editor.leap",description:"To use this, add it to your lazy.nvim imports:",source:"@site/docs/extras/editor/leap.md",sourceDirName:"extras/editor",slug:"/extras/editor/leap",permalink:"/extras/editor/leap",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/extras/editor/leap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"flash.nvim",permalink:"/extras/editor/flash"},next:{title:"Mini Files",permalink:"/extras/editor/mini-files"}},c={},p=[{value:"flit.nvim",id:"flitnvim",level:2},{value:"leap.nvim",id:"leapnvim",level:2},{value:"vim-repeat",id:"vim-repeat",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"editorleap"},(0,n.kt)("inlineCode",{parentName:"h1"},"editor.leap")),(0,n.kt)("p",null,"To use this, add it to your ",(0,n.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.editor.leap" },\n    { import = "plugins" },\n  },\n})\n')),(0,n.kt)("h2",{id:"flitnvim"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/ggandor/flit.nvim"},"flit.nvim")),(0,n.kt)("p",null," easily jump to any location and enhanced f/t motions for Leap"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { labeled_modes = "nx" }\n'))),(0,n.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "ggandor/flit.nvim",\n  enabled = true,\n  keys = function()\n    ---@type LazyKeys[]\n    local ret = {}\n    for _, key in ipairs({ "f", "F", "t", "T" }) do\n      ret[#ret + 1] = { key, mode = { "n", "x", "o" }, desc = key }\n    end\n    return ret\n  end,\n  opts = { labeled_modes = "nx" },\n}\n')))),(0,n.kt)("h2",{id:"leapnvim"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/ggandor/leap.nvim"},"leap.nvim")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,n.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "ggandor/leap.nvim",\n  enabled = true,\n  keys = {\n    { "s", mode = { "n", "x", "o" }, desc = "Leap forward to" },\n    { "S", mode = { "n", "x", "o" }, desc = "Leap backward to" },\n    { "gs", mode = { "n", "x", "o" }, desc = "Leap from windows" },\n  },\n  config = function(_, opts)\n    local leap = require("leap")\n    for k, v in pairs(opts) do\n      leap.opts[k] = v\n    end\n    leap.add_default_mappings(true)\n    vim.keymap.del({ "x", "o" }, "x")\n    vim.keymap.del({ "x", "o" }, "X")\n  end,\n}\n')))),(0,n.kt)("h2",{id:"vim-repeat"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/tpope/vim-repeat"},"vim-repeat")),(0,n.kt)("p",null," makes some plugins dot-repeatable like leap"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,n.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'{ "tpope/vim-repeat", event = "VeryLazy" }\n')))))}d.isMDXComponent=!0}}]);