(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{258:function(e,t,a){"use strict";a.r(t);a(20),a(11),a(7),a(2),a(16);var r=a(0),n=a.n(r),l=a(302),o=a(317),s=a(318),i=a(309),c=a(331),u=a(72),p=a.n(u),m=a(346),d=a(371);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=p()(c.a,null,{displayName:"MastHead",styles:a(259),attrs:null}),y=p()("div",null,{displayName:"Content",styles:a(260),attrs:null}),f=p()("h1",null,{displayName:"Heading",styles:a(261),attrs:null}),g=p()("p",null,{displayName:"SubHeading",styles:a(262),attrs:null}),v=p()(l.a,null,{displayName:"BrandButton",styles:a(263),attrs:null}),w=p()(i.a,null,{displayName:"FeatureCard",styles:a(264),attrs:function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){b(e,t,a[t])})}return e}({},e,{md:4})}}),E=p()("div",null,{displayName:"ButtonToolbar",styles:a(265),attrs:null});t.default=Object(d.a)(function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement("main",{id:"rb-docs-content"},n.a.createElement(h,{fluid:!0},n.a.createElement(y,null,n.a.createElement(f,null,"React Bootstrap"),n.a.createElement(g,null,"The most popular front-end framework",n.a.createElement("br",null),n.a.createElement("strong",null,"Rebuilt")," for React."),n.a.createElement(E,null,n.a.createElement(v,{size:"lg",variant:"brand",className:"mr-3 px-5",href:"/getting-started/introduction"},"Get started"),n.a.createElement(l.a,{size:"lg",href:"/components/alerts",className:"px-5",variant:"outline-light"},"Components")),n.a.createElement("div",{className:"text-muted mt-3"},"Current version: ",m.version))),n.a.createElement(o.a,null,n.a.createElement(s.a,null,n.a.createElement(w,null,n.a.createElement("h2",null,"Rebuilt with React"),n.a.createElement("p",null,"React bootstrap replaces the Bootstrap javascript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery."),n.a.createElement("p",null,"As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.")),n.a.createElement(w,null,n.a.createElement("h2",null,"Bootstrap at its core"),n.a.createElement("p",null,"Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem."),n.a.createElement("p",null,"By relying entirely on the Bootstrap stylesheet, React bootstrap, just works with the thousands of bootstrap themes you already love."),n.a.createElement("p",null)),n.a.createElement(w,null,n.a.createElement("h2",null,"Accessible by default"),n.a.createElement("p",null,"The React component model gives us more control over form and function of each component."),n.a.createElement("p",null,"Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.")))))},r}(n.a.Component))},331:function(e,t,a){"use strict";var r=a(289),n=a(290),l=a(293),o=a(0),s=a.n(o),i=a(288),c=a.n(i),u=a(291),p=a.n(u),m=a(292),d={as:c.a.elementType,fluid:c.a.bool,bsPrefix:c.a.string},b=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.as,l=void 0===a?"div":a,o=t.className,i=t.fluid,c=t.bsPrefix,u=Object(n.a)(t,["as","className","fluid","bsPrefix"]),m=((e={})[c]=!0,e[c+"-fluid"]=i,e);return s.a.createElement(l,Object(r.a)({},u,{className:p()(o,m),__source:{fileName:"/Users/jquense/src/react-bootstrap/src/Jumbotron.js",lineNumber:33},__self:this}))},t}(s.a.Component);b.propTypes=d,b.defaultProps={fluid:!1},t.a=Object(m.a)(b,"jumbotron")},346:function(e){e.exports={name:"react-bootstrap",version:"1.0.0-beta.10",description:"Bootstrap 4 components built with React",repository:{type:"git",url:"react-bootstrap/react-bootstrap"},homepage:"https://react-bootstrap.github.io/",sideEffects:!1,main:"lib/index.js",module:"lib/es/index.js",scripts:{bootstrap:"yarn && yarn --cwd www",build:"node tools/build.js","build-docs":"yarn --cwd www run build",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s",start:"yarn --cwd www run develop",format:"eslint . --fix",lint:"eslint .",release:"rollout",prepublishOnly:"npm run build",tdd:"karma start",test:"npm run lint && npm run dtslint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha --require @babel/register test/server/*Spec.js",dtslint:"dtslint types"},husky:{hooks:{"pre-commit":"lint-staged"}},"lint-staged":{"*.js":["eslint --fix","git add"]},prettier:{singleQuote:!0,trailingComma:"all"},files:["CHANGELOG.md","lib","dist","es"],keywords:["react","ecosystem-react","react-component","bootstrap"],author:"Stephen J. Collings <stevoland@gmail.com>",license:"MIT",peerDependencies:{react:">=16.8.0","react-dom":">=16.8.0"},devDependencies:{"@4c/rollout":"^1.3.3","@babel/cli":"^7.2.3","@babel/core":"^7.4.0","@babel/register":"^7.4.0","@react-bootstrap/babel-preset":"^1.1.3","@react-bootstrap/eslint-config":"^1.1.1","@types/react":"^16.8.10","babel-eslint":"^10.0.1","babel-loader":"^8.0.5","babel-plugin-istanbul":"^5.1.4",chai:"^4.2.0",chalk:"^2.4.2",codecov:"^3.2.0",colors:"^1.3.3","conventional-changelog-cli":"^2.0.12","cpy-cli":"^2.0.0","cross-env":"^5.2.0",dtslint:"^0.8.0",enzyme:"^3.9.0","enzyme-adapter-react-16":"^1.11.2",eslint:"^6.0.1","eslint-import-resolver-webpack":"^0.11.0","eslint-plugin-import":"^2.16.0","eslint-plugin-jsx-a11y":"^6.2.1","eslint-plugin-mocha":"^5.3.0","eslint-plugin-prettier":"^3.0.1","eslint-plugin-react":"^7.12.4",execa:"^2.0.0","fs-extra":"^8.0.0",husky:"^3.0.0",karma:"^4.0.1","karma-chrome-launcher":"^3.0.0","karma-cli":"^2.0.0","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.1.0","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.5","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^4.0.2","lint-staged":"^9.0.1",lodash:"^4.17.11",mocha:"^6.0.2",prettier:"^1.16.4",react:"^16.8.6","react-dom":"^16.8.6","react-test-renderer":"^16.8.6",sinon:"^7.3.1","sinon-chai":"^3.3.0",typescript:"^3.4.1",webpack:"^4.29.6"},dependencies:{"@babel/runtime":"^7.4.2","@react-bootstrap/react-popper":"1.2.1","@restart/context":"^2.1.4","@restart/hooks":"^0.3.0",classnames:"^2.2.6","dom-helpers":"^3.4.0",invariant:"^2.2.4",keycode:"^2.2.0","popper.js":"^1.14.7","prop-types":"^15.7.2","prop-types-extra":"^1.1.0","react-overlays":"^1.2.0","react-transition-group":"^4.0.0",uncontrollable:"^7.0.0",warning:"^4.0.3"},release:{publishDir:"lib"}}},371:function(e,t,a){"use strict";a.d(t,"a",function(){return s});a(336);var r=a(0),n=a.n(r),l=a(338),o=a(337);function s(e){return function(t){var a=t.location.pathname,r=o.a;return(a.startsWith("/getting-started")||a.startsWith("/layout")||a.startsWith("/components")||a.startsWith("/utilities"))&&(r=l.a),n.a.createElement(r,{location:t.location},n.a.createElement(e,t))}}}}]);
//# sourceMappingURL=component---src-pages-index-js-40bedc2ba2692731ebe9.js.map