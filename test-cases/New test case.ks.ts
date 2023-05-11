import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "53136c1c-461c-4228-9414-4830f4fcc104",
    attributes: {
      id: "btn-make-appointment",
      href: "./profile.php#login",
      class: "btn btn-dark btn-lg",
    },
    childIndex: 4,
    hashes: { "md5.v1": "3caec008087ccb7a1cb3fc698fbf83c2" },
    name: "a - Make Appointment",
    selectors: [
      {
        id: "7fb3867e-7dd0-4702-89a8-4f99043ffcb9",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "26394a6a-cc3f-482c-b12c-7980cfe56cd5",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Make Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "2e3f4176-06a2-42ae-b9de-54ebdb7dd436",
    attributes: {
      type: "text",
      class: "form-control",
      placeholder: "Username",
      "aria-describedby": "demo_username_label",
      value: "John Doe",
      readonly: "",
    },
    childIndex: 2,
    hashes: { "md5.v1": "d658d4e8da92fe56536b7b268fa72a89" },
    name: "input - Username",
    selectors: [
      {
        id: "d445e1e1-378e-436c-a54e-e63cb50b89c1",
        type: "CSS",
        value: '[value="John\\ Doe"]',
        isDefault: true,
      },
      {
        id: "41334c4f-5be1-4f2a-93b5-413a4798f68b",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "5160ecea-cf4b-429f-9c43-682a2868f57e",
    attributes: {
      type: "text",
      class: "form-control",
      placeholder: "Password",
      "aria-describedby": "demo_password_label",
      value: "ThisIsNotAPassword",
      readonly: "",
    },
    childIndex: 2,
    hashes: { "md5.v1": "f6711b02ce671cc2b817baf776140264" },
    name: "input - Password",
    selectors: [
      {
        id: "612ccf75-e688-4088-8416-775c7662fb5d",
        type: "CSS",
        value: '[value="ThisIsNotAPassword"]',
        isDefault: true,
      },
      {
        id: "bd37a164-5c41-44b0-b830-c7c95cb42f33",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "c31da910-67b1-4845-bcc3-0a19070b0a4b",
    attributes: { class: "fa fa-twitter fa-fw fa-3x" },
    childIndex: 1,
    hashes: { "md5.v1": "6e493f51b167a38ab401ea35f5b530dd" },
    name: "i - fa fa-twitter fa-fw fa-3x",
    selectors: [
      {
        id: "1317e5ed-f4bf-40be-9353-dd9aeaadd7a8",
        type: "CSS",
        value: ".fa-twitter",
        isDefault: true,
      },
      {
        id: "23e88a01-ee38-4793-8179-30a0db8c546f",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "i",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "2bfe64fd-3696-4606-a1f9-0d0238105b72",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "ee676b97-ca2f-4bbe-98f0-55619fb330e7",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "caa90d55-e4d1-49b4-abc1-78766691108e",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Login",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "0aac6cbf-6485-4ac4-8d96-2845dc27d14b",
    attributes: { class: "lead text-danger" },
    childIndex: 3,
    hashes: { "md5.v1": "e42406ae21f353ffa56e63d000e626ba" },
    name: "p - Login failed! Please ensure the username and password are valid.",
    selectors: [
      {
        id: "fa405711-13a8-4057-b1f8-6e961b0f0fc4",
        type: "CSS",
        value: ".lead.text-danger",
        isDefault: true,
      },
      {
        id: "373df2f5-170c-4681-98f8-632253754aee",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "p",
    text: "Login failed! Please ensure the username and password are valid.",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.verifyElementVisible({
    type: "Web",
    id: "0aac6cbf-6485-4ac4-8d96-2845dc27d14b",
    attributes: { class: "lead text-danger" },
    childIndex: 3,
    hashes: { "md5.v1": "e42406ae21f353ffa56e63d000e626ba" },
    name: "p - Login failed! Please ensure the username and password are valid.",
    selectors: [
      {
        id: "fa405711-13a8-4057-b1f8-6e961b0f0fc4",
        type: "CSS",
        value: ".lead.text-danger",
        isDefault: true,
      },
      {
        id: "373df2f5-170c-4681-98f8-632253754aee",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "p",
    text: "Login failed! Please ensure the username and password are valid.",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
});