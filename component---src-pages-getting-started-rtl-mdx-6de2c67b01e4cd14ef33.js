(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{J4hU:function(e,t,n){"use strict";var r=n("oYCi");t.a=function(e){var t=e.path,n=e.children;return Object(r.jsx)("a",{href:"https://getbootstrap.com/docs/5.1"+t,children:n})}},Wlsk:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return u}));var r=n("rePB"),o=n("zLVn"),i=(n("mXGw"),n("7ljp")),a=n("Snbm"),l=n("J4hU");n("shKV"),n("1u5/");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={},p={_frontmatter:m},d=a.a;function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.mdx)(d,s(s(s({},p),n),{},{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",s({},{id:"rtl"}),"RTL"),Object(i.mdx)("p",null,"We recommend first reading ",Object(i.mdx)(l.a,{path:"/getting-started/rtl",mdxType:"DocLink"},"Bootstrap's documentation"),"\nto become familiar with how Bootstrap's RTL support works."),Object(i.mdx)("p",null,"In order to enable RTL support with React-Bootstrap, follow these steps:"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"Set ",Object(i.mdx)("inlineCode",{parentName:"li"},'dir="rtl"')," on the ",Object(i.mdx)("inlineCode",{parentName:"li"},"<html>")," element."),Object(i.mdx)("li",{parentName:"ol"},"Add an appropriate lang attribute, like ",Object(i.mdx)("inlineCode",{parentName:"li"},'lang="ar"'),", on the ",Object(i.mdx)("inlineCode",{parentName:"li"},"<html>")," element."),Object(i.mdx)("li",{parentName:"ol"},"Include the RTL version of the CSS ",Object(i.mdx)("inlineCode",{parentName:"li"},"bootstrap.rtl.min.css")," in your project."),Object(i.mdx)("li",{parentName:"ol"},"Set ",Object(i.mdx)("inlineCode",{parentName:"li"},'dir="rtl"')," in a ",Object(i.mdx)("inlineCode",{parentName:"li"},"ThemeProvider"),":")),Object(i.mdx)("pre",null,Object(i.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),'<ThemeProvider dir="rtl">\n  <App />\n</ThemeProvider>\n')))}u.isMDXComponent=!0},shKV:function(e,t){e.exports='function AlertDismissible() {\n  const [show, setShow] = useState(true);\n\n  return (\n    <>\n      <Alert show={show} variant="success">\n        <Alert.Heading>How\'s it going?!</Alert.Heading>\n        <p>\n          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget\n          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet\n          fermentum.\n        </p>\n        <hr />\n        <div className="d-flex justify-content-end">\n          <Button onClick={() => setShow(false)} variant="outline-success">\n            Close me y\'all!\n          </Button>\n        </div>\n      </Alert>\n\n      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}\n    </>\n  );\n}\n\nrender(<AlertDismissible />);\n'}}]);
//# sourceMappingURL=component---src-pages-getting-started-rtl-mdx-6de2c67b01e4cd14ef33.js.map