(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+gK0":function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return h}));var n=t("mXGw"),l=t.n(n),o=t("+xvc"),i=t("Gf/E"),c=t("vXRK"),s=t("1u5/"),r=t("Dc2n"),m=t.n(r),b=t("YwJH"),d=t.n(b),u=t("eGDG"),p=t.n(u),T=t("Z/LK"),f=t.n(T),y=t("r+yI");a.default=Object(y.a)((function(e){var a=e.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.default,{h:"2",id:"tabs"},"Tabbed components"),l.a.createElement("p",{className:"lead"},"Dynamic tabbed interfaces"),l.a.createElement(o.default,{h:"2",id:"tabs-examples"},"Examples"),l.a.createElement("p",null,"Create dynamic tabbed interfaces, as described in the"," ",l.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/#tabpanel"},l.a.createElement("abbr",{title:"Web Accessibility Initiative"},"WAI")," ",l.a.createElement(i.a,null)," ","Authoring Practices"),". ",l.a.createElement("code",null,"Tabs")," is a higher-level component for quickly creating a"," ",l.a.createElement("code",null,"Nav")," matched with a set of ",l.a.createElement("code",null,"TabPane"),"s."),l.a.createElement(s.a,{codeText:f.a,exampleClassName:"bs-example-tabs"}),l.a.createElement(o.default,{h:"2",id:"tabs-controlled"},"Controlled"),l.a.createElement("p",null,l.a.createElement("code",null,"Tabs")," can be controlled directly when you want to handle the selection logic personally."),l.a.createElement(s.a,{codeText:m.a,exampleClassName:"bs-example-tabs"}),l.a.createElement(o.default,{h:"2",id:"tabs-no-animation"},"No animation"),l.a.createElement("p",null,"Set the ",l.a.createElement("code",null,"transition")," prop to ",l.a.createElement("code",null,"false")),l.a.createElement(s.a,{codeText:p.a,exampleClassName:"bs-example-tabs"}),l.a.createElement(o.default,{h:"2",id:"tabs-with-dropdown"},"Dropdowns?"),l.a.createElement("p",null,"Dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies."),l.a.createElement("p",null,"That said, it Dropdowns do work technically (sans focus management), but we don't make any claims about support."),l.a.createElement(o.default,{h:"2",id:"tabs-custom-layout"},"Custom Tab Layout"),l.a.createElement("p",null,"For more complex layouts the flexible ",l.a.createElement("code",null,"TabContainer"),","," ",l.a.createElement("code",null,"TabContent"),", and ",l.a.createElement("code",null,"TabPane")," components along with any style of ",l.a.createElement("code",null,"Nav")," allow you to quickly piece together your own Tabs component with additional markup needed."),l.a.createElement("p",null,"Create a set of NavItems each with an ",l.a.createElement("code",null,"eventKey")," ","corresponding to the eventKey of a ",l.a.createElement("code",null,"TabPane"),". Wrap the whole thing in a ",l.a.createElement("code",null,"TabContainer")," and you have fully functioning custom tabs component. Check out the below example making use of the grid system and pills."),l.a.createElement(s.a,{codeText:d.a,exampleClassName:"bs-example-tabs"}),l.a.createElement(o.default,{h:"2",id:"tabs-api"},"API"),l.a.createElement(c.a,{metadata:a.Tabs}),l.a.createElement(c.a,{metadata:a.Tab}),l.a.createElement(c.a,{metadata:a.TabContainer}),l.a.createElement(c.a,{metadata:a.TabContent}),l.a.createElement(c.a,{metadata:a.TabPane}))}));var h="268054633"},Dc2n:function(e,a){e.exports='function ControlledTabs() {\n  const [key, setKey] = useState(\'home\');\n\n  return (\n    <Tabs\n      id="controlled-tab-example"\n      activeKey={key}\n      onSelect={(k) => setKey(k)}\n    >\n      <Tab eventKey="home" title="Home">\n        <Sonnet />\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        <Sonnet />\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        <Sonnet />\n      </Tab>\n    </Tabs>\n  );\n}\n\nrender(<ControlledTabs />);\n'},"Gf/E":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("mXGw"),l=t.n(n);function o(){return l.a.createElement("abbr",{title:"Accessible Rich Internet Applications"},"ARIA")}},YwJH:function(e,a){e.exports='<Tab.Container id="left-tabs-example" defaultActiveKey="first">\n  <Row>\n    <Col sm={3}>\n      <Nav variant="pills" className="flex-column">\n        <Nav.Item>\n          <Nav.Link eventKey="first">Tab 1</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="second">Tab 2</Nav.Link>\n        </Nav.Item>\n      </Nav>\n    </Col>\n    <Col sm={9}>\n      <Tab.Content>\n        <Tab.Pane eventKey="first">\n          <Sonnet />\n        </Tab.Pane>\n        <Tab.Pane eventKey="second">\n          <Sonnet />\n        </Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;\n'},"Z/LK":function(e,a){e.exports='<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">\n  <Tab eventKey="home" title="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" title="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" title="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n'},eGDG:function(e,a){e.exports='<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">\n  <Tab eventKey="home" title="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" title="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" title="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n'}}]);
//# sourceMappingURL=component---src-pages-components-tabs-js-224b031c5a179810e381.js.map