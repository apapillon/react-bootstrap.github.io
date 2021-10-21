(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{Hpbw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return f})),n.d(t,"default",(function(){return N}));var a=n("rePB"),o=n("zLVn"),d=(n("mXGw"),n("7ljp")),l=n("Snbm"),r=n("h55t"),i=n("vXRK"),c=n("1u5/"),s=n("h47n"),p=n.n(s),h=n("dN6x"),m=n.n(h),x=n("vpcp"),u=n.n(x),b=n("pTp0"),y=n.n(b),j=n("a9sd"),O=n.n(j),g=n("sE39"),P=n.n(g);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={},T={query:"4056655266",_frontmatter:f},v=l.a;function N(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(d.mdx)(v,C(C(C({},T),n),{},{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("h1",C({},{id:"placeholders"}),"Placeholders"),Object(d.mdx)("p",{className:"lead"},'Use loading placeholders (otherwise known as "skeletons") for your components or pages to indicate something may still be loading'),Object(d.mdx)("h2",C({},{id:"about"}),"About"),Object(d.mdx)("p",null,"Placeholders can be used to enhance the experience of your application. They’re\nbuilt only with HTML and CSS, meaning you don’t need any JavaScript to create them.\nYou will, however, need some custom JavaScript to toggle their visibility. Their\nappearance, color, and sizing can be easily customized with our utility classes."),Object(d.mdx)("h2",C({},{id:"example"}),"Example"),Object(d.mdx)("p",null,"In the example below, we take a typical card component and recreate it with placeholders\napplied to create a “loading card”. Size and proportions are the same between the two."),Object(d.mdx)(c.a,{codeText:m.a,mdxType:"ReactPlayground"}),Object(d.mdx)("h2",C({},{id:"how-it-works"}),"How it works"),Object(d.mdx)("p",null,"Create placeholders with the ",Object(d.mdx)("inlineCode",{parentName:"p"},"Placeholder")," component and a grid column prop (e.g., ",Object(d.mdx)("inlineCode",{parentName:"p"},"xs={6}"),")\nto set the ",Object(d.mdx)("inlineCode",{parentName:"p"},"width"),". They can replace the text inside an element or be added to an existing\ncomponent via the ",Object(d.mdx)("inlineCode",{parentName:"p"},"as")," prop."),Object(d.mdx)("p",null,"Additional styling is applied to ",Object(d.mdx)("inlineCode",{parentName:"p"},"PlaceholderButton"),"s via ",Object(d.mdx)("inlineCode",{parentName:"p"},"::before")," to ensure the ",Object(d.mdx)("inlineCode",{parentName:"p"},"height"),"\nis respected. You may extend this pattern for other situations as needed, or add a ",Object(d.mdx)("inlineCode",{parentName:"p"},"&nbsp;"),"\nwithin the element to reflect the height when actual text is rendered in its place."),Object(d.mdx)(c.a,{codeText:y.a,mdxType:"ReactPlayground"}),Object(d.mdx)(r.a,{mdxType:"Callout"},"The use of ",Object(d.mdx)("code",null,'aria-hidden="true"')," only indicates that the element should be hidden to screen readers. The ",Object(d.mdx)("i",null,"loading")," behaviour of the placeholder depends on how authors will actually use the placeholder styles, how they plan to update things, etc. Some JavasSript code may be needed to"," ",Object(d.mdx)("i",null,"swap")," the state of the placeholder and inform AT users of the update."),Object(d.mdx)("h2",C({},{id:"width"}),"Width"),Object(d.mdx)("p",null,"You can change the ",Object(d.mdx)("inlineCode",{parentName:"p"},"width")," through grid column classes, width utilities, or inline styles."),Object(d.mdx)(c.a,{codeText:P.a,mdxType:"ReactPlayground"}),Object(d.mdx)("h2",C({},{id:"color"}),"Color"),Object(d.mdx)("p",null,"By default, the ",Object(d.mdx)("inlineCode",{parentName:"p"},"Placeholder")," uses ",Object(d.mdx)("inlineCode",{parentName:"p"},"currentColor"),". This can be overriden with a custom color\nor utility class."),Object(d.mdx)(c.a,{codeText:u.a,mdxType:"ReactPlayground"}),Object(d.mdx)("h2",C({},{id:"sizing"}),"Sizing"),Object(d.mdx)("p",null,"The size of ",Object(d.mdx)("inlineCode",{parentName:"p"},"Placeholder"),"s are based on the typographic style of the parent element.\nCustomize them with sizing props: ",Object(d.mdx)("inlineCode",{parentName:"p"},"lg"),", ",Object(d.mdx)("inlineCode",{parentName:"p"},"sm"),", or ",Object(d.mdx)("inlineCode",{parentName:"p"},"xs"),"."),Object(d.mdx)(c.a,{codeText:O.a,mdxType:"ReactPlayground"}),Object(d.mdx)("h2",C({},{id:"animation"}),"Animation"),Object(d.mdx)("p",null,"Animate placeholders by setting the prop ",Object(d.mdx)("inlineCode",{parentName:"p"},"animation")," to ",Object(d.mdx)("inlineCode",{parentName:"p"},"glow")," or ",Object(d.mdx)("inlineCode",{parentName:"p"},"wave")," to better\nconvey the perception of something being ",Object(d.mdx)("em",{parentName:"p"},"actively")," loaded."),Object(d.mdx)(c.a,{codeText:p.a,mdxType:"ReactPlayground"}),Object(d.mdx)("h2",C({},{id:"api"}),"API"),Object(d.mdx)(i.a,{metadata:n.data.Placeholder,mdxType:"ComponentApi"}),Object(d.mdx)(i.a,{metadata:n.data.PlaceholderButton,exportedBy:n.data.Placeholder,mdxType:"ComponentApi"}))}N.isMDXComponent=!0},Q6D8:function(e,t,n){e.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},a9sd:function(e,t){e.exports='<>\n  <Placeholder xs={12} size="lg" />\n  <Placeholder xs={12} />\n  <Placeholder xs={12} size="sm" />\n  <Placeholder xs={12} size="xs" />\n</>;\n'},dN6x:function(e,t){e.exports='<div className="d-flex justify-content-around">\n  <Card style={{ width: \'18rem\' }}>\n    <Card.Img variant="top" src="holder.js/100px180" />\n    <Card.Body>\n      <Card.Title>Card Title</Card.Title>\n      <Card.Text>\n        Some quick example text to build on the card title and make up the bulk\n        of the card\'s content.\n      </Card.Text>\n      <Button variant="primary">Go somewhere</Button>\n    </Card.Body>\n  </Card>\n\n  <Card style={{ width: \'18rem\' }}>\n    <Card.Img variant="top" src="holder.js/100px180" />\n    <Card.Body>\n      <Placeholder as={Card.Title} animation="glow">\n        <Placeholder xs={6} />\n      </Placeholder>\n      <Placeholder as={Card.Text} animation="glow">\n        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{\' \'}\n        <Placeholder xs={6} /> <Placeholder xs={8} />\n      </Placeholder>\n      <Placeholder.Button variant="primary" xs={6} />\n    </Card.Body>\n  </Card>\n</div>;\n'},h47n:function(e,t){e.exports='<>\n  <Placeholder as="p" animation="glow">\n    <Placeholder xs={12} />\n  </Placeholder>\n  <Placeholder as="p" animation="wave">\n    <Placeholder xs={12} />\n  </Placeholder>\n</>;\n'},h55t:function(e,t,n){"use strict";var a=n("oYCi"),o=n("Q6D8");t.a=function(e){var t=e.title,n=e.children,d=e.theme;return Object(a.jsxs)("aside",{role:"note",className:o[d||"warning"],children:[t&&Object(a.jsx)("header",{className:"h5",children:t}),Object(a.jsx)("div",{children:n})]})}},pTp0:function(e,t){e.exports='<>\n  <p aria-hidden="true">\n    <Placeholder xs={6} />\n  </p>\n\n  <Placeholder.Button xs={4} aria-hidden="true" />\n</>;\n'},sE39:function(e,t){e.exports="<>\n  <Placeholder xs={6} />\n  <Placeholder className=\"w-75\" /> <Placeholder style={{ width: '25%' }} />\n</>;\n"},vpcp:function(e,t){e.exports='<>\n  <Placeholder xs={12} />\n\n  <Placeholder xs={12} bg="primary" />\n  <Placeholder xs={12} bg="secondary" />\n  <Placeholder xs={12} bg="success" />\n  <Placeholder xs={12} bg="danger" />\n  <Placeholder xs={12} bg="warning" />\n  <Placeholder xs={12} bg="info" />\n  <Placeholder xs={12} bg="light" />\n  <Placeholder xs={12} bg="dark" />\n</>;\n'}}]);
//# sourceMappingURL=component---src-pages-components-placeholder-mdx-db4bcf106e6ea2a9f5e7.js.map