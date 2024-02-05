"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[9257],{24634:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>x,contentTitle:()=>y,default:()=>T,frontMatter:()=>u,metadata:()=>f,toc:()=>j});var t=o(85893),r=o(11151);const i="import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction DisabledExample() {\n  return (\n    <OverlayTrigger overlay={<Tooltip id=\"tooltip-disabled\">Tooltip!</Tooltip>}>\n      <span className=\"d-inline-block\">\n        <Button disabled style={{ pointerEvents: 'none' }}>\n          Disabled button\n        </Button>\n      </span>\n    </OverlayTrigger>\n  );\n}\n\nexport default DisabledExample;\n",a="import { useState, useRef } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Overlay from 'react-bootstrap/Overlay';\n\nfunction Example() {\n  const [show, setShow] = useState(false);\n  const target = useRef(null);\n\n  return (\n    <>\n      <Button variant=\"danger\" ref={target} onClick={() => setShow(!show)}>\n        Click me to see\n      </Button>\n      <Overlay target={target.current} show={show} placement=\"right\">\n        {({\n          placement: _placement,\n          arrowProps: _arrowProps,\n          show: _show,\n          popper: _popper,\n          hasDoneInitialMeasure: _hasDoneInitialMeasure,\n          ...props\n        }) => (\n          <div\n            {...props}\n            style={{\n              position: 'absolute',\n              backgroundColor: 'rgba(255, 100, 100, 0.85)',\n              padding: '2px 10px',\n              color: 'white',\n              borderRadius: 3,\n              ...props.style,\n            }}\n          >\n            Simple tooltip\n          </div>\n        )}\n      </Overlay>\n    </>\n  );\n}\n\nexport default Example;\n",l="import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction TriggerExample() {\n  const renderTooltip = (props) => (\n    <Tooltip id=\"button-tooltip\" {...props}>\n      Simple tooltip\n    </Tooltip>\n  );\n\n  return (\n    <OverlayTrigger\n      placement=\"right\"\n      delay={{ show: 250, hide: 400 }}\n      overlay={renderTooltip}\n    >\n      <Button variant=\"success\">Hover me to see</Button>\n    </OverlayTrigger>\n  );\n}\n\nexport default TriggerExample;\n",s='import Button from \'react-bootstrap/Button\';\nimport Image from \'react-bootstrap/Image\';\nimport OverlayTrigger from \'react-bootstrap/OverlayTrigger\';\n\nfunction TriggerRendererProp() {\n  return (\n    <OverlayTrigger\n      placement="bottom"\n      overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}\n    >\n      {({ ref, ...triggerHandler }) => (\n        <Button\n          variant="light"\n          {...triggerHandler}\n          className="d-inline-flex align-items-center"\n        >\n          <Image\n            ref={ref}\n            roundedCircle\n            src="holder.js/20x20?text=J&bg=28a745&fg=FFF"\n          />\n          <span className="ms-1">Hover to see</span>\n        </Button>\n      )}\n    </OverlayTrigger>\n  );\n}\n\nexport default TriggerRendererProp;\n',p='import Button from \'react-bootstrap/Button\';\nimport OverlayTrigger from \'react-bootstrap/OverlayTrigger\';\nimport Popover from \'react-bootstrap/Popover\';\n\nconst popover = (\n  <Popover id="popover-basic">\n    <Popover.Header as="h3">Popover right</Popover.Header>\n    <Popover.Body>\n      And here\'s some <strong>amazing</strong> content. It\'s very engaging.\n      right?\n    </Popover.Body>\n  </Popover>\n);\n\nconst Example = () => (\n  <OverlayTrigger trigger="click" placement="right" overlay={popover}>\n    <Button variant="success">Click me to see</Button>\n  </OverlayTrigger>\n);\n\nrender(<Example />);\n',c="import { useState, useRef } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Overlay from 'react-bootstrap/Overlay';\nimport Popover from 'react-bootstrap/Popover';\n\nfunction Example() {\n  const [show, setShow] = useState(false);\n  const [target, setTarget] = useState(null);\n  const ref = useRef(null);\n\n  const handleClick = (event) => {\n    setShow(!show);\n    setTarget(event.target);\n  };\n\n  return (\n    <div ref={ref}>\n      <Button onClick={handleClick}>Holy guacamole!</Button>\n\n      <Overlay\n        show={show}\n        target={target}\n        placement=\"bottom\"\n        container={ref}\n        containerPadding={20}\n      >\n        <Popover id=\"popover-contained\">\n          <Popover.Header as=\"h3\">Popover bottom</Popover.Header>\n          <Popover.Body>\n            <strong>Holy guacamole!</strong> Check this info.\n          </Popover.Body>\n        </Popover>\n      </Overlay>\n    </div>\n  );\n}\n\nexport default Example;\n",d="import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Popover from 'react-bootstrap/Popover';\n\nfunction PopoverPositionedExample() {\n  return (\n    <>\n      {['top', 'right', 'bottom', 'left'].map((placement) => (\n        <OverlayTrigger\n          trigger=\"click\"\n          key={placement}\n          placement={placement}\n          overlay={\n            <Popover id={`popover-positioned-${placement}`}>\n              <Popover.Header as=\"h3\">{`Popover ${placement}`}</Popover.Header>\n              <Popover.Body>\n                <strong>Holy guacamole!</strong> Check this info.\n              </Popover.Body>\n            </Popover>\n          }\n        >\n          <Button variant=\"secondary\">Popover on {placement}</Button>\n        </OverlayTrigger>\n      ))}\n    </>\n  );\n}\n\nexport default PopoverPositionedExample;\n",h="import React, { useEffect, useState } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Popover from 'react-bootstrap/Popover';\n\nconst UpdatingPopover = React.forwardRef(\n  ({ popper, children, show: _, ...props }, ref) => {\n    useEffect(() => {\n      console.log('updating!');\n      popper.scheduleUpdate();\n    }, [children, popper]);\n\n    return (\n      <Popover ref={ref} body {...props}>\n        {children}\n      </Popover>\n    );\n  },\n);\n\nconst longContent = `\n  Very long\n  Multiline content\n  that is engaging and what-not\n`;\nconst shortContent = 'Short and sweet!';\n\nfunction Example() {\n  const [content, setContent] = useState(shortContent);\n\n  useEffect(() => {\n    const timerId = setInterval(() => {\n      setContent(content === shortContent ? longContent : shortContent);\n    }, 3000);\n\n    return () => clearInterval(timerId);\n  });\n\n  return (\n    <OverlayTrigger\n      trigger=\"click\"\n      overlay={\n        <UpdatingPopover id=\"popover-contained\">{content}</UpdatingPopover>\n      }\n    >\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n  );\n}\n\nrender(<Example />);\n",v="import OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction TooltipInCopyExample() {\n  const Link = ({ id, children, title }) => (\n    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>\n      <a href=\"#\">{children}</a>\n    </OverlayTrigger>\n  );\n\n  return (\n    <p>\n      Tight pants next level keffiyeh{' '}\n      <Link title=\"Default title\" id=\"t-1\">\n        you probably\n      </Link>{' '}\n      haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable\n      quinoa 8-bit american apparel{' '}\n      <Link id=\"t-2\" title=\"Another one\">\n        have a\n      </Link>{' '}\n      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo\n      thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's\n      cleanse vegan chambray. A really ironic artisan{' '}\n      <Link title=\"Another one here too\" id=\"t-3\">\n        whatever keytar\n      </Link>\n      , scenester farm-to-table banksy Austin{' '}\n      <Link title=\"The last tip!\" id=\"t-4\">\n        twitter handle\n      </Link>{' '}\n      freegan cred raw denim single-origin coffee viral.\n    </p>\n  );\n}\n\nexport default TooltipInCopyExample;\n",g="import { useState, useRef } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Overlay from 'react-bootstrap/Overlay';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction Example() {\n  const [show, setShow] = useState(false);\n  const target = useRef(null);\n\n  return (\n    <>\n      <Button ref={target} onClick={() => setShow(!show)}>\n        Click me!\n      </Button>\n      <Overlay target={target.current} show={show} placement=\"right\">\n        {(props) => (\n          <Tooltip id=\"overlay-example\" {...props}>\n            My Tooltip\n          </Tooltip>\n        )}\n      </Overlay>\n    </>\n  );\n}\n\nexport default Example;\n",m="import Button from 'react-bootstrap/Button';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Tooltip from 'react-bootstrap/Tooltip';\n\nfunction TooltipPositionedExample() {\n  return (\n    <>\n      {['top', 'right', 'bottom', 'left'].map((placement) => (\n        <OverlayTrigger\n          key={placement}\n          placement={placement}\n          overlay={\n            <Tooltip id={`tooltip-${placement}`}>\n              Tooltip on <strong>{placement}</strong>.\n            </Tooltip>\n          }\n        >\n          <Button variant=\"secondary\">Tooltip on {placement}</Button>\n        </OverlayTrigger>\n      ))}\n    </>\n  );\n}\n\nexport default TooltipPositionedExample;\n",u={title:"Overlay",description:"A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need."},y=void 0,f={id:"components/overlays",title:"Overlay",description:"A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need.",source:"@site/docs/components/overlays.mdx",sourceDirName:"components",slug:"/components/overlays",permalink:"/docs/components/overlays",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Overlay",description:"A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need."},sidebar:"sidebar",previous:{title:"Offcanvas",permalink:"/docs/components/offcanvas"},next:{title:"Pagination",permalink:"/docs/components/pagination"}},x={},j=[{value:"Overview",id:"overview",level:2},{value:"Overlay",id:"overlay",level:2},{value:"Creating an Overlay",id:"creating-an-overlay",level:3},{value:"Customizing Overlay rendering",id:"customizing-overlay-rendering",level:3},{value:"OverlayTrigger",id:"overlaytrigger",level:2},{value:"Customizing trigger behavior",id:"customizing-trigger-behavior",level:3},{value:"Tooltips",id:"tooltips",level:2},{value:"Examples",id:"examples",level:3},{value:"Popovers",id:"popovers",level:2},{value:"Examples",id:"examples-1",level:3},{value:"Disabled elements",id:"disabled-elements",level:2},{value:"Changing containers",id:"changing-containers",level:2},{value:"Updating position dynamically",id:"updating-position-dynamically",level:2},{value:"API",id:"api",level:2},{value:"Overlay",id:"overlay-1",level:3},{value:"OverlayTrigger",id:"overlaytrigger-1",level:3},{value:"Tooltip",id:"tooltip",level:3},{value:"Popover",id:"popover",level:3},{value:"PopoverBody",id:"popoverbody",level:3},{value:"PopoverHeader",id:"popoverheader",level:3}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{CodeBlock:o,PropsTable:u}=n;return o||O("CodeBlock",!0),u||O("PropsTable",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Things to know about the React-Bootstrap Overlay components."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Overlays rely on the third-party library ",(0,t.jsx)(n.a,{href:"https://popper.js.org",children:"Popper.js"}),".\nIt's included automatically with React-Bootstrap, but you should reference the API\nfor more advanced use cases."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"<Tooltip>"})," and ",(0,t.jsx)(n.code,{children:"<Popover>"})," components do not position themselves. Instead the\n",(0,t.jsx)(n.code,{children:"<Overlay>"})," (or ",(0,t.jsx)(n.code,{children:"<OverlayTrigger>"}),") components, inject ",(0,t.jsx)(n.code,{children:"ref"})," and ",(0,t.jsx)(n.code,{children:"style"})," props."]}),"\n",(0,t.jsxs)(n.li,{children:["Tooltip expects specific props injected by the ",(0,t.jsx)(n.code,{children:"<Overlay>"})," component."]}),"\n",(0,t.jsxs)(n.li,{children:["Tooltips for ",(0,t.jsx)(n.code,{children:"disabled"})," elements must be triggered on a wrapper element."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"overlay",children:"Overlay"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Overlay"})," is the fundamental component for positioning and\ncontrolling tooltip visibility. It's a wrapper around Popper.js, that\nadds support for transitions, and visibility toggling."]}),"\n",(0,t.jsx)(n.h3,{id:"creating-an-overlay",children:"Creating an Overlay"}),"\n",(0,t.jsxs)(n.p,{children:['Overlays consist of at least two elements, the "overlay", the element to\nbe positioned, as well as a "target", the element the overlay is\npositioned in relation to. You can also have an "arrow" element,\nlike the tooltips and popovers, but that is optional. Be sure to\ncheck out the ',(0,t.jsx)(n.a,{href:"https://popper.js.org/docs/v2",children:"Popper"}),"\ndocumentation for more details about the injected props."]}),"\n",(0,t.jsx)(o,{language:"jsx",live:!0,children:a}),"\n",(0,t.jsx)(n.h3,{id:"customizing-overlay-rendering",children:"Customizing Overlay rendering"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Overlay"})," injects a number of props that you can use to customize the\nrendering behavior. There is a case where you would need to show the overlay\nbefore ",(0,t.jsx)(n.code,{children:"Popper"})," can measure and position it properly. In React-Bootstrap,\ntooltips and popovers sets the opacity and position to avoid issues where\nthe initial positioning of the overlay is incorrect. See the\n",(0,t.jsx)(n.a,{href:"https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Tooltip.tsx",children:"Tooltip"}),"\nimplementation for an example on how this is done."]}),"\n",(0,t.jsx)(n.h2,{id:"overlaytrigger",children:"OverlayTrigger"}),"\n",(0,t.jsxs)(n.p,{children:["Since the above pattern is pretty common, but verbose, we've included\n",(0,t.jsx)(n.code,{children:"<OverlayTrigger>"}),' component to help with common\nuse-cases. It even has functionality to delayed show or hides, and a few\ndifferent "trigger" events you can mix and match.']}),"\n",(0,t.jsxs)(n.p,{children:["Note that triggering components must be able to accept ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/refs-and-the-dom.html",children:"a ref"}),"\nsince ",(0,t.jsx)(n.code,{children:"<OverlayTrigger>"})," will attempt to add one. You can use\n",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/react-api.html#reactforwardref",children:"forwardRef()"})," for function components."]}),"\n",(0,t.jsx)(o,{language:"jsx",live:!0,children:l}),"\n",(0,t.jsx)(n.h3,{id:"customizing-trigger-behavior",children:"Customizing trigger behavior"}),"\n",(0,t.jsxs)(n.p,{children:["For more advanced behaviors ",(0,t.jsx)(n.code,{children:"<OverlayTrigger>"})," accepts a\nfunction child that passes in the injected ",(0,t.jsx)(n.code,{children:"ref"})," and event\nhandlers that correspond to the configured ",(0,t.jsx)(n.code,{children:"trigger"})," prop."]}),"\n",(0,t.jsx)(n.p,{children:"You can manually apply the props to any element you want or split them\nup. The example below shows how to position the overlay to a different\nelement than the one that triggers its visibility."}),"\n",(0,t.jsx)(n.admonition,{title:"Pro Tip",type:"info",children:(0,t.jsxs)(n.p,{children:["Using the function form of OverlayTrigger avoids a\n",(0,t.jsx)(n.code,{children:"React.findDOMNode"})," call, for those trying to be strict mode\ncompliant."]})}),"\n",(0,t.jsx)(o,{language:"jsx",live:!0,children:s}),"\n",(0,t.jsx)(n.h2,{id:"tooltips",children:"Tooltips"}),"\n",(0,t.jsx)("p",{className:"lead",children:(0,t.jsxs)(n.p,{children:["A tooltip component for a more stylish alternative to that anchor tag"," ","\n",(0,t.jsx)("code",{children:"title"})," attribute."]})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Hover over the links below to see tooltips."}),"\n",(0,t.jsx)(o,{language:"jsx",live:!0,children:v}),"\n",(0,t.jsxs)(n.p,{children:["You can pass the ",(0,t.jsx)(n.code,{children:"Overlay"})," injected props directly to the\nTooltip component."]}),"\n",(0,t.jsx)(o,{language:"jsx",live:!0,children:g}),"\n",(0,t.jsxs)(n.p,{children:["Or pass a Tooltip element to ",(0,t.jsx)(n.code,{children:"OverlayTrigger"})," instead."]}),"\n",(0,t.jsx)(o,{language:"jsx",live:!0,children:m}),"\n",(0,t.jsx)(n.h2,{id:"popovers",children:"Popovers"}),"\n",(0,t.jsx)("p",{className:"lead",children:"A popover component, like those found in iOS."}),"\n",(0,t.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,t.jsx)(o,{language:"jsx",live:!0,noInline:!0,children:p}),"\n",(0,t.jsxs)(n.p,{children:["As with ",(0,t.jsx)(n.code,{children:"<Tooltip>"}),"s, you can control the placement of the Popover."]}),"\n",(0,t.jsx)(o,{language:"jsx",live:!0,children:d}),"\n",(0,t.jsx)(n.h2,{id:"disabled-elements",children:"Disabled elements"}),"\n",(0,t.jsxs)(n.p,{children:["Elements with the ",(0,t.jsx)(n.code,{children:"disabled"})," attribute aren\u2019t interactive,\nmeaning users cannot hover or click them to trigger a popover (or\ntooltip). As a workaround, you\u2019ll want to trigger the overlay from a\nwrapper ",(0,t.jsx)(n.code,{children:"<div>"})," or ",(0,t.jsx)(n.code,{children:"<span>"})," and override the ",(0,t.jsx)(n.code,{children:"pointer-events"})," on the\ndisabled element."]}),"\n",(0,t.jsx)(o,{language:"jsx",live:!0,children:i}),"\n",(0,t.jsx)(n.h2,{id:"changing-containers",children:"Changing containers"}),"\n",(0,t.jsxs)(n.p,{children:["You can specify a ",(0,t.jsx)(n.code,{children:"container"})," to control the DOM element the\noverlay is appended to. This is especially useful when styles conflict\nwith your Overlays."]}),"\n",(0,t.jsx)(o,{language:"jsx",live:!0,previewClassName:"overlay-contained",children:c}),"\n",(0,t.jsx)(n.h2,{id:"updating-position-dynamically",children:"Updating position dynamically"}),"\n",(0,t.jsx)(n.p,{children:"Since we can't know every time your overlay changes size, to reposition\nit, you need to take manual action if you want to update the position of\nan Overlay in response to a change."}),"\n",(0,t.jsxs)(n.p,{children:["For this, the Overlay component also injects a ",(0,t.jsx)(n.code,{children:"popper"}),"\nprop with a ",(0,t.jsx)(n.code,{children:"scheduleUpdate()"})," method that an overlay\ncomponent can use to reposition itself."]}),"\n",(0,t.jsx)(o,{language:"jsx",live:!0,noInline:!0,children:h}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.h3,{id:"overlay-1",children:"Overlay"}),"\n",(0,t.jsx)(u,{name:"Overlay"}),"\n",(0,t.jsx)(n.h3,{id:"overlaytrigger-1",children:"OverlayTrigger"}),"\n",(0,t.jsx)(u,{name:"OverlayTrigger"}),"\n",(0,t.jsx)(n.h3,{id:"tooltip",children:"Tooltip"}),"\n",(0,t.jsx)(u,{name:"Tooltip"}),"\n",(0,t.jsx)(n.h3,{id:"popover",children:"Popover"}),"\n",(0,t.jsx)(u,{name:"Popover"}),"\n",(0,t.jsx)(n.h3,{id:"popoverbody",children:"PopoverBody"}),"\n",(0,t.jsx)(u,{name:"PopoverBody"}),"\n",(0,t.jsx)(n.h3,{id:"popoverheader",children:"PopoverHeader"}),"\n",(0,t.jsx)(u,{name:"PopoverHeader"})]})}function T(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}function O(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>a});var t=o(67294);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);