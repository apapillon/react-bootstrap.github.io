"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[6997],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),g=s(a),u=r,m=g["".concat(l,".").concat(u)]||g[u]||p[u]||o;return a?t.createElement(m,i(i({ref:n},c),{},{components:a})):t.createElement(m,i({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[g]="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58714:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var t=a(87462),r=(a(67294),a(3905));const o={title:"Badges",description:"Documentation and examples for badges, our small count and labeling component."},i=void 0,d={unversionedId:"components/badge",id:"components/badge",title:"Badges",description:"Documentation and examples for badges, our small count and labeling component.",source:"@site/docs/components/badge.mdx",sourceDirName:"components",slug:"/components/badge",permalink:"/docs/components/badge",draft:!1,tags:[],version:"current",frontMatter:{title:"Badges",description:"Documentation and examples for badges, our small count and labeling component."},sidebar:"sidebar",previous:{title:"Alerts",permalink:"/docs/components/alerts"},next:{title:"Breadcrumbs",permalink:"/docs/components/breadcrumb"}},l={},s=[{value:"Examples",id:"examples",level:2},{value:"Contextual variations",id:"contextual-variations",level:2},{value:"Pill badges",id:"pill-badges",level:2},{value:"API",id:"api",level:2},{value:"Badge",id:"badge",level:3}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},g=c("CodeBlock"),p=c("PropsTable"),u={toc:s};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Badges scale to match the size of the immediate parent element by\nusing relative font sizing and em units."),(0,r.kt)(g,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Badge from \'react-bootstrap/Badge\';\n\nfunction BasicExample() {\n  return (\n    <div>\n      <h1>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h1>\n      <h2>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h2>\n      <h3>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h3>\n      <h4>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h4>\n      <h5>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h5>\n      <h6>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h6>\n    </div>\n  );\n}\n\nexport default BasicExample;\n'),(0,r.kt)("p",null,"Badges can be used as part of links or buttons to provide a counter."),(0,r.kt)(g,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Badge from \'react-bootstrap/Badge\';\nimport Button from \'react-bootstrap/Button\';\n\nfunction ButtonExample() {\n  return (\n    <Button variant="primary">\n      Profile <Badge bg="secondary">9</Badge>\n      <span className="visually-hidden">unread messages</span>\n    </Button>\n  );\n}\n\nexport default ButtonExample;\n'),(0,r.kt)("p",null,"Note that depending on how they are used, badges may be confusing for\nusers of screen readers and similar assistive technologies. While the\nstyling of badges provides a visual cue as to their purpose, these users\nwill simply be presented with the content of the badge. Depending on the\nspecific situation, these badges may seem like random additional words or\nnumbers at the end of a sentence, link, or button. Unless the context is\nclear, consider including additional context with a visually hidden piece\nof additional text."),(0,r.kt)("h2",{id:"contextual-variations"},"Contextual variations"),(0,r.kt)("p",null,"Add any of the below mentioned modifier classes to change the\nappearance of a badge."),(0,r.kt)(g,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Badge from \'react-bootstrap/Badge\';\nimport Stack from \'react-bootstrap/Stack\';\n\nfunction VariationsExample() {\n  return (\n    <Stack direction="horizontal" gap={2}>\n      <Badge bg="primary">Primary</Badge>\n      <Badge bg="secondary">Secondary</Badge>\n      <Badge bg="success">Success</Badge>\n      <Badge bg="danger">Danger</Badge>\n      <Badge bg="warning" text="dark">\n        Warning\n      </Badge>\n      <Badge bg="info">Info</Badge>\n      <Badge bg="light" text="dark">\n        Light\n      </Badge>\n      <Badge bg="dark">Dark</Badge>\n    </Stack>\n  );\n}\n\nexport default VariationsExample;\n'),(0,r.kt)("h2",{id:"pill-badges"},"Pill badges"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pill")," modifier class to make badges more rounded (with a larger\n",(0,r.kt)("inlineCode",{parentName:"p"},"border-radius"),"). Useful if you miss the badges from v3."),(0,r.kt)(g,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Badge from \'react-bootstrap/Badge\';\nimport Stack from \'react-bootstrap/Stack\';\n\nfunction PillExample() {\n  return (\n    <Stack direction="horizontal" gap={2}>\n      <Badge pill bg="primary">\n        Primary\n      </Badge>\n      <Badge pill bg="secondary">\n        Secondary\n      </Badge>\n      <Badge pill bg="success">\n        Success\n      </Badge>\n      <Badge pill bg="danger">\n        Danger\n      </Badge>\n      <Badge pill bg="warning" text="dark">\n        Warning\n      </Badge>\n      <Badge pill bg="info">\n        Info\n      </Badge>\n      <Badge pill bg="light" text="dark">\n        Light\n      </Badge>\n      <Badge pill bg="dark">\n        Dark\n      </Badge>\n    </Stack>\n  );\n}\n\nexport default PillExample;\n'),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"badge"},"Badge"),(0,r.kt)(p,{name:"Badge",mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);