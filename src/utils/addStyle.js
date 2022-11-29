const styleTag = document.getElementById("style");

export function addStyle(styleAdd){
    styleTag.appendChild(document.createTextNode(styleAdd))
}