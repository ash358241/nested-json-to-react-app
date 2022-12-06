function objToCSS(obj) {
    return Object.keys(obj)
        .map((key) => {
            const newKey = key.replace(/[A-Z]/g, (match) => {
                // console.log(match)
                return "-" + match.toLowerCase()
            });
            return `${newKey}:${obj[key]};`;
        })
        .join("\n");
}

export default objToCSS;
