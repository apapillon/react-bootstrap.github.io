(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0cJH":function(t,n){t.exports='<ButtonGroup>\n  <Button>1</Button>\n  <Button>2</Button>\n\n  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n</ButtonGroup>;\n'},H1uq:function(t,n){t.exports='<ButtonGroup vertical>\n  <Button>Button</Button>\n  <Button>Button</Button>\n\n  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n\n  <Button>Button</Button>\n  <Button>Button</Button>\n\n  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n\n  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">\n    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>\n    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>\n  </DropdownButton>\n</ButtonGroup>;\n'},KIF8:function(t,n){t.exports='<ButtonToolbar aria-label="Toolbar with button groups">\n  <ButtonGroup className="mr-2" aria-label="First group">\n    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>\n  </ButtonGroup>\n  <ButtonGroup className="mr-2" aria-label="Second group">\n    <Button>5</Button> <Button>6</Button> <Button>7</Button>\n  </ButtonGroup>\n  <ButtonGroup aria-label="Third group">\n    <Button>8</Button>\n  </ButtonGroup>\n</ButtonToolbar>;\n'},R0cR:function(t,n){t.exports='<>\n  <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">\n    <ButtonGroup className="mr-2" aria-label="First group">\n      <Button variant="secondary">1</Button>{\' \'}\n      <Button variant="secondary">2</Button>{\' \'}\n      <Button variant="secondary">3</Button>{\' \'}\n      <Button variant="secondary">4</Button>\n    </ButtonGroup>\n    <InputGroup>\n      <InputGroup.Prepend>\n        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>\n      </InputGroup.Prepend>\n      <FormControl\n        type="text"\n        placeholder="Input group example"\n        aria-label="Input group example"\n        aria-describedby="btnGroupAddon"\n      />\n    </InputGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar\n    className="justify-content-between"\n    aria-label="Toolbar with Button groups"\n  >\n    <ButtonGroup aria-label="First group">\n      <Button variant="secondary">1</Button>{\' \'}\n      <Button variant="secondary">2</Button>{\' \'}\n      <Button variant="secondary">3</Button>{\' \'}\n      <Button variant="secondary">4</Button>\n    </ButtonGroup>\n    <InputGroup>\n      <InputGroup.Prepend>\n        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>\n      </InputGroup.Prepend>\n      <FormControl\n        type="text"\n        placeholder="Input group example"\n        aria-label="Input group example"\n        aria-describedby="btnGroupAddon2"\n      />\n    </InputGroup>\n  </ButtonToolbar>\n</>;\n'},d7j5:function(t,n){t.exports='<>\n  <ButtonGroup size="lg" className="mb-2">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n  <br />\n  <ButtonGroup className="mb-2">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n  <br />\n  <ButtonGroup size="sm">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n</>;\n'},exVO:function(t,n){t.exports='<ButtonGroup aria-label="Basic example">\n  <Button variant="secondary">Left</Button>\n  <Button variant="secondary">Middle</Button>\n  <Button variant="secondary">Right</Button>\n</ButtonGroup>;\n'},yCrB:function(t,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return g})),o.d(n,"default",(function(){return O}));var e=o("zLVn"),u=(o("mXGw"),o("7ljp")),r=o("Snbm"),a=o("vXRK"),p=o("1u5/"),d=o("exVO"),i=o.n(d),l=o("0cJH"),B=o.n(l),m=o("d7j5"),c=o.n(m),s=o("R0cR"),b=o.n(s),x=o("KIF8"),w=o.n(x),y=o("H1uq"),G=o.n(y),g={},j={query:"812196171",_frontmatter:g},D=r.a;function O(t){var n=t.components,o=Object(e.a)(t,["components"]);return Object(u.mdx)(D,Object.assign({},j,o,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("h1",{id:"button-groups"},"Button groups"),Object(u.mdx)("p",{className:"lead"},"Group a series of buttons together on a single line with the button group."),Object(u.mdx)("h2",{id:"basic-example"},"Basic example"),Object(u.mdx)("p",null,"Wrap a series of ",Object(u.mdx)("inlineCode",{parentName:"p"},"<Button>"),"s in a ",Object(u.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),"."),Object(u.mdx)(p.a,{codeText:i.a,mdxType:"ReactPlayground"}),Object(u.mdx)("h2",{id:"button-toolbar"},"Button toolbar"),Object(u.mdx)("p",null,"Combine sets of  ",Object(u.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),"s into a ",Object(u.mdx)("inlineCode",{parentName:"p"},"<ButtonToolbar>")," for more complex components."),Object(u.mdx)(p.a,{codeText:w.a,mdxType:"ReactPlayground"}),Object(u.mdx)("p",null,"Feel free to mix input groups with button groups in your toolbars.\nSimilar to the example above, you’ll likely need some utilities though\nto space things properly."),Object(u.mdx)(p.a,{codeText:b.a,mdxType:"ReactPlayground"}),Object(u.mdx)("h2",{id:"sizing"},"Sizing"),Object(u.mdx)("p",null,"Instead of applying button sizing props to every button in a group, just\nadd  ",Object(u.mdx)("inlineCode",{parentName:"p"},"size ")," prop to the  ",Object(u.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),"."),Object(u.mdx)(p.a,{codeText:c.a,mdxType:"ReactPlayground"}),Object(u.mdx)("h2",{id:"nesting"},"Nesting"),Object(u.mdx)("p",null,"You can place other button types within the\n",Object(u.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>")," like ",Object(u.mdx)("inlineCode",{parentName:"p"},"<DropdownButton>"),"s."),Object(u.mdx)(p.a,{codeText:B.a,mdxType:"ReactPlayground"}),Object(u.mdx)("h2",{id:"vertical-variation"},"Vertical variation"),Object(u.mdx)("p",null,"Make a set of buttons appear vertically stacked rather than\nhorizontally, by adding ",Object(u.mdx)("inlineCode",{parentName:"p"},"vertical")," to the ",Object(u.mdx)("inlineCode",{parentName:"p"},"<ButtonGroup>"),".\n",Object(u.mdx)("strong",{parentName:"p"},"Split button dropdowns are not supported here.")),Object(u.mdx)(p.a,{codeText:G.a,mdxType:"ReactPlayground"}),Object(u.mdx)("h2",{id:"api"},"API"),Object(u.mdx)(a.a,{metadata:o.data.ButtonGroup,mdxType:"ComponentApi"}),Object(u.mdx)(a.a,{metadata:o.data.ButtonToolbar,mdxType:"ComponentApi"}))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-button-group-mdx-8648d40b6980218db712.js.map