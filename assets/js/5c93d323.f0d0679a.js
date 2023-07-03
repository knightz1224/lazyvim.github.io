"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[324],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>_});var a=t(7462),r=t(7294),l=t(6010),o=t(2466),s=t(6550),i=t(1980),c=t(7392),u=t(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[i,c]=g({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),v=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var v=t(2389);const b="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==s&&(p(n),i(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",h,o?.className,{"tabs__item--active":s===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function x(e){const n=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function _(e){const n=(0,v.Z)();return r.createElement(x,(0,a.Z)({key:String(n)},e))}},310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),l=t(4866),o=t(5162);const s={},i="lang.clangd",c={unversionedId:"plugins/extras/lang.clangd",id:"plugins/extras/lang.clangd",title:"lang.clangd",description:"To use this, add it to your lazy.nvim imports:",source:"@site/docs/plugins/extras/lang.clangd.md",sourceDirName:"plugins/extras",slug:"/plugins/extras/lang.clangd",permalink:"/plugins/extras/lang.clangd",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/extras/lang.clangd.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prettier",permalink:"/plugins/extras/formatting.prettier"},next:{title:"lang.elixir",permalink:"/plugins/extras/lang.elixir"}},u={},p=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"clangd_extensions.nvim",id:"clangd_extensionsnvim",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"nvim-dap",id:"nvim-dap",level:2},{value:"mason.nvim",id:"masonnvim",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"langclangd"},(0,r.kt)("inlineCode",{parentName:"h1"},"lang.clangd")),(0,r.kt)("p",null,"To use this, add it to your ",(0,r.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.clangd" },\n    { import = "plugins" },\n  },\n})\n')),(0,r.kt)("h2",{id:"nvim-treesitter"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,r.kt)("p",null," Add C/C++ to treesitter"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if type(opts.ensure_installed) == "table" then\n    vim.list_extend(opts.ensure_installed, { "c", "cpp" })\n  end\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter",\n  opts = function(_, opts)\n    if type(opts.ensure_installed) == "table" then\n      vim.list_extend(opts.ensure_installed, { "c", "cpp" })\n    end\n  end,\n}\n')))),(0,r.kt)("h2",{id:"clangd_extensionsnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/p00f/clangd_extensions.nvim"},"clangd_extensions.nvim")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  extensions = {\n    inlay_hints = {\n      inline = false,\n    },\n    ast = {\n      --These require codicons (https://github.com/microsoft/vscode-codicons)\n      role_icons = {\n        type = "\ueb63",\n        declaration = "\uea8c",\n        expression = "\uea71",\n        specifier = "\ueb86",\n        statement = "\uea86",\n        ["template argument"] = "\uea92",\n      },\n      kind_icons = {\n        Compound = "\uea8b",\n        Recovery = "\uea87",\n        TranslationUnit = "\ueae9",\n        PackExpansion = "\uea7c",\n        TemplateTypeParm = "\uea92",\n        TemplateTemplateParm = "\uea92",\n        TemplateParamObject = "\uea92",\n      },\n    },\n  },\n}\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "p00f/clangd_extensions.nvim",\n  lazy = true,\n  config = function() end,\n  opts = {\n    extensions = {\n      inlay_hints = {\n        inline = false,\n      },\n      ast = {\n        --These require codicons (https://github.com/microsoft/vscode-codicons)\n        role_icons = {\n          type = "\ueb63",\n          declaration = "\uea8c",\n          expression = "\uea71",\n          specifier = "\ueb86",\n          statement = "\uea86",\n          ["template argument"] = "\uea92",\n        },\n        kind_icons = {\n          Compound = "\uea8b",\n          Recovery = "\uea87",\n          TranslationUnit = "\ueae9",\n          PackExpansion = "\uea7c",\n          TemplateTypeParm = "\uea92",\n          TemplateTemplateParm = "\uea92",\n          TemplateParamObject = "\uea92",\n        },\n      },\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"nvim-lspconfig"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,r.kt)("p",null," Correctly setup lspconfig for clangd \ud83d\ude80"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  servers = {\n    -- Ensure mason installs the server\n    clangd = {\n      keys = {\n        { "<leader>cR", "<cmd>ClangdSwitchSourceHeader<cr>", desc = "Switch Source/Header (C/C++)" },\n      },\n      root_dir = function(...)\n        -- using a root .clang-format or .clang-tidy file messes up projects, so remove them\n        return require("lspconfig.util").root_pattern(\n          "compile_commands.json",\n          "compile_flags.txt",\n          "configure.ac",\n          ".git"\n        )(...)\n      end,\n      capabilities = {\n        offsetEncoding = { "utf-16" },\n      },\n      cmd = {\n        "clangd",\n        "--background-index",\n        "--clang-tidy",\n        "--header-insertion=iwyu",\n        "--completion-style=detailed",\n        "--function-arg-placeholders",\n        "--fallback-style=llvm",\n      },\n      init_options = {\n        usePlaceholders = true,\n        completeUnimported = true,\n        clangdFileStatus = true,\n      },\n    },\n  },\n  setup = {\n    clangd = function(_, opts)\n      local clangd_ext_opts = require("lazyvim.util").opts("clangd_extensions.nvim")\n      require("clangd_extensions").setup(vim.tbl_deep_extend("force", clangd_ext_opts or {}, { server = opts }))\n      return true\n    end,\n  },\n}\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = {\n    servers = {\n      -- Ensure mason installs the server\n      clangd = {\n        keys = {\n          { "<leader>cR", "<cmd>ClangdSwitchSourceHeader<cr>", desc = "Switch Source/Header (C/C++)" },\n        },\n        root_dir = function(...)\n          -- using a root .clang-format or .clang-tidy file messes up projects, so remove them\n          return require("lspconfig.util").root_pattern(\n            "compile_commands.json",\n            "compile_flags.txt",\n            "configure.ac",\n            ".git"\n          )(...)\n        end,\n        capabilities = {\n          offsetEncoding = { "utf-16" },\n        },\n        cmd = {\n          "clangd",\n          "--background-index",\n          "--clang-tidy",\n          "--header-insertion=iwyu",\n          "--completion-style=detailed",\n          "--function-arg-placeholders",\n          "--fallback-style=llvm",\n        },\n        init_options = {\n          usePlaceholders = true,\n          completeUnimported = true,\n          clangdFileStatus = true,\n        },\n      },\n    },\n    setup = {\n      clangd = function(_, opts)\n        local clangd_ext_opts = require("lazyvim.util").opts("clangd_extensions.nvim")\n        require("clangd_extensions").setup(vim.tbl_deep_extend("force", clangd_ext_opts or {}, { server = opts }))\n        return true\n      end,\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"nvim-dap"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/mfussenegger/nvim-dap"},"nvim-dap")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local dap = require("dap")\n  if not dap.adapters["codelldb"] then\n    require("dap").adapters["codelldb"] = {\n      type = "server",\n      host = "localhost",\n      port = "${port}",\n      executable = {\n        command = "codelldb",\n        args = {\n          "--port",\n          "${port}",\n        },\n      },\n    }\n  end\n  for _, lang in ipairs({ "c", "cpp" }) do\n    dap.configurations[lang] = {\n      {\n        type = "codelldb",\n        request = "launch",\n        name = "Launch file",\n        program = function()\n          return vim.fn.input("Path to executable: ", vim.fn.getcwd() .. "/", "file")\n        end,\n        cwd = "${workspaceFolder}",\n      },\n      {\n        type = "codelldb",\n        request = "attach",\n        name = "Attach to process",\n        processId = require("dap.utils").pick_process,\n        cwd = "${workspaceFolder}",\n      },\n    }\n  end\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mfussenegger/nvim-dap",\n  optional = true,\n  dependencies = {\n    -- Ensure C/C++ debugger is installed\n    "williamboman/mason.nvim",\n    optional = true,\n    opts = function(_, opts)\n      if type(opts.ensure_installed) == "table" then\n        vim.list_extend(opts.ensure_installed, { "codelldb" })\n      end\n    end,\n  },\n  opts = function()\n    local dap = require("dap")\n    if not dap.adapters["codelldb"] then\n      require("dap").adapters["codelldb"] = {\n        type = "server",\n        host = "localhost",\n        port = "${port}",\n        executable = {\n          command = "codelldb",\n          args = {\n            "--port",\n            "${port}",\n          },\n        },\n      }\n    end\n    for _, lang in ipairs({ "c", "cpp" }) do\n      dap.configurations[lang] = {\n        {\n          type = "codelldb",\n          request = "launch",\n          name = "Launch file",\n          program = function()\n            return vim.fn.input("Path to executable: ", vim.fn.getcwd() .. "/", "file")\n          end,\n          cwd = "${workspaceFolder}",\n        },\n        {\n          type = "codelldb",\n          request = "attach",\n          name = "Attach to process",\n          processId = require("dap.utils").pick_process,\n          cwd = "${workspaceFolder}",\n        },\n      }\n    end\n  end,\n}\n')))),(0,r.kt)("h2",{id:"masonnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if type(opts.ensure_installed) == "table" then\n    vim.list_extend(opts.ensure_installed, { "codelldb" })\n  end\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  -- Ensure C/C++ debugger is installed\n  "williamboman/mason.nvim",\n  optional = true,\n  opts = function(_, opts)\n    if type(opts.ensure_installed) == "table" then\n      vim.list_extend(opts.ensure_installed, { "codelldb" })\n    end\n  end,\n}\n')))))}m.isMDXComponent=!0}}]);