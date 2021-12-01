(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{J4hU:function(t,e,o){"use strict";var n=o("oYCi");e.a=function(t){var e=t.path,o=t.children;return Object(n.jsx)("a",{href:"https://getbootstrap.com/docs/5.1"+e,children:o})}},Q6D8:function(t,e,o){t.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},bYIR:function(t,e){t.exports='<Row className="mx-0">\n  <Button as={Col} variant="primary">Button #1</Button>\n  <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>\n  <Button as={Col} variant="success">Button #3</Button>\n</Row>;'},h55t:function(t,e,o){"use strict";var n=o("oYCi"),a=o("Q6D8");e.a=function(t){var e=t.title,o=t.children,s=t.theme;return Object(n.jsxs)("aside",{role:"note",className:a[s||"warning"],children:[e&&Object(n.jsx)("header",{className:"h5",children:e}),Object(n.jsx)("div",{children:o})]})}},i5XC:function(t,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",(function(){return g})),o.d(e,"default",(function(){return C}));var n=o("rePB"),a=o("zLVn"),s=(o("mXGw"),o("7ljp")),r=o("Snbm"),c=o("h55t"),i=o("DA+T"),p=o("oYCi");var l=function(){return Object(p.jsx)(i.default,{mode:"html",codeText:'\n<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin><\/script>\n\n<script\n  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"\n  crossorigin><\/script>\n\n<script\n  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"\n  crossorigin><\/script>\n\n<script>var Alert = ReactBootstrap.Alert;<\/script>\n\n'})},d=Object({bootstrapVersion:"5.1.3",docsUrl:"https://getbootstrap.com/docs/5.1",version:"2.0.3",cssHash:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",netlify:null}),m=d.bootstrapVersion,u=d.cssHash;var h=function(){return Object(p.jsx)(i.default,{mode:"html",codeText:'\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/bootstrap@'+m+'/dist/css/bootstrap.min.css"\n  integrity="'+u+'"\n  crossorigin="anonymous"\n/>\n'})},b=o("J4hU"),j=o("1u5/"),x=o("bYIR"),f=o.n(x);function O(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function y(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?O(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var g={},w={_frontmatter:g},B=r.a;function C(t){var e=t.components,o=Object(a.a)(t,["components"]);return Object(s.mdx)(B,y(y(y({},w),o),{},{components:e,mdxType:"MDXLayout"}),Object(s.mdx)("h1",y({},{id:"introduction"}),"Introduction"),Object(s.mdx)("p",{className:"lead"},"Learn how to include React Bootstrap in your project"),Object(s.mdx)("h2",y({},{id:"installation"}),"Installation"),Object(s.mdx)("p",null,"The best way to consume React-Bootstrap is via the npm package which\nyou can install with ",Object(s.mdx)("inlineCode",{parentName:"p"},"npm")," (or ",Object(s.mdx)("inlineCode",{parentName:"p"},"yarn")," if you prefer)."),Object(s.mdx)("p",null,"If you plan on customizing the Bootstrap Sass files, or don't want\nto use a CDN for the stylesheet, it may be helpful to\ninstall ",Object(s.mdx)(b.a,{path:"/getting-started/download/#npm",mdxType:"DocLink"},"vanilla Bootstrap")," as well."),Object(s.mdx)(i.default,{codeText:"npm install react-bootstrap bootstrap@5.1.3",mdxType:"CodeBlock"}),Object(s.mdx)("h2",y({},{id:"importing-components"}),"Importing Components"),Object(s.mdx)("p",null,"You should import individual components like:\n",Object(s.mdx)("inlineCode",{parentName:"p"},"react-bootstrap/Button")," rather than the entire library.\nDoing so pulls in only the specific components that you use, which\ncan significantly reduce the amount of code you end up sending to\nthe client."),Object(s.mdx)("pre",null,Object(s.mdx)("code",y({parentName:"pre"},{className:"language-jsx"}),"import Button from 'react-bootstrap/Button';\n\n// or less ideally\nimport { Button } from 'react-bootstrap';\n")),Object(s.mdx)("h3",y({},{id:"browser-globals"}),"Browser globals"),Object(s.mdx)("p",null,"We provide ",Object(s.mdx)("inlineCode",{parentName:"p"},"react-bootstrap.js")," and\n",Object(s.mdx)("inlineCode",{parentName:"p"},"react-bootstrap.min.js")," bundles with all components\nexported on the ",Object(s.mdx)("inlineCode",{parentName:"p"},"window.ReactBootstrap")," object. These\nbundles are available on ",Object(s.mdx)("a",y({parentName:"p"},{href:"https://unpkg.com/react-bootstrap/"}),"unpkg"),", as\nwell as in the npm package."),Object(s.mdx)(l,{mdxType:"BrowserGlobalsCodeBlock"}),Object(s.mdx)("h2",y({},{id:"examples"}),"Examples"),Object(s.mdx)("p",null,"React-Bootstrap has started a repo with a few basic CodeSandbox examples.\n",Object(s.mdx)("a",y({parentName:"p"},{href:"https://github.com/react-bootstrap/code-sandbox-examples/blob/master/README.md"}),"Click here"),"\nto check them out."),Object(s.mdx)("h2",y({},{id:"stylesheets"}),"Stylesheets"),Object(s.mdx)("p",null,"Because React-Bootstrap doesn't depend on a very precise version of\nBootstrap, we don't ship with any included CSS. However, some\nstylesheet ",Object(s.mdx)("strong",{parentName:"p"},"is required")," to use these components."),Object(s.mdx)("h3",y({},{id:"css"}),"CSS"),Object(s.mdx)("pre",null,Object(s.mdx)("code",y({parentName:"pre"},{}),"{/* The following line can be included in your src/index.js or App.js file*/}\n\nimport 'bootstrap/dist/css/bootstrap.min.css';\n")),Object(s.mdx)("p",null,"How and which Bootstrap styles you include is up to you, but the\nsimplest way is to include the latest styles from the CDN. A little\nmore information about the benefits of using a CDN can be found\n",Object(s.mdx)("a",y({parentName:"p"},{href:"https://www.w3schools.com/bootstrap/bootstrap_get_started.asp"}),"here"),"."),Object(s.mdx)(h,{mdxType:"CssCodeBlock"}),Object(s.mdx)("h3",y({},{id:"sass"}),"Sass"),Object(s.mdx)("p",null,"In case you are using ",Object(s.mdx)("strong",{parentName:"p"},"Sass")," the simplest way is to include the Bootstrap’s source Sass files\nin your main Sass file and then require it on your ",Object(s.mdx)("inlineCode",{parentName:"p"},"src/index.js")," or ",Object(s.mdx)("inlineCode",{parentName:"p"},"App.js")," file.\nThis applies to a typical ",Object(s.mdx)("inlineCode",{parentName:"p"},"create-react-app")," application in other use cases you might have to setup\nthe bundler of your choice to compile Sass/SCSS stylesheets to CSS."),Object(s.mdx)("pre",null,Object(s.mdx)("code",y({parentName:"pre"},{}),"/* The following line can be included in a src/App.scss */\n\n@import \"~bootstrap/scss/bootstrap\";\n\n/* The following line can be included in your src/index.js or App.js file */\n\nimport './App.scss';\n")),Object(s.mdx)("h4",y({},{id:"customize-bootstrap"}),"Customize Bootstrap"),Object(s.mdx)("p",null,"If you wish to customize the Bootstrap theme or any Bootstrap variables\nyou can create a custom Sass file:"),Object(s.mdx)("pre",null,Object(s.mdx)("code",y({parentName:"pre"},{}),'/* The following block can be included in a custom.scss */\n\n/* make the customizations */\n$theme-colors: (\n    "info": tomato,\n    "danger": teal\n);\n\n/* import bootstrap to set changes */\n@import "~bootstrap/scss/bootstrap";\n')),Object(s.mdx)("p",null,"... And import it on the main Sass file."),Object(s.mdx)("pre",null,Object(s.mdx)("code",y({parentName:"pre"},{}),'/* The following line can be included in a src/App.scss */\n\n@import "custom";\n')),Object(s.mdx)("h3",y({},{id:"advanced-usage"}),"Advanced usage"),Object(s.mdx)("p",null,"See ",Object(s.mdx)("a",y({parentName:"p"},{href:"https://getbootstrap.com/docs/4.4/getting-started/theming/"}),"the Bootstrap docs"),"\nfor more advanced use cases and details about customizing stylesheets."),Object(s.mdx)("h2",y({},{id:"as-prop-api"}),'"as" Prop API'),Object(s.mdx)("p",null,"With certain React-Bootstrap components, you may want to modify the component or HTML tag\nthat is rendered."),Object(s.mdx)("p",null,'If you want to keep all the styling of a particular React-Bootstrap component but switch the\ncomponent that is finally rendered (whether it\'s a different React-Bootstrap component, a\ndifferent custom component, or a different HTML tag) you can use the "as" Prop to do so.'),Object(s.mdx)("p",null,'The example below passes a Column component to the "as" Prop in a Button component. This\nultimately causes a Column component to be rendered but with the same styles as a Button\ncomponent.'),Object(s.mdx)(j.a,{codeText:f.a,mdxType:"ReactPlayground"}),Object(s.mdx)("h2",y({},{id:"themes"}),"Themes"),Object(s.mdx)("p",null,"React-Bootstrap is compatible with existing Bootstrap themes. Just\nfollow the installation instructions for your theme of choice."),Object(s.mdx)(c.a,{theme:"danger",title:"Watch out!",mdxType:"Callout"},"Because React-Bootstrap completely reimplements Bootstrap's JavaScript, it's not automatically compatible with themes that extend the default JavaScript behaviors."),Object(s.mdx)(c.a,{theme:"warning",title:"Create React App",mdxType:"Callout"},Object(s.mdx)("p",null,"If you would like to add a custom theme on your app using Create React\nApp, they have additional documentation for Create React App and\nBootstrap\n",Object(s.mdx)("a",y({parentName:"p"},{href:"https://facebook.github.io/create-react-app/docs/adding-bootstrap#using-a-custom-theme"}),"here"))),Object(s.mdx)("h2",y({},{id:"browser-support"}),"Browser support"),Object(s.mdx)("p",null,"We aim to support all browsers supported by both\n",Object(s.mdx)("a",y({parentName:"p"},{href:"http://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills"}),"React"),"\nand ",Object(s.mdx)(b.a,{path:"/getting-started/browsers-devices/#supported-browsers",mdxType:"DocLink"},"Bootstrap"),"."))}C.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-introduction-mdx-6e0e43154205fa3cfe9f.js.map