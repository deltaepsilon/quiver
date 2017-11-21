import { html, render } from "lit-html";

const helloTemplate = (name) => html`<div>Hello ${name} my friend!</div>`;

// Call the function with some data, and pass the result to render()

window.customElements.define('my-name', class MyName extends HTMLElement {
    connectedCallback() {
        console.log('connectedCallback')
        this.render();
    }

    

    render() {
        render(helloTemplate('Steve'), document.body);
    }
})
// This renders <div>Hello Steve!</div> to the document body
// class MyName extends HTMLElement {
//   constructor() {
//     super();
//     console.log("inside constructor");
//   }
//   connectedCallback() {
//     // super.connectedCallback();
//     console.log("connectedCallback");
//     // debugger;
//     // render(helloTemplate('Steve'), document.body);
//   }
// }

// window.customElements.define("my-name", MyName);
