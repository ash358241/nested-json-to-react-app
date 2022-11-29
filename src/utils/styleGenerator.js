import stylesFnc from "../allStyle/stylesIndex";
import objToCSS from "./objToCSS";
import strToCapitalizeCase from "./strToCapitalize";

export const styleArr = [];

function generateStyle(data){
    data.map((item) => {
        const className = `.dorik-${item.type}-${item.id}`;
        const style = item.style ? objToCSS(item.style) : objToCSS(item.form.style);
        const fnc = stylesFnc[`${strToCapitalizeCase(item.name)}Style`];
        styleArr.push(fnc(className, style));

        if (Array.isArray(item.content)) {
             generateStyle(item.content);
        }

        if (item.form) {
            const fn = stylesFnc["ButtonStyle"];
            let className = `.dorik-${item.form.submitButton.type}-${item.form.submitButton.id}`;
            styleArr.push(fn(className, objToCSS(item.form.submitButton.style)));
            item.form.fields.items.map((i) => {
                const fn = stylesFnc["InputStyle"];
                className = `.dorik-${i.name}-${i.id}`;
                styleArr.push(fn(className, objToCSS(item.form.fields.style)));
            });
        }
    });

    return styleArr;
}

export default generateStyle;