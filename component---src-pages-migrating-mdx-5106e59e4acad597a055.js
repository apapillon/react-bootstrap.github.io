(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{268:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return d}),n.d(t,"default",function(){return p});n(37);var a=n(52),i=n.n(a),l=(n(0),n(39)),o=n(339),d={},m={_frontmatter:d},r=o.a;function p(e){var t=e.components,n=i()(e,["components"]);return Object(l.mdx)(r,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"migrating-to-v1"},"Migrating to v1"),Object(l.mdx)("p",null,"React Bootstrap v1 adds full compatibility with Bootstrap 4. Because bootstrap 4 is a major rewrite of the project there\nare significant breaking changes from the pre ",Object(l.mdx)("inlineCode",{parentName:"p"},"v1")," react-bootstrap."),Object(l.mdx)("h2",{id:"versioning"},"Versioning"),Object(l.mdx)("p",null,"We will continue to provide general maintainance for Bootstrap 3 components, because there are many projects that continue to depend on Bootstrap 3 support in\n",Object(l.mdx)("inlineCode",{parentName:"p"},"react-bootstrap"),". ",Object(l.mdx)("inlineCode",{parentName:"p"},"react-bootstrap")," package versions will be as follows:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Bootstrap 3 support will continue in react-bootstrap versions < ",Object(l.mdx)("inlineCode",{parentName:"li"},"v1.0.0")),Object(l.mdx)("li",{parentName:"ul"},"Bootstrap 4 support will be in react-bootstrap versions >= ",Object(l.mdx)("inlineCode",{parentName:"li"},"v1.0.0"))),Object(l.mdx)("p",null,"We are ",Object(l.mdx)("strong",{parentName:"p"},"not")," committing to keeping breaking changes in lockstep with bootstraps major releases,\nthere may be a react-bootstrap v2 targeting Bootstrap v4 depending on what's best for the project."),Object(l.mdx)("h2",{id:"summary-of-breaking-changes-from-v0320"},"Summary of breaking changes from v0.32.0"),Object(l.mdx)("p",null,"Below is a ",Object(l.mdx)("em",{parentName:"p"},"rough")," account of the breaking API changes as well as the minimal change to migrate"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"bsStyle")," -> ",Object(l.mdx)("inlineCode",{parentName:"li"},"variant")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"bsClass")," -> ",Object(l.mdx)("inlineCode",{parentName:"li"},"bsPrefix")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"bsRole")," has been removed from all components. Components now communicate\nvia context to allow intermediate nesting of child components"),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"componentClass")," -> ",Object(l.mdx)("inlineCode",{parentName:"li"},"as")),Object(l.mdx)("li",{parentName:"ul"},"All utils have been removed from main exports, most were internal already and the rest have been moved to external libraries")),Object(l.mdx)("h3",{id:"grid"},"Grid"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"renamed to Container"),Object(l.mdx)("li",{parentName:"ul"},"removed Clearfix")),Object(l.mdx)("h4",{id:"col"},"Col"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"removed visibility props"),Object(l.mdx)("li",{parentName:"ul"},"consolidated col ",Object(l.mdx)("inlineCode",{parentName:"li"},"span"),", ",Object(l.mdx)("inlineCode",{parentName:"li"},"offset"),", and ",Object(l.mdx)("inlineCode",{parentName:"li"},"order")," into an object value prop per breakpoint.")),Object(l.mdx)("h3",{id:"navbar"},"Navbar"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"removed ",Object(l.mdx)("inlineCode",{parentName:"li"},"Navbar.Header")),Object(l.mdx)("li",{parentName:"ul"},"removed ",Object(l.mdx)("inlineCode",{parentName:"li"},"Navbar.Form")),Object(l.mdx)("li",{parentName:"ul"},"removed ",Object(l.mdx)("inlineCode",{parentName:"li"},"fluid"),", use your own ",Object(l.mdx)("inlineCode",{parentName:"li"},"Container")," component in."),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"inverse")," removed and replaced with ",Object(l.mdx)("inlineCode",{parentName:"li"},'variant="dark"')),Object(l.mdx)("li",{parentName:"ul"},"positioning props have been consolidated into ",Object(l.mdx)("inlineCode",{parentName:"li"},"fixed={top|bottom}")," and ",Object(l.mdx)("inlineCode",{parentName:"li"},"sticky={top|bottom}"),", staticTop has been removed")),Object(l.mdx)("h4",{id:"navbarheader"},"NavbarHeader"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"removed, not present in v4")),Object(l.mdx)("h4",{id:"navbartoggle"},"NavbarToggle"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"name changed to ",Object(l.mdx)("inlineCode",{parentName:"li"},"Navbar.Toggle"))),Object(l.mdx)("h4",{id:"navbarbrand"},"NavbarBrand"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Renders a ",Object(l.mdx)("inlineCode",{parentName:"li"},"<a>")," when an ",Object(l.mdx)("inlineCode",{parentName:"li"},"href")," is provided"),Object(l.mdx)("li",{parentName:"ul"},"The presence of ",Object(l.mdx)("inlineCode",{parentName:"li"},"children")," does not skip the wrapping ",Object(l.mdx)("inlineCode",{parentName:"li"},"span"),", use ",Object(l.mdx)("inlineCode",{parentName:"li"},"as")," along with ",Object(l.mdx)("inlineCode",{parentName:"li"},"children")," for custom rendering")),Object(l.mdx)("h3",{id:"nav"},"Nav"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"activeHref")," is removed (only activeKey now)"),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"bsStyle")," renamed to ",Object(l.mdx)("inlineCode",{parentName:"li"},"variant")),Object(l.mdx)("li",{parentName:"ul"},"NavLink hrefs will be used as ",Object(l.mdx)("inlineCode",{parentName:"li"},"eventKey"),"s when ",Object(l.mdx)("inlineCode",{parentName:"li"},"eventKey")," is absent"),Object(l.mdx)("li",{parentName:"ul"},"Local ",Object(l.mdx)("inlineCode",{parentName:"li"},"onSelect")," handlers are ignored when in the context of a TabContainer or Navbar (MAYBE ADD BACK?)")),Object(l.mdx)("h4",{id:"navitem"},"Nav.Item"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Renders ",Object(l.mdx)("em",{parentName:"li"},"only"),' the outer "item" element, use inconjunction with the new ',Object(l.mdx)("inlineCode",{parentName:"li"},"NavLink")," component"),Object(l.mdx)("li",{parentName:"ul"},"default element changed to ",Object(l.mdx)("inlineCode",{parentName:"li"},"<div>")," from a ",Object(l.mdx)("inlineCode",{parentName:"li"},"<li>")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"active")," prop removed and moved to ",Object(l.mdx)("inlineCode",{parentName:"li"},"NavLink"))),Object(l.mdx)("h3",{id:"inputgroup"},"InputGroup"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"removed InputGroupButton, and InputGroupAddon"),Object(l.mdx)("li",{parentName:"ul"},"added InputGroup.Prepend, InputGroup.Append, InputGroup.Text, InputGroup.Checkbox, InputGroup.Radio")),Object(l.mdx)("h3",{id:"badge--label"},"Badge & Label"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"removed ",Object(l.mdx)("inlineCode",{parentName:"li"},"Label"),", the ",Object(l.mdx)("inlineCode",{parentName:"li"},"Badge")," component covers both"),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"bsStyle")," renamed to ",Object(l.mdx)("inlineCode",{parentName:"li"},"variant"))),Object(l.mdx)("h3",{id:"panel"},"Panel"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"removed, replaced with Card components")),Object(l.mdx)("h3",{id:"dropdown"},"Dropdown"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Removed the ",Object(l.mdx)("inlineCode",{parentName:"li"},"disabled")," prop on Dropdown, pass it directly to Dropdown.Toggle"),Object(l.mdx)("li",{parentName:"ul"},"Removed bsRole, use function children to render custom Toggles or Menus"),Object(l.mdx)("li",{parentName:"ul"},"Removed SplitButton.toggle (replaced with a ",Object(l.mdx)("inlineCode",{parentName:"li"},"split")," prop on the basic Toggle)"),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"noCaret")," is removed because it's not optional with the styles anymore"),Object(l.mdx)("li",{parentName:"ul"},"bsPrefixes are not passed from the parent Dropdown anymore"),Object(l.mdx)("li",{parentName:"ul"},"onSelect behavior is now passed to Menu and Toggle via the Context api"),Object(l.mdx)("li",{parentName:"ul"},"DropdownMenu is not rendered until opened"),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"divider")," has been split out into ",Object(l.mdx)("inlineCode",{parentName:"li"},"Dropdown.Divider")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"header")," has been split out into ",Object(l.mdx)("inlineCode",{parentName:"li"},"Dropdown.Header"))),Object(l.mdx)("h4",{id:"dropdownbutton"},"DropdownButton"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Extra props are passed to the underlying Dropdown component, not the Toggle.")),Object(l.mdx)("h4",{id:"splitbutton"},"SplitButton"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Extra props are passed to the underlying Dropdown component, not the Toggle.")),Object(l.mdx)("h3",{id:"navbutton"},"NavButton"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Extra props are passed to the underlying Dropdown component, not the Toggle.")),Object(l.mdx)("h4",{id:"menuitem"},"MenuItem"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"renamed to ",Object(l.mdx)("inlineCode",{parentName:"li"},"DropdownItem")," (also exported on ",Object(l.mdx)("inlineCode",{parentName:"li"},"Dropdown")," as ",Object(l.mdx)("inlineCode",{parentName:"li"},"Dropdown.Item"),")")),Object(l.mdx)("h3",{id:"alert"},"Alert"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"onDismiss")," renamed to ",Object(l.mdx)("inlineCode",{parentName:"li"},"onClose"))),Object(l.mdx)("h3",{id:"well"},"Well"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"removed.")),Object(l.mdx)("h3",{id:"pager"},"Pager"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"removed.")),Object(l.mdx)("h3",{id:"controllabel"},"ControlLabel"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"renamed to ",Object(l.mdx)("inlineCode",{parentName:"li"},"FormLabel")," (also exported on ",Object(l.mdx)("inlineCode",{parentName:"li"},"Form")," as ",Object(l.mdx)("inlineCode",{parentName:"li"},"Form.Label"),")")),Object(l.mdx)("h3",{id:"checkbox-and-radio"},"Checkbox and Radio"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Consolidated into a single component. Component's name is ",Object(l.mdx)("inlineCode",{parentName:"li"},"FormCheck")," (also exported on ",Object(l.mdx)("inlineCode",{parentName:"li"},"Form")," as ",Object(l.mdx)("inlineCode",{parentName:"li"},"Form.Check"),")")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-migrating-mdx-5106e59e4acad597a055.js.map