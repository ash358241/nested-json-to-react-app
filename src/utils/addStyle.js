import {styleArr} from './styleGenerator';

const styleTag = document.getElementById("style");

export function addStyle(){
    const styleAdd = styleArr.join(" ").toString()
    // console.log(styleAdd)
    styleTag.appendChild(document.createTextNode(styleAdd))
}