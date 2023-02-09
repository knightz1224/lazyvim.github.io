"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=o(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7462),a=n(7294),l=n(6010),s=n(2466),i=n(6550),u=n(1980),o=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,o]=f({queryString:n,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),y=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),v(e)}),[o,v,l]),tabValues:l}}var y=n(2389);const b="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=o[n].value;r!==i&&(p(t),u(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},s,{className:(0,l.Z)("tabs__item",g,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function T(e){const t=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function x(e){const t=(0,y.Z)();return a.createElement(T,(0,r.Z)({key:String(t)},e))}},1217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=n(4866),s=n(5162);const i={},u="Typescript",o={unversionedId:"plugins/extras/lang.typescript",id:"plugins/extras/lang.typescript",title:"Typescript",description:"To use this, add it to your lazy.nvim imports:",source:"@site/docs/plugins/extras/lang.typescript.md",sourceDirName:"plugins/extras",slug:"/plugins/extras/lang.typescript",permalink:"/plugins/extras/lang.typescript",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/extras/lang.typescript.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/plugins/extras/lang.json"},next:{title:"Mini Animate",permalink:"/plugins/extras/ui.mini-animate"}},c={},p=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"typescript.nvim",id:"typescriptnvim",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript"},"Typescript"),(0,a.kt)("p",null,"To use this, add it to your ",(0,a.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "folke/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.typescript" },\n    { import = "plugins" },\n  },\n})\n')),(0,a.kt)("h2",{id:"nvim-treesitter"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,a.kt)("p",null," add typescript to treesitter"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if type(opts.ensure_installed) == "table" then\n    vim.list_extend(opts.ensure_installed, { "typescript", "tsx" })\n  end\nend\n'))),(0,a.kt)(s.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter",\n  opts = function(_, opts)\n    if type(opts.ensure_installed) == "table" then\n      vim.list_extend(opts.ensure_installed, { "typescript", "tsx" })\n    end\n  end,\n}\n')))),(0,a.kt)("h2",{id:"nvim-lspconfig"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,a.kt)("p",null," correctly setup lspconfig"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- make sure mason installs the server\n  servers = {\n    tsserver = {},\n  },\n  setup = {\n    tsserver = function(_, opts)\n      require("lazyvim.util").on_attach(function(client, buffer)\n        if client.name == "tsserver" then\n          -- stylua: ignore\n          vim.keymap.set("n", "<leader>co", "<cmd>TypescriptOrganizeImports<CR>", { buffer = buffer, desc = "Organize Imports" })\n          vim.keymap.set("n", "<leader>cR", "<cmd>TypescriptRenameFile<CR>", { desc = "Rename File", buffer = buffer })\n        end\n      end)\n      require("typescript").setup({ server = opts })\n      return true\n    end,\n  },\n}\n'))),(0,a.kt)(s.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  dependencies = { "jose-elias-alvarez/typescript.nvim" },\n  opts = {\n    -- make sure mason installs the server\n    servers = {\n      tsserver = {},\n    },\n    setup = {\n      tsserver = function(_, opts)\n        require("lazyvim.util").on_attach(function(client, buffer)\n          if client.name == "tsserver" then\n            -- stylua: ignore\n            vim.keymap.set("n", "<leader>co", "<cmd>TypescriptOrganizeImports<CR>", { buffer = buffer, desc = "Organize Imports" })\n            vim.keymap.set("n", "<leader>cR", "<cmd>TypescriptRenameFile<CR>", { desc = "Rename File", buffer = buffer })\n          end\n        end)\n        require("typescript").setup({ server = opts })\n        return true\n      end,\n    },\n  },\n}\n')))),(0,a.kt)("h2",{id:"typescriptnvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/jose-elias-alvarez/typescript.nvim"},"typescript.nvim")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,a.kt)(s.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{ "jose-elias-alvarez/typescript.nvim" }\n')))))}d.isMDXComponent=!0}}]);