
const kebabToCamel = (kebabName) =>
    kebabName.trim().split('-').map((name, index) => index === 0 ? name.toLowerCase() :
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join('');


function createComponent(name, attrList, htmlFunc)
{
    customElements.define(name,
        class extends HTMLElement
        {
            static get observedAttributes()
            {
                return attrList;
            }

            constructor()
            {
                super();
                this.attachShadow({ mode: "open" });
                this.attrs = {};
            }

            render()
            {
                attrList.forEach(attr => {
                    const value = this.getAttribute(attr);
                    this.attrs[kebabToCamel(attr)] = value;
                });

                const content = htmlFunc(this.attrs).trim();
                this.shadowRoot.innerHTML = content;
            }

            connectedCallback()
            {
                this.render();
            }

            attributeChangeCallback()
            {
                this.render();
            }
        }
    );
}
