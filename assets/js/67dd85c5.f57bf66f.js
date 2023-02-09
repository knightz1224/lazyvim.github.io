"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[897],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7462),r=t(7294),i=t(6010),l=t(2466),s=t(6550),o=t(1980),p=t(7392),u=t(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[o,p]=g({queryString:t,groupId:a}),[c,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=o??c;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),h(e)}),[p,h,i]),tabValues:i}}var f=t(2389);const b="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=u.indexOf(n),a=p[t].value;a!==s&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",k,l?.className,{"tabs__item--active":s===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function T(e){const n=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(y,(0,a.Z)({},e,n)))}function x(e){const n=(0,f.Z)();return r.createElement(T,(0,a.Z)({key:String(n)},e))}},5293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),i=t(4866),l=t(5162);const s={},o="Coding",p={unversionedId:"plugins/coding",id:"plugins/coding",title:"Coding",description:"LuaSnip",source:"@site/docs/plugins/coding.md",sourceDirName:"plugins",slug:"/plugins/coding",permalink:"/plugins/coding",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/coding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/configuration/plugins"},next:{title:"Colorscheme",permalink:"/plugins/colorscheme"}},u={},c=[{value:"LuaSnip",id:"luasnip",level:2},{value:"friendly-snippets",id:"friendly-snippets",level:2},{value:"nvim-cmp",id:"nvim-cmp",level:2},{value:"cmp-nvim-lsp",id:"cmp-nvim-lsp",level:2},{value:"cmp-buffer",id:"cmp-buffer",level:2},{value:"cmp-path",id:"cmp-path",level:2},{value:"cmp_luasnip",id:"cmp_luasnip",level:2},{value:"mini.pairs",id:"minipairs",level:2},{value:"mini.surround",id:"minisurround",level:2},{value:"nvim-ts-context-commentstring",id:"nvim-ts-context-commentstring",level:2},{value:"mini.comment",id:"minicomment",level:2},{value:"mini.ai",id:"miniai",level:2},{value:"nvim-treesitter-textobjects",id:"nvim-treesitter-textobjects",level:2}],m={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"coding"},"Coding"),(0,r.kt)("h2",{id:"luasnip"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/L3MON4D3/LuaSnip"},"LuaSnip")),(0,r.kt)("p",null," snippets"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  history = true,\n  delete_check_events = "TextChanged",\n}\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "L3MON4D3/LuaSnip",\n  dependencies = {\n    "rafamadriz/friendly-snippets",\n    config = function()\n      require("luasnip.loaders.from_vscode").lazy_load()\n    end,\n  },\n  opts = {\n    history = true,\n    delete_check_events = "TextChanged",\n  },\n  -- stylua: ignore\n  keys = {\n    {\n      "<tab>",\n      function()\n        return require("luasnip").jumpable(1) and "<Plug>luasnip-jump-next" or "<tab>"\n      end,\n      expr = true, silent = true, mode = "i",\n    },\n    { "<tab>", function() require("luasnip").jump(1) end, mode = "s" },\n    { "<s-tab>", function() require("luasnip").jump(-1) end, mode = { "i", "s" } },\n  },\n}\n')))),(0,r.kt)("h2",{id:"friendly-snippets"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/rafamadriz/friendly-snippets"},"friendly-snippets")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "rafamadriz/friendly-snippets",\n  config = function()\n    require("luasnip.loaders.from_vscode").lazy_load()\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-cmp"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,r.kt)("p",null," auto completion"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local cmp = require("cmp")\n  return {\n    completion = {\n      completeopt = "menu,menuone,noinsert",\n    },\n    snippet = {\n      expand = function(args)\n        require("luasnip").lsp_expand(args.body)\n      end,\n    },\n    mapping = cmp.mapping.preset.insert({\n      ["<C-b>"] = cmp.mapping.scroll_docs(-4),\n      ["<C-f>"] = cmp.mapping.scroll_docs(4),\n      ["<C-Space>"] = cmp.mapping.complete(),\n      ["<C-e>"] = cmp.mapping.abort(),\n      ["<CR>"] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n    }),\n    sources = cmp.config.sources({\n      { name = "nvim_lsp" },\n      { name = "luasnip" },\n      { name = "buffer" },\n      { name = "path" },\n    }),\n    formatting = {\n      format = function(_, item)\n        local icons = require("lazyvim.config").icons.kinds\n        if icons[item.kind] then\n          item.kind = icons[item.kind] .. item.kind\n        end\n        return item\n      end,\n    },\n    experimental = {\n      ghost_text = {\n        hl_group = "LspCodeLens",\n      },\n    },\n  }\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/nvim-cmp",\n  version = false, -- last release is way too old\n  event = "InsertEnter",\n  dependencies = {\n    "hrsh7th/cmp-nvim-lsp",\n    "hrsh7th/cmp-buffer",\n    "hrsh7th/cmp-path",\n    "saadparwaiz1/cmp_luasnip",\n  },\n  opts = function()\n    local cmp = require("cmp")\n    return {\n      completion = {\n        completeopt = "menu,menuone,noinsert",\n      },\n      snippet = {\n        expand = function(args)\n          require("luasnip").lsp_expand(args.body)\n        end,\n      },\n      mapping = cmp.mapping.preset.insert({\n        ["<C-b>"] = cmp.mapping.scroll_docs(-4),\n        ["<C-f>"] = cmp.mapping.scroll_docs(4),\n        ["<C-Space>"] = cmp.mapping.complete(),\n        ["<C-e>"] = cmp.mapping.abort(),\n        ["<CR>"] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n      }),\n      sources = cmp.config.sources({\n        { name = "nvim_lsp" },\n        { name = "luasnip" },\n        { name = "buffer" },\n        { name = "path" },\n      }),\n      formatting = {\n        format = function(_, item)\n          local icons = require("lazyvim.config").icons.kinds\n          if icons[item.kind] then\n            item.kind = icons[item.kind] .. item.kind\n          end\n          return item\n        end,\n      },\n      experimental = {\n        ghost_text = {\n          hl_group = "LspCodeLens",\n        },\n      },\n    }\n  end,\n}\n')))),(0,r.kt)("h2",{id:"cmp-nvim-lsp"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-nvim-lsp"},"cmp-nvim-lsp")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/cmp-nvim-lsp",\n  "hrsh7th/cmp-buffer",\n  "hrsh7th/cmp-path",\n  "saadparwaiz1/cmp_luasnip",\n}\n')))),(0,r.kt)("h2",{id:"cmp-buffer"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-buffer"},"cmp-buffer")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'"hrsh7th/cmp-buffer"\n')))),(0,r.kt)("h2",{id:"cmp-path"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-path"},"cmp-path")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'"hrsh7th/cmp-path"\n')))),(0,r.kt)("h2",{id:"cmp_luasnip"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/saadparwaiz1/cmp_luasnip"},"cmp_luasnip")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'"saadparwaiz1/cmp_luasnip"\n')))),(0,r.kt)("h2",{id:"minipairs"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.pairs"},"mini.pairs")),(0,r.kt)("p",null," auto pairs"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.pairs",\n  event = "VeryLazy",\n  config = function(_, opts)\n    require("mini.pairs").setup(opts)\n  end,\n}\n')))),(0,r.kt)("h2",{id:"minisurround"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.surround"},"mini.surround")),(0,r.kt)("p",null," surround"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  mappings = {\n    add = "gza", -- Add surrounding in Normal and Visual modes\n    delete = "gzd", -- Delete surrounding\n    find = "gzf", -- Find surrounding (to the right)\n    find_left = "gzF", -- Find surrounding (to the left)\n    highlight = "gzh", -- Highlight surrounding\n    replace = "gzr", -- Replace surrounding\n    update_n_lines = "gzn", -- Update `n_lines`\n  },\n}\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.surround",\n  keys = function(_, keys)\n    -- Populate the keys based on the user\'s options\n    local plugin = require("lazy.core.config").spec.plugins["mini.surround"]\n    local opts = require("lazy.core.plugin").values(plugin, "opts", false)\n    local mappings = {\n      { opts.mappings.add, desc = "Add surrounding", mode = { "n", "v" } },\n      { opts.mappings.delete, desc = "Delete surrounding" },\n      { opts.mappings.find, desc = "Find right surrounding" },\n      { opts.mappings.find_left, desc = "Find left surrounding" },\n      { opts.mappings.highlight, desc = "Highlight surrounding" },\n      { opts.mappings.replace, desc = "Replace surrounding" },\n      { opts.mappings.update_n_lines, desc = "Update `MiniSurround.config.n_lines`" },\n    }\n    return vim.list_extend(mappings, keys)\n  end,\n  opts = {\n    mappings = {\n      add = "gza", -- Add surrounding in Normal and Visual modes\n      delete = "gzd", -- Delete surrounding\n      find = "gzf", -- Find surrounding (to the right)\n      find_left = "gzF", -- Find surrounding (to the left)\n      highlight = "gzh", -- Highlight surrounding\n      replace = "gzr", -- Replace surrounding\n      update_n_lines = "gzn", -- Update `n_lines`\n    },\n  },\n  config = function(_, opts)\n    -- use gz mappings instead of s to prevent conflict with leap\n    require("mini.surround").setup(opts)\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-ts-context-commentstring"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/JoosepAlviste/nvim-ts-context-commentstring"},"nvim-ts-context-commentstring")),(0,r.kt)("p",null," comments"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{ "JoosepAlviste/nvim-ts-context-commentstring", lazy = true }\n')))),(0,r.kt)("h2",{id:"minicomment"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.comment"},"mini.comment")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  hooks = {\n    pre = function()\n      require("ts_context_commentstring.internal").update_commentstring({})\n    end,\n  },\n}\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.comment",\n  event = "VeryLazy",\n  opts = {\n    hooks = {\n      pre = function()\n        require("ts_context_commentstring.internal").update_commentstring({})\n      end,\n    },\n  },\n  config = function(_, opts)\n    require("mini.comment").setup(opts)\n  end,\n}\n')))),(0,r.kt)("h2",{id:"miniai"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.ai"},"mini.ai")),(0,r.kt)("p",null," better text-objects"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local ai = require("mini.ai")\n  return {\n    n_lines = 500,\n    custom_textobjects = {\n      o = ai.gen_spec.treesitter({\n        a = { "@block.outer", "@conditional.outer", "@loop.outer" },\n        i = { "@block.inner", "@conditional.inner", "@loop.inner" },\n      }, {}),\n      f = ai.gen_spec.treesitter({ a = "@function.outer", i = "@function.inner" }, {}),\n      c = ai.gen_spec.treesitter({ a = "@class.outer", i = "@class.inner" }, {}),\n    },\n  }\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.ai",\n  -- keys = {\n  --   { "a", mode = { "x", "o" } },\n  --   { "i", mode = { "x", "o" } },\n  -- },\n  event = "VeryLazy",\n  dependencies = {\n    {\n      "nvim-treesitter/nvim-treesitter-textobjects",\n      init = function()\n        -- no need to load the plugin, since we only need its queries\n        require("lazy.core.loader").disable_rtp_plugin("nvim-treesitter-textobjects")\n      end,\n    },\n  },\n  opts = function()\n    local ai = require("mini.ai")\n    return {\n      n_lines = 500,\n      custom_textobjects = {\n        o = ai.gen_spec.treesitter({\n          a = { "@block.outer", "@conditional.outer", "@loop.outer" },\n          i = { "@block.inner", "@conditional.inner", "@loop.inner" },\n        }, {}),\n        f = ai.gen_spec.treesitter({ a = "@function.outer", i = "@function.inner" }, {}),\n        c = ai.gen_spec.treesitter({ a = "@class.outer", i = "@class.inner" }, {}),\n      },\n    }\n  end,\n  config = function(_, opts)\n    local ai = require("mini.ai")\n    ai.setup(opts)\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-treesitter-textobjects"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter-textobjects"},"nvim-treesitter-textobjects")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter-textobjects",\n  init = function()\n    -- no need to load the plugin, since we only need its queries\n    require("lazy.core.loader").disable_rtp_plugin("nvim-treesitter-textobjects")\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);