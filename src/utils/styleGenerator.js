import { addStyle } from "./addStyle";
import objToCSS from "./objToCSS";

export const styleArr = [];

function generateStyle(className, style){
    let styles = objToCSS(style)
    styleArr.push(`.${className} {${styles}}`)
    addStyle()
}

export default generateStyle;