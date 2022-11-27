function strToCapitalizeCase(str) {
    return str
        .replace(/(\b[a-z](?!\s))/g, (check) => {
            return check.toUpperCase();
        })
        .split(" ")
        .join("");
}

export default strToCapitalizeCase