import { createElement } from 'lwc';
import HelloWorld from 'c/helloWorld';

describe('c-hello-world', () => {
    beforeEach(() => {
        const element = createElement('c-hello-world', {
            is: HelloWorld
        });
        document.body.appendChild(element);
    })
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Should render hello `world` component with default value', () => {
        const element = document.querySelector('c-hello-world')
        const rootElement = element.shadowRoot
        const input = rootElement.querySelector('lightning-input').value
        expect(input).toBe('World');
        expect(rootElement.textContent).toBe('Hello, World!');
    });

    it('Should render hello ${value} component based in input value', () => {
        const element = document.querySelector('c-hello-world')
        const lighteningInput = element.shadowRoot.querySelector('lightning-input')
        lighteningInput.value = 'Narasimhan Gopinath'
        lighteningInput.dispatchEvent(new CustomEvent('change'))
        return Promise.resolve().then(() => {
            expect(element.shadowRoot.querySelector('p').textContent).toBe('Hello, Narasimhan Gopinath!');
        })
    });
    // test('test input change event value', ()=>{
    //     const element = document.querySelector('c-hello-world')
    //     const inputElement = element.shadowRoot.querySelector('lightning-input')
    //     inputElement.value='Salesforce'
    //     inputElement.dispatchEvent(new CustomEvent('change'))
    //     const text = element.shadowRoot.querySelector('p');
    //     return Promise.resolve().then(()=>{
    //         expect(text.textContent).toBe('Hello, Salesforce!')
    //     })
    // })
});