(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{J4hU:function(t,e,o){"use strict";var n=o("mXGw"),s=o.n(n);e.a=function(t){var e=t.path,o=t.children;return s.a.createElement("a",{href:"https://getbootstrap.com/docs/4.6"+e},o)}},Q6D8:function(t,e,o){t.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},h55t:function(t,e,o){"use strict";var n=o("mXGw"),s=o.n(n),a=o("Q6D8");e.a=function(t){var e=t.title,o=t.children,n=t.theme;return s.a.createElement("aside",{role:"note",className:a[n||"warning"]},e&&s.a.createElement("header",{className:"h5"},e),s.a.createElement("div",null,o))}},i5XC:function(t,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",(function(){return j})),o.d(e,"default",(function(){return g}));var n=o("zLVn"),s=o("mXGw"),a=o.n(s),r=o("7ljp"),c=o("Snbm"),i=o("h55t"),p=o("DA+T");var l=function(){return a.a.createElement(p.default,{mode:"html",codeText:'\n<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin><\/script>\n\n<script\n  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"\n  crossorigin><\/script>\n\n<script\n  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"\n  crossorigin><\/script>\n\n<script>var Alert = ReactBootstrap.Alert;<\/script>\n\n'})},d=Object({bootstrapVersion:"4.6.0",docsUrl:"https://getbootstrap.com/docs/4.6",version:"1.6.0",cssHash:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",netlify:null}),m=d.bootstrapVersion,u=d.cssHash;var b=function(){return a.a.createElement(p.default,{mode:"html",codeText:'\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/bootstrap@'+m+'/dist/css/bootstrap.min.css"\n  integrity="'+u+'"\n  crossorigin="anonymous"\n/>\n'})},h=o("J4hU"),j={},x={_frontmatter:j},O=c.a;function g(t){var e=t.components,o=Object(n.a)(t,["components"]);return Object(r.mdx)(O,Object.assign({},x,o,{components:e,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"introduction"},"Introduction"),Object(r.mdx)("p",{className:"lead"},"Learn how to include React Bootstrap in your project"),Object(r.mdx)("h2",{id:"installation"},"Installation"),Object(r.mdx)("p",null,"The best way to consume React-Bootstrap is via the npm package which\nyou can install with ",Object(r.mdx)("inlineCode",{parentName:"p"},"npm")," (or ",Object(r.mdx)("inlineCode",{parentName:"p"},"yarn")," if you prefer)."),Object(r.mdx)("p",null,"If you plan on customizing the Bootstrap Sass files, or don't want\nto use a CDN for the stylesheet, it may be helpful to\ninstall ",Object(r.mdx)(h.a,{path:"/getting-started/download/#npm",mdxType:"DocLink"},"vanilla Bootstrap")," as well."),Object(r.mdx)(p.default,{codeText:"npm install react-bootstrap bootstrap@4.6.0",mdxType:"CodeBlock"}),Object(r.mdx)("h2",{id:"importing-components"},"Importing Components"),Object(r.mdx)("p",null,"You should import individual components like:\n",Object(r.mdx)("inlineCode",{parentName:"p"},"react-bootstrap/Button")," rather than the entire library.\nDoing so pulls in only the specific components that you use, which\ncan significantly reduce the amount of code you end up sending to\nthe client."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import Button from 'react-bootstrap/Button';\n\n// or less ideally\nimport { Button } from 'react-bootstrap';\n")),Object(r.mdx)("h3",{id:"browser-globals"},"Browser globals"),Object(r.mdx)("p",null,"We provide ",Object(r.mdx)("inlineCode",{parentName:"p"},"react-bootstrap.js")," and\n",Object(r.mdx)("inlineCode",{parentName:"p"},"react-bootstrap.min.js")," bundles with all components\nexported on the ",Object(r.mdx)("inlineCode",{parentName:"p"},"window.ReactBootstrap")," object. These\nbundles are available on ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://unpkg.com/react-bootstrap/"}),"unpkg"),", as\nwell as in the npm package."),Object(r.mdx)(l,{mdxType:"BrowserGlobalsCodeBlock"}),Object(r.mdx)("h2",{id:"examples"},"Examples"),Object(r.mdx)("p",null,"React-Bootstrap has started a repo with a few basic CodeSandbox examples.\n",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/react-bootstrap/code-sandbox-examples/blob/master/README.md"}),"Click here"),"\nto check them out."),Object(r.mdx)("h2",{id:"stylesheets"},"Stylesheets"),Object(r.mdx)("p",null,"Because React-Bootstrap doesn't depend on a very precise version of\nBootstrap, we don't ship with any included CSS. However, some\nstylesheet ",Object(r.mdx)("strong",{parentName:"p"},"is required")," to use these components."),Object(r.mdx)("h3",{id:"css"},"CSS"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),"{/* The following line can be included in your src/index.js or App.js file*/}\n\nimport 'bootstrap/dist/css/bootstrap.min.css';\n")),Object(r.mdx)("p",null,"How and which Bootstrap styles you include is up to you, but the\nsimplest way is to include the latest styles from the CDN. A little\nmore information about the benefits of using a CDN can be found\n",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.w3schools.com/bootstrap/bootstrap_get_started.asp"}),"here"),"."),Object(r.mdx)(b,{mdxType:"CssCodeBlock"}),Object(r.mdx)("h3",{id:"sass"},"Sass"),Object(r.mdx)("p",null,"In case you are using ",Object(r.mdx)("strong",{parentName:"p"},"Sass")," the simplest way is to include the Bootstrap’s source Sass files\nin your main Sass file and then require it on your ",Object(r.mdx)("inlineCode",{parentName:"p"},"src/index.js")," or ",Object(r.mdx)("inlineCode",{parentName:"p"},"App.js")," file.\nThis applies to a typical ",Object(r.mdx)("inlineCode",{parentName:"p"},"create-react-app")," application in other use cases you might have to setup\nthe bundler of your choice to compile Sass/SCSS stylesheets to CSS."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),"/* The following line can be included in a src/App.scss */\n\n@import \"~bootstrap/scss/bootstrap\";\n\n/* The following line can be included in your src/index.js or App.js file */\n\nimport './App.scss';\n")),Object(r.mdx)("h4",{id:"customize-bootstrap"},"Customize Bootstrap"),Object(r.mdx)("p",null,"If you wish to customize the Bootstrap theme or any Bootstrap variables\nyou can create a custom Sass file:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),'/* The following block can be included in a custom.scss */\n\n/* make the customizations */\n$theme-colors: (\n    "info": tomato,\n    "danger": teal\n);\n\n/* import bootstrap to set changes */\n@import "~bootstrap/scss/bootstrap";\n')),Object(r.mdx)("p",null,"... And import it on the main Sass file."),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{}),'/* The following line can be included in a src/App.scss */\n\n@import "custom";\n')),Object(r.mdx)("h3",{id:"advanced-usage"},"Advanced usage"),Object(r.mdx)("p",null,"See ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://getbootstrap.com/docs/4.4/getting-started/theming/"}),"the Bootstrap docs"),"\nfor more advanced use cases and details about customizing stylesheets."),Object(r.mdx)("h2",{id:"themes"},"Themes"),Object(r.mdx)("p",null,"React-Bootstrap is compatible with existing Bootstrap themes. Just\nfollow the installation instructions for your theme of choice."),Object(r.mdx)(i.a,{theme:"danger",title:"Watch out!",mdxType:"Callout"},"Because React-Bootstrap completely reimplements Bootstrap's JavaScript, it's not automatically compatible with themes that extend the default JavaScript behaviors."),Object(r.mdx)(i.a,{theme:"warning",title:"Create React App",mdxType:"Callout"},Object(r.mdx)("p",null,"If you would like to add a custom theme on your app using Create React\nApp, they have additional documentation for Create React App and\nBootstrap\n",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://facebook.github.io/create-react-app/docs/adding-bootstrap#using-a-custom-theme"}),"here"))),Object(r.mdx)("h2",{id:"browser-support"},"Browser support"),Object(r.mdx)("p",null,"We aim to support all browsers supported by both\n",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"http://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills"}),"React"),"\nand ",Object(r.mdx)(h.a,{path:"/getting-started/browsers-devices/#supported-browsers",mdxType:"DocLink"},"Bootstrap"),"."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-introduction-mdx-a062e1f3ffbc365f5ec0.js.map