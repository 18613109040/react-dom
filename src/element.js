/*
 * :file description: 
 * :name: /react-dom/src/element.js
 * :author: 胡东亮
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-07-09 15:03:07
 * :last editor: 胡东亮
 * :date last edited: 2021-07-09 15:29:06
 */

class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props= props;
        this.children = children;
    }
}
function createElement(type, props, children) {
    return new Element(type, props, children)
}
function setAttr(node, key, value) {
    switch (key) {
        case "value": 
            if(node.tagName.toUpperCase() === "INPUT" || node.tagName.toUpperCase() === "TEXTAREA") {
                node.value = value
            }else {
                node.setAttribute(key, value)
            }
            break;
        default:
            node.setAttribute(key, value)
            break;
    }
}
function render(elObj) {
    const el = document.createElement(elObj.type)
    for(const key in elObj.props) {
        setAttr(el, key, elObj.props[key])
    }
    elObj.children.forEach(child => {
        if(child instanceof Element) {
            child = render(child)
        }else{
            child = document.createTextNode(child)
        }
        el.append(child);
    });
    return el
    // console.dir(el)

//    return  document.createElement(el.type);
}
function renderDom(el, target) {
   return target.appendChild(el);
}
export { createElement, render, renderDom }