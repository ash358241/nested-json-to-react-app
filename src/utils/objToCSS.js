function objToCSS(obj) {
    return Object.keys(obj)
        .map((key) => {
            const newKey = key.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());
            return `${newKey}:${obj[key]};`;
        })
        .join("\n");
}

export default objToCSS;
