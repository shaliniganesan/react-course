
function customRender(reactElement,container){
    // const element= document.createElement(reactElement.type);
    // element.innerHTML = reactElement.children;
    // console.log(element);
    // element.setAttribute('href',reactElement.props.href);
    // element.setAttribute('target',reactElement.props.target);
    // container.appendChild(element);

    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
         element.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(element);
    
}


const reactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children : "click me to visit chrome"
}

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer);