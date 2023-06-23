"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[569],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Stacks",description:"Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever."},i=void 0,l={unversionedId:"layout/stack",id:"layout/stack",title:"Stacks",description:"Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.",source:"@site/docs/layout/stack.mdx",sourceDirName:"layout",slug:"/layout/stack",permalink:"/docs/layout/stack",draft:!1,tags:[],version:"current",frontMatter:{title:"Stacks",description:"Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever."},sidebar:"sidebar",previous:{title:"Grid",permalink:"/docs/layout/grid"},next:{title:"Overview",permalink:"/docs/forms/overview"}},c={},s=[{value:"Vertical",id:"vertical",level:2},{value:"Horizontal",id:"horizontal",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2},{value:"Stack",id:"stack",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("CodeBlock"),m=p("PropsTable"),u={toc:s};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vertical"},"Vertical"),(0,r.kt)("p",null,"Stacks are vertical by default and stacked items are full-width by default. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"gap"),"\nprop to add space between items."),(0,r.kt)(d,{language:"jsx",live:!0,previewClassName:"stack-example",mdxType:"CodeBlock"},'import Stack from \'react-bootstrap/Stack\';\n\nfunction VerticalExample() {\n  return (\n    <Stack gap={3}>\n      <div className="p-2">First item</div>\n      <div className="p-2">Second item</div>\n      <div className="p-2">Third item</div>\n    </Stack>\n  );\n}\n\nexport default VerticalExample;\n'),(0,r.kt)("h2",{id:"horizontal"},"Horizontal"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},'direction="horizontal"')," for horizontal layouts. Stacked items are vertically centered\nby default and only take up their necessary width. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"gap")," prop to add space between\nitems."),(0,r.kt)(d,{language:"jsx",live:!0,previewClassName:"stack-example",mdxType:"CodeBlock"},'import Stack from \'react-bootstrap/Stack\';\n\nfunction HorizontalExample() {\n  return (\n    <Stack direction="horizontal" gap={3}>\n      <div className="p-2">First item</div>\n      <div className="p-2">Second item</div>\n      <div className="p-2">Third item</div>\n    </Stack>\n  );\n}\n\nexport default HorizontalExample;\n'),(0,r.kt)("p",null,"Using horizontal margin utilities like ",(0,r.kt)("inlineCode",{parentName:"p"},".ms-auto")," as spacers:"),(0,r.kt)(d,{language:"jsx",live:!0,previewClassName:"stack-example",mdxType:"CodeBlock"},'import Stack from \'react-bootstrap/Stack\';\n\nfunction HorizontalMarginStartExample() {\n  return (\n    <Stack direction="horizontal" gap={3}>\n      <div className="p-2">First item</div>\n      <div className="p-2 ms-auto">Second item</div>\n      <div className="p-2">Third item</div>\n    </Stack>\n  );\n}\n\nexport default HorizontalMarginStartExample;\n'),(0,r.kt)("p",null,"And with vertical rules:"),(0,r.kt)(d,{language:"jsx",live:!0,previewClassName:"stack-example",mdxType:"CodeBlock"},'import Stack from \'react-bootstrap/Stack\';\n\nfunction HorizontalVerticalRulesExample() {\n  return (\n    <Stack direction="horizontal" gap={3}>\n      <div className="p-2">First item</div>\n      <div className="p-2 ms-auto">Second item</div>\n      <div className="vr" />\n      <div className="p-2">Third item</div>\n    </Stack>\n  );\n}\n\nexport default HorizontalVerticalRulesExample;\n'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Use a vertical ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack")," to stack buttons and other elements:"),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Button from \'react-bootstrap/Button\';\nimport Stack from \'react-bootstrap/Stack\';\n\nfunction ButtonsExample() {\n  return (\n    <Stack gap={2} className="col-md-5 mx-auto">\n      <Button variant="secondary">Save changes</Button>\n      <Button variant="outline-secondary">Cancel</Button>\n    </Stack>\n  );\n}\n\nexport default ButtonsExample;\n'),(0,r.kt)("p",null,"Create an inline form with a horizontal ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack"),":"),(0,r.kt)(d,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Button from \'react-bootstrap/Button\';\nimport Form from \'react-bootstrap/Form\';\nimport Stack from \'react-bootstrap/Stack\';\n\nfunction FormExample() {\n  return (\n    <Stack direction="horizontal" gap={3}>\n      <Form.Control className="me-auto" placeholder="Add your item here..." />\n      <Button variant="secondary">Submit</Button>\n      <div className="vr" />\n      <Button variant="outline-danger">Reset</Button>\n    </Stack>\n  );\n}\n\nexport default FormExample;\n'),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"stack"},"Stack"),(0,r.kt)(m,{name:"Stack",mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);