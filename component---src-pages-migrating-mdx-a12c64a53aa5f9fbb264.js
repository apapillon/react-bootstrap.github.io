(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return l}),n.d(t,"default",function(){return m});n(12),n(8),n(3),n(17),n(13),n(0);var a=n(52),i=n(338);var l={},o={_frontmatter:l},d=i.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.mdx)(d,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"migrating-to-v1"},"Migrating to v1"),Object(a.mdx)("p",null,"React Bootstrap v1 adds full compatibility with Bootstrap 4. Because bootstrap 4 is a major rewrite of the project there\nare significant breaking changes from the pre ",Object(a.mdx)("inlineCode",{parentName:"p"},"v1")," react-bootstrap."),Object(a.mdx)("h2",{id:"versioning"},"Versioning"),Object(a.mdx)("p",null,"We will continue to provide general maintainance for Bootstrap 3 components, because there are many projects that continue to depend on Bootstrap 3 support in\n",Object(a.mdx)("inlineCode",{parentName:"p"},"react-bootstrap"),". ",Object(a.mdx)("inlineCode",{parentName:"p"},"react-bootstrap")," package versions will be as follows:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Bootstrap 3 support will continue in react-bootstrap versions < ",Object(a.mdx)("inlineCode",{parentName:"li"},"v1.0.0")),Object(a.mdx)("li",{parentName:"ul"},"Bootstrap 4 support will be in react-bootstrap versions >= ",Object(a.mdx)("inlineCode",{parentName:"li"},"v1.0.0"))),Object(a.mdx)("p",null,"We are ",Object(a.mdx)("strong",{parentName:"p"},"not")," committing to keeping breaking changes in lockstep with bootstraps major releases,\nthere may be a react-bootstrap v2 targeting Bootstrap v4 depending on what's best for the project."),Object(a.mdx)("h2",{id:"summary-of-breaking-changes-from-v0320"},"Summary of breaking changes from v0.32.0"),Object(a.mdx)("p",null,"Below is a ",Object(a.mdx)("em",{parentName:"p"},"rough")," account of the breaking API changes as well as the minimal change to migrate"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"bsStyle")," -> ",Object(a.mdx)("inlineCode",{parentName:"li"},"variant")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"bsClass")," -> ",Object(a.mdx)("inlineCode",{parentName:"li"},"bsPrefix")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"bsRole")," has been removed from all components. Components now communicate\nvia context to allow intermediate nesting of child components"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"componentClass")," -> ",Object(a.mdx)("inlineCode",{parentName:"li"},"as")),Object(a.mdx)("li",{parentName:"ul"},"All utils have been removed from main exports, most were internal already and the rest have been moved to external libraries")),Object(a.mdx)("h3",{id:"grid"},"Grid"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"renamed to Container"),Object(a.mdx)("li",{parentName:"ul"},"removed Clearfix")),Object(a.mdx)("h4",{id:"col"},"Col"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"removed visibility props"),Object(a.mdx)("li",{parentName:"ul"},"consolidated col ",Object(a.mdx)("inlineCode",{parentName:"li"},"span"),", ",Object(a.mdx)("inlineCode",{parentName:"li"},"offset"),", and ",Object(a.mdx)("inlineCode",{parentName:"li"},"order")," into an object value prop per breakpoint.")),Object(a.mdx)("h3",{id:"navbar"},"Navbar"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"removed ",Object(a.mdx)("inlineCode",{parentName:"li"},"Navbar.Header")),Object(a.mdx)("li",{parentName:"ul"},"removed ",Object(a.mdx)("inlineCode",{parentName:"li"},"Navbar.Form")),Object(a.mdx)("li",{parentName:"ul"},"removed ",Object(a.mdx)("inlineCode",{parentName:"li"},"fluid"),", use your own ",Object(a.mdx)("inlineCode",{parentName:"li"},"Container")," component in."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"inverse")," removed and replaced with ",Object(a.mdx)("inlineCode",{parentName:"li"},'variant="dark"')),Object(a.mdx)("li",{parentName:"ul"},"positioning props have been consolidated into ",Object(a.mdx)("inlineCode",{parentName:"li"},"fixed={top|bottom}")," and ",Object(a.mdx)("inlineCode",{parentName:"li"},"sticky={top|bottom}"),", staticTop has been removed")),Object(a.mdx)("h4",{id:"navbarheader"},"NavbarHeader"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"removed, not present in v4")),Object(a.mdx)("h4",{id:"navbartoggle"},"NavbarToggle"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"name changed to ",Object(a.mdx)("inlineCode",{parentName:"li"},"Navbar.Toggle"))),Object(a.mdx)("h4",{id:"navbarbrand"},"NavbarBrand"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Renders a ",Object(a.mdx)("inlineCode",{parentName:"li"},"<a>")," when an ",Object(a.mdx)("inlineCode",{parentName:"li"},"href")," is provided"),Object(a.mdx)("li",{parentName:"ul"},"The presence of ",Object(a.mdx)("inlineCode",{parentName:"li"},"children")," does not skip the wrapping ",Object(a.mdx)("inlineCode",{parentName:"li"},"span"),", use ",Object(a.mdx)("inlineCode",{parentName:"li"},"as")," along with ",Object(a.mdx)("inlineCode",{parentName:"li"},"children")," for custom rendering")),Object(a.mdx)("h3",{id:"nav"},"Nav"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"activeHref")," is removed (only activeKey now)"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"bsStyle")," renamed to ",Object(a.mdx)("inlineCode",{parentName:"li"},"variant")),Object(a.mdx)("li",{parentName:"ul"},"NavLink hrefs will be used as ",Object(a.mdx)("inlineCode",{parentName:"li"},"eventKey"),"s when ",Object(a.mdx)("inlineCode",{parentName:"li"},"eventKey")," is absent"),Object(a.mdx)("li",{parentName:"ul"},"Local ",Object(a.mdx)("inlineCode",{parentName:"li"},"onSelect")," handlers are ignored when in the context of a TabContainer or Navbar (MAYBE ADD BACK?)")),Object(a.mdx)("h4",{id:"navitem"},"Nav.Item"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Renders ",Object(a.mdx)("em",{parentName:"li"},"only"),' the outer "item" element, use inconjunction with the new ',Object(a.mdx)("inlineCode",{parentName:"li"},"NavLink")," component"),Object(a.mdx)("li",{parentName:"ul"},"default element changed to ",Object(a.mdx)("inlineCode",{parentName:"li"},"<div>")," from a ",Object(a.mdx)("inlineCode",{parentName:"li"},"<li>")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"active")," prop removed and moved to ",Object(a.mdx)("inlineCode",{parentName:"li"},"NavLink"))),Object(a.mdx)("h3",{id:"inputgroup"},"InputGroup"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"removed InputGroup.Button, and InputGroup.Addon"),Object(a.mdx)("li",{parentName:"ul"},"added InputGroup.Prepend, InputGroup.Append, InputGroup.Text, InputGroup.Checkbox, InputGroup.Radio")),Object(a.mdx)("h3",{id:"badge--label"},"Badge & Label"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"removed ",Object(a.mdx)("inlineCode",{parentName:"li"},"Label"),", the ",Object(a.mdx)("inlineCode",{parentName:"li"},"Badge")," component covers both"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"bsStyle")," renamed to ",Object(a.mdx)("inlineCode",{parentName:"li"},"variant"))),Object(a.mdx)("h3",{id:"panel"},"Panel"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"removed, replaced with Card components")),Object(a.mdx)("h3",{id:"dropdown"},"Dropdown"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Removed the ",Object(a.mdx)("inlineCode",{parentName:"li"},"disabled")," prop on Dropdown, pass it directly to Dropdown.Toggle"),Object(a.mdx)("li",{parentName:"ul"},"Removed bsRole, use function children to render custom Toggles or Menus"),Object(a.mdx)("li",{parentName:"ul"},"Removed SplitButton.toggle (replaced with a ",Object(a.mdx)("inlineCode",{parentName:"li"},"split")," prop on the basic Toggle)"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"noCaret")," is removed because it's not optional with the styles anymore"),Object(a.mdx)("li",{parentName:"ul"},"bsPrefixes are not passed from the parent Dropdown anymore"),Object(a.mdx)("li",{parentName:"ul"},"onSelect behavior is now passed to Menu and Toggle via the Context api"),Object(a.mdx)("li",{parentName:"ul"},"DropdownMenu is not rendered until opened"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"divider")," has been split out into ",Object(a.mdx)("inlineCode",{parentName:"li"},"Dropdown.Divider")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"header")," has been split out into ",Object(a.mdx)("inlineCode",{parentName:"li"},"Dropdown.Header"))),Object(a.mdx)("h4",{id:"dropdownbutton"},"DropdownButton"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Extra props are passed to the underlying Dropdown component, not the Toggle.")),Object(a.mdx)("h4",{id:"splitbutton"},"SplitButton"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Extra props are passed to the underlying Dropdown component, not the Toggle.")),Object(a.mdx)("h3",{id:"navbutton"},"NavButton"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Extra props are passed to the underlying Dropdown component, not the Toggle.")),Object(a.mdx)("h4",{id:"menuitem"},"MenuItem"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"renamed to ",Object(a.mdx)("inlineCode",{parentName:"li"},"DropdownItem")," (also exported on ",Object(a.mdx)("inlineCode",{parentName:"li"},"Dropdown")," as ",Object(a.mdx)("inlineCode",{parentName:"li"},"Dropdown.Item"),")")),Object(a.mdx)("h3",{id:"alert"},"Alert"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"onDismiss")," renamed to ",Object(a.mdx)("inlineCode",{parentName:"li"},"onClose"))),Object(a.mdx)("h3",{id:"well"},"Well"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"removed.")),Object(a.mdx)("h3",{id:"pager"},"Pager"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"removed.")),Object(a.mdx)("h3",{id:"controllabel"},"ControlLabel"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"renamed to ",Object(a.mdx)("inlineCode",{parentName:"li"},"FormLabel")," (also exported on ",Object(a.mdx)("inlineCode",{parentName:"li"},"Form")," as ",Object(a.mdx)("inlineCode",{parentName:"li"},"Form.Label"),")")),Object(a.mdx)("h3",{id:"checkbox-and-radio"},"Checkbox and Radio"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Consolidated into a single component. Component's name is ",Object(a.mdx)("inlineCode",{parentName:"li"},"FormCheck")," (also exported on ",Object(a.mdx)("inlineCode",{parentName:"li"},"Form")," as ",Object(a.mdx)("inlineCode",{parentName:"li"},"Form.Check"),")")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-migrating-mdx-a12c64a53aa5f9fbb264.js.map