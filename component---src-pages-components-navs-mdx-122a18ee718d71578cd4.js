(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"5h5m":function(e,n){e.exports='<Nav defaultActiveKey="/home" className="flex-column">\n  <Nav.Link href="/home">Active</Nav.Link>\n  <Nav.Link eventKey="link-1">Link</Nav.Link>\n  <Nav.Link eventKey="link-2">Link</Nav.Link>\n  <Nav.Link eventKey="disabled" disabled>\n    Disabled\n  </Nav.Link>\n</Nav>;\n'},L8AH:function(e,n){e.exports='function NavDropdownExample() {\n  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);\n\n  return (\n    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>\n      <Nav.Item>\n        <Nav.Link eventKey="1" href="#/home">\n          NavLink 1 content\n        </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="2" title="Item">\n          NavLink 2 content\n        </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="3" disabled>\n          NavLink 3 content\n        </Nav.Link>\n      </Nav.Item>\n      <NavDropdown title="Dropdown" id="nav-dropdown">\n        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>\n        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>\n        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>\n        <NavDropdown.Divider />\n        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>\n      </NavDropdown>\n    </Nav>\n  );\n}\n\nrender(<NavDropdownExample />);\n'},LgfF:function(e,n){e.exports='<Nav fill variant="tabs" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n'},Q6D8:function(e,n,t){e.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},ZkkZ:function(e,n){e.exports='<Nav\n  activeKey="/home"\n  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}\n>\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n'},cEpe:function(e,n){e.exports='<Nav justify variant="tabs" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n'},"cS/3":function(e,n){e.exports='<>\n  <Nav className="justify-content-center" activeKey="/home">\n    <Nav.Item>\n      <Nav.Link href="/home">Active</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-1">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-2">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="disabled" disabled>\n        Disabled\n      </Nav.Link>\n    </Nav.Item>\n  </Nav>\n  <p className="text-center mt-4 mb-4">Or right-aligned</p>\n  <Nav className="justify-content-end" activeKey="/home">\n    <Nav.Item>\n      <Nav.Link href="/home">Active</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-1">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-2">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="disabled" disabled>\n        Disabled\n      </Nav.Link>\n    </Nav.Item>\n  </Nav>\n</>;\n'},h55t:function(e,n,t){"use strict";var a=t("oYCi"),i=t("Q6D8");n.a=function(e){var n=e.title,t=e.children,o=e.theme;return Object(a.jsxs)("aside",{role:"note",className:i[o||"warning"],children:[n&&Object(a.jsx)("header",{className:"h5",children:n}),Object(a.jsx)("div",{children:t})]})}},hp8z:function(e,n){e.exports='<Nav variant="tabs" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Option 2</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n'},mcQx:function(e,n){e.exports='<Nav defaultActiveKey="/home" as="ul">\n  <Nav.Item as="li">\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item as="li">\n    <Nav.Link eventKey="link-1">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item as="li">\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n</Nav>;\n'},sp2j:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return P})),t.d(n,"default",(function(){return R}));var a=t("rePB"),i=t("zLVn"),o=(t("mXGw"),t("7ljp")),d=t("Snbm"),v=t("h55t"),l=t("DA+T"),m=t("vXRK"),r=t("1u5/"),c=t("cS/3"),s=t.n(c),N=t("ZkkZ"),p=t.n(N),b=t("mcQx"),u=t.n(b),y=t("L8AH"),k=t.n(y),x=t("xJXM"),h=t.n(x),L=t("LgfF"),f=t.n(L),j=t("cEpe"),O=t.n(j),I=t("5h5m"),w=t.n(I),g=t("hp8z"),K=t.n(g),D=t("zNby"),C=t.n(D);function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P={},S={query:"1876490708",_frontmatter:P},B=d.a;function R(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.mdx)(B,A(A(A({},S),t),{},{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",A({},{id:"base-nav"}),"Base Nav"),Object(o.mdx)("p",null,"Navigation bits in Bootstrap all share a general ",Object(o.mdx)("inlineCode",{parentName:"p"},"Nav"),"\ncomponent and styles. Swap ",Object(o.mdx)("inlineCode",{parentName:"p"},"variant"),"s to switch between each\nstyle. The base ",Object(o.mdx)("inlineCode",{parentName:"p"},"Nav")," component is built with flexbox and\nprovide a strong foundation for building all types of navigation\ncomponents."),Object(o.mdx)(v.a,{theme:"warning",mdxType:"Callout"},"The basic, variant-less, ",Object(o.mdx)("code",null,"Nav")," component does not include any"," ",Object(o.mdx)("code",null,"active")," prop styling!"),Object(o.mdx)(r.a,{codeText:p.a,mdxType:"ReactPlayground"}),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"<Nav>")," markup is very flexible and styling is controlled via classes so you can\nuse whatever elements you like to build your navs. By default ",Object(o.mdx)("inlineCode",{parentName:"p"},"<Nav>")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"<Nav.Item>")," both\nrender ",Object(o.mdx)("inlineCode",{parentName:"p"},"<div>"),"s instead of ",Object(o.mdx)("inlineCode",{parentName:"p"},"<ul>")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"<li>")," elements respectively.\nThis because it's possible (and common) to leave off the ",Object(o.mdx)("inlineCode",{parentName:"p"},"<Nav.Item>"),"'s and\nrender a ",Object(o.mdx)("inlineCode",{parentName:"p"},"<Nav.Link>")," directly, which would create invalid markup by default (",Object(o.mdx)("inlineCode",{parentName:"p"},"ul > a"),")."),Object(o.mdx)("p",null,"When a ",Object(o.mdx)("inlineCode",{parentName:"p"},"<ul>")," is appropriate you can render one via the ",Object(o.mdx)("inlineCode",{parentName:"p"},"as")," prop; be sure to\nalso set your items to ",Object(o.mdx)("inlineCode",{parentName:"p"},"<li>")," as well!"),Object(o.mdx)(r.a,{codeText:u.a,mdxType:"ReactPlayground"}),Object(o.mdx)("h2",A({},{id:"alignment-and-orientation"}),"Alignment and orientation"),Object(o.mdx)("p",null,"You can control the the direction and orientation of the\n",Object(o.mdx)("inlineCode",{parentName:"p"},"Nav")," by making use of the ",Object(o.mdx)("a",A({parentName:"p"},{href:"https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment"}),"flexbox layout")," utility classes.\nBy default, navs are left-aligned, but that is easily changed to center or right-aligned."),Object(o.mdx)(r.a,{codeText:s.a,mdxType:"ReactPlayground"}),Object(o.mdx)("h3",A({},{id:"vertical"}),"Vertical"),Object(o.mdx)("p",null,"Create stacked navs by changing the flex item direction with the\n",Object(o.mdx)("inlineCode",{parentName:"p"},".flex-column")," class, or your own css. You can even use the\nresponsive versions to stack in some viewports but not others (e.g.\n",Object(o.mdx)("inlineCode",{parentName:"p"},".flex-sm-column"),")."),Object(o.mdx)(r.a,{codeText:w.a,mdxType:"ReactPlayground"}),Object(o.mdx)("h2",A({},{id:"tabs"}),"Tabs"),Object(o.mdx)("p",null,'Visually represent nav items as "tabs". This style pairs nicely with\ntabbable regions created by our ',Object(o.mdx)("a",A({parentName:"p"},{href:"../tabs/"}),"Tab components"),"."),Object(o.mdx)("p",null,"Note: creating a vertical nav (",Object(o.mdx)("inlineCode",{parentName:"p"},".flex-column"),") with tabs styling is unsupported by Bootstrap's default stylesheet."),Object(o.mdx)(r.a,{codeText:K.a,mdxType:"ReactPlayground"}),Object(o.mdx)("h2",A({},{id:"pills"}),"Pills"),Object(o.mdx)("p",null,"An alternative visual variant."),Object(o.mdx)(r.a,{codeText:C.a,mdxType:"ReactPlayground"}),Object(o.mdx)("h2",A({},{id:"fill-and-justify"}),"Fill and justify"),Object(o.mdx)("p",null,"Force the contents of your nav to extend the full available width. To\nproportionately fill the space use ",Object(o.mdx)("inlineCode",{parentName:"p"},"fill"),". Notice that the\nnav is the entire width but each nav item is a different size."),Object(o.mdx)(r.a,{codeText:f.a,mdxType:"ReactPlayground"}),Object(o.mdx)("p",null,"If you want each NavItem to be the same size use ",Object(o.mdx)("inlineCode",{parentName:"p"},"justify"),"."),Object(o.mdx)(r.a,{codeText:O.a,mdxType:"ReactPlayground"}),Object(o.mdx)("h2",A({},{id:"using-dropdowns"}),"Using dropdowns"),Object(o.mdx)("p",null,"You can mix and match the Dropdown components with the NavLink and\nNavItem components to create a Dropdown that plays well in a Nav\ncomponent"),Object(o.mdx)(l.default,{codeText:h.a,mdxType:"CodeBlock"}),Object(o.mdx)("p",null,"The above demonstrates how flexible the component model can be. But if\nyou didn't want to roll your own versions we've included a\nstraight-forward ",Object(o.mdx)("inlineCode",{parentName:"p"},"<NavDropdown>")," that works for most cases."),Object(o.mdx)(r.a,{codeText:k.a,mdxType:"ReactPlayground"}),Object(o.mdx)("h2",A({},{id:"api"}),"API"),Object(o.mdx)(m.a,{metadata:t.data.Nav,mdxType:"ComponentApi"}),Object(o.mdx)(m.a,{metadata:t.data.NavItem,exportedBy:t.data.Nav,mdxType:"ComponentApi"}),Object(o.mdx)(m.a,{metadata:t.data.NavLink,exportedBy:t.data.Nav,mdxType:"ComponentApi"}),Object(o.mdx)(m.a,{metadata:t.data.NavDropdown,mdxType:"ComponentApi"}))}R.isMDXComponent=!0},xJXM:function(e,n){e.exports="<Dropdown as={NavItem}>\n  <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>\n  <Dropdown.Menu>\n    <Dropdown.Item>Hello there!</Dropdown.Item>\n  </Dropdown.Menu>\n</Dropdown>;\n"},zNby:function(e,n){e.exports='<Nav variant="pills" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Option 2</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n'}}]);
//# sourceMappingURL=component---src-pages-components-navs-mdx-122a18ee718d71578cd4.js.map