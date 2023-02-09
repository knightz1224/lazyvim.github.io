"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=f(r),m=o,b=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var f=2;f<a;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>f});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:6},i="Tips",u={unversionedId:"configuration/tips",id:"configuration/tips",title:"Tips",description:"Disable autoformat for some buffers",source:"@site/docs/configuration/tips.md",sourceDirName:"configuration",slug:"/configuration/tips",permalink:"/configuration/tips",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/configuration/tips.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Recipes",permalink:"/configuration/recipes"},next:{title:"Plugins",permalink:"/configuration/plugins"}},l={},f=[{value:"Disable autoformat for some buffers",id:"disable-autoformat-for-some-buffers",level:2}],c={toc:f};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tips"},"Tips"),(0,o.kt)("h2",{id:"disable-autoformat-for-some-buffers"},"Disable autoformat for some buffers"),(0,o.kt)("p",null,"If you want to disable autoformat for a certain buffer, then\nset ",(0,o.kt)("inlineCode",{parentName:"p"},"vim.b.autoformat = false")," for that buffer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=lua/config/autocmds.lua",title:"lua/config/autocmds.lua"},'-- Disable autoformat for lua files\nvim.api.nvim_create_autocmd({ "FileType" }, {\n  pattern = { "lua" },\n  callback = function()\n    vim.b.autoformat = false\n  end,\n})\n')),(0,o.kt)("p",null,"If you change your mind you can do ",(0,o.kt)("inlineCode",{parentName:"p"},"<leader>uf")," to enable autoformat\nanyway for that buffer."))}s.isMDXComponent=!0}}]);