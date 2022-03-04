(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"/GzF":function(e,n){e.exports='const { Formik } = formik;\n\nconst schema = yup.object().shape({\n  firstName: yup.string().required(),\n  lastName: yup.string().required(),\n  username: yup.string().required(),\n  city: yup.string().required(),\n  state: yup.string().required(),\n  zip: yup.string().required(),\n  terms: yup.bool().required().oneOf([true], \'Terms must be accepted\'),\n});\n\nfunction FormExample() {\n  return (\n    <Formik\n      validationSchema={schema}\n      onSubmit={console.log}\n      initialValues={{\n        firstName: \'Mark\',\n        lastName: \'Otto\',\n        username: \'\',\n        city: \'\',\n        state: \'\',\n        zip: \'\',\n        terms: false,\n      }}\n    >\n      {({\n        handleSubmit,\n        handleChange,\n        handleBlur,\n        values,\n        touched,\n        isValid,\n        errors,\n      }) => (\n        <Form noValidate onSubmit={handleSubmit}>\n          <Row className="mb-3">\n            <Form.Group as={Col} md="4" controlId="validationFormik01">\n              <Form.Label>First name</Form.Label>\n              <Form.Control\n                type="text"\n                name="firstName"\n                value={values.firstName}\n                onChange={handleChange}\n                isValid={touched.firstName && !errors.firstName}\n              />\n              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="4" controlId="validationFormik02">\n              <Form.Label>Last name</Form.Label>\n              <Form.Control\n                type="text"\n                name="lastName"\n                value={values.lastName}\n                onChange={handleChange}\n                isValid={touched.lastName && !errors.lastName}\n              />\n\n              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="4" controlId="validationFormikUsername">\n              <Form.Label>Username</Form.Label>\n              <InputGroup hasValidation>\n                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>\n                <Form.Control\n                  type="text"\n                  placeholder="Username"\n                  aria-describedby="inputGroupPrepend"\n                  name="username"\n                  value={values.username}\n                  onChange={handleChange}\n                  isInvalid={!!errors.username}\n                />\n                <Form.Control.Feedback type="invalid">\n                  {errors.username}\n                </Form.Control.Feedback>\n              </InputGroup>\n            </Form.Group>\n          </Row>\n          <Row className="mb-3">\n            <Form.Group as={Col} md="6" controlId="validationFormik03">\n              <Form.Label>City</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="City"\n                name="city"\n                value={values.city}\n                onChange={handleChange}\n                isInvalid={!!errors.city}\n              />\n\n              <Form.Control.Feedback type="invalid">\n                {errors.city}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="3" controlId="validationFormik04">\n              <Form.Label>State</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="State"\n                name="state"\n                value={values.state}\n                onChange={handleChange}\n                isInvalid={!!errors.state}\n              />\n              <Form.Control.Feedback type="invalid">\n                {errors.state}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="3" controlId="validationFormik05">\n              <Form.Label>Zip</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="Zip"\n                name="zip"\n                value={values.zip}\n                onChange={handleChange}\n                isInvalid={!!errors.zip}\n              />\n\n              <Form.Control.Feedback type="invalid">\n                {errors.zip}\n              </Form.Control.Feedback>\n            </Form.Group>\n          </Row>\n          <Form.Group className="mb-3">\n            <Form.Check\n              required\n              name="terms"\n              label="Agree to terms and conditions"\n              onChange={handleChange}\n              isInvalid={!!errors.terms}\n              feedback={errors.terms}\n              feedbackType="invalid"\n              id="validationFormik0"\n            />\n          </Form.Group>\n          <Button type="submit">Submit form</Button>\n        </Form>\n      )}\n    </Formik>\n  );\n}\n\nrender(<FormExample />);\n'},"0Cdi":function(e,n){e.exports='const { Formik } = formik;\n\nconst schema = yup.object().shape({\n  firstName: yup.string().required(),\n  lastName: yup.string().required(),\n  username: yup.string().required(),\n  city: yup.string().required(),\n  state: yup.string().required(),\n  zip: yup.string().required(),\n  file: yup.mixed().required(),\n  terms: yup.bool().required().oneOf([true], \'terms must be accepted\'),\n});\n\nfunction FormExample() {\n  return (\n    <Formik\n      validationSchema={schema}\n      onSubmit={console.log}\n      initialValues={{\n        firstName: \'Mark\',\n        lastName: \'Otto\',\n        username: \'\',\n        city: \'\',\n        state: \'\',\n        zip: \'\',\n        file: null,\n        terms: false,\n      }}\n    >\n      {({\n        handleSubmit,\n        handleChange,\n        handleBlur,\n        values,\n        touched,\n        isValid,\n        errors,\n      }) => (\n        <Form noValidate onSubmit={handleSubmit}>\n          <Row className="mb-3">\n            <Form.Group\n              as={Col}\n              md="4"\n              controlId="validationFormik101"\n              className="position-relative"\n            >\n              <Form.Label>First name</Form.Label>\n              <Form.Control\n                type="text"\n                name="firstName"\n                value={values.firstName}\n                onChange={handleChange}\n                isValid={touched.firstName && !errors.firstName}\n              />\n              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group\n              as={Col}\n              md="4"\n              controlId="validationFormik102"\n              className="position-relative"\n            >\n              <Form.Label>Last name</Form.Label>\n              <Form.Control\n                type="text"\n                name="lastName"\n                value={values.lastName}\n                onChange={handleChange}\n                isValid={touched.lastName && !errors.lastName}\n              />\n\n              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">\n              <Form.Label>Username</Form.Label>\n              <InputGroup hasValidation>\n                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>\n                <Form.Control\n                  type="text"\n                  placeholder="Username"\n                  aria-describedby="inputGroupPrepend"\n                  name="username"\n                  value={values.username}\n                  onChange={handleChange}\n                  isInvalid={!!errors.username}\n                />\n                <Form.Control.Feedback type="invalid" tooltip>\n                  {errors.username}\n                </Form.Control.Feedback>\n              </InputGroup>\n            </Form.Group>\n          </Row>\n          <Row className="mb-3">\n            <Form.Group\n              as={Col}\n              md="6"\n              controlId="validationFormik103"\n              className="position-relative"\n            >\n              <Form.Label>City</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="City"\n                name="city"\n                value={values.city}\n                onChange={handleChange}\n                isInvalid={!!errors.city}\n              />\n\n              <Form.Control.Feedback type="invalid" tooltip>\n                {errors.city}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group\n              as={Col}\n              md="3"\n              controlId="validationFormik104"\n              className="position-relative"\n            >\n              <Form.Label>State</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="State"\n                name="state"\n                value={values.state}\n                onChange={handleChange}\n                isInvalid={!!errors.state}\n              />\n              <Form.Control.Feedback type="invalid" tooltip>\n                {errors.state}\n              </Form.Control.Feedback>\n            </Form.Group>\n            <Form.Group\n              as={Col}\n              md="3"\n              controlId="validationFormik105"\n              className="position-relative"\n            >\n              <Form.Label>Zip</Form.Label>\n              <Form.Control\n                type="text"\n                placeholder="Zip"\n                name="zip"\n                value={values.zip}\n                onChange={handleChange}\n                isInvalid={!!errors.zip}\n              />\n\n              <Form.Control.Feedback type="invalid" tooltip>\n                {errors.zip}\n              </Form.Control.Feedback>\n            </Form.Group>\n          </Row>\n          <Form.Group className="position-relative mb-3">\n            <Form.Label>File</Form.Label>\n            <Form.Control\n              type="file"\n              required\n              name="file"\n              onChange={handleChange}\n              isInvalid={!!errors.file}\n            />\n            <Form.Control.Feedback type="invalid" tooltip>\n              {errors.file}\n            </Form.Control.Feedback>\n          </Form.Group>\n          <Form.Group className="position-relative mb-3">\n            <Form.Check\n              required\n              name="terms"\n              label="Agree to terms and conditions"\n              onChange={handleChange}\n              isInvalid={!!errors.terms}\n              feedback={errors.terms}\n              feedbackType="invalid"\n              id="validationFormik106"\n              feedbackTooltip\n            />\n          </Form.Group>\n          <Button type="submit">Submit form</Button>\n        </Form>\n      )}\n    </Formik>\n  );\n}\n\nrender(<FormExample />);\n'},"6Kon":function(e,n){e.exports='<InputGroup hasValidation>\n  <InputGroup.Text>@</InputGroup.Text>\n  <Form.Control type="text" required isInvalid />\n  <Form.Control.Feedback type="invalid">\n    Please choose a username.\n  </Form.Control.Feedback>\n</InputGroup>;\n'},"7Yuw":function(e,n){e.exports='function FormExample() {\n  const [validated, setValidated] = useState(false);\n\n  const handleSubmit = (event) => {\n    const form = event.currentTarget;\n    if (form.checkValidity() === false) {\n      event.preventDefault();\n      event.stopPropagation();\n    }\n\n    setValidated(true);\n  };\n\n  return (\n    <Form noValidate validated={validated} onSubmit={handleSubmit}>\n      <Row className="mb-3">\n        <Form.Group as={Col} md="4" controlId="validationCustom01">\n          <Form.Label>First name</Form.Label>\n          <Form.Control\n            required\n            type="text"\n            placeholder="First name"\n            defaultValue="Mark"\n          />\n          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="4" controlId="validationCustom02">\n          <Form.Label>Last name</Form.Label>\n          <Form.Control\n            required\n            type="text"\n            placeholder="Last name"\n            defaultValue="Otto"\n          />\n          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="4" controlId="validationCustomUsername">\n          <Form.Label>Username</Form.Label>\n          <InputGroup hasValidation>\n            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>\n            <Form.Control\n              type="text"\n              placeholder="Username"\n              aria-describedby="inputGroupPrepend"\n              required\n            />\n            <Form.Control.Feedback type="invalid">\n              Please choose a username.\n            </Form.Control.Feedback>\n          </InputGroup>\n        </Form.Group>\n      </Row>\n      <Row className="mb-3">\n        <Form.Group as={Col} md="6" controlId="validationCustom03">\n          <Form.Label>City</Form.Label>\n          <Form.Control type="text" placeholder="City" required />\n          <Form.Control.Feedback type="invalid">\n            Please provide a valid city.\n          </Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="3" controlId="validationCustom04">\n          <Form.Label>State</Form.Label>\n          <Form.Control type="text" placeholder="State" required />\n          <Form.Control.Feedback type="invalid">\n            Please provide a valid state.\n          </Form.Control.Feedback>\n        </Form.Group>\n        <Form.Group as={Col} md="3" controlId="validationCustom05">\n          <Form.Label>Zip</Form.Label>\n          <Form.Control type="text" placeholder="Zip" required />\n          <Form.Control.Feedback type="invalid">\n            Please provide a valid zip.\n          </Form.Control.Feedback>\n        </Form.Group>\n      </Row>\n      <Form.Group className="mb-3">\n        <Form.Check\n          required\n          label="Agree to terms and conditions"\n          feedback="You must agree before submitting."\n          feedbackType="invalid"\n        />\n      </Form.Group>\n      <Button type="submit">Submit form</Button>\n    </Form>\n  );\n}\n\nrender(<FormExample />);\n'},"9j97":function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return f})),o.d(n,"default",(function(){return g}));var r=o("rePB"),a=o("zLVn"),t=(o("mXGw"),o("7ljp")),l=o("Snbm"),i=o("h55t"),m=o("vXRK"),d=o("1u5/"),s=o("/GzF"),p=o.n(s),u=o("6Kon"),c=o.n(u),F=o("7Yuw"),b=o.n(F),h=o("0Cdi"),C=o.n(h);function v(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function y(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?v(Object(o),!0).forEach((function(n){Object(r.a)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var f={},x={query:"1464975548",_frontmatter:f},k=l.a;function g(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(t.mdx)(k,y(y(y({},x),o),{},{components:n,mdxType:"MDXLayout"}),Object(t.mdx)("h1",y({},{id:"validation"}),"Validation"),Object(t.mdx)("p",{className:"lead"},"Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript."),Object(t.mdx)("h2",y({},{id:"native-html5-form-validation"}),"Native HTML5 form validation"),Object(t.mdx)("p",null,"For native HTML form validation–",Object(t.mdx)("a",y({parentName:"p"},{href:"https://caniuse.com/#feat=form-validation"}),"available in all our supported browsers"),",\nthe ",Object(t.mdx)("inlineCode",{parentName:"p"},":valid")," and ",Object(t.mdx)("inlineCode",{parentName:"p"},":invalid")," pseudo selectors are used to apply validation\nstyles as well as display feedback messages."),Object(t.mdx)("p",null,"Bootstrap scopes the ",Object(t.mdx)("inlineCode",{parentName:"p"},":valid")," and ",Object(t.mdx)("inlineCode",{parentName:"p"},":invalid")," styles to parent ",Object(t.mdx)("inlineCode",{parentName:"p"},".was-validated"),"\nclass, usually applied to the ",Object(t.mdx)("inlineCode",{parentName:"p"},"<Form>")," (you can use the ",Object(t.mdx)("inlineCode",{parentName:"p"},"validated")," prop\nas a shortcut). Otherwise, any required field without a value shows up\nas invalid on page load. This way, you may choose when to activate them\n(typically after form submission is attempted)."),Object(t.mdx)(i.a,{mdxType:"Callout"},"Watch out! Browsers provide their own validation UI by default on"," ",Object(t.mdx)("code",null,"form"),"s. You can disable the default UI by adding the HTML"," ",Object(t.mdx)("code",null,"noValidate")," attribute to your ",Object(t.mdx)("code",null,"<Form>")," or"," ",Object(t.mdx)("code",null,"<form>")," element."),Object(t.mdx)(d.a,{codeText:b.a,mdxType:"ReactPlayground"}),Object(t.mdx)("h2",y({},{id:"form-libraries-and-server-rendered-styles"}),"Form libraries and server-rendered styles"),Object(t.mdx)("p",null,"It's often beneficial (especially in React) to handle form validation\nvia a library like Formik, or react-formal. In those cases, ",Object(t.mdx)("inlineCode",{parentName:"p"},"isValid"),"\nand ",Object(t.mdx)("inlineCode",{parentName:"p"},"isInvalid")," props can be added to form controls to manually apply\nvalidation styles. Below is a quick example integrating with\n",Object(t.mdx)("a",y({parentName:"p"},{href:"https://github.com/jaredpalmer/formik"}),"Formik"),"."),Object(t.mdx)(d.a,{codeText:p.a,mdxType:"ReactPlayground"}),Object(t.mdx)("h2",y({},{id:"tooltips"}),"Tooltips"),Object(t.mdx)("p",null,"If your form layout allows it, you can use the ",Object(t.mdx)("inlineCode",{parentName:"p"},"tooltip")," prop to display\nvalidation feedback in a styled tooltip. Be sure to have a parent with\n",Object(t.mdx)("inlineCode",{parentName:"p"},"position: relative")," on it for tooltip positioning. In the example below,\nour column classes have this already, but your project may require an\nalternative setup."),Object(t.mdx)(d.a,{codeText:C.a,mdxType:"ReactPlayground"}),Object(t.mdx)("h2",y({},{id:"input-group-validation"}),"Input group validation"),Object(t.mdx)("p",null,"To properly show rounded corners in an ",Object(t.mdx)("inlineCode",{parentName:"p"},"<InputGroup>")," with validation,\nthe ",Object(t.mdx)("inlineCode",{parentName:"p"},"<InputGroup>")," requires the ",Object(t.mdx)("inlineCode",{parentName:"p"},"hasValidation")," prop."),Object(t.mdx)(d.a,{codeText:c.a,mdxType:"ReactPlayground"}),Object(t.mdx)("h2",y({},{id:"api"}),"API"),Object(t.mdx)(m.a,{metadata:o.data.Feedback,exportedBy:o.data.FormControl,mdxType:"ComponentApi"}))}g.isMDXComponent=!0},Q6D8:function(e,n,o){e.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},h55t:function(e,n,o){"use strict";var r=o("oYCi"),a=o("Q6D8");n.a=function(e){var n=e.title,o=e.children,t=e.theme;return Object(r.jsxs)("aside",{role:"note",className:a[t||"warning"],children:[n&&Object(r.jsx)("header",{className:"h5",children:n}),Object(r.jsx)("div",{children:o})]})}}}]);
//# sourceMappingURL=component---src-pages-forms-validation-mdx-00358e5fe272c417ee65.js.map