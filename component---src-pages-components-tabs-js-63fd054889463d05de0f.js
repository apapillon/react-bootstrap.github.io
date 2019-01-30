(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1092:function(e,t){e.exports='class ControlledTabs extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n    this.state = {\n      key: \'home\',\n    };\n  }\n\n  render() {\n    return (\n      <Tabs\n        id="controlled-tab-example"\n        activeKey={this.state.key}\n        onSelect={key => this.setState({ key })}\n      >\n        <Tab eventKey="home" title="Home">\n          <Sonnet />\n        </Tab>\n        <Tab eventKey="profile" title="Profile">\n          <Sonnet />\n        </Tab>\n        <Tab eventKey="contact" title="Contact" disabled>\n          <Sonnet />\n        </Tab>\n      </Tabs>\n    );\n  }\n}\n\nrender(<ControlledTabs />);\n'},1093:function(e,t){e.exports='<Tab.Container id="left-tabs-example" defaultActiveKey="first">\n  <Row>\n    <Col sm={3}>\n      <Nav variant="pills" className="flex-column">\n        <Nav.Item>\n          <Nav.Link eventKey="first">Tab 1</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="second">Tab 2</Nav.Link>\n        </Nav.Item>\n      </Nav>\n    </Col>\n    <Col sm={9}>\n      <Tab.Content>\n        <Tab.Pane eventKey="first">\n          <Sonnet />\n        </Tab.Pane>\n        <Tab.Pane eventKey="second">\n          <Sonnet />\n        </Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;\n'},1094:function(e,t){e.exports='<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">\n  <Tab eventKey="home" title="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" title="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" title="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n'},1095:function(e,t){e.exports='<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">\n  <Tab eventKey="home" title="Home">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="profile" title="Profile">\n    <Sonnet />\n  </Tab>\n  <Tab eventKey="contact" title="Contact" disabled>\n    <Sonnet />\n  </Tab>\n</Tabs>;\n'},238:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return y});var a=n(0),r=n.n(a),o=n(120),l=n(392),c=n(295),i=n(312),s=n(1092),u=n.n(s),m=n(1093),p=n.n(m),d=n(1094),b=n.n(d),f=n(1095),v=n.n(f),h=n(297);t.default=Object(h.a)(function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.default,{h:"2",id:"tabs"},"Tabbed components"),r.a.createElement("p",{className:"lead"},"Dynamic tabbed interfaces"),r.a.createElement(o.default,{h:"2",id:"tabs-examples"},"Examples"),r.a.createElement("p",null,"Create dynamic tabbed interfaces, as described in the"," ",r.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/#tabpanel"},r.a.createElement("abbr",{title:"Web Accessibility Initiative"},"WAI")," ",r.a.createElement(l.a,null)," ","Authoring Practices"),". ",r.a.createElement("code",null,"Tabs")," is a higher-level component for quickly creating a"," ",r.a.createElement("code",null,"Nav")," matched with a set of ",r.a.createElement("code",null,"TabPane"),"s."),r.a.createElement(i.a,{codeText:v.a,exampleClassName:"bs-example-tabs"}),r.a.createElement(o.default,{h:"2",id:"tabs-controlled"},"Controlled"),r.a.createElement("p",null,r.a.createElement("code",null,"Tabs")," can be controlled directly when you want to handle the selection logic personally."),r.a.createElement(i.a,{codeText:u.a,exampleClassName:"bs-example-tabs"}),r.a.createElement(o.default,{h:"2",id:"tabs-no-animation"},"No animation"),r.a.createElement("p",null,"Set the ",r.a.createElement("code",null,"transition")," prop to ",r.a.createElement("code",null,"false")),r.a.createElement(i.a,{codeText:b.a,exampleClassName:"bs-example-tabs"}),r.a.createElement(o.default,{h:"2",id:"tabs-with-dropdown"},"Dropdowns?"),r.a.createElement("p",null,"Dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies."),r.a.createElement("p",null,"That said, it Dropdowns do work technically (sans focus management), but we don't make any claims about support."),r.a.createElement(o.default,{h:"2",id:"tabs-custom-layout"},"Custom Tab Layout"),r.a.createElement("p",null,"For more complex layouts the flexible ",r.a.createElement("code",null,"TabContainer"),","," ",r.a.createElement("code",null,"TabContent"),", and ",r.a.createElement("code",null,"TabPane")," components along with any style of ",r.a.createElement("code",null,"Nav")," allow you to quickly piece together your own Tabs component with additional markup needed."),r.a.createElement("p",null,"Create a set of NavItems each with an ",r.a.createElement("code",null,"eventKey")," ","corresponding to the eventKey of a ",r.a.createElement("code",null,"TabPane"),". Wrap the whole thing in a ",r.a.createElement("code",null,"TabContainer")," and you have fully functioning custom tabs component. Check out the below example making use of the grid system and pills."),r.a.createElement(i.a,{codeText:p.a,exampleClassName:"bs-example-tabs"}),r.a.createElement(o.default,{h:"2",id:"tabs-api"},"API"),r.a.createElement(c.a,{metadata:t.Tabs}),r.a.createElement(c.a,{metadata:t.Tab}),r.a.createElement(c.a,{metadata:t.TabContainer}),r.a.createElement(c.a,{metadata:t.TabContent}),r.a.createElement(c.a,{metadata:t.TabPane}))});var y="268054633"},264:function(e,t,n){var a=n(12).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(13)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},270:function(e){e.exports={name:"react-bootstrap",version:"1.0.0-beta.5",description:"Bootstrap 3 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js",module:"lib/es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s",start:"yarn --cwd www run develop","ci-lint":'eslint --rule "prettier/prettier: 2"',format:"npm run ci-lint . -- --fix",lint:"npm run ci-lint .",precommit:"lint-staged",release:"rollout",prepublishOnly:"npm run build",tdd:"karma start",test:"npm run lint && npm run dtslint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --require @babel/register test/server/*Spec.js",storybook:"start-storybook -p 6006","build-storybook":"build-storybook",dtslint:"dtslint types"},"lint-staged":{"*.js":["npm run ci-lint -- --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:">=16.3.0","react-dom":">=16.3.0"},devDependencies:{"@4c/rollout":"^1.2.0","@babel/cli":"^7.2.0","@babel/core":"^7.2.2","@babel/plugin-proposal-class-properties":"^7.2.1","@babel/plugin-proposal-export-default-from":"^7.2.0","@babel/plugin-proposal-export-namespace-from":"^7.2.0","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.0","@babel/preset-react":"^7.0.0","@babel/register":"^7.0.0","@react-bootstrap/babel-preset":"^1.1.2","@react-bootstrap/eslint-config":"^1.1.1","@storybook/react":"^3.4.8","@types/react":"^16.7.13","babel-core":"^7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-loader":"^8.0.4","babel-plugin-add-module-exports":"^1.0.0","babel-plugin-dev-expression":"^0.2.1","babel-plugin-istanbul":"^5.1.0","babel-plugin-transform-react-remove-prop-types":"^0.4.21",chai:"^4.2.0",chalk:"^2.3.2",codecov:"^3.1.0",colors:"^1.3.3","conventional-changelog-cli":"^2.0.11","cpy-cli":"^2.0.0","create-react-class":"^15.6.3","cross-env":"^5.2.0",dtslint:"^0.4.1",enzyme:"^3.8.0","enzyme-adapter-react-16":"^1.7.1",eslint:"^5.10.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.3.0","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-import":"^2.13.0","eslint-plugin-jsx-a11y":"^6.1.2","eslint-plugin-mocha":"^5.1.0","eslint-plugin-prettier":"^3.0.0","eslint-plugin-react":"^7.10.0",execa:"^1.0.0","fs-extra":"^7.0.1",husky:"^1.3.0",karma:"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-cli":"^2.0.0","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.0.0","karma-mocha":"^1.1.1","karma-mocha-reporter":"^2.0.4","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^3.0.5","lint-staged":"^8.1.0",lodash:"^4.17.11",mocha:"^5.2.0",prettier:"^1.15.3",react:"^16.6.3","react-dom":"^16.6.3","react-test-renderer":"^16.6.3","release-script":"^1.0.2",sinon:"^7.2.2","sinon-chai":"^3.3.0",typescript:"^3.2.2",webpack:"^4.28.0"},dependencies:{"@babel/runtime":"^7.2.0","@react-bootstrap/react-popper":"1.2.1",classnames:"^2.2.6","dom-helpers":"^3.4.0",invariant:"^2.2.3",keycode:"^2.1.2","popper.js":"^1.14.6","prop-types":"^15.6.2","prop-types-extra":"^1.1.0","react-context-toolbox":"^2.0.2","react-overlays":"^1.0.0","react-prop-types":"^0.4.0","react-transition-group":"^2.5.1",uncontrollable:"^6.0.0",warning:"^4.0.1"},release:{publishDir:"lib"}}},271:function(e,t,n){var a=n(116)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},272:function(e,t,n){e.exports={link:"LinkToSource-Link-module--link--3LrCN"}},273:function(e,t,n){var a=n(274),r=n(276),o=n(283),l=n(290),c=o(function(e,t){if(null==e)return[];var n=t.length;return n>1&&l(e,t[0],t[1])?t=[]:n>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),r(e,a(t,1),[])});e.exports=c},274:function(e,t,n){var a=n(304),r=n(275);e.exports=function e(t,n,o,l,c){var i=-1,s=t.length;for(o||(o=r),c||(c=[]);++i<s;){var u=t[i];n>0&&o(u)?n>1?e(u,n-1,o,l,c):a(c,u):l||(c[c.length]=u)}return c}},275:function(e,t,n){var a=n(47),r=n(305),o=n(114),l=a?a.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||r(e)||!!(l&&e&&e[l])}},276:function(e,t,n){var a=n(118),r=n(306),o=n(277),l=n(280),c=n(303),i=n(281),s=n(263);e.exports=function(e,t,n){var u=-1;t=a(t.length?t:[s],c(r));var m=o(e,function(e,n,r){return{criteria:a(t,function(t){return t(e)}),index:++u,value:e}});return l(m,function(e,t){return i(e,t,n)})}},277:function(e,t,n){var a=n(278),r=n(262);e.exports=function(e,t){var n=-1,o=r(e)?Array(e.length):[];return a(e,function(e,a,r){o[++n]=t(e,a,r)}),o}},278:function(e,t,n){var a=n(308),r=n(279)(a);e.exports=r},279:function(e,t,n){var a=n(262);e.exports=function(e,t){return function(n,r){if(null==n)return n;if(!a(n))return e(n,r);for(var o=n.length,l=t?o:-1,c=Object(n);(t?l--:++l<o)&&!1!==r(c[l],l,c););return n}}},280:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},281:function(e,t,n){var a=n(282);e.exports=function(e,t,n){for(var r=-1,o=e.criteria,l=t.criteria,c=o.length,i=n.length;++r<c;){var s=a(o[r],l[r]);if(s)return r>=i?s:s*("desc"==n[r]?-1:1)}return e.index-t.index}},282:function(e,t,n){var a=n(115);e.exports=function(e,t){if(e!==t){var n=void 0!==e,r=null===e,o=e==e,l=a(e),c=void 0!==t,i=null===t,s=t==t,u=a(t);if(!i&&!u&&!l&&e>t||l&&c&&s&&!i&&!u||r&&c&&s||!n&&s||!o)return 1;if(!r&&!l&&!u&&e<t||u&&n&&o&&!r&&!l||i&&n&&o||!c&&o||!s)return-1}return 0}},283:function(e,t,n){var a=n(263),r=n(284),o=n(286);e.exports=function(e,t){return o(r(e,t,a),e+"")}},284:function(e,t,n){var a=n(285),r=Math.max;e.exports=function(e,t,n){return t=r(void 0===t?e.length-1:t,0),function(){for(var o=arguments,l=-1,c=r(o.length-t,0),i=Array(c);++l<c;)i[l]=o[t+l];l=-1;for(var s=Array(t+1);++l<t;)s[l]=o[l];return s[t]=n(i),a(e,this,s)}}},285:function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},286:function(e,t,n){var a=n(287),r=n(289)(a);e.exports=r},287:function(e,t,n){var a=n(288),r=n(311),o=n(263),l=r?function(e,t){return r(e,"toString",{configurable:!0,enumerable:!1,value:a(t),writable:!0})}:o;e.exports=l},288:function(e,t){e.exports=function(e){return function(){return e}}},289:function(e,t){var n=800,a=16,r=Date.now;e.exports=function(e){var t=0,o=0;return function(){var l=r(),c=a-(l-o);if(o=l,c>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},290:function(e,t,n){var a=n(302),r=n(262),o=n(307),l=n(299);e.exports=function(e,t,n){if(!l(n))return!1;var c=typeof t;return!!("number"==c?r(n)&&o(t,n.length):"string"==c&&t in n)&&a(n[t],e)}},291:function(e,t,n){e.exports={code:"PropTable-Code-module--code--FStF3"}},292:function(e,t,n){e.exports={propDescription:"PropTable-PropDescription-module--prop-description--WLXmy"}},293:function(e,t,n){e.exports={keyword:"ComponentApi-Keyword-module--keyword--1daqk"}},294:function(e,t,n){e.exports={code:"ComponentApi-Code-module--code--3OYmz"}},295:function(e,t,n){"use strict";n(117),n(264);var a=n(271),r=n.n(a),o=n(0),l=n.n(o),c=n(28),i=n.n(c),s=n(49),u=n(79),m=n(300),p=n(301),d=n(270),b=i()("a",null,"Link",n(272),"link","link"),f=function(e){var t=e.component,n="//github.com/react-bootstrap/react-bootstrap/tree/v"+d.version+"/src/"+t+".js";return l.a.createElement(m.a,{overlay:l.a.createElement(p.a,{id:"view-"+t+"-source-tooltip"},"View source file")},l.a.createElement(b,{href:n,className:"js-search-exclude"},l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("span",{className:"sr-only"},"view source file")))},v=(n(78),n(5)),h=n.n(v),y=(n(48),n(273)),E=n.n(y),g=n(119),x=n.n(g),w=n(1),T=n.n(w),k=n(309),N=n(310),C=i()("code",null,"Code",n(291),"code","code"),A=i()("div",null,"PropDescription",n(292),"prop-description","propDescription");function S(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function K(e){return"func"===e?"function":"bool"===e?"boolean":e}var D=function(e){function t(){return e.apply(this,arguments)||this}h()(t,e);var n=t.prototype;return n.getType=function(e){var t=this,n=e.type||{},a=K(n.name),r=e.doclets||{};switch(a){case"object":return a;case"union":return n.value.reduce(function(e,n,a,r){var o=t.getType({type:n});return l.a.isValidElement(o)&&(o=l.a.cloneElement(o,{key:a})),e=e.concat(o),a===r.length-1?e:e.concat(" | ")},[]);case"array":var o=this.getType({type:n.value});return l.a.createElement("span",null,"array<",o,">");case"enum":return this.renderEnum(n);case"custom":return S(r.type||n.raw);default:return a}},n._renderRows=function(e){var t=this;return E()(e,function(e){return"bsPrefix"===e.name?"zzzzzz":e.name}).filter(function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore}).map(function(e){var n=e.name,a=e.description,r=e.doclets,o=a&&a.childMarkdownRemark.html;return l.a.createElement("tr",{key:n,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},n," ",t.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,t.renderDefaultValue(e)),l.a.createElement("td",null,r.deprecated&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+r.deprecated+" ")),t.renderControllableNote(e,n),l.a.createElement(A,{dangerouslySetInnerHTML:{__html:o}})))})},n.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},n=K(t.name),a=e.doclets||{};return"custom"===n?S(a.type||t.raw):n}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),l.a.createElement(C,null,t))},n.renderControllableNote=function(e,t){var n=e.doclets.controllable,a="function"===K(e.type.name);if(!n)return!1;var r=a?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,n)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(C,null,n),", initial prop:"," ",l.a.createElement(C,null,"default"+x()(t)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},r)))},n.renderEnum=function(e){var t=e.value||[];if(!Array.isArray(t))return t;var n=[];return t.forEach(function(e,t){var a=e.value;t>0&&n.push(l.a.createElement("span",{key:t+"c"}," | ")),n.push(l.a.createElement("code",{key:t},a))}),l.a.createElement("span",null,n)},n.renderRequiredBadge=function(e){return e.required?l.a.createElement(k.a,null,"required"):null},n.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement(N.a,{bordered:!0,striped:!0,className:"bg-white mt-4 mb-5",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);D.propTypes={metadata:T.a.object.isRequired};var P=D,I=i()("span",null,"Keyword",n(293),"keyword","keyword"),L=i()("code",null,"Code",n(294),"code","code"),R=function(e){var t=e.name;return l.a.createElement(L,{"aria-label":"Import code for the "+t+" component"},l.a.createElement(I,null,"import")," ",t," ",l.a.createElement(I,null,"from")," 'react-bootstrap/",t,"'")};function j(e){var t=e.heading,n=e.metadata,a=e.exportedBy,o=n.description,c=n.displayName,i=o&&o.childMarkdownRemark.html,m=c;a&&(c=a.displayName+"."+c.split(a.displayName).pop(),m=a.displayName);var p=r()(c)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.default,{h:t||"3",id:p,title:c,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(u.a,{target:p},l.a.createElement("span",{className:" text-monospace"},c)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(f,{component:c}))),l.a.createElement(R,{name:m}),i&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),l.a.createElement(P,{metadata:n}))}j.propTypes={};t.a=j},297:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(313);var a=n(0),r=n.n(a),o=n(298),l=n(314);function c(e){return function(t){var n=t.location.pathname,a=l.a;return(n.startsWith("/getting-started")||n.startsWith("/layout")||n.startsWith("/components")||n.startsWith("/utilities"))&&(a=o.a),r.a.createElement(a,{location:t.location},r.a.createElement(e,t))}}},392:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a);function o(){return r.a.createElement("abbr",{title:"Accessible Rich Internet Applications"},"ARIA")}}}]);
//# sourceMappingURL=component---src-pages-components-tabs-js-63fd054889463d05de0f.js.map