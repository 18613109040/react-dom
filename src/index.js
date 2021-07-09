/*
 * :file description: 
 * :name: /react-dom/src/index.js
 * :author: 胡东亮
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-07-09 15:00:42
 * :last editor: 胡东亮
 * :date last edited: 2021-07-09 15:38:15
 */

import { createElement, render, renderDom } from "./element"
const vertualDom = createElement("ul", {class: "list"}, [
    createElement("li", {class: "item"}, ['a']),
    createElement("li", {class: "item"}, ['b']),
    createElement("li", {class: "item"}, ['c'])
])
const el = render(vertualDom)
renderDom(el, document.body)