"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[1675],{3905:(n,o,e)=>{e.d(o,{Zo:()=>m,kt:()=>c});var t=e(67294);function r(n,o,e){return o in n?Object.defineProperty(n,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[o]=e,n}function p(n,o){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),e.push.apply(e,t)}return e}function d(n){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?p(Object(e),!0).forEach((function(o){r(n,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))}))}return n}function a(n,o){if(null==n)return{};var e,t,r=function(n,o){if(null==n)return{};var e,t,r={},p=Object.keys(n);for(t=0;t<p.length;t++)e=p[t],o.indexOf(e)>=0||(r[e]=n[e]);return r}(n,o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(t=0;t<p.length;t++)e=p[t],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var i=t.createContext({}),l=function(n){var o=t.useContext(i),e=o;return n&&(e="function"==typeof n?n(o):d(d({},o),n)),e},m=function(n){var o=l(n.components);return t.createElement(i.Provider,{value:o},n.children)},s="mdxType",u={inlineCode:"code",wrapper:function(n){var o=n.children;return t.createElement(t.Fragment,{},o)}},w=t.forwardRef((function(n,o){var e=n.components,r=n.mdxType,p=n.originalType,i=n.parentName,m=a(n,["components","mdxType","originalType","parentName"]),s=l(e),w=r,c=s["".concat(i,".").concat(w)]||s[w]||u[w]||p;return e?t.createElement(c,d(d({ref:o},m),{},{components:e})):t.createElement(c,d({ref:o},m))}));function c(n,o){var e=arguments,r=o&&o.mdxType;if("string"==typeof n||r){var p=e.length,d=new Array(p);d[0]=w;var a={};for(var i in o)hasOwnProperty.call(o,i)&&(a[i]=o[i]);a.originalType=n,a[s]="string"==typeof n?n:r,d[1]=a;for(var l=2;l<p;l++)d[l]=e[l];return t.createElement.apply(null,d)}return t.createElement.apply(null,e)}w.displayName="MDXCreateElement"},94378:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>D,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var t=e(87462),r=(e(67294),e(3905));const p={title:"Dropdowns",description:"Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin"},d=void 0,a={unversionedId:"components/dropdowns",id:"components/dropdowns",title:"Dropdowns",description:"Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin",source:"@site/docs/components/dropdowns.mdx",sourceDirName:"components",slug:"/components/dropdowns",permalink:"/docs/components/dropdowns",draft:!1,tags:[],version:"current",frontMatter:{title:"Dropdowns",description:"Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin"},sidebar:"sidebar",previous:{title:"Close Button",permalink:"/docs/components/close-button"},next:{title:"Figures",permalink:"/docs/components/figures"}},i={},l=[{value:"Overview",id:"overview",level:2},{value:"Accessibility",id:"accessibility",level:2},{value:"Examples",id:"examples",level:2},{value:"Single button dropdowns",id:"single-button-dropdowns",level:3},{value:"Split button dropdowns",id:"split-button-dropdowns",level:3},{value:"Sizing",id:"sizing",level:2},{value:"Dark dropdowns",id:"dark-dropdowns",level:2},{value:"Drop directions",id:"drop-directions",level:2},{value:"Dropdown items",id:"dropdown-items",level:2},{value:"Menu alignment",id:"menu-alignment",level:2},{value:"Responsive alignment",id:"responsive-alignment",level:3},{value:"Menu headers",id:"menu-headers",level:2},{value:"Menu dividers",id:"menu-dividers",level:2},{value:"AutoClose",id:"autoclose",level:2},{value:"Customization",id:"customization",level:2},{value:"Custom Dropdown Components",id:"custom-dropdown-components",level:3},{value:"API",id:"api",level:2},{value:"DropdownButton",id:"dropdownbutton",level:3},{value:"SplitButton",id:"splitbutton",level:3},{value:"Dropdown",id:"dropdown",level:3},{value:"DropdownToggle",id:"dropdowntoggle",level:3},{value:"DropdownMenu",id:"dropdownmenu",level:3},{value:"DropdownItem",id:"dropdownitem",level:3},{value:"DropdownHeader",id:"dropdownheader",level:3},{value:"DropdownDivider",id:"dropdowndivider",level:3}],m=n=>function(o){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",o)},s=m("AriaAbbr"),u=m("CodeBlock"),w=m("PropsTable"),c={toc:l};function D(n){let{components:o,...e}=n;return(0,r.kt)("wrapper",(0,t.Z)({},c,e,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Dropdowns are toggleable, contextual overlays for displaying lists of\nlinks and more. Like overlays, Dropdowns are built using a third-party\nlibrary ",(0,r.kt)("a",{href:"https://popper.js.org/"},"Popper.js"),", which provides\ndynamic positioning and viewport detection."),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{href:"https://www.w3.org/TR/wai-aria/"},(0,r.kt)("abbr",{title:"Web Accessibility Initiative"},"WAI")," ",(0,r.kt)(s,{mdxType:"AriaAbbr"}))," standard\ndefines a ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#menu"},(0,r.kt)("inlineCode",{parentName:"a"},'role="menu"')," widget"),", but it's very specific to a certain kind of menu. ",(0,r.kt)(s,{mdxType:"AriaAbbr"})," menus, must\nonly contain ",(0,r.kt)("inlineCode",{parentName:"p"},'role="menuitem"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'role="menuitemcheckbox"'),", or ",(0,r.kt)("inlineCode",{parentName:"p"},'role="menuitemradio"'),"."),(0,r.kt)("p",null,"On the other hand, Bootstrap's dropdowns are designed to more generic\nand application in a variety of situations. For this reason we don't\nautomatically add the menu roles to the markup. We do implement some\nbasic keyboard navigation, and if you do provide the \"menu\" role,\nreact-bootstrap will do its best to ensure the focus management is\ncompliant with the ",(0,r.kt)(s,{mdxType:"AriaAbbr"})," authoring guidelines for menus."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"single-button-dropdowns"},"Single button dropdowns"),(0,r.kt)("p",null,"The basic Dropdown is composed of a wrapping ",(0,r.kt)("inlineCode",{parentName:"p"},"Dropdown")," and\ninner ",(0,r.kt)("inlineCode",{parentName:"p"},"<DropdownMenu>"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"<DropdownToggle>"),". By\ndefault the ",(0,r.kt)("inlineCode",{parentName:"p"},"<DropdownToggle>")," will render a\n",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," component and accepts all the same props."),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction BasicExample() {\n  return (\n    <Dropdown>\n      <Dropdown.Toggle variant="success" id="dropdown-basic">\n        Dropdown Button\n      </Dropdown.Toggle>\n\n      <Dropdown.Menu>\n        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>\n        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n      </Dropdown.Menu>\n    </Dropdown>\n  );\n}\n\nexport default BasicExample;\n'),(0,r.kt)("p",null,"Since the above is such a common configuration react-bootstrap provides\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"<DropdownButton>")," component to help reduce typing. Provide\na ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," prop and some ",(0,r.kt)("inlineCode",{parentName:"p"},"<DropdownItem>"),"s and you're\nready to go."),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\n\nfunction BasicButtonExample() {\n  return (\n    <DropdownButton id="dropdown-basic-button" title="Dropdown button">\n      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>\n      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n    </DropdownButton>\n  );\n}\n\nexport default BasicButtonExample;\n'),(0,r.kt)("p",null,"DropdownButton will forward Button props to the underlying Toggle\ncomponent"),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import ButtonGroup from 'react-bootstrap/ButtonGroup';\nimport Dropdown from 'react-bootstrap/Dropdown';\nimport DropdownButton from 'react-bootstrap/DropdownButton';\n\nfunction VariantsExample() {\n  return (\n    <>\n      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(\n        (variant) => (\n          <DropdownButton\n            as={ButtonGroup}\n            key={variant}\n            id={`dropdown-variants-${variant}`}\n            variant={variant.toLowerCase()}\n            title={variant}\n          >\n            <Dropdown.Item eventKey=\"1\">Action</Dropdown.Item>\n            <Dropdown.Item eventKey=\"2\">Another action</Dropdown.Item>\n            <Dropdown.Item eventKey=\"3\" active>\n              Active Item\n            </Dropdown.Item>\n            <Dropdown.Divider />\n            <Dropdown.Item eventKey=\"4\">Separated link</Dropdown.Item>\n          </DropdownButton>\n        ),\n      )}\n    </>\n  );\n}\n\nexport default VariantsExample;\n"),(0,r.kt)("h3",{id:"split-button-dropdowns"},"Split button dropdowns"),(0,r.kt)("p",null,"Similarly, You create a split dropdown by combining the Dropdown\ncomponents with another Button and a ButtonGroup."),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Button from \'react-bootstrap/Button\';\nimport ButtonGroup from \'react-bootstrap/ButtonGroup\';\nimport Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction SplitBasicExample() {\n  return (\n    <Dropdown as={ButtonGroup}>\n      <Button variant="success">Split Button</Button>\n\n      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />\n\n      <Dropdown.Menu>\n        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>\n        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n      </Dropdown.Menu>\n    </Dropdown>\n  );\n}\n\nexport default SplitBasicExample;\n'),(0,r.kt)("p",null,"As with DropdownButton, ",(0,r.kt)("inlineCode",{parentName:"p"},"SplitButton")," is provided as\nconvenience component."),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import Dropdown from 'react-bootstrap/Dropdown';\nimport SplitButton from 'react-bootstrap/SplitButton';\n\nfunction SplitVariantExample() {\n  return (\n    <>\n      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(\n        (variant) => (\n          <SplitButton\n            key={variant}\n            id={`dropdown-split-variants-${variant}`}\n            variant={variant.toLowerCase()}\n            title={variant}\n          >\n            <Dropdown.Item eventKey=\"1\">Action</Dropdown.Item>\n            <Dropdown.Item eventKey=\"2\">Another action</Dropdown.Item>\n            <Dropdown.Item eventKey=\"3\" active>\n              Active Item\n            </Dropdown.Item>\n            <Dropdown.Divider />\n            <Dropdown.Item eventKey=\"4\">Separated link</Dropdown.Item>\n          </SplitButton>\n        ),\n      )}\n    </>\n  );\n}\n\nexport default SplitVariantExample;\n"),(0,r.kt)("h2",{id:"sizing"},"Sizing"),(0,r.kt)("p",null,"Dropdowns work with buttons of all sizes."),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import ButtonGroup from \'react-bootstrap/ButtonGroup\';\nimport Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\nimport SplitButton from \'react-bootstrap/SplitButton\';\n\nfunction ButtonSizesExample() {\n  return (\n    <>\n      <div className="mb-2">\n        {[DropdownButton, SplitButton].map((DropdownType, idx) => (\n          <DropdownType\n            as={ButtonGroup}\n            key={idx}\n            id={`dropdown-button-drop-${idx}`}\n            size="lg"\n            title="Drop large"\n          >\n            <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n            <Dropdown.Divider />\n            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n          </DropdownType>\n        ))}\n      </div>\n      <div>\n        {[DropdownButton, SplitButton].map((DropdownType, idx) => (\n          <DropdownType\n            as={ButtonGroup}\n            key={idx}\n            id={`dropdown-button-drop-${idx}`}\n            size="sm"\n            variant="secondary"\n            title="Drop small"\n          >\n            <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n            <Dropdown.Divider />\n            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n          </DropdownType>\n        ))}\n      </div>\n    </>\n  );\n}\n\nexport default ButtonSizesExample;\n'),(0,r.kt)("h2",{id:"dark-dropdowns"},"Dark dropdowns"),(0,r.kt)("p",null,"Opt into darker dropdowns to match a dark navbar or custom style by adding\n",(0,r.kt)("inlineCode",{parentName:"p"},'variant="dark"')," onto an existing ",(0,r.kt)("inlineCode",{parentName:"p"},"DropdownMenu"),". Alternatively, use\n",(0,r.kt)("inlineCode",{parentName:"p"},'menuVariant="dark"')," when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"DropdownButton")," component."),(0,r.kt)("admonition",{title:"Heads up!",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Dark variants for components were deprecated in Bootstrap v5.3.0 with the introduction\nof color modes. Instead of adding ",(0,r.kt)("inlineCode",{parentName:"p"},'variant="dark"'),", set ",(0,r.kt)("inlineCode",{parentName:"p"},'data-bs-theme="dark"')," on the root\nelement, a parent wrapper, or the component itself.")),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\n\nfunction ButtonDarkExample() {\n  return (\n    <>\n      <Dropdown data-bs-theme="dark">\n        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">\n          Dropdown Button\n        </Dropdown.Toggle>\n\n        <Dropdown.Menu>\n          <Dropdown.Item href="#/action-1" active>\n            Action\n          </Dropdown.Item>\n          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n\n      <DropdownButton\n        id="dropdown-button-dark-example2"\n        variant="secondary"\n        title="Dropdown button"\n        className="mt-2"\n        data-bs-theme="dark"\n      >\n        <Dropdown.Item href="#/action-1" active>\n          Action\n        </Dropdown.Item>\n        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>\n        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>\n        <Dropdown.Divider />\n        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>\n      </DropdownButton>\n    </>\n  );\n}\n\nexport default ButtonDarkExample;\n'),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},'menuVariant="dark"')," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"NavDropdown"),":"),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Container from \'react-bootstrap/Container\';\nimport Nav from \'react-bootstrap/Nav\';\nimport Navbar from \'react-bootstrap/Navbar\';\nimport NavDropdown from \'react-bootstrap/NavDropdown\';\n\nfunction NavbarDarkExample() {\n  return (\n    <Navbar variant="dark" bg="dark" expand="lg">\n      <Container fluid>\n        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n        <Navbar.Toggle aria-controls="navbar-dark-example" />\n        <Navbar.Collapse id="navbar-dark-example">\n          <Nav>\n            <NavDropdown\n              id="nav-dropdown-dark-example"\n              title="Dropdown"\n              menuVariant="dark"\n            >\n              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.2">\n                Another action\n              </NavDropdown.Item>\n              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n              <NavDropdown.Divider />\n              <NavDropdown.Item href="#action/3.4">\n                Separated link\n              </NavDropdown.Item>\n            </NavDropdown>\n          </Nav>\n        </Navbar.Collapse>\n      </Container>\n    </Navbar>\n  );\n}\n\nexport default NavbarDarkExample;\n'),(0,r.kt)("h2",{id:"drop-directions"},"Drop directions"),(0,r.kt)("p",null,"Trigger dropdown menus above, below, left, or to the right of their\ntoggle elements, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"drop")," prop."),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},"import Dropdown from 'react-bootstrap/Dropdown';\nimport DropdownButton from 'react-bootstrap/DropdownButton';\nimport SplitButton from 'react-bootstrap/SplitButton';\n\nfunction DropDirectioExample() {\n  return (\n    <>\n      <div className=\"mb-2\">\n        {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(\n          (direction) => (\n            <DropdownButton\n              as={ButtonGroup}\n              key={direction}\n              id={`dropdown-button-drop-${direction}`}\n              drop={direction}\n              variant=\"secondary\"\n              title={` Drop ${direction} `}\n            >\n              <Dropdown.Item eventKey=\"1\">Action</Dropdown.Item>\n              <Dropdown.Item eventKey=\"2\">Another action</Dropdown.Item>\n              <Dropdown.Item eventKey=\"3\">Something else here</Dropdown.Item>\n              <Dropdown.Divider />\n              <Dropdown.Item eventKey=\"4\">Separated link</Dropdown.Item>\n            </DropdownButton>\n          ),\n        )}\n      </div>\n\n      <div>\n        {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(\n          (direction) => (\n            <SplitButton\n              key={direction}\n              id={`dropdown-button-drop-${direction}`}\n              drop={direction}\n              variant=\"secondary\"\n              title={`Drop ${direction}`}\n            >\n              <Dropdown.Item eventKey=\"1\">Action</Dropdown.Item>\n              <Dropdown.Item eventKey=\"2\">Another action</Dropdown.Item>\n              <Dropdown.Item eventKey=\"3\">Something else here</Dropdown.Item>\n              <Dropdown.Divider />\n              <Dropdown.Item eventKey=\"4\">Separated link</Dropdown.Item>\n            </SplitButton>\n          ),\n        )}\n      </div>\n    </>\n  );\n}\n\nexport default DropDirectioExample;\n"),(0,r.kt)("h2",{id:"dropdown-items"},"Dropdown items"),(0,r.kt)("p",null,"Historically dropdown menu contents had to be links, but that\u2019s no\nlonger the case with v4. Now you can optionally use\n",(0,r.kt)("inlineCode",{parentName:"p"},"<button>")," elements in your dropdowns instead of just ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>"),"s."),(0,r.kt)("p",null,"You can also create non-interactive dropdown items with ",(0,r.kt)("inlineCode",{parentName:"p"},"<Dropdown.ItemText>"),".\nFeel free to style further with custom CSS or text utilities."),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\n\nfunction DropdownItemTagsExample() {\n  return (\n    <DropdownButton id="dropdown-item-button" title="Dropdown button">\n      <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>\n      <Dropdown.Item as="button">Action</Dropdown.Item>\n      <Dropdown.Item as="button">Another action</Dropdown.Item>\n      <Dropdown.Item as="button">Something else</Dropdown.Item>\n    </DropdownButton>\n  );\n}\n\nexport default DropdownItemTagsExample;\n'),(0,r.kt)("h2",{id:"menu-alignment"},"Menu alignment"),(0,r.kt)("p",null,"By default, a dropdown menu is aligned to the left, but you can switch\nit by passing ",(0,r.kt)("inlineCode",{parentName:"p"},'align="end"')," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Dropdown>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<DropdownButton>"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"<SplitButton>"),"."),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\n\nfunction MenuAlignEndExample() {\n  return (\n    <DropdownButton\n      align="end"\n      title="Dropdown end"\n      id="dropdown-menu-align-end"\n    >\n      <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n    </DropdownButton>\n  );\n}\n\nexport default MenuAlignEndExample;\n'),(0,r.kt)("h3",{id:"responsive-alignment"},"Responsive alignment"),(0,r.kt)("p",null,"If you want to use responsive menu alignment, pass an object containing a breakpoint to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"align")," prop on the ",(0,r.kt)("inlineCode",{parentName:"p"},"<DropdownMenu>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<DropdownButton>"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"<SplitButton>"),".\nYou can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," for the various breakpoints."),(0,r.kt)("admonition",{title:"Warning",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Using responsive alignment will disable Popper usage so any dynamic\npositioning features such as ",(0,r.kt)("code",null,"flip")," will not work.")),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Dropdown from \'react-bootstrap/Dropdown\';\nimport DropdownButton from \'react-bootstrap/DropdownButton\';\nimport SplitButton from \'react-bootstrap/SplitButton\';\n\nfunction MenuAlignResponsiveExample() {\n  return (\n    <>\n      <div>\n        <DropdownButton\n          as={ButtonGroup}\n          align={{ lg: \'end\' }}\n          title="Left-aligned but right aligned when large screen"\n          id="dropdown-menu-align-responsive-1"\n        >\n          <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>\n          <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>\n        </DropdownButton>\n      </div>\n      <div className="mt-2">\n        <SplitButton\n          align={{ lg: \'start\' }}\n          title="Right-aligned but left aligned when large screen"\n          id="dropdown-menu-align-responsive-2"\n        >\n          <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>\n          <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>\n        </SplitButton>\n      </div>\n    </>\n  );\n}\n\nexport default MenuAlignResponsiveExample;\n'),(0,r.kt)("h2",{id:"menu-headers"},"Menu headers"),(0,r.kt)("p",null,"Add a header to label sections of actions."),(0,r.kt)(u,{language:"jsx",live:!0,previewClassName:"static-dropdown-menu",mdxType:"CodeBlock"},'import Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction MenuHeadersExample() {\n  return (\n    <Dropdown.Menu show>\n      <Dropdown.Header>Dropdown header</Dropdown.Header>\n      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n    </Dropdown.Menu>\n  );\n}\n\nexport default MenuHeadersExample;\n'),(0,r.kt)("h2",{id:"menu-dividers"},"Menu dividers"),(0,r.kt)("p",null,"Separate groups of related menu items with a divider."),(0,r.kt)(u,{language:"jsx",live:!0,previewClassName:"static-dropdown-menu",mdxType:"CodeBlock"},'import Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction MenuDividersExample() {\n  return (\n    <Dropdown.Menu show>\n      <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  );\n}\n\nexport default MenuDividersExample;\n'),(0,r.kt)("h2",{id:"autoclose"},"AutoClose"),(0,r.kt)("p",null,"By default, the dropdown menu is closed when selecting a menu item or clicking outside of the\ndropdown menu. This behaviour can be changed by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"autoClose")," property."),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"autoClose")," is set to the default value ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and behaves like expected. By choosing ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the dropdown\nmenu can only be toggled by clicking on the dropdown button. ",(0,r.kt)("inlineCode",{parentName:"p"},"inside")," makes the dropdown disappear ",(0,r.kt)("strong",{parentName:"p"},"only"),"\nby choosing a menu item and ",(0,r.kt)("inlineCode",{parentName:"p"},"outside")," closes the dropdown menu ",(0,r.kt)("strong",{parentName:"p"},"only")," by clicking outside."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notice")," how the dropdown is toggled in each scenario by clicking on the button."),(0,r.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},'import Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction AutoCloseExample() {\n  return (\n    <>\n      <Dropdown className="d-inline mx-2">\n        <Dropdown.Toggle id="dropdown-autoclose-true">\n          Default Dropdown\n        </Dropdown.Toggle>\n\n        <Dropdown.Menu>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n\n      <Dropdown className="d-inline mx-2" autoClose="inside">\n        <Dropdown.Toggle id="dropdown-autoclose-inside">\n          Clickable Outside\n        </Dropdown.Toggle>\n\n        <Dropdown.Menu>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n\n      <Dropdown className="d-inline mx-2" autoClose="outside">\n        <Dropdown.Toggle id="dropdown-autoclose-outside">\n          Clickable Inside\n        </Dropdown.Toggle>\n\n        <Dropdown.Menu>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n\n      <Dropdown className="d-inline mx-2" autoClose={false}>\n        <Dropdown.Toggle id="dropdown-autoclose-false">\n          Manual Close\n        </Dropdown.Toggle>\n\n        <Dropdown.Menu>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n          <Dropdown.Item href="#">Menu Item</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n    </>\n  );\n}\n\nexport default AutoCloseExample;\n'),(0,r.kt)("h2",{id:"customization"},"Customization"),(0,r.kt)("p",null,"If the default handling of the dropdown menu and toggle components\naren't to your liking, you can customize them, by using the more basic\n",(0,r.kt)("inlineCode",{parentName:"p"},"<Dropdown>")," Component to explicitly specify the Toggle and\nMenu components"),(0,r.kt)(u,{language:"jsx",live:!0,previewClassName:"custom-dropdown-menu",mdxType:"CodeBlock"},'import Button from \'react-bootstrap/Button\';\nimport ButtonGroup from \'react-bootstrap/ButtonGroup\';\nimport Dropdown from \'react-bootstrap/Dropdown\';\n\nfunction ButtonCustomExample() {\n  return (\n    <>\n      <Dropdown as={ButtonGroup}>\n        <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>\n        <Dropdown.Menu className="super-colors">\n          <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n          <Dropdown.Item eventKey="3" active>\n            Active Item\n          </Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>{\' \'}\n      <Dropdown as={ButtonGroup}>\n        <Button variant="info">mix it up style-wise</Button>\n        <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />\n        <Dropdown.Menu className="super-colors">\n          <Dropdown.Item eventKey="1">Action</Dropdown.Item>\n          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>\n          <Dropdown.Item eventKey="3" active>\n            Active Item\n          </Dropdown.Item>\n          <Dropdown.Divider />\n          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>\n        </Dropdown.Menu>\n      </Dropdown>\n    </>\n  );\n}\n\nexport default ButtonCustomExample;\n'),(0,r.kt)("h3",{id:"custom-dropdown-components"},"Custom Dropdown Components"),(0,r.kt)("p",null,"For those that want to customize everything, you can forgo the included\nToggle and Menu components, and create your own. By providing custom\ncomponents to the ",(0,r.kt)("inlineCode",{parentName:"p"},"as")," prop, you can control how each\ncomponent behaves. Custom toggle and menu components ",(0,r.kt)("strong",{parentName:"p"},"must")," be able to accept refs."),(0,r.kt)(u,{language:"jsx",live:!0,noInline:!0,mdxType:"CodeBlock"},'import React, { useState } from \'react\';\nimport Dropdown from \'react-bootstrap/Dropdown\';\nimport Form from \'react-bootstrap/Form\';\n\n// The forwardRef is important!!\n// Dropdown needs access to the DOM node in order to position the Menu\nconst CustomToggle = React.forwardRef(({ children, onClick }, ref) => (\n  <a\n    href=""\n    ref={ref}\n    onClick={(e) => {\n      e.preventDefault();\n      onClick(e);\n    }}\n  >\n    {children}\n    &#x25bc;\n  </a>\n));\n\n// forwardRef again here!\n// Dropdown needs access to the DOM of the Menu to measure it\nconst CustomMenu = React.forwardRef(\n  ({ children, style, className, \'aria-labelledby\': labeledBy }, ref) => {\n    const [value, setValue] = useState(\'\');\n\n    return (\n      <div\n        ref={ref}\n        style={style}\n        className={className}\n        aria-labelledby={labeledBy}\n      >\n        <Form.Control\n          autoFocus\n          className="mx-3 my-2 w-auto"\n          placeholder="Type to filter..."\n          onChange={(e) => setValue(e.target.value)}\n          value={value}\n        />\n        <ul className="list-unstyled">\n          {React.Children.toArray(children).filter(\n            (child) =>\n              !value || child.props.children.toLowerCase().startsWith(value),\n          )}\n        </ul>\n      </div>\n    );\n  },\n);\n\nrender(\n  <Dropdown>\n    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">\n      Custom toggle\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu as={CustomMenu}>\n      <Dropdown.Item eventKey="1">Red</Dropdown.Item>\n      <Dropdown.Item eventKey="2">Blue</Dropdown.Item>\n      <Dropdown.Item eventKey="3" active>\n        Orange\n      </Dropdown.Item>\n      <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>,\n);\n'),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"dropdownbutton"},"DropdownButton"),(0,r.kt)(w,{name:"DropdownButton",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"splitbutton"},"SplitButton"),(0,r.kt)(w,{name:"SplitButton",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"dropdown"},"Dropdown"),(0,r.kt)(w,{name:"Dropdown",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"dropdowntoggle"},"DropdownToggle"),(0,r.kt)(w,{name:"DropdownToggle",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"dropdownmenu"},"DropdownMenu"),(0,r.kt)(w,{name:"DropdownMenu",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"dropdownitem"},"DropdownItem"),(0,r.kt)(w,{name:"DropdownItem",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"dropdownheader"},"DropdownHeader"),(0,r.kt)(w,{name:"DropdownHeader",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"dropdowndivider"},"DropdownDivider"),(0,r.kt)(w,{name:"DropdownDivider",mdxType:"PropsTable"}))}D.isMDXComponent=!0}}]);