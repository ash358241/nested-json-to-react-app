import objToCSS from "./objToCSS";

export const styleArr = [];

function generateStyle(data){
    data.forEach((item) => {
        const className = `.${item.type}-${item.id}`;
        const style = item.style ? objToCSS(item.style) : objToCSS(item.form.style);
        styleArr.push(`${className}{${style}}`);

        if (Array.isArray(item.content)) {
             return generateStyle(item.content);
        }

        if (item.form) {
            let className = `.${item.form.submitButton.type}-${item.form.submitButton.id}`;
            const btnStyle = objToCSS(item.form.submitButton.style)
            styleArr.push(`${className}{${btnStyle}}`);
            
            item.form.fields.items.forEach((i) => {
                className = `.${i.name}-${i.id}`;
                const inputFieldStyle = objToCSS(item.form.fields.style)
                styleArr.push(`${className}{${inputFieldStyle}}`);
            });
        }
    });
    return styleArr;
}

export default generateStyle;